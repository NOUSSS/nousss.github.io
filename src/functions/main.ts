import { windowKeys } from '../interfaces/interface';

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

export const getURLFilm = (index: number, lecteur: string): string =>
  (window as unknown as windowKeys)[lecteur][index];

export const toUpper = (param: string): string =>
  param[0].toUpperCase() + param.slice(1);

export function addScript(
  url: string | undefined,
  setLoading:
    | React.Dispatch<React.SetStateAction<React.ReactNode>>
    | React.Dispatch<React.SetStateAction<string>>
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (url) {
      const script = document.createElement('script');

      script.className = 'script';

      script.setAttribute('src', url);

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        setLoading(
          'Erreur dans le chargement des episodes. Veuillez recharger la page'
        );

        reject(false);
      };

      document.head.appendChild(script);
    }
  });
}
