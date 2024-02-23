import './Episodes.scss';
import './responsive.scss';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import React, { RefObject, useEffect, useRef, useState } from 'react';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { addScript, getLecteur, isIOS } from '../../functions/main.ts';
import { ANIMES } from '../../animes/constants.ts';
import { clickEvents, toggleHideEpisodesNames } from './utils';
import { Footer, Title } from '../utils/components.tsx';
import { getAnime } from '../../functions/getAnime.ts';
import { LecteurReturnType } from '../../typings/types.ts';

import ReactPlayer from 'react-player/lazy';
import BaseReactPlayer from 'react-player/base';

import DownloadComponent from '../utils/download-component.tsx';
import SearchBar from '../utils/searchBar.tsx';

let LecteurEpisodes: string[] = [];
let Lecteurs: LecteurReturnType;

export default function Episodes() {
  const currentAnime = getAnime({ wSaison: true });

  const options = ANIMES.find(
    ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
  )!.options;

  const { allIndex, horsSeries, SCRIPT_URL, names, oav } =
    options?.EPISODES_OPTIONS || {};

  const { saisons } = options;

  const [saison, setSaison] = useState({
    name: saisons?.[
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
  }

  if (currentAnime == 'Bleach') {
    if (Number(window.localStorage.getItem(`${currentAnime}--saison`)) > 2) {
      scriptIndex = `2-${
        Number(window.localStorage.getItem(`${currentAnime}--saison`)) - 1
      }`;
    }
  }

  const [saisonTitle, setSaisonTitle] = useState<React.ReactNode>();
  const [episodeTitle, setEpisodeTitle] = useState<React.ReactNode>();
  const [video, setVideo] = useState<string>('');

  const [output, setOutput] = useState<React.ReactNode>('');
  const [episodes, setEpisodes] = useState<React.ReactNode[]>([]);

  const [currentLecteur, setCurrentLecteur] = useState<string | null>(null);
  const [lecteurChange, setLecteurChange] = useState<boolean>(false);

  const videoRef = useRef(null) as RefObject<BaseReactPlayer<any>>;
  const ambianceRef = useRef(null) as RefObject<BaseReactPlayer<any>>;

  useEffect(() => {
    const NextSaisonSelector =
      document.querySelector<HTMLElement>('.NextSaison')!;

    const PrevSaisonSelector =
      document.querySelector<HTMLElement>('.PrevSaison')!;

    const lastSaison = Object.keys(allIndex!)[
      Object.keys(allIndex!).length - 1
    ];

    const firstSaison = Object.keys(allIndex!)[0];

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

    const saisonsEntries = Object.keys(saisons!);
    const saisonsValues = Object.values(saisons!);

    const oavIndex = saisonsValues.findIndex(({ name }) => name === 'OAV');

    const isOAV = saison.index === saisonsEntries[oavIndex] && oav;

    if (saison.index > saisonsEntries[oavIndex]) {
      const newIndexSaison = String(Number(saison.index) - 1);

      window.localStorage.setItem(`${currentAnime}--saison`, newIndexSaison);
      saison.index = newIndexSaison;
    }

    addScript({
      url:
        currentAnime === 'one piece'
          ? SCRIPT_URL!({
              index: scriptIndex,
              lang,
              maxEpisode: names![names!.length - 1]!.index,
            })
          : oav
          ? isOAV
            ? SCRIPT_URL!({ index: scriptIndex, lang }).replace(
                /saison\d+(-\d+)?/g,
                'oav'
              )
            : SCRIPT_URL!({ index: scriptIndex, lang })
          : SCRIPT_URL!({ index: scriptIndex, lang }),

      currentAnime: currentAnime!,
      saisonIndex: saison.index,

      setLang,
    })
      .then(async () => {
        Lecteurs = getLecteur();

        if (currentLecteur) {
          LecteurEpisodes =
            Lecteurs[currentLecteur as 'epsAS' | 'eps1' | 'eps2']!;
        } else {
          if (Lecteurs.epsAS) {
            setCurrentLecteur('epsAS');
            LecteurEpisodes = Lecteurs.epsAS;
          } else {
            const lecteur = Object.keys(Lecteurs)[0] as
              | 'eps1'
              | 'eps2'
              | 'epsAS';

            setCurrentLecteur(lecteur);

            LecteurEpisodes = Lecteurs[lecteur]!;
          }
        }

        setSaisonTitle(
          <>
            <span>
              {saison.name} ({LecteurEpisodes.length})
            </span>{' '}
            {'['}
            <span style={{ color: 'white' }}>
              {window.localStorage
                .getItem(`${currentAnime}--${saison.index}--lang`)!
                .toUpperCase()}
            </span>
            {']'}
          </>
        );

        const episodeIndex = allIndex![saison.index ?? 0];
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
    currentAnime,
    horsSeries,
    allIndex,
    lecteurChange,
    options.note,
    saisons,
    saison,
    names,
    lang,
    oav,
    scriptIndex,
    SCRIPT_URL,
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

      {disclamerMessage.current ? (
        <p
          className="disclamer"
          dangerouslySetInnerHTML={{ __html: disclamerMessage.current }}
        ></p>
      ) : null}

      <p className="episodeTitle">{episodeTitle}</p>

      <Menu menuButton={<MenuButton>Changer de langue</MenuButton>} transition>
        <MenuItem
          onClick={({ value }) => {
            window.localStorage.setItem(
              `${currentAnime}--${saison.index}--lang`,
              value
            );

            setLang(value);
          }}
          value="vostfr"
          disabled={
            window.localStorage.getItem(
              `${currentAnime}--${saison.index}--lang`
            ) === 'vostfr'
              ? true
              : false
          }
        >
          VOSTFR
        </MenuItem>

        <MenuItem
          onClick={({ value }) => {
            window.localStorage.setItem(
              `${currentAnime}--${saison.index}--lang`,
              value
            );

            setLang(value);
          }}
          value="vf"
          disabled={
            window.localStorage.getItem(
              `${currentAnime}--${saison.index}--lang`
            ) === 'vostfr'
              ? false
              : true
          }
        >
          VF
        </MenuItem>
      </Menu>

      {Lecteurs ? (
        Object.keys(Lecteurs).length > 1 ? (
          <select
            onChange={({ target: { value } }) => {
              setCurrentLecteur(value);
              setLecteurChange(!lecteurChange);
            }}
          >
            {Object.keys(Lecteurs).map((l, i) => (
              <option value={l} key={i}>
                Lecteur {i + 1}
              </option>
            ))}
          </select>
        ) : null
      ) : null}

      <div className="videoContainer">
        {currentLecteur === 'epsAS' ? (
          <>
            <div className="vid">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                ref={videoRef}
                url={video}
                playing={true}
                onStart={() => {
                  const savedSeconds = window.localStorage.getItem(
                    `${currentAnime}--currentTime`
                  );

                  if (savedSeconds) {
                    videoRef.current?.seekTo(Number(savedSeconds), 'seconds');
                  }
                }}
                onProgress={({ playedSeconds }) => {
                  setTimeout(() => {
                    window.localStorage.setItem(
                      `${currentAnime}--currentTime`,
                      String(playedSeconds)
                    );

                    ambianceRef.current?.seekTo(playedSeconds, 'seconds');
                  }, 1000);
                }}
              />
            </div>
            <div className="ambiance">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                muted
                loop={true}
                ref={ambianceRef}
                url={video}
              />
            </div>
          </>
        ) : (
          <>
            <iframe
              width="640"
              height="360"
              src={video}
              allowFullScreen
            ></iframe>
            <iframe className="ambiance" height="360" src={video}></iframe>
          </>
        )}
      </div>

      <div className="container--buttons">
        <div className="buttons">
          <button className="prevButton">Épisode précedent</button>
          <button className="nextButton">Épisode suivant</button>
        </div>
      </div>

      <DownloadComponent
        video={video}
        lecteur={currentLecteur!}
        className="download"
      />

      <SearchBar
        component="episodes"
        container="list-episodes"
        setOutput={setOutput}
      />

      <div className="search--output--episodes">{output}</div>

      <label className="hideEpisodesNames">
        <p>Cacher le nom des episodes</p>
        <input type="checkbox"></input>
        <span></span>
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

            window.localStorage.setItem(`${currentAnime}--episode`, '1');

            window.location.hash = `#S${prevSaison}/Episodes?anime=${encodeURI(
              currentAnime!
            )}`;

            setSaison({
              name: saisons?.[prevSaison].name,
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
              name: saisons?.[newSaison].name,
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
