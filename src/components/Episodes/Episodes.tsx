import { useEffect } from 'react';
import { obj } from '../Saisons/saisonsObj';

import './Episodes.scss';
import './responsive.scss';

import searchImg from '../../Assets/Search.svg';

import { addScript } from '../Films/functions';
import { NextSaga, PrevSaga } from './functions';
import { initSearchBar } from '../../functions/search';
import { Link } from 'react-router-dom';

import episodesNames from './episode';

import { isIOS } from '../../functions/main';
import { WANOHS, allIndex } from './constants';

import { windowKeys } from '../interfaces/interface';

let lecteur: string[];

function downloadText(url: String) {
  if (isIOS()) {
    document.querySelector(
      '.download'
    )!.innerHTML = `Pour télécharger, cliquez <span><a target="_blank" href="${url}">ici</a></span> puis appuyer sur le bouton <span>"partager"</span>, puis <span>'Enregistrer dans fichiers'</span>`;
  } else {
    document.querySelector(
      '.download'
    )!.innerHTML = `Pour télécharger, cliquez <span><a target="_blank" href="${url}">ici</a></span> puis faites <span>clique droit</span>, puis <span>'Enregistrer la vidéo sous'</span>`;
  }
}

function Change(indexEpisode: number | string) {
  const divEp = document.querySelector('.episodes')!;

  if (window.localStorage.getItem('saison') === '10') {
    if (WANOHS.includes(Number(indexEpisode) - 1)) {
      let esp = '';

      document.querySelectorAll('p').forEach((e) => {
        if (e.dataset?.id === indexEpisode) {
          esp = e.id.match(/[0-9]/g)!.join('');
        }
      });

      const url = lecteur[Number(indexEpisode) - 1];

      downloadText(url);

      divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${url} allowfullscreen></iframe>`;
      document.querySelector(
        '.episode'
      )!.innerHTML = `<span class="episodeNumber">E-SP${esp}</span>`;

      window.localStorage.setItem('episode', String(indexEpisode));
      window.localStorage.setItem('episodeSpecial', `E-SP${esp}`);
    } else {
      let retard = 0;

      document.querySelectorAll('.episodeList').forEach((e, i) => {
        if (i + 1 < Number(indexEpisode)) {
          if (e.id.includes('E-SP')) retard++;
        }
      });

      const saison = window.localStorage.getItem('saison');

      const numberEpisode =
        Number(allIndex[saison ?? 0]) + Number(indexEpisode) - retard;

      const title = episodesNames.find(
        ({ index }) => index === String(numberEpisode)
      )!.name;

      const url = lecteur[Number(indexEpisode) - 1];

      downloadText(url);

      divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${url} allowfullscreen></iframe>`;
      document.querySelector(
        '.episode'
      )!.innerHTML = `<span class="episodeNumber">${numberEpisode}</span> : ${title}`;

      window.localStorage.setItem('episode', String(indexEpisode));
      window.localStorage.removeItem('episodeSpecial');
    }
  } else {
    const numberEpisode =
      Number(allIndex[window.localStorage.getItem('saison') ?? 0]) +
      Number(indexEpisode);

    const url = lecteur[Number(indexEpisode) - 1];

    downloadText(url);

    const episodeTitle = episodesNames.find(
      ({ index }) => index === String(numberEpisode)
    )!.name;

    divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${url} allowfullscreen></iframe>`;
    document.querySelector(
      '.episode'
    )!.innerHTML = `<span class="episodeNumber">${numberEpisode}</span> : ${episodeTitle}`;

    window.localStorage.setItem('episode', String(indexEpisode));
    window.localStorage.removeItem('episodeSpecial');
  }

  window.scrollTo({ top: 332, behavior: 'smooth' });
}

function NextEpisode() {
  const newEpisodeIndex = Number(window.localStorage.getItem('episode')) + 1;

  if (newEpisodeIndex - 1 === lecteur.length) {
    if (window.localStorage.getItem('saison') === '11') return;

    window.localStorage.setItem('episode', '1');

    NextSaga();
  } else {
    Change(newEpisodeIndex);
  }
}

function PrevEpisode() {
  const newEpisodeIndex = Number(window.localStorage.getItem('episode')) - 1;

  if (newEpisodeIndex < 1) {
    if (window.localStorage.getItem('saison') === '1') return;

    window.localStorage.setItem('episode', '1');
    PrevSaga();
  } else {
    Change(newEpisodeIndex);
  }
}

export default function Episodes() {
  useEffect(() => {
    const saison = {
      name: obj[window.localStorage.getItem('saison') ?? 0].name,
      index: window.localStorage.getItem('saison'),
    };

    const nextSaga = document.querySelector('.nextSaga') as HTMLElement;
    const prevSaga = document.querySelector('.prevSaga') as HTMLElement;

    if (isIOS()) {
      const cinemaToggleSwitch = document.querySelector(
        '.cinema'
      ) as HTMLElement;

      cinemaToggleSwitch.style.display = 'none';
    } else if (!isIOS()) {
      const cinemaMode = document.querySelector(
        '.cinema input'
      ) as HTMLInputElement;

      cinemaMode.addEventListener('change', () => {
        const iframeParent = document.querySelector('.episodes') as HTMLElement;

        if (cinemaMode.checked) {
          document.documentElement.requestFullscreen().catch(() => 0);

          iframeParent.style.width = '200%';
          iframeParent.style.height = `${
            document.querySelector('iframe')!.offsetHeight
          }px`;

          iframeParent.style.backgroundColor = 'black';
        } else if (!cinemaMode.checked) {
          document.exitFullscreen().catch(() => 0);

          iframeParent.style.width = '';
          iframeParent.style.height = '';

          iframeParent.style.backgroundColor = '';
        }
      });
    }

    if (saison.index === Object.keys(allIndex)[0])
      prevSaga.style.display = 'none';
    if (
      saison.index === Object.keys(allIndex)[Object.keys(allIndex).length - 1]
    )
      nextSaga.style.display = 'none';

    const divEp = document.querySelector('.episodes')!;
    const list = document.querySelector('.list')!;
    const buttons = document.querySelector('.buttons')!;

    nextSaga.addEventListener('click', NextSaga);
    prevSaga.addEventListener('click', PrevSaga);

    setTimeout(() => {
      if (window.scrollY < 50) {
        window.scrollTo({
          top: 300,
          behavior: 'smooth',
        });
      }
    }, 4000);

    const firstValue = Object.values(allIndex)[0];

    if (saison.index === String(firstValue)) prevSaga.style.display = 'none';

    document.querySelector(
      'title'
    )!.textContent = `${saison.name} - Mugiwara-no Streaming`;

    const loading = document.querySelector('.loading')!;
    loading.innerHTML = `Si les épisodes ne se chargent pas, cliquez <span style="text-decoration: underline" onclick="window.location.reload();">ici</span>`;

    addScript(
      `https://anime-sama.fr/catalogue/one-piece/saison${saison.index}/vostfr/episodes.js`
    ).then(() => {
      lecteur = (window as windowKeys)['epsAS'];
      loading.innerHTML = '';

      const text = document.getElementsByClassName('titleSaison')[0];
      text.innerHTML = `<Link to="/Saisons"><span>${saison.name} (${lecteur.length})</span> [VOSTFR]</Link>`;

      buttons.innerHTML = `<button class="prevButton">Épisode précedent</button><button class="nextButton" >Épisode suivant</button>`;

      let episodeIndex = allIndex[saison.index ?? 0];

      const episode = window.localStorage.getItem('episode');
      const esp = window.localStorage.getItem('episodeSpecial');

      let retard = 0;

      for (
        let indexEpisode = 1;
        indexEpisode < lecteur.length + 1;
        indexEpisode++
      ) {
        if (window.localStorage.getItem('saison') === '10') {
          if (WANOHS.includes(indexEpisode - 1)) {
            retard++;

            const title = `E-SP${retard}`;

            list.innerHTML += `<p class="episodeList" data-id="${indexEpisode}" id="${title}" ><span class="episodeNumber">${title}</span></p>`;
          } else {
            const episodeNumber = episodeIndex + indexEpisode - retard;
            const episodeTitle = episodesNames.find(
              ({ index }) => index === String(episodeNumber)
            )!.name;

            list.innerHTML += `<p class="episodeList" data-id="${indexEpisode}" id="${episodeNumber} ${episodeTitle}" ><span class="episodeNumber">${episodeNumber}</span> : ${episodeTitle}</p>`;
          }
        } else {
          const episodeNumber = episodeIndex + indexEpisode;
          const episodeTitle = episodesNames.find(
            ({ index }) => index === String(episodeNumber)
          )!.name;

          list.innerHTML += `<p class="episodeList" data-id="${indexEpisode}" id="${episodeNumber} ${episodeTitle}" ><span class="episodeNumber">${episodeNumber}</span> : ${episodeTitle}</p>`;
        }
      }

      if (episode !== '1' && !esp) {
        const URL_EPISODE = lecteur[Number(episode) - 1];

        let retard = 0;

        document.querySelectorAll('.episodeList').forEach((e, i) => {
          if (i + 1 < Number(episode)) {
            if (e.id.includes('E-SP')) retard++;
          }
        });

        const title = episodesNames.find(
          ({ index }) =>
            index === String(episodeIndex + Number(episode) - retard)
        )!.name;

        divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${URL_EPISODE} allowfullscreen></iframe>`;
        document.querySelector(
          '.episode'
        )!.innerHTML = `<span class="episodeNumber">${
          Number(episodeIndex) + Number(episode) - retard
        }</span> : ${title}`;

        downloadText(URL_EPISODE);
      }

      if (episode !== '1' && esp) {
        const URL_EPISODE = lecteur[Number(episode) - 1];

        divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${URL_EPISODE} allowfullscreen></iframe>`;
        document.querySelector(
          '.episode'
        )!.innerHTML = `<span class="episodeNumber">${esp}</span>`;

        downloadText(URL_EPISODE);
      }

      if (episode === '1') {
        const [firstEpisode] = lecteur;

        const title = episodesNames.find(
          ({ index }) => index === String(Number(episodeIndex) + 1)
        )!.name;

        divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${firstEpisode} allowfullscreen></iframe>`;
        document.querySelector(
          '.episode'
        )!.innerHTML = `<span class="episodeNumber">${
          Number(episodeIndex) + 1
        }</span> : ${title}`;

        window.localStorage.setItem('episode', '1');

        downloadText(firstEpisode);
      }

      document.querySelectorAll('.episodeList').forEach((episode) => {
        episode.addEventListener('click', () => {
          const episodeId = (episode as HTMLElement).dataset.id;

          Change(episodeId!);
        });
      });

      document
        .querySelector('.nextButton')!
        .addEventListener('click', NextEpisode);
      document
        .querySelector('.prevButton')!
        .addEventListener('click', PrevEpisode);
    });
  }, []);

  return (
    <div className="container--episodes">
      <div className="title">
        <h1>
          One <span>Piece</span>
        </h1>
      </div>

      <Link to="/Saisons">
        <p className="titleSaison"></p>
      </Link>

      <p className="loading"></p>

      <p className="episode"></p>
      <div className="episodes"></div>
      <label className="cinema">
        <p>Mode cinema</p>
        <input type="checkbox"></input>
        <span></span>
      </label>
      <div className="container--buttons">
        <div className="buttons"></div>
      </div>
      <div className="output--episodes--cached"></div>
      <div className="output--episodes"></div>
      <p className="download"></p>
      <label
        className="label--episodes"
        title="Systeme de recherche super cool"
      >
        <img src={searchImg} alt="" />
        <input
          type="text"
          placeholder="1015 ?"
          onInput={() =>
            initSearchBar(
              document.querySelector('.label--episodes input')!,
              document.getElementsByClassName('episodeList'),
              'episodes'
            )
          }
        />
      </label>
      <div className="container--list">
        <div className="list"></div>
      </div>
      <div className="buttonSagaContainer">
        <button className="prevSaga">Saga précédente</button>
        <button className="nextSaga">Saga suivante</button>
      </div>

      <p className="mark">Les vidéos ne sont pas hébergées sur nos serveurs.</p>
      <footer>© 2022 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </div>
  );
}
