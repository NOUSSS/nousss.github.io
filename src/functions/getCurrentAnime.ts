import { ANIMES } from '../animes/constants';

export const getCurrentAnime = ({ wSaison }: { wSaison: boolean }): string => {
  const hash = window.location.hash;
  const queryParams = hash.substring(hash.indexOf('?') + 1);

  const urlParams = new URLSearchParams(queryParams);
  const currentAnimeURL = urlParams.get('anime');

  let storedAnime = window.localStorage.getItem('anime');

  if (!currentAnimeURL && !storedAnime) window.location.hash = '/';

  if (!storedAnime) {
    window.localStorage.setItem('anime', currentAnimeURL!);
    storedAnime = window.localStorage.getItem('anime')!;

    if (wSaison) {
      window.localStorage.setItem(
        `${storedAnime}--saison`,
        window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
      );
    }
  }

  if (wSaison) {
    if (storedAnime && !window.localStorage.getItem(`${storedAnime}--saison`)) {
      window.localStorage.setItem(
        `${storedAnime}--saison`,
        window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
      );
    }
  }

  if (
    currentAnimeURL &&
    currentAnimeURL.toLowerCase() !== storedAnime!.toLowerCase()
  ) {
    storedAnime = currentAnimeURL;

    window.localStorage.setItem('anime', currentAnimeURL);
  }

  if (
    !ANIMES.find(
      ({ anime }) => anime.toLowerCase() === storedAnime!.toLowerCase()
    )
  )
    window.location.hash = '/';

  return storedAnime;
};
