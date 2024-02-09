import React, { useEffect, useState } from 'react';

import './Films.scss';
import './responsive.scss';

import searchImg from '../../assets/Search.svg';

import { getURLFilm } from '../../functions/main.ts';
import { addScript } from '../../functions/main.ts';
import { appearVideo, changeLangage, getFilms } from './functions.tsx';
import { initSearchBar } from '../../functions/search.tsx';
import { windowKeys } from '../../interfaces/interface.ts';
import { Footer, Title } from '../components.tsx';
import { ANIMES_OPTIONS } from '../constants.ts';

const Films = () => {
  const currentAnime = window.localStorage.getItem('anime')!;

  const { BLACKLIST_URL, SCRIPT_URL, lecteur } = ANIMES_OPTIONS.find(
    ({ anime }) => anime === currentAnime
  )!.options.FILM_OPTIONS;

  let lecteurString: string;

  const [films, setFilmsFront] = useState<React.ReactNode[]>();
  const [tips, setTips] = useState<React.ReactNode>();
  const [video, setVideo] = useState<React.ReactNode>();
  const [title, setTitle] = useState<React.ReactNode>();
  const [loading, setLoading] = useState<React.ReactNode>(
    <span>Veuillez patientez...</span>
  );

  const [lang, setLang] = useState<string>(
    window.localStorage.getItem(`${currentAnime}--lang`) ?? 'vostfr'
  );

  const [output, setOutput] = useState<React.ReactNode>('');

  useEffect(() => {
    const lastFilm = window.localStorage.getItem(
      `${currentAnime}--currentFilm`
    );

    if (!window.localStorage.getItem(`${currentAnime}--lang`))
      window.localStorage.setItem(`${currentAnime}--lang`, 'vostfr');

    addScript(SCRIPT_URL!(lang), setLoading).then(() => {
      lecteurString = lecteur ? lecteur : 'eps1';
      const films_url = (window as windowKeys)[lecteurString];

      if (BLACKLIST_URL) {
        for (const BLACKLIST of BLACKLIST_URL) {
          if (films_url.includes(BLACKLIST))
            films_url.splice(films_url.indexOf(BLACKLIST), 1);
        }
      }

      appearVideo(
        lastFilm
          ? `${getURLFilm(Number(lastFilm), lecteurString)} ${Number(lastFilm)}`
          : `${getURLFilm(0, lecteurString)} ${
              window.localStorage.getItem(`${currentAnime}--currentFilm`) ?? '0'
            }`,
        setTips,
        setVideo,
        setTitle,
        lecteurString
      );

      getFilms(setFilmsFront, lecteurString);

      setLoading('');

      setTimeout(() => {
        const langButton = document.querySelectorAll('.langage');

        Array.from([...langButton]).map((_, i) => {
          langButton[i].addEventListener('click', () => {
            changeLangage(langButton[i].id, setLang);
          });
        });
      }, 1000);
    });
  }, [lang]);

  setTimeout(() => {
    const poster = document.querySelectorAll('.poster');

    Array.from([...poster]).map((_, i) => {
      poster[i].addEventListener('click', () => {
        appearVideo(poster[i].id, setTips, setVideo, setTitle, lecteurString);
      });
    });
  }, 1000);

  return (
    <div className="container--films">
      <Title link="Home" />

      <div className="film">{title}</div>
      <p id="note">
        Pour changer de langage cliquez sur la langue entre crochet et patientez
        juste en haut
      </p>
      <p className="loading">{loading}</p>

      <div className="video--films">{video}</div>
      <div className="search--output--films">{output}</div>

      <label className="label--films" title="Systeme de recherche super cool">
        <img src={searchImg} alt="" />
        <input
          type="text"
          placeholder="Le film ?"
          onInput={() =>
            initSearchBar(
              document.querySelector('input')!,
              document.getElementsByClassName('container--poster'),
              'films',
              setOutput
            )
          }
        />
      </label>

      <div className="tips--films">{tips}</div>
      <div className="films">{films}</div>

      <Footer media />
    </div>
  );
};

export default Films;
