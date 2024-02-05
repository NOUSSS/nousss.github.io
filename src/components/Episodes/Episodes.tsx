import './Episodes.scss';
import './responsive.scss';

import React, { useEffect, useState } from 'react';
import { obj } from '../Saisons/saisons-names';
import { addScript } from '../../functions/main.ts';
import { initSearchBar } from '../../functions/search.tsx';
import { Link } from 'react-router-dom';
import { EPISODES_OPTIONS } from '../constants';
import { windowKeys } from '../../interfaces/interface.ts';
import { clickEvents, downloadText, toggleCinemaMode } from './utils';
import { Footer, Title } from '../components';

import searchImg from '../../assets/Search.svg';
import episodesNames from './episodes-names';

const { allIndex, horsSeries, SCRIPT_URL } = EPISODES_OPTIONS;

let lecteur: string[] = [];

export default function Episodes() {
  const [saison, setSaison] = useState({
    name: obj[window.localStorage.getItem('saison') ?? 0].name,
    index: window.localStorage.getItem('saison')!,
  });

  const [saisonTitle, setSaisonTitle] = useState<React.ReactNode>();
  const [episodeTitle, setEpisodeTitle] = useState<React.ReactNode>();
  const [video, setVideo] = useState<string>('');

  const [loading, setLoading] = useState<React.ReactNode>('');
  const [output, setOutput] = useState<React.ReactNode>('');
  const [textDownload, setDownloadText] = useState<React.ReactNode>('');

  const [episodes, setEpisodes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const NextSaisonSelector =
      document.querySelector<HTMLElement>('.NextSaison')!;

    const PrevSaisonSelector =
      document.querySelector<HTMLElement>('.PrevSaison')!;

    const lastSaison = Object.keys(allIndex)[Object.keys(allIndex).length - 1];
    const firstSaison = Object.keys(allIndex)[0];

    if (saison.index === firstSaison) PrevSaisonSelector.style.display = 'none';
    else PrevSaisonSelector.style.display = '';

    if (saison.index === lastSaison) NextSaisonSelector.style.display = 'none';
    else NextSaisonSelector.style.display = '';

    toggleCinemaMode();

    setTimeout(() => {
      if (window.scrollY <= 50) {
        window.scrollTo({
          top: 300,
          behavior: 'smooth',
        });
      }
    }, 4000);

    document.querySelector(
      'title'
    )!.textContent = `${saison.name} - Mugiwara-no Streaming`;

    setLoading(
      <>
        Si les épisodes ne se chargent pas, cliquez{' '}
        <span
          style={{ textDecoration: 'underline' }}
          onClick={window.location.reload}
        >
          ici
        </span>
      </>
    );

    addScript(SCRIPT_URL(saison.index)).then(() => {
      lecteur = (window as windowKeys)['epsAS'];

      setLoading('');
      setSaisonTitle(
        <>
          <span>
            {saison.name} ({lecteur.length})
          </span>{' '}
          [VOSTFR]
        </>
      );

      let episodeIndex = allIndex[saison.index ?? 0];

      const episode = window.localStorage.getItem('episode');
      const esp = window.localStorage.getItem('episodeSpecial');

      const listEpisodes: React.ReactNode[] = [];

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

            listEpisodes.push(
              <p
                className="list-episodes"
                data-id={indexEpisode}
                id={title}
                key={title}
              >
                <span className="episodeNumber">{title}</span>
              </p>
            );
          } else {
            const episodeNumber = episodeIndex + indexEpisode - retard;
            const episodeTitle = episodesNames.find(
              ({ index }) => index === String(episodeNumber)
            )!.name;

            const id = `${episodeNumber} ${episodeTitle}`;
            listEpisodes.push(
              <p
                className="list-episodes"
                data-id={indexEpisode}
                id={id}
                key={id}
              >
                <span className="episodeNumber">{episodeNumber}</span> :{' '}
                {episodeTitle}
              </p>
            );
          }
        } else {
          const episodeNumber = episodeIndex + indexEpisode;
          const episodeTitle = episodesNames.find(
            ({ index }) => index === String(episodeNumber)
          )!.name;

          const id = `${episodeNumber} ${episodeTitle}`;

          listEpisodes.push(
            <p
              className="list-episodes"
              data-id={indexEpisode}
              id={id}
              key={id}
            >
              <span className="episodeNumber">{episodeNumber}</span> :{' '}
              {episodeTitle}
            </p>
          );
        }
      }

      setEpisodes(listEpisodes);

      if (episode !== '1' && !esp) {
        const URL_EPISODE = lecteur[Number(episode) - 1];

        let retard = 0;

        document.querySelectorAll('.list-episodes').forEach((e, i) => {
          if (i + 1 < Number(episode)) {
            if (e.id.includes('E-SP')) retard++;
          }
        });

        const title = episodesNames.find(
          ({ index }) =>
            index === String(episodeIndex + Number(episode) - retard)
        )!.name;

        setVideo(URL_EPISODE);

        setEpisodeTitle(
          <>
            <span className="episodeNumber">
              {Number(episodeIndex) + Number(episode) - retard}
            </span>{' '}
            : {title}
          </>
        );

        downloadText(URL_EPISODE, setDownloadText);
      }

      if (episode !== '1' && esp) {
        const URL_EPISODE = lecteur[Number(episode) - 1];

        setVideo(URL_EPISODE);

        setEpisodeTitle(<span className="episodeNumber">{esp}</span>);
        downloadText(URL_EPISODE, setDownloadText);
      }

      if (episode === '1') {
        const [firstEpisode] = lecteur;

        const title = episodesNames.find(
          ({ index }) => index === String(Number(episodeIndex) + 1)
        )!.name;

        setVideo(firstEpisode);

        setEpisodeTitle(
          <>
            <span className="episodeNumber">{Number(episodeIndex) + 1}</span> :{' '}
            {title}
          </>
        );

        window.localStorage.setItem('episode', '1');

        downloadText(firstEpisode, setDownloadText);
      }

      setTimeout(() => {
        clickEvents(lecteur, setVideo, setEpisodeTitle, setDownloadText);
      }, 1000);
    });
  }, [saison]);

  useEffect(() => {
    const episode = window.localStorage.getItem('episode') ?? '1';

    const NextEpisodeSelector =
      document.querySelector<HTMLElement>('.nextButton')!;

    const PrevEpisodeSelector =
      document.querySelector<HTMLElement>('.prevButton')!;

    if (!episode || episode === '1') PrevEpisodeSelector.style.display = 'none';
    else PrevEpisodeSelector.style.display = '';

    if (Number(episode) === lecteur.length)
      NextEpisodeSelector.style.display = 'none';
    else NextEpisodeSelector.style.display = '';
  }, [video]);

  return (
    <div className="container--episodes">
      <Title />

      <Link to="/Saisons">
        <p className="titleSaison">{saisonTitle}</p>
      </Link>

      <p className="loading">{loading}</p>
      <p className="episodeTitle">{episodeTitle}</p>

      <div className="episodeVideo">
        {video ? (
          <iframe
            className="vid"
            width="640"
            height="360"
            src={video}
            allowFullScreen
          ></iframe>
        ) : null}
      </div>

      <label className="cinema">
        <p>Mode cinema</p>
        <input type="checkbox"></input>
        <span></span>
      </label>

      <div className="container--buttons">
        <div className="buttons">
          <button className="prevButton">Épisode précedent</button>
          <button className="nextButton">Épisode suivant</button>
        </div>
      </div>

      <div className="search--output--episodes">{output}</div>

      <p className="download">{textDownload}</p>
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
              document.getElementsByClassName('list-episodes'),
              'episodes',
              setOutput
            )
          }
        />
      </label>
      <div className="container--list">
        <div className="list">{episodes}</div>
      </div>
      <div className="buttons--saisons">
        <button
          onClick={() => {
            const prevSaison =
              Number(window.localStorage.getItem('saison')) - 1;

            window.localStorage.setItem('saison', String(prevSaison));
            setSaison({
              name: obj[prevSaison].name,
              index: String(prevSaison),
            });
          }}
          className="PrevSaison"
        >
          Saison précédente
        </button>

        <button
          onClick={() => {
            const newSaison = Number(window.localStorage.getItem('saison')) + 1;

            window.localStorage.setItem('saison', String(newSaison));
            setSaison({
              name: obj[newSaison].name,
              index: String(newSaison),
            });
          }}
          className="NextSaison"
        >
          Saison suivante
        </button>
      </div>

      <Footer media />
    </div>
  );
}
