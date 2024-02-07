import React from 'react';
import { getURLFilm, isIOS } from '../../functions/main';
import { ANIMES_OPTIONS } from '../constants';

export async function appearVideo(
  id: string,

  setTips: React.Dispatch<React.SetStateAction<React.ReactNode>>,
  setVideo: React.Dispatch<React.SetStateAction<React.ReactNode>>,
  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,

  lecteur: string
) {
  const currentAnime = window.localStorage.getItem('anime');

  const { names } = ANIMES_OPTIONS.find(({ anime }) => anime === currentAnime)!
    .options.FILM_OPTIONS;

  const lang = window.localStorage.getItem(`${currentAnime}--lang`);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  const [url, index] = id.split(' ');

  window.localStorage.setItem(`${currentAnime}--currentFilm`, index);

  document.querySelector(
    'title'
  )!.textContent = `${names[index].name} - Mugiwara-no Streaming`;

  if (lang === 'vostfr') {
    setTitle(
      <>
        <span>{names[index].name}</span> [
        <span id="vf" className="langage">
          VOSTFR
        </span>
        ]
      </>
    );
  } else if (lang === 'vf') {
    setTitle(
      <>
        <span>{names[index].name}</span> [
        <span id="vostfr" className="langage">
          VF
        </span>
        ]
      </>
    );
  }

  setVideo(
    <iframe
      className="iframeFilm"
      width="640"
      height="360"
      src={url}
      allowFullScreen
    ></iframe>
  );

  if (!isIOS()) {
    setTips(
      <>
        Pour télécharger le film, cliquez{' '}
        <span>
          <a target="_blank" href={getURLFilm(Number(index), lecteur)}>
            ici
          </a>
        </span>
        , puis clique droit -{'>'} '<span>Enregistrer la vidéo sous'</span>.
      </>
    );
  } else {
    setTips(
      <>
        Pour télécharger le film, cliquez{' '}
        <span>
          <a target="_blank" href={getURLFilm(Number(index), lecteur)}>
            ici
          </a>
        </span>{' '}
        sur <span>SAFARI</span> puis dans le bouton <span>PARTAGER</span> en bas
        puis <span>'Enregistrer dans fichiers'</span>
      </>
    );
  }

  return url;
}

export function changeLangage(lang: string, setLang: any): void {
  const currentAnime = window.localStorage.getItem('anime');

  window.localStorage.setItem(`${currentAnime}--lang`, lang);
  setLang(lang);
}

export function getFilms(setFilmsFront: any, lecteur: string) {
  const currentAnime = window.localStorage.getItem('anime');
  const { names } = ANIMES_OPTIONS.find(({ anime }) => anime === currentAnime)!
    .options.FILM_OPTIONS;

  const filmsNodes: React.ReactNode[] = [];

  for (let i = 0; i < Object.keys(names).length; i++) {
    const url = getURLFilm(i, lecteur);
    const id = `${names[i].name}|${names[i].aliases?.join(', ')}`;

    filmsNodes.push(
      <div id={id} key={id} className="container--poster">
        <img className="poster" src={names[i].image()} id={`${url} ${i}`} />
        <p className="text--films">{names[i].name}</p>
      </div>
    );
  }

  setFilmsFront(filmsNodes);
}
