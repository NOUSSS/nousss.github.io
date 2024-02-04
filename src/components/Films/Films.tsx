import React, { useEffect, useState } from 'react';

import './Films.scss';
import './responsive.scss';

import searchImg from '../../assets/Search.svg';

import { getURLFilm } from '../../functions/main';
import {
  addScript,
  appearVideo,
  changeLangage,
  getFilms,
} from './functions.tsx';
import { initSearchBar } from '../../functions/search';
import { windowKeys } from '../interfaces/interface';
import { Footer, Title } from '../components';
import { FILM_OPTIONS } from '../constants.ts';

const { BLACKLIST_URL, SCRIPT_URL } = FILM_OPTIONS;

const Films = () => {
  const [films, setFilmsFront] = useState<React.ReactNode[]>();
  const [tips, setTips] = useState<React.ReactNode>();
  const [video, setVideo] = useState<React.ReactNode>();
  const [title, setTitle] = useState<React.ReactNode>();

  const [lang, setLang] = useState<string>(
    window.localStorage.getItem('lang') ?? 'vostfr'
  );

  const [output, setOutput] = useState<React.ReactNode>('');

  useEffect(() => {
    const lastFilm = window.localStorage.getItem('currentFilm');

    if (!window.localStorage.getItem('lang'))
      window.localStorage.setItem('lang', 'vostfr');

    addScript(SCRIPT_URL(lang)).then(() => {
      const eps1 = (window as windowKeys)['eps1'];

      if (eps1.includes(BLACKLIST_URL))
        eps1.splice(eps1.indexOf(BLACKLIST_URL), 1);

      appearVideo(
        lastFilm
          ? `${getURLFilm(Number(lastFilm))} ${Number(lastFilm)}`
          : `${getURLFilm(0)} ${
              window.localStorage.getItem('currentFilm') ?? '0'
            }`,
        setTips,
        setVideo,
        setTitle
      );

      getFilms(setFilmsFront);

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
        appearVideo(poster[i].id, setTips, setVideo, setTitle);
      });
    });
  }, 1000);

  return (
    <div className="container--films">
      <Title />

      <div className="film">{title}</div>

      <div className="video--films">{video}</div>
      <div className="search--output--films">{output}</div>

      <label className="label--films" title="Systeme de recherche super cool">
        <img src={searchImg} alt="" />
        <input
          type="text"
          placeholder="Red ?"
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
