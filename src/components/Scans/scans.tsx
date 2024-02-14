import './scans.scss';
import './responsive.scss';

import React, { useState, useEffect, useCallback, useRef } from 'react';

import {
  getTailleChapitres,
  selectChapter,
  clickEvents,
} from './functions.tsx';

import { addScript } from '../../functions/main.ts';
import { ANIMES } from '../constants.ts';
import { Footer, Title } from '../components.tsx';

import uparrow from '../../assets/uparrow.png';

const Scans = () => {
  let currentAnime = window.localStorage.getItem('anime')!;

  const hash = window.location.hash;
  const queryParams = hash.substring(hash.indexOf('?') + 1);

  const urlParams = new URLSearchParams(queryParams);

  const currentAnimeURL = urlParams.get('anime');

  if (
    currentAnimeURL &&
    currentAnimeURL.toLowerCase() !== currentAnime.toLowerCase()
  ) {
    currentAnime = currentAnimeURL;

    window.localStorage.setItem('anime', currentAnimeURL);
  }

  const options = ANIMES.find(({ anime }) => anime === currentAnime)!.options
    .SCANS_OPTIONS;

  const from = useRef(options.from);

  const { SCRIPT_URL, CHAPITRE_SPECIAUX } = options;

  const [chapitresOptions, setChapitresOptions] = useState<string[]>([]);

  const [scans, setScans] = useState<React.ReactNode[] | undefined>([]);

  useEffect(() => {
    addScript(SCRIPT_URL).then(() => {
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
  }, [CHAPITRE_SPECIAUX, SCRIPT_URL, currentAnime]);

  useEffect(() => {
    const chapitre =
      window.localStorage.getItem(`${currentAnime}--chapitre`) ?? '1';

    const NextchapitreSelector =
      document.querySelectorAll<HTMLElement>('.nextButton')!;

    const PrevchapitreSelector =
      document.querySelectorAll<HTMLElement>('.prevButton')!;

    if (!chapitre || chapitre === '1')
      Array.from([...PrevchapitreSelector]).map((e) =>
        e.classList.add('invisible')
      );
    else
      Array.from([...PrevchapitreSelector]).map((e) =>
        e.classList.remove('invisible')
      );

    if (Number(chapitre) === document.querySelector('select')?.options.length)
      Array.from([...NextchapitreSelector]).map((e) =>
        e.classList.add('invisible')
      );
    else
      Array.from([...NextchapitreSelector]).map((e) =>
        e.classList.remove('invisible')
      );
  }, [scans, currentAnime]);

  const onChangeSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const id = event.target.selectedOptions[0].id.match(/[0-9]/g)!.join('');

      window.localStorage.setItem(`${currentAnime}--chapitre`, id);

      setScans(selectChapter(id));
    },
    [currentAnime]
  );

  return (
    <div className="container--scans">
      <Title link="Home" />

      <select name="chapitres" className="chapitres" onChange={onChangeSelect}>
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

      <img
        alt="scroll tout en haut de la page"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        src={uparrow}
      ></img>

      <Footer media />
    </div>
  );
};

export default Scans;
