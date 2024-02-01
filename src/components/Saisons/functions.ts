import { obj } from './saisonsObj';
import { getImage } from './images';
import { allIndex } from '../Episodes/constants';

export function getSaisons() {
  const div = document.getElementsByClassName('saisons')[0];

  for (let i = 1; i < Object.keys(obj).length + 1; i++) {
    const intervalEpisodes = `${allIndex[i] + 1} - ${
      i < Object.keys(obj).length ? allIndex[i + 1] : '?'
    }`;

    const id = `"${obj[i].name}|${obj[i].aliases?.join(
      ', '
    )} ${intervalEpisodes}"`;

    div.innerHTML += `<div id=${id} class="container--poster-saison"><img class="poster-saison" src="${getImage(
      i as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
    )}" id="${i}" /><p class="text--saisons" ><br/><br/><br/><br/><br/><span>${
      obj[i].name
    }</span> (${intervalEpisodes})</p></div>`;
  }
}

export function changeSaison(index: string) {
  if (window.localStorage.getItem('saison') !== index) {
    window.localStorage.setItem('episode', '1');
  }

  window.location.hash = `S${index}/Episodes`;
  window.localStorage.setItem('saison', index);
}
