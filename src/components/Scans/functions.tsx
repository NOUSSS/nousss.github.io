import React from 'react';

import { windowKeys } from '../interfaces/interface';
import { CHAPITRE_SPECIAUX, IMAGE_URL } from './constants';
import { nextChapitre, prevChapitre } from './switchChapters';

export const getTailleChapitres = (): number => {
  let i = 1;
  let tailleChapitres = 0;

  while (true) {
    const episodeKey = `eps${i}`;

    if (typeof (window as windowKeys)[episodeKey] !== 'undefined') {
      tailleChapitres++;
    } else {
      break;
    }

    i++;
  }

  return tailleChapitres;
};

export const selectChapter = (
  newChapter: number | string
): React.ReactNode[] | undefined => {
  const scansImages: React.ReactNode[] = [];
  const select = document.querySelector('select');

  let retard = 0;

  if (select) {
    const options = select.options;
    const index = Number(newChapter) - 1;

    for (let i = 0; i <= index; i++) {
      const chapitre = Number(options[i].id.match(/Chapitre (\d+)/)![1]);

      if (CHAPITRE_SPECIAUX.includes(chapitre - 1)) {
        retard++;
      }
    }

    if (index >= 0 && index < options.length) {
      const chapterTitle = options[index].innerText;
      const scans = (window as windowKeys)[`eps${newChapter}`];

      window.localStorage.setItem('chapitre', String(Number(newChapter)));

      select.value = chapterTitle;

      for (let i = 1; i <= scans.length; i++) {
        scansImages.push(
          <img
            alt={`Image ${i}`}
            key={`Image ${i}`}
            src={IMAGE_URL(newChapter, i)}
          ></img>
        );
      }

      return scansImages;
    }
  }

  return undefined;
};

const attachButtonClickEvent = (
  className: string,
  clickHandler: () => void
) => {
  document
    .querySelectorAll(`.${className}`)
    .forEach((e) => e.addEventListener('click', clickHandler));
};

export const clickEvents = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>
): void => {
  attachButtonClickEvent('prevButton', () => {
    prevChapitre(setScans);
  });

  attachButtonClickEvent('nextButton', () => {
    nextChapitre(setScans);
  });

  document.querySelector('.lastChapter')!.addEventListener('click', () => {
    setScans(
      selectChapter(
        document
          .querySelector('select')!
          .options[
            document.querySelector('select')!.options.length - 1
          ].id.match(/[0-9]/g)!
          .join('')
      )
    );
  });
};
