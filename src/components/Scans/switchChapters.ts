import React from 'react';

import { selectChapter } from './functions.tsx';

export const prevChapitre = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>
): void => {
  const currentChapter = parseInt(
    window.localStorage.getItem('chapitre') ?? '1'
  );

  if (currentChapter === 1) return undefined;

  setScans(selectChapter(Number(currentChapter) - 1));
};

export const nextChapitre = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>
): void => {
  const chapters = document.querySelector('select')!;
  const currentChapter = parseInt(
    window.localStorage.getItem('chapitre') ?? '1'
  );

  const lastChapter = chapters.options[chapters.options.length - 1].id
    .match(/[0-9]/g)!
    .join('');

  if (currentChapter === Number(lastChapter)) return undefined;

  setScans(selectChapter(Number(currentChapter) + 1));
};
