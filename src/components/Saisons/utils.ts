export function changeSaison(index: string) {
  const currentAnime = window.localStorage.getItem('anime');

  if (window.localStorage.getItem(`${currentAnime}--saison`) !== index) {
    window.localStorage.setItem(`${currentAnime}--episode`, '1');
  }

  window.location.hash = `S${index}/Episodes`;
  window.localStorage.setItem(`${currentAnime}--saison`, index);
}
