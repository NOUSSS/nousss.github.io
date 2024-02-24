import React, { useEffect, useRef, useState } from 'react';

import './Films.scss';
import './responsive.scss';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { getLecteur } from '../../functions/main.ts';
import { addScript } from '../../functions/main.ts';
import { appearVideo, getFilms } from './functions.tsx';
import { Footer, Title } from '../utils/components.tsx';
import { ANIMES } from '../../animes/constants.ts';
import { getAnime } from '../../functions/getAnime.ts';
import { LecteurReturnType } from '../../typings/types.ts';

import DownloadComponent from '../utils/download-component.tsx';
import SearchBar from '../utils/searchBar.tsx';
import BaseReactPlayer from 'react-player/base';
import ReactPlayer from 'react-player';

let LecteursFilms: string[] = [];
let Lecteurs: LecteurReturnType;

const Films = () => {
  const currentAnime = getAnime({ wSaison: false });

  const options = ANIMES.find(
    ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
  )!.options.FILM_OPTIONS;

  if (!options) window.location.hash = `/home?anime=${encodeURI(currentAnime)}`;

  const { BLACKLIST_URL, SCRIPT_URL } = options || {};

  const [films, setFilmsFront] = useState<React.ReactNode[]>();
  const [title, setTitle] = useState<React.ReactNode>();

  const [video, setVideo] = useState<string>('');
  const [lang, setLang] = useState<string>(
    window.localStorage.getItem(`${currentAnime}--lang`) ?? 'vostfr'
  );

  const [currentLecteur, setCurrentLecteur] = useState<string | null>(null);
  const [lecteurChange, setLecteurChange] = useState<boolean>(false);

  const videoRef = useRef<BaseReactPlayer<any>>(null);
  const ambianceRef = useRef<BaseReactPlayer<any>>(null);

  const [output, setOutput] = useState<React.ReactNode>('');
  const lecteurString = useRef<'' | 'eps1' | 'eps2'>('');

  useEffect(() => {
    const lastFilm = window.localStorage.getItem(
      `${currentAnime}--currentFilm`
    );

    if (!window.localStorage.getItem(`${currentAnime}--lang`))
      window.localStorage.setItem(`${currentAnime}--lang`, 'vostfr');

    addScript({
      url: SCRIPT_URL!(lang),
      currentAnime: currentAnime!,
      setLang,
    }).then(() => {
      Lecteurs = getLecteur();

      if (currentLecteur) {
        LecteursFilms = Lecteurs[currentLecteur as 'epsAS' | 'eps1' | 'eps2']!;
      } else {
        if (Lecteurs.epsAS) {
          setCurrentLecteur('epsAS');
          LecteursFilms = Lecteurs.epsAS;
        } else {
          const lecteur = Object.keys(Lecteurs)[0] as 'eps1' | 'eps2' | 'epsAS';

          setCurrentLecteur(lecteur);

          LecteursFilms = Lecteurs[lecteur]!;
        }
      }

      lecteurString.current = 'eps1';

      const films_url = Lecteurs[lecteurString.current]!;

      if (BLACKLIST_URL) {
        for (const BLACKLIST of BLACKLIST_URL) {
          if (films_url.includes(BLACKLIST))
            films_url.splice(films_url.indexOf(BLACKLIST), 1);
        }
      }

      appearVideo(
        lastFilm
          ? `${LecteursFilms[Number(lastFilm)]} ${Number(lastFilm)}`
          : `${LecteursFilms[0]} ${
              window.localStorage.getItem(`${currentAnime}--currentFilm`) ?? '0'
            }`,
        setVideo,
        setTitle
      );

      getFilms(setFilmsFront, setCurrentLecteur, currentLecteur);
    });
  }, [lang, BLACKLIST_URL, SCRIPT_URL, currentAnime, lecteurChange]);

  setTimeout(() => {
    const poster = document.querySelectorAll('.poster');

    Array.from([...poster]).map((_, i) => {
      poster[i].addEventListener('click', () => {
        appearVideo(poster[i].id, setVideo, setTitle);
      });
    });
  }, 1000);

  return (
    <div className="container--films">
      <Title link={`Home?anime=${encodeURI(currentAnime)}`} />

      <div className="film">{title}</div>

      <Menu menuButton={<MenuButton>Changer de langue</MenuButton>} transition>
        <MenuItem
          onClick={({ value }) => {
            window.localStorage.setItem(`${currentAnime}--lang`, value);

            setLang(value);
          }}
          value="vostfr"
          disabled={
            window.localStorage.getItem(`${currentAnime}--lang`) === 'vostfr'
              ? true
              : false
          }
        >
          VOSTFR
        </MenuItem>

        <MenuItem
          onClick={({ value }) => {
            window.localStorage.setItem(`${currentAnime}--lang`, value);

            setLang(value);
          }}
          value="vf"
          disabled={
            window.localStorage.getItem(`${currentAnime}--lang`) === 'vostfr'
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

      <div className="video--films">
        {currentLecteur === 'epsAS' ? (
          <>
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
              progressInterval={100}
              onProgress={({ playedSeconds }) => {
                if (playedSeconds !== 0) {
                  window.localStorage.setItem(
                    `${currentAnime}--currentTime`,
                    String(playedSeconds)
                  );

                  ambianceRef.current?.seekTo(playedSeconds, 'seconds');
                }
              }}
            />
            <div className="ambiance">
              <ReactPlayer
                width="100%"
                height="100%"
                playing={false}
                muted={true}
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

      <SearchBar
        component="films"
        container="container--poster"
        setOutput={setOutput}
      />

      <div className="search--output--films">{output}</div>

      <DownloadComponent
        lecteur={'eps1'}
        video={video}
        className="tips--films"
      />

      <div className="films">{films}</div>

      <Footer media />
    </div>
  );
};

export default Films;
