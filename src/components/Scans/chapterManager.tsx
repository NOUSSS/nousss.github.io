import React from 'react';

import { ANIMES } from '../../animes/constants';
import { getCurrentAnime } from '../../functions/getCurrentAnime';

type windowKeys = {
  [key: string]: string;
};

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
  window.scrollTo({ top: 5, behavior: 'smooth' });

  const currentAnime = getCurrentAnime({ wSaison: false });

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
