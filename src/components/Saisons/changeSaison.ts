import { getCurrentAnime } from '../../functions/getCurrentAnime';

export function changeSaison(index: string) {
  const currentAnime = getCurrentAnime({ wSaison: false });

  window.location.hash = `S${index}/Episodes?anime=${encodeURI(currentAnime!)}`;

  if (window.localStorage.getItem(`${currentAnime}--saison`) !== index) {
    window.localStorage.setItem(`${currentAnime}--episode`, '1');
    window.localStorage.removeItem(`${currentAnime}--currentTime`);
  }

  window.localStorage.setItem(`${currentAnime}--saison`, index);
}
