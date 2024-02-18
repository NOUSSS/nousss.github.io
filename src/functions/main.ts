import { toast } from 'sonner';
import { windowKeys } from '../typings/types';

import React from 'react';

export const clear = (div: HTMLCollectionOf<HTMLElement>): void => {
  Array.from(div).forEach((element) => {
    element.classList.remove('invisible');
  });
};

export function isIOS(): boolean {
  if (!window || !navigator) return false;
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor))
    return true;

  return false;
}

export const formatName = (animeName: string) => {
  return animeName
    .replace('-', ' ')
    .replace('-', ' ')
    .split(' ')
    .map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};

export const getURLFilm = (index: number, lecteur: string): string =>
  (window as unknown as windowKeys)[lecteur][index];

export const toUpper = (param: string): string =>
  param[0].toUpperCase() + param.slice(1);

export function addScript({
  url,

  currentAnime,
  saisonIndex,

  setLang,
}: {
  url: string;
  currentAnime: string;
  saisonIndex?: string;
  setLang?: React.Dispatch<React.SetStateAction<string>>;
}): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.className = 'script';
    script.setAttribute('src', url);

    const loading = toast.loading('Chargement des sources en cours...', {
      style: {
        fontFamily: 'Fredoka',
        fontSize: '15px',
      },
    });

    script.onload = () => {
      toast.dismiss(loading);

      toast.success('Les sources ont bien été chargées !', {
        style: {
          color: 'var(--mainColor)',
          fontFamily: 'Fredoka',
          fontSize: '15px',
        },
      });

      resolve(true);
    };

    script.onerror = () => {
      if (setLang) {
        setLang('vostfr');

        if (saisonIndex) {
          window.localStorage.setItem(
            `${currentAnime}--${saisonIndex}--lang`,
            'vostfr'
          );
        } else {
          window.localStorage.setItem(`${currentAnime}--lang`, 'vostfr');
        }
      }

      toast.error('Erreur dans le chargement des sources', {
        dismissible: false,
        style: {
          color: 'red',
          fontFamily: 'Fredoka',
          fontSize: '15px',
        },
      });

      toast.dismiss(loading);
      reject(false);
    };

    document.head.appendChild(script);
  });
}
