import React from 'react';

import { windowKeys } from '../../typings/types';
import { ANIMES } from '../constants';
import { getAnime } from '../../functions/getAnime';

export const getTailleChapitres = (): number => {
  let i = 1;
  let tailleChapitres = 0;

  const infinite = true;

  while (infinite) {
    const episodeKey = `eps${i}`;

    if (typeof (window as unknown as windowKeys)[episodeKey] !== 'undefined') {
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
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const currentAnime = getAnime({ wSaison: false });

  const { IMAGE_URL } =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
    )!.options.SCANS_OPTIONS || {};

  const scansImages: React.ReactNode[] = [];
  const select = document.querySelector('select');

  if (select) {
    const options = select.options;
    const index = Number(newChapter) - 1;

    if (index >= 0 && index < options.length) {
      const chapterTitle = options[index].innerText;
      const scans = (window as unknown as windowKeys)[`eps${newChapter}`];

      window.localStorage.setItem(
        `${currentAnime}--chapitre`,
        String(Number(newChapter))
      );

      select.value = chapterTitle;

      for (let i = 1; i <= scans.length; i++) {
        scansImages.push(
          <img
            alt={`Image ${i}`}
            key={`Image ${i}`}
            src={IMAGE_URL!({ chapitre: newChapter, index: i })}
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
  const currentAnime = getAnime({ wSaison: false });

  attachButtonClickEvent('prevButton', () => {
    setScans(
      selectChapter(
        Number(window.localStorage.getItem(`${currentAnime}--chapitre`)) - 1
      )
    );
  });

  attachButtonClickEvent('nextButton', () => {
    setScans(
      selectChapter(
        Number(window.localStorage.getItem(`${currentAnime}--chapitre`)) + 1
      )
    );
  });

  document.querySelector('.lastChapter')!.addEventListener('click', () => {
    const lastScan = document
      .querySelector('select')!
      .options[document.querySelector('select')!.options.length - 1].id.match(
        /[0-9]/g
      )!
      .join('');

    setScans(selectChapter(lastScan));
  });
};
