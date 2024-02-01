import { useEffect } from 'react';

import './Films.scss';
import './responsive.scss';

import searchImg from '../../assets/Search.svg';

import { isIOS, getURLFilm } from '../../functions/main';
import { addScript, appearVideo, getFilms } from './functions';
import { initSearchBar } from '../../functions/search';
import { windowKeys } from '../interfaces/interface';

const Films = () => {
  useEffect(() => {
    let lastFilm = window.localStorage.getItem('videoId');

    if (!window.localStorage.getItem('lang'))
      window.localStorage.setItem('lang', 'vostfr');

    const langage = window.localStorage.getItem('lang');

    addScript(
      `https://anime-sama.fr/catalogue/one-piece/film/${langage}/episodes.js`
    ).then(() => {
      const blacklist = 'https://video.sibnet.ru/shell.php?videoid=4736710';
      const eps1 = (window as windowKeys)['eps1'];

      if (eps1.includes(blacklist)) eps1.splice(eps1.indexOf(blacklist), 1);

      appearVideo(
        lastFilm
          ? `${getURLFilm(Number(lastFilm))} ${Number(lastFilm)}`
          : `${getURLFilm(0)} 0`,
        false
      );

      let tips: string;

      if (!isIOS()) {
        tips = `Pour télécharger le film, cliquez <span><a target="_blank" href="${getURLFilm(
          0
        )}">ici</a></span>, puis clique droit -> '<span>Enregistrer la vidéo sous'</span>.`;
      } else {
        tips = `Pour télécharger le film, cliquez <span><a target="_blank" href="${getURLFilm(
          0
        )}">ici</a></span> sur <span>SAFARI</span> puis dans le bouton <span>PARTAGER</span> en bas puis <span>'Enregistrer dans fichiers'</span>`;
      }

      document.querySelector('.tips--films')!.innerHTML = tips;

      getFilms();

      const poster = document.getElementsByClassName('poster');

      for (let i = 0; i < poster.length; i++) {
        // eslint-disable-next-line no-loop-func
        poster[i].addEventListener('click', () => {
          appearVideo(poster[i].id, true);

          if (!isIOS()) {
            tips = `Pour télécharger le film, cliquez <span><a target="_blank" href="${getURLFilm(
              i
            )}">ici</a></span>, puis clique droit -> '<span>Enregistrer la vidéo sous'</span>.`;
          } else {
            tips = `Pour télécharger le film, cliquez <span><a target="_blank" href="${getURLFilm(
              i
            )}">ici</a></span> sur <span>SAFARI</span> puis dans le bouton <span>PARTAGER</span> en bas puis <span>'Enregistrer dans fichiers'</span>`;
          }

          document.querySelector('.tips--films')!.innerHTML = tips;
        });
      }

      setTimeout(() => {
        window.scrollTo({ top: 580, behavior: 'smooth' });
      }, 1000);
    });
  }, []);

  return (
    <div className="container--films">
      <div className="title">
        <h1>
          One <span>Piece</span>
        </h1>
      </div>

      <div className="film"></div>
      <div className="video--films"></div>
      <div className="output--films"></div>

      <label className="label--films" title="Systeme de recherche super cool">
        <img src={searchImg} alt="" />
        <input
          type="text"
          placeholder="Red ?"
          onInput={() =>
            initSearchBar(
              document.querySelector('input')!,
              document.getElementsByClassName('container--poster'),
              'films'
            )
          }
        />
      </label>

      <div className="tips--films"></div>
      <div className="films"></div>

      <p className="mark">Les vidéos ne sont pas hébergées sur nos serveurs.</p>
      <footer>© 2022 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </div>
  );
};

export default Films;
