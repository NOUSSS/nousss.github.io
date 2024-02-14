import { toast } from 'sonner';
import { windowKeys } from '../typings/interface';

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

export function addScript(url: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.className = 'script';
    script.setAttribute('src', url);

    const loading = toast.loading('Chargement des sources en cours...');

    script.onload = () => {
      toast.dismiss(loading);

      toast.success('Les sources ont été chargées avec succès !', {
        style: { color: 'var(--orange)' },
      });

      resolve(true);
    };

    script.onerror = () => {
      toast.dismiss(loading);

      toast.error(
        'Erreur dans le chargement des sources, veuillez recharger la page.',
        {
          style: {
            color: 'red',
          },
        }
      );

      reject(false);
    };

    document.head.appendChild(script);
  });
}
