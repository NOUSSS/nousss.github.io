import './Episodes.scss';
import './responsive.scss';

import { useEffect, useState } from 'react';
import { obj } from '../Saisons/saisonsObj';
import { addScript } from '../Films/functions';
import { NextSaison, PrevSaison } from './switchSaisons';
import { initSearchBar } from '../../functions/search';
import { Link } from 'react-router-dom';
import { allIndex, horsSeries } from './constants';
import { windowKeys } from '../interfaces/interface';
import { clickEvents, downloadText, toggleCinemaMode } from './utils';
import { Footer, Title } from '../components';

import searchImg from '../../assets/Search.svg';
import episodesNames from './episodes-names';

let lecteur: string[];

export default function Episodes() {
  const [saison] = useState({
    name: obj[window.localStorage.getItem('saison') ?? 0].name,
    index: window.localStorage.getItem('saison'),
  });

  useEffect(() => {
    const NextSaisonSelector =
      document.querySelector<HTMLElement>('.NextSaison')!;

    const PrevSaisonSelector =
      document.querySelector<HTMLElement>('.PrevSaison')!;

    toggleCinemaMode();

    if (saison.index === Object.keys(allIndex)[0])
      PrevSaisonSelector.style.display = 'none';

    if (
      saison.index === Object.keys(allIndex)[Object.keys(allIndex).length - 1]
    )
      NextSaisonSelector.style.display = 'none';

    const episodesContainer = document.querySelector('.episodes')!;
    const list = document.querySelector('.list')!;
    const buttons = document.querySelector('.buttons')!;

    NextSaisonSelector.addEventListener('click', NextSaison);
    PrevSaisonSelector.addEventListener('click', PrevSaison);

    setTimeout(() => {
      if (window.scrollY <= 50) {
        window.scrollTo({
          top: 300,
          behavior: 'smooth',
        });
      }
    }, 4000);

    const firstValue = Object.values(allIndex)[0];

    if (saison.index === String(firstValue))
      PrevSaisonSelector.style.display = 'none';

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
        const isHorsSerie = horsSeries.find(
          ({ saison }) => saison === window.localStorage.getItem('saison')
        );

        if (isHorsSerie) {
          if (isHorsSerie.hs.includes(indexEpisode - 1)) {
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

        episodesContainer.innerHTML = `<iframe class="vid" width=640 height=360 src=${URL_EPISODE} allowfullscreen></iframe>`;
        document.querySelector(
          '.episode'
        )!.innerHTML = `<span class="episodeNumber">${
          Number(episodeIndex) + Number(episode) - retard
        }</span> : ${title}`;

        downloadText(URL_EPISODE);
      }

      if (episode !== '1' && esp) {
        const URL_EPISODE = lecteur[Number(episode) - 1];

        episodesContainer.innerHTML = `<iframe class="vid" width=640 height=360 src=${URL_EPISODE} allowfullscreen></iframe>`;
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

        episodesContainer.innerHTML = `<iframe class="vid" width=640 height=360 src=${firstEpisode} allowfullscreen></iframe>`;
        document.querySelector(
          '.episode'
        )!.innerHTML = `<span class="episodeNumber">${
          Number(episodeIndex) + 1
        }</span> : ${title}`;

        window.localStorage.setItem('episode', '1');

        downloadText(firstEpisode);
      }

      clickEvents(lecteur);
    });
  }, []);

  return (
    <div className="container--episodes">
      <Title />

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
        <button className="PrevSaison">Saga précédente</button>
        <button className="NextSaison">Saga suivante</button>
      </div>

      <Footer />
    </div>
  );
}
