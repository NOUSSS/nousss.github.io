import './scans.scss';
import './responsive.scss';

import React, { useState, useEffect, useCallback } from 'react';

import {
  getTailleChapitres,
  selectChapter,
  clickEvents,
} from './functions.tsx';

import { addScript } from '../Films/functions';
import { SCANS_OPTIONS } from '../constants.ts';
import { Footer, Title } from '../components';

const { SCRIPT_URL, CHAPITRE_SPECIAUX } = SCANS_OPTIONS;

import uparrow from '../../assets/uparrow.png';

const Scans = () => {
  const [chapitresOptions, setChapitresOptions] = useState<string[]>([]);
  const [loadingText, setLoadingText] = useState(
    'Si les chapitres ne chargent pas après 5-10 secondes, cliquez'
  );

  const [scans, setScans] = useState<React.ReactNode[] | undefined>([]);

  useEffect(() => {
    addScript(SCRIPT_URL).then(() => {
      let retard = 0;

      const options: string[] = [];

      for (let i = 0; i < getTailleChapitres(); i++) {
        if (CHAPITRE_SPECIAUX.includes(i)) {
          options.push(`Chapitre ONE SHOT`);

          retard++;
        } else {
          options.push(`Chapitre ${i + 1 - retard}`);
        }
      }

      setLoadingText('');

      setChapitresOptions(options);
      clickEvents(setScans);

      setTimeout(() => {
        setScans(selectChapter(window.localStorage.getItem('chapitre') ?? 1));
      }, 1000);
    });
  }, []);

  const onChangeSelect = useCallback((event: any) => {
    const id = event.target.selectedOptions[0].id.match(/[0-9]/g)!.join('');

    window.localStorage.setItem('chapitre', id);

    setScans(selectChapter(id));
  }, []);

  return (
    <div className="container--scans">
      <Title />

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

      <p className="loading">
        {loadingText && (
          <>
            {loadingText}{' '}
            <span
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => window.location.reload()}
            >
              ici
            </span>
          </>
        )}
      </p>

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
