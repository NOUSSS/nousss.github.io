import './Episodes.scss';
import './responsive.scss';

import React, { useEffect, useState } from 'react';
import { addScript, isIOS } from '../../functions/main.ts';
import { initSearchBar } from '../../functions/search.tsx';
import { ANIMES_OPTIONS } from '../constants';
import { windowKeys } from '../../interfaces/interface.ts';
import { clickEvents, downloadText, toggleHideEpisodesNames } from './utils';
import { Footer, Title } from '../components.tsx';

import searchImg from '../../assets/Search.svg';

let LecteurEpisodes: string[] = [];

export default function Episodes() {
  const currentAnime = window.localStorage.getItem('anime')!;

  const options = ANIMES_OPTIONS.find(
    ({ anime }) => anime === currentAnime
  )!.options;

  let { allIndex, horsSeries, SCRIPT_URL, names, lecteur } =
    options.EPISODES_OPTIONS;

  const { saisons } = options;

  const [saison, setSaison] = useState({
    name: saisons[
      Number(window.localStorage.getItem(`${currentAnime}--saison`)) ?? 0
    ].name,
    index: window.localStorage.getItem(`${currentAnime}--saison`)!,
  });

  if (!window.localStorage.getItem(`${currentAnime}--${saison.index}--lang`))
    window.localStorage.setItem(
      `${currentAnime}--${saison.index}--lang`,
      'vostfr'
    );

  const [lang, setLang] = useState<string>(
    window.localStorage.getItem(`${currentAnime}--${saison.index}--lang`)!
  );

  const [loadingText, setLoadingText] = useState<React.ReactNode>(
    <span>Les episodes sont en cours de chargement, veuillez patientez..</span>
  );

  let scriptIndex = saison.index;

  if (currentAnime == "L'attaque des titans") {
    if (Number(window.localStorage.getItem(`${currentAnime}--saison`)) > 4) {
      scriptIndex = `4-${
        Number(window.localStorage.getItem(`${currentAnime}--saison`)) - 3
      }`;
    }
    if (Number(window.localStorage.getItem(`${currentAnime}--saison`)) >= 4) {
      lecteur = 'eps2';
    }
  }

  const [saisonTitle, setSaisonTitle] = useState<React.ReactNode>();
  const [episodeTitle, setEpisodeTitle] = useState<React.ReactNode>();
  const [video, setVideo] = useState<string>('');

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

    if (isIOS()) {
      document.querySelector<HTMLElement>(
        '.hideEpisodesNamesInput'
      )!.style.display = 'none';
    } else {
      toggleHideEpisodesNames();
    }

    setTimeout(() => {
      if (window.scrollY <= 50) {
        window.scrollTo({
          top: 300,
          behavior: 'smooth',
        });
      }
    }, 4000);

    addScript(SCRIPT_URL(scriptIndex, lang), setLoadingText)
      .then(() => {
        LecteurEpisodes = (window as windowKeys)[lecteur];

        setSaisonTitle(
          <>
            <span>
              {saison.name} ({LecteurEpisodes.length})
            </span>{' '}
            {'['}
            <span
              className="langChange"
              onClick={() => {
                const newLang =
                  window.localStorage.getItem(
                    `${currentAnime}--${saison.index}--lang`
                  ) === 'vostfr'
                    ? 'vf'
                    : 'vostfr';

                window.localStorage.setItem(
                  `${currentAnime}--${saison.index}--lang`,
                  newLang
                );
                setLang(newLang);
              }}
            >
              {window.localStorage
                .getItem(`${currentAnime}--${saison.index}--lang`)!
                .toUpperCase()}
            </span>
            {']'}
          </>
        );

        let episodeIndex = allIndex[saison.index ?? 0];
        let episode = window.localStorage.getItem(`${currentAnime}--episode`);

        if (!episode) {
          window.localStorage.setItem(`${currentAnime}--episode`, '1');
          episode = '1';
        }

        const esp = window.localStorage.getItem(
          `${currentAnime}--episodeSpecial`
        );

        const listEpisodes: React.ReactNode[] = [];

        let retard = 0;

        for (
          let indexEpisode = 1;
          indexEpisode < LecteurEpisodes.length + 1;
          indexEpisode++
        ) {
          const isHorsSerie = horsSeries?.find(
            ({ saison }) =>
              saison === window.localStorage.getItem(`${currentAnime}--saison`)
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
              const episodeTitle =
                names?.find(({ index }) => index === String(episodeNumber))
                  ?.name || '';

              const id = `${episodeNumber} ${episodeTitle}`;
              listEpisodes.push(
                <p
                  className="list-episodes"
                  data-id={indexEpisode}
                  id={id}
                  key={id}
                >
                  <span className="episodeNumber">{episodeNumber}</span> :{' '}
                  <div className="episodeName">{episodeTitle}</div>
                </p>
              );
            }
          } else {
            const episodeNumber = episodeIndex + indexEpisode;
            const episodeTitle =
              names?.find(({ index }) => index === String(episodeNumber))
                ?.name ?? '';

            const id = `${episodeNumber} ${episodeTitle}`;

            listEpisodes.push(
              <p
                className="list-episodes"
                data-id={indexEpisode}
                id={id}
                key={id}
              >
                <span className="episodeNumber">{episodeNumber}</span> :{' '}
                <span className="episodeName">{episodeTitle}</span>
              </p>
            );
          }
        }

        setEpisodes(listEpisodes);

        if (episode !== '1' && !esp) {
          const URL_EPISODE = LecteurEpisodes[Number(episode) - 1];

          let retard = 0;

          document.querySelectorAll('.list-episodes').forEach((e, i) => {
            if (i + 1 < Number(episode)) {
              if (e.id.includes('E-SP')) retard++;
            }
          });

          const title =
            names?.find(
              ({ index }) =>
                index === String(episodeIndex + Number(episode) - retard)
            )?.name || '';

          setVideo(URL_EPISODE);

          setEpisodeTitle(
            <>
              <span className="episodeNumber">
                {Number(episodeIndex) + Number(episode) - retard}
              </span>{' '}
              : <span className="episodeName">{title}</span>
            </>
          );

          downloadText(URL_EPISODE, setDownloadText);
        }

        if (episode !== '1' && esp) {
          const URL_EPISODE = LecteurEpisodes[Number(episode) - 1];

          setVideo(URL_EPISODE);

          setEpisodeTitle(<span className="episodeNumber">{esp}</span>);
          downloadText(URL_EPISODE, setDownloadText);
        }

        if (episode === '1') {
          const [firstEpisode] = LecteurEpisodes;

          const title =
            names?.find(
              ({ index }) => index === String(Number(episodeIndex) + 1)
            )?.name || '';

          setVideo(firstEpisode);

          setEpisodeTitle(
            <>
              <span className="episodeNumber">{Number(episodeIndex) + 1}</span>{' '}
              : <span className="episodeName">{title}</span>
            </>
          );

          downloadText(firstEpisode, setDownloadText);
        }

        setLoadingText('');

        setTimeout(() => {
          clickEvents(
            LecteurEpisodes,
            setVideo,
            setEpisodeTitle,
            setDownloadText
          );
        }, 1000);
      })
      .catch(() => {
        window.localStorage.setItem(
          `${currentAnime}--${saison.index}--lang`,
          'vostfr'
        );
        setLoadingText(<span>Chargement des episodes en cours.</span>);
      });
  }, [saison, lang]);

  useEffect(() => {
    const episode =
      window.localStorage.getItem(`${currentAnime}--episode`) ?? '1';

    const NextEpisodeSelector =
      document.querySelector<HTMLElement>('.nextButton')!;

    const PrevEpisodeSelector =
      document.querySelector<HTMLElement>('.prevButton')!;

    if (!episode || episode === '1') PrevEpisodeSelector.style.display = 'none';
    else PrevEpisodeSelector.style.display = '';

    if (Number(episode) === LecteurEpisodes.length)
      NextEpisodeSelector.style.display = 'none';
    else NextEpisodeSelector.style.display = '';
  }, [video]);

  return (
    <div className="container--episodes">
      <Title link="Saisons" />

      <p className="titleSaison">{saisonTitle}</p>
      <p id="note">
        Pour changer de langage cliquez sur la langue entre crochet juste en
        haut et patientez
      </p>

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
        ) : (
          loadingText
        )}
      </div>

      <label className="hideEpisodesNames">
        <p>Cacher le nom des episodes</p>
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
          placeholder="Episode ?"
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
              Number(window.localStorage.getItem(`${currentAnime}--saison`)) -
              1;

            window.localStorage.setItem(
              `${currentAnime}--saison`,
              String(prevSaison)
            );

            window.location.hash = `#S${prevSaison}/Episodes`;

            setSaison({
              name: saisons[prevSaison].name,
              index: String(prevSaison),
            });
          }}
          className="PrevSaison"
        >
          Saison précédente
        </button>

        <button
          onClick={() => {
            const newSaison =
              Number(window.localStorage.getItem(`${currentAnime}--saison`)) +
              1;

            window.localStorage.setItem(
              `${currentAnime}--saison`,
              String(newSaison)
            );

            window.location.hash = `#S${newSaison}/Episodes`;

            setSaison({
              name: saisons[newSaison].name,
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
