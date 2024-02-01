import { windowKeys } from '../interfaces/interface';
import { IMAGE_URL } from './constants';

export const getTailleChapitres = (): number => {
  let i: number = 1;
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

export const selectChapter = (newChapter: number | string): void => {
  const title =
    document.querySelector('select')!.options[Number(newChapter) - 1].innerText;
  const scans = (window as windowKeys)[`eps${newChapter}`];

  window.localStorage.setItem('chapitre', String(newChapter));

  document.querySelector('.scans')!.innerHTML = '';
  document.querySelector('select')!.value = title;

  for (let i = 1; i < scans.length + 1; i++) {
    document.querySelector(
      '.scans'
    )!.innerHTML += `<img alt="Chapitre ${newChapter}" src=${IMAGE_URL(
      newChapter,
      i
    )}></img>`;
  }
};

export const prevChapitre = (): void => {
  const currentChapter = window.localStorage.getItem('chapitre');
  const newChapter = Number(currentChapter) - 1;

  if (currentChapter === '1') return;

  selectChapter(newChapter);
};

export const nextChapitre = (): void => {
  const currentChapter = window.localStorage.getItem('chapitre');
  const chapters = document.querySelector('.chapitres') as HTMLSelectElement;
  const lastChapter = chapters.options[chapters.options.length - 1].id
    .match(/[0-9]/g)!
    .join('');

  if (currentChapter === lastChapter) return;

  selectChapter(Number(currentChapter) + 1);
};
