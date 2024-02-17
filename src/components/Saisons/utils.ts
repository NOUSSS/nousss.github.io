import { getAnime } from '../../functions/getAnime';

export function changeSaison(index: string) {
  const currentAnime = getAnime({ wSaison: false });

  window.location.hash = `S${index}/Episodes?anime=${encodeURI(currentAnime!)}`;
  window.localStorage.setItem(`${currentAnime}--saison`, index);
}
