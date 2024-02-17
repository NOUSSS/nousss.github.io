import './Episodes.scss';
import './responsive.scss';

import React, { useEffect, useRef, useState } from 'react';
import { addScript, isIOS } from '../../functions/main.ts';
import { initSearchBar } from '../../functions/search.tsx';
import { ANIMES } from '../constants';
import { windowKeys } from '../../typings/types.ts';
import { clickEvents, toggleHideEpisodesNames } from './utils';
import { Footer, Title } from '../components.tsx';

import searchImg from '../../assets/Search.jpg';
import DownloadComponent from '../download-component.tsx';

let LecteurEpisodes: string[] = [];

export default function Episodes() {
  let currentAnime = window.localStorage.getItem('anime');

  const hash = window.location.hash;
  const queryParams = hash.substring(hash.indexOf('?') + 1);

  const urlParams = new URLSearchParams(queryParams);

  const currentAnimeURL = urlParams.get('anime');

  if (!currentAnimeURL) window.location.hash = '/';

  if (!currentAnime) {
    window.localStorage.setItem('anime', currentAnimeURL!);
    currentAnime = window.localStorage.getItem('anime');

    window.localStorage.setItem(
      `${currentAnime}--saison`,
      window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
    );
  }

  if (currentAnime && !window.localStorage.getItem(`${currentAnime}--saison`)) {
    window.localStorage.setItem(
      `${currentAnime}--saison`,
      window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
    );
  }

  if (
    currentAnimeURL &&
    currentAnimeURL.toLowerCase() !== currentAnime!.toLowerCase()
  ) {
    currentAnime = currentAnimeURL;

    window.localStorage.setItem('anime', currentAnimeURL);
  }

  const options = ANIMES.find(({ anime }) => anime === currentAnime)!.options;
  const opts = options.EPISODES_OPTIONS;

  const { allIndex, horsSeries, SCRIPT_URL, names, oav } = opts;
  const { saisons } = options;

  let { lecteur } = opts;

  const [saison, setSaison] = useState({
    name: saisons[
      Number(window.localStorage.getItem(`${currentAnime}--saison`)) ?? 1
    ].name,
    index: window.localStorage.getItem(`${currentAnime}--saison`)!,
  });

  const disclamerMessage = useRef('');

  if (!window.localStorage.getItem(`${currentAnime}--${saison.index}--lang`))
    window.localStorage.setItem(
      `${currentAnime}--${saison.index}--lang`,
      'vostfr'
    );

  const [lang, setLang] = useState<string>(
    window.localStorage.getItem(`${currentAnime}--${saison.index}--lang`)!
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

  if (currentAnime == 'Bleach') {
    if (Number(window.localStorage.getItem(`${currentAnime}--saison`)) > 2) {
      scriptIndex = `2-${
        Number(window.localStorage.getItem(`${currentAnime}--saison`)) - 1
      }`;
    }
    if (Number(window.localStorage.getItem(`${currentAnime}--saison`)) === 2) {
      lecteur = 'eps2';
    }
  }

  const [saisonTitle, setSaisonTitle] = useState<React.ReactNode>();
  const [episodeTitle, setEpisodeTitle] = useState<React.ReactNode>();
  const [video, setVideo] = useState<string>('');

  const [output, setOutput] = useState<React.ReactNode>('');

  const [episodes, setEpisodes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const NextSaisonSelector =
      document.querySelector<HTMLElement>('.NextSaison')!;

    const PrevSaisonSelector =
      document.querySelector<HTMLElement>('.PrevSaison')!;

    const lastSaison = Object.keys(allIndex)[Object.keys(allIndex).length - 1];
    const firstSaison = Object.keys(allIndex)[0];

    if (saison.index === firstSaison)
      PrevSaisonSelector.classList.add('invisible');
    else PrevSaisonSelector.classList.remove('invisible');

    if (saison.index === lastSaison)
      NextSaisonSelector.classList.add('invisible');
    else NextSaisonSelector.classList.remove('invisible');

    if (isIOS()) {
      if (document.querySelector<HTMLElement>('.hideEpisodesNamesInput')) {
        document
          .querySelector<HTMLElement>('.hideEpisodesNamesInput')!
          .classList.add('invisible');
      }
    } else toggleHideEpisodesNames();

    const isOAV = Number(saison.index) === Object.keys(saisons).length && oav;

    addScript({
      url:
        currentAnime === 'one piece'
          ? SCRIPT_URL({
              index: scriptIndex,
              lang,
              maxEpisode: names![names!.length - 1]!.index,
            })
          : oav
          ? isOAV
            ? SCRIPT_URL({ index: scriptIndex, lang }).replace(
                /saison\d+(-\d+)?/g,
                'oav'
              )
            : SCRIPT_URL({ index: scriptIndex, lang })
          : SCRIPT_URL({ index: scriptIndex, lang }),

      currentAnime: currentAnime!,
      saisonIndex: saison.index,

      setLang,
    })
      .then(async () => {
        LecteurEpisodes = (window as unknown as windowKeys)[lecteur];

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

        const episodeIndex = allIndex[saison.index ?? 0];
        let episode = window.localStorage.getItem(`${currentAnime}--episode`);

        if (!episode) {
          window.localStorage.setItem(`${currentAnime}--episode`, '1');

          episode = '1';
        }

        const e_sp = window.localStorage.getItem(`${currentAnime}--e-sp`);
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
                names?.find(
                  ({ index }: { index: string }) =>
                    index === String(episodeNumber)
                )?.name || '';

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

        if (episode !== '1' && !e_sp) {
          await new Promise((res) => setTimeout(res, 50, true));

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
        }

        if (episode !== '1' && e_sp) {
          const URL_EPISODE = LecteurEpisodes[Number(episode) - 1];

          setVideo(URL_EPISODE);
          setEpisodeTitle(<span className="episodeNumber">{e_sp}</span>);
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
        }

        setTimeout(() => {
          clickEvents(LecteurEpisodes, setVideo, setEpisodeTitle);
        }, 1000);
      })
      .catch(() => {
        window.localStorage.setItem(
          `${currentAnime}--${saison.index}--lang`,
          'vostfr'
        );
      });

    if (options.note) {
      if (typeof options.note === 'string') {
        disclamerMessage.current = options.note;
      } else {
        if (options.note.find((obj) => obj.saison === saison.index)) {
          disclamerMessage!.current = options.note.find(
            (obj) => obj.saison === saison.index
          )!.message;
        } else {
          disclamerMessage!.current = '';
        }
      }
    }
  }, [
    saison,
    lang,
    names,
    SCRIPT_URL,
    allIndex,
    currentAnime,
    horsSeries,
    lecteur,
    scriptIndex,
    options.note,
  ]);

  useEffect(() => {
    const episode =
      window.localStorage.getItem(`${currentAnime}--episode`) ?? '1';

    const NextEpisodeSelector =
      document.querySelector<HTMLElement>('.nextButton')!;

    const PrevEpisodeSelector =
      document.querySelector<HTMLElement>('.prevButton')!;

    if (!episode || episode === '1')
      PrevEpisodeSelector.classList.add('invisible');
    else PrevEpisodeSelector.classList.remove('invisible');

    if (Number(episode) === LecteurEpisodes.length)
      NextEpisodeSelector.classList.add('invisible');
    else NextEpisodeSelector.classList.remove('invisible');
  }, [video, currentAnime]);

  return (
    <div className="container--episodes">
      <Title
        link={
          currentAnime ? `Saisons?anime=${encodeURI(currentAnime)}` : 'Saisons'
        }
      />

      <p className="titleSaison">{saisonTitle}</p>
      <p id="note">
        Pour changer de langage cliquez sur la langue entre crochet juste en
        haut et patientez, si la VOSTFR persiste, c'est que la VF n'est pas
        disponible
      </p>

      {disclamerMessage.current ? (
        <p
          className="disclamer"
          dangerouslySetInnerHTML={{ __html: disclamerMessage.current }}
        ></p>
      ) : null}

      <p className="episodeTitle">{episodeTitle}</p>

      <div className="episodeVideo">
        {
          <iframe
            className="vid"
            width="640"
            height="360"
            src={video}
            allowFullScreen
          ></iframe>
        }
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

      <DownloadComponent video={video} lecteur={lecteur} className="download" />

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
              document.getElementsByClassName(
                'list-episodes'
              ) as HTMLCollectionOf<HTMLElement>,
              'episodes',
              setOutput
            )
          }
        />
      </label>

      <div className="search--output--episodes">{output}</div>

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

            window.localStorage.setItem(`${currentAnime}--episode`, '1');

            window.location.hash = `#S${prevSaison}/Episodes?anime=${encodeURI(
              currentAnime!
            )}`;

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

            window.localStorage.setItem(`${currentAnime}--episode`, '1');

            window.location.hash = `#S${newSaison}/Episodes?anime=${encodeURI(
              currentAnime!
            )}`;

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
