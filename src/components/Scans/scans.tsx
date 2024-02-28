import './scans.scss';
import './responsive.scss';

import React, { useState, useEffect, useRef } from 'react';

import { getTailleChapitres, selectChapter } from './chapterManager.tsx';
import { addScript } from '../../functions/addScript.ts';
import { ANIMES } from '../../animes/constants.ts';
import { Footer } from '../utils/Footer';
import { Title } from '../utils/Title';
import { getCurrentAnime } from '../../functions/getCurrentAnime.ts';
import { clickEvents } from './eventHandler';
import { icons } from 'lucide-react';

const Scans = () => {
  const UpArrow = icons['ArrowUp'];
  const currentAnime = getCurrentAnime({ wSaison: false });

  const options = ANIMES.find(
    ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
  )!.options.SCANS_OPTIONS;

  if (!options) window.location.hash = `/home?anime=${encodeURI(currentAnime)}`;

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
      <Title link={`Home?anime=${encodeURI(currentAnime)}`} />

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

      <UpArrow
        size="50px"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <Footer media />
    </div>
  );
};

export default Scans;
