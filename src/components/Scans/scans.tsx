import './scans.scss';
import './responsive.scss';

import React, { useState, useEffect, useRef } from 'react';

import {
  getTailleChapitres,
  selectChapter,
  clickEvents,
} from './functions.tsx';

import { addScript } from '../../functions/main.ts';
import { ANIMES } from '../constants.ts';
import { Footer, Title } from '../components.tsx';

import { getAnime } from '../../functions/getAnime.ts';

const Scans = () => {
  const currentAnime = getAnime({ wSaison: false });

  const options = ANIMES.find(
    ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
  )!.options.SCANS_OPTIONS;

  if (!options) window.location.hash = '/home';

  const from = useRef(options!.from);

  const { SCRIPT_URL, CHAPITRE_SPECIAUX } = options || {};

  const [chapitresOptions, setChapitresOptions] = useState<string[]>([]);
  const [scans, setScans] = useState<React.ReactNode[] | undefined>([]);

  useEffect(() => {
    if (SCRIPT_URL) {
      addScript({
        url: SCRIPT_URL,
        currentAnime: currentAnime!,
      }).then(() => {
        let retard = 0;

        if (typeof from.current === 'undefined') from.current = 1;

        const options: string[] = [];

        for (let i = 0; i < getTailleChapitres(); i++) {
          if (CHAPITRE_SPECIAUX?.includes(i)) {
            options.push(`Chapitre Special`);

            retard++;
          } else {
            options.push(`Chapitre ${i + Number(from.current) - retard}`);
          }
        }

        setChapitresOptions(options);
        clickEvents(setScans);

        setTimeout(() => {
          setScans(
            selectChapter(
              window.localStorage.getItem(`${currentAnime}--chapitre`) ?? 1
            )
          );
        }, 1000);
      });
    }
  }, [CHAPITRE_SPECIAUX, SCRIPT_URL, currentAnime]);

  useEffect(() => {
    const chapitre =
      window.localStorage.getItem(`${currentAnime}--chapitre`) ?? '1';

    const NextchapitreSelector =
      document.querySelectorAll<HTMLElement>('.nextButton')!;

    const PrevchapitreSelector =
      document.querySelectorAll<HTMLElement>('.prevButton')!;

    if (!chapitre || chapitre === '1')
      PrevchapitreSelector.forEach((e) => e.classList.add('invisible'));
    else PrevchapitreSelector.forEach((e) => e.classList.remove('invisible'));

    if (Number(chapitre) === document.querySelector('select')?.options.length)
      NextchapitreSelector.forEach((e) => e.classList.add('invisible'));
    else NextchapitreSelector.forEach((e) => e.classList.remove('invisible'));
  }, [scans, currentAnime]);

  return (
    <div className="container--scans">
      <Title link="Home" />

      <select
        name="chapitres"
        className="chapitres"
        onChange={(event) => {
          const {
            target: {
              selectedOptions: [{ id }],
            },
          } = event;

          const chapterId = id.match(/[0-9]/g)!.join('');

          window.localStorage.setItem(`${currentAnime}--chapitre`, chapterId);

          setScans(selectChapter(chapterId));
        }}
      >
        {chapitresOptions.map((option, index) => (
          <option key={index} id={`Chapitre ${index + 1}`}>
            {option}
          </option>
        ))}
      </select>

      <div className="container--buttons--scans">
        <button className="lastChapter">Dernier chapitre</button>

        <div className="buttons--scans">
          <button className="prevButton">Chapitre précédent</button>
          <button className="nextButton">Chapitre suivant</button>
        </div>
      </div>

      <div className="scans">{scans}</div>

      <div className="container--buttons--scans">
        <div className="buttons--scans">
          <button className="prevButton">Chapitre précédent</button>
          <button className="nextButton">Chapitre suivant</button>
        </div>
      </div>

      <svg
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 512"
      >
        <path
          fill-rule="nonzero"
          d="M256 0c70.69 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.31 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.69 512 256 512s-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.69 28.66-134.69 74.99-181.01C121.31 28.66 185.31 0 256 0zm53.41 276.67v60.37c0 4.74-3.97 8.72-8.71 8.72h-89.41c-4.74 0-8.71-3.92-8.71-8.72v-60.37h-43.45c-4.5-.01-9.01-1.57-12.66-4.74-8.02-6.99-8.86-19.17-1.88-27.19l99.37-114.07c.69-.77 1.43-1.5 2.25-2.18 8.2-6.78 20.34-5.63 27.12 2.56l93.77 113.33c3.14 3.43 5.06 8 5.06 13.01 0 10.65-8.64 19.28-19.29 19.28h-43.46zm96.7-170.78C367.7 67.48 314.62 43.71 256 43.71c-58.62 0-111.7 23.77-150.11 62.18C67.48 144.3 43.71 197.38 43.71 256c0 58.62 23.77 111.7 62.18 150.11 38.41 38.41 91.49 62.18 150.11 62.18 58.62 0 111.7-23.77 150.11-62.18 38.41-38.41 62.18-91.49 62.18-150.11 0-58.62-23.77-111.7-62.18-150.11z"
        />
      </svg>

      <Footer media />
    </div>
  );
};

export default Scans;
