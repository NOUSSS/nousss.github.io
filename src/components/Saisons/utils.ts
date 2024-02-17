export function changeSaison(index: string) {
  let currentAnime = window.localStorage.getItem('anime');

  const hash = window.location.hash;
  const queryParams = hash.substring(hash.indexOf('?') + 1);

  const urlParams = new URLSearchParams(queryParams);

  const currentAnimeURL = urlParams.get('anime');

  if (!currentAnimeURL) window.location.hash = '/';

  if (!currentAnime) {
    window.localStorage.setItem('anime', currentAnimeURL!);
    currentAnime = window.localStorage.getItem('anime');
  }

  if (
    currentAnimeURL &&
    currentAnimeURL.toLowerCase() !== currentAnime!.toLowerCase()
  ) {
    currentAnime = currentAnimeURL;

    window.localStorage.setItem('anime', currentAnimeURL);
  }

  if (window.localStorage.getItem(`${currentAnime}--saison`) !== index) {
    window.localStorage.setItem(`${currentAnime}--episode`, '1');
  }

  window.location.hash = `S${index}/Episodes?anime=${encodeURI(currentAnime!)}`;
  window.localStorage.setItem(`${currentAnime}--saison`, index);
}
