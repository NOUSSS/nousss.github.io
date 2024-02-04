export function changeSaison(index: string) {
  if (window.localStorage.getItem('saison') !== index) {
    window.localStorage.setItem('episode', '1');
  }

  window.location.hash = `S${index}/Episodes`;
  window.localStorage.setItem('saison', index);
}
