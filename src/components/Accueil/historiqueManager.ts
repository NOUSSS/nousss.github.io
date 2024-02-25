import React from 'react';
import toast from 'react-hot-toast';

import { Historique } from '../../typings/types';

export const removeAnimeFromHistorique = (
  animeName: string,
  redirectAnime: string,
  historiques: Historique[],

  setHistoriques: React.Dispatch<React.SetStateAction<Historique[]>>
) => {
  if (redirectAnime === 'Episodes') {
    window.localStorage.removeItem(`${animeName}--saison`);
    window.localStorage.removeItem(`${animeName}--episode`);
    window.localStorage.removeItem(`${animeName}--currentTime`);

    for (const key of Object.keys(window.localStorage)) {
      if (key.includes('--lang') && key.includes(animeName))
        window.localStorage.removeItem(key);
    }
  } else if (redirectAnime === 'Scans') {
    window.localStorage.removeItem(`${animeName}--chapitre`);
  } else if (redirectAnime === 'Films') {
    window.localStorage.removeItem(`${animeName}--currentFilm`);
    window.localStorage.removeItem(`${animeName}--currentTime`);

    for (const key of Object.keys(window.localStorage)) {
      if (key.includes('--lang') && key.includes(animeName))
        window.localStorage.removeItem(key);
    }
  }

  setHistoriques(
    historiques.filter(
      (historique) =>
        !(
          historique.name === animeName && historique.redirect === redirectAnime
        )
    )
  );

  toast.success(
    `Les ${redirectAnime} de ${animeName} ont bien été retiré de l'historique !`,
    {
      position: 'bottom-center',

      style: {
        color: 'var(--mainColor)',
        fontFamily: 'Fredoka',
        fontSize: '15px',
      },
    }
  );
};
