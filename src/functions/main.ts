import { toast } from 'sonner';

import React from 'react';
import { LecteurReturnType } from '../typings/types';

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

export const getURLFilm = (index: number, lecteur: 'eps1' | 'eps2'): string =>
  getLecteur()[lecteur]![index];

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

export const getLecteur = (): LecteurReturnType => {
  if (typeof window.epsAS === 'undefined') {
    if (window.eps1) {
      for (const str of window.eps1) {
        if (str.includes('sibnet'))
          return {
            eps1: window.eps1,
          };
      }
    }

    if (window.eps2) {
      for (const str of window.eps2) {
        if (str.includes('sibnet'))
          return {
            eps1: window.eps1,
            eps2: window.eps2,
          };
      }
    }

    return {
      eps1: window.eps1,
    };
  } else {
    const lecteursExt: LecteurReturnType = {};

    if (window.eps1) {
      for (const str of window.eps1) {
        if (str.includes('sibnet')) lecteursExt['eps1'] = window.eps1;
      }
    }

    if (window.eps2) {
      for (const str of window.eps2) {
        if (str.includes('sibnet')) lecteursExt['eps2'] = window.eps2;
      }
    }

    if (
      Object.keys(lecteursExt).length === 0 ||
      (lecteursExt.eps2 && !lecteursExt.eps1)
    )
      lecteursExt['eps1'] = window.eps1;

    const lecteurs = { epsAS: window.epsAS, ...lecteursExt };

    return lecteurs;
  }
};
