import { obj } from '../Saisons/saisons-names';

export function NextSaison(setSaison: any): void {
  if (window.localStorage.getItem('saison') === '11') return;

  const newSaison = String(Number(window.localStorage.getItem('saison')) + 1);

  window.localStorage.setItem('saison', newSaison);

  const newHash = `#S${newSaison}/Episodes`;

  window.localStorage.setItem('episode', '1');
  window.location.hash = newHash;

  setSaison({
    name: obj[newSaison].name,
    index: newSaison,
  });
}

export function PrevSaison(setSaison: any): void {
  if (window.localStorage.getItem('saison') === '1') return;

  const newSaison = String(Number(window.localStorage.getItem('saison')) - 1);

  window.localStorage.setItem('saison', newSaison);

  const newHash = `#S${newSaison}/Episodes`;

  window.localStorage.setItem('episode', '1');
  window.location.hash = newHash;

  setSaison({
    name: obj[newSaison].name,
    index: newSaison,
  });
}
