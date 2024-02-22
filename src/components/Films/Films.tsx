import React, { useEffect, useRef, useState } from 'react';

import './Films.scss';
import './responsive.scss';

import searchImg from '../../assets/Search.svg';

import { getLecteur, getURLFilm } from '../../functions/main.ts';
import { addScript } from '../../functions/main.ts';
import { appearVideo, changeLangage, getFilms } from './functions.tsx';
import { initSearchBar } from '../../functions/search.tsx';
import { Footer, Title } from '../components.tsx';
import { ANIMES } from '../constants.ts';
import { getAnime } from '../../functions/getAnime.ts';

import DownloadComponent from '../download-component.tsx';

const Films = () => {
  const currentAnime = getAnime({ wSaison: false });

  const options = ANIMES.find(
    ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
  )!.options.FILM_OPTIONS;

  if (!options) window.location.hash = '/home';

  const { BLACKLIST_URL, SCRIPT_URL } = options || {};

  const [films, setFilmsFront] = useState<React.ReactNode[]>();
  const [title, setTitle] = useState<React.ReactNode>();

  const [video, setVideo] = useState<string>('');
  const [lang, setLang] = useState<string>(
    window.localStorage.getItem(`${currentAnime}--lang`) ?? 'vostfr'
  );

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
      const lecteurs = getLecteur();

      lecteurString.current = 'eps1';

      const films_url = lecteurs[lecteurString.current]!;

      if (BLACKLIST_URL) {
        for (const BLACKLIST of BLACKLIST_URL) {
          if (films_url.includes(BLACKLIST))
            films_url.splice(films_url.indexOf(BLACKLIST), 1);
        }
      }

      appearVideo(
        lastFilm
          ? `${getURLFilm(Number(lastFilm), lecteurString.current)} ${Number(
              lastFilm
            )}`
          : `${getURLFilm(0, lecteurString.current)} ${
              window.localStorage.getItem(`${currentAnime}--currentFilm`) ?? '0'
            }`,
        setVideo,
        setTitle
      );

      getFilms(setFilmsFront, lecteurString.current);

      setTimeout(() => {
        const langButton = document.querySelectorAll('.langage');

        Array.from([...langButton]).map((_, i) => {
          langButton[i].addEventListener('click', () => {
            changeLangage(langButton[i].id, setLang);
          });
        });
      }, 1000);
    });
  }, [lang, BLACKLIST_URL, SCRIPT_URL, currentAnime]);

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
      <Title link="Home" />

      <div className="film">{title}</div>

      <div className="video--films">
        <iframe
          className="iframeFilm"
          width="640"
          height="360"
          src={video}
          allowFullScreen
        ></iframe>
      </div>

      <label className="label--films" title="Systeme de recherche super cool">
        <img src={searchImg} alt="" />
        <input
          type="text"
          placeholder="Le film ?"
          onInput={() =>
            initSearchBar(
              document.querySelector('input')!,
              document.getElementsByClassName(
                'container--poster'
              ) as HTMLCollectionOf<HTMLElement>,
              'films',
              setOutput
            )
          }
        />
      </label>

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
