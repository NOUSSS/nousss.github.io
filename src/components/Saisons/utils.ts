import { getAnime } from '../../functions/getAnime';

export function changeSaison(index: string) {
  const currentAnime = getAnime({ wSaison: false });

  window.location.hash = `S${index}/Episodes?anime=${encodeURI(currentAnime!)}`;

  if (window.localStorage.getItem(`${currentAnime}--saison`) !== index) {
    window.localStorage.setItem(`${currentAnime}--episode`, '1');
  }

  window.localStorage.setItem(`${currentAnime}--saison`, index);
}
