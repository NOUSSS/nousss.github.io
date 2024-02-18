import React from 'react';
import { getURLFilm } from '../../functions/main';
import { ANIMES } from '../constants';
import { getAnime } from '../../functions/getAnime';

export async function appearVideo(
  id: string,

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>
) {
  const currentAnime = getAnime({ wSaison: false });

  const { names } =
    ANIMES.find(({ anime }) => anime === currentAnime)!.options.FILM_OPTIONS ||
    {};

  const lang = window.localStorage.getItem(`${currentAnime}--lang`);

  window.scrollTo({
    top: document.querySelector('iframe')?.offsetTop,
    behavior: 'smooth',
  });

  const [url, index] = id.split(' ');

  window.localStorage.setItem(`${currentAnime}--currentFilm`, index);

  if (lang === 'vostfr') {
    setTitle(
      <>
        <span>{names![index].name}</span> [
        <span id="vf" className="langage">
          VOSTFR
        </span>
        ]
      </>
    );
  } else if (lang === 'vf') {
    setTitle(
      <>
        <span>{names![index].name}</span> [
        <span id="vostfr" className="langage">
          VF
        </span>
        ]
      </>
    );
  }

  setVideo(url);

  return url;
}

export function changeLangage(
  lang: string,
  setLang: React.Dispatch<React.SetStateAction<string>>
): void {
  const currentAnime = getAnime({ wSaison: false });

  window.localStorage.setItem(`${currentAnime}--lang`, lang);
  setLang(lang);
}

export function getFilms(
  setFilmsFront: React.Dispatch<
    React.SetStateAction<React.ReactNode[] | undefined>
  >,
  lecteur: string
) {
  const currentAnime = getAnime({ wSaison: false });

  const { names } =
    ANIMES.find(({ anime }) => anime === currentAnime)!.options.FILM_OPTIONS ||
    {};

  const filmsNodes: React.ReactNode[] = [];

  for (let i = 0; i < Object.keys(names!).length; i++) {
    const url = getURLFilm(i, lecteur);
    const id = `${names![i].name}|${names![i].aliases?.join(', ')}`;

    filmsNodes.push(
      <div id={id} key={id} className="container--poster">
        <img className="poster" src={names![i].image()} id={`${url} ${i}`} />
        <p className="text--films">{names![i].name}</p>
      </div>
    );
  }

  setFilmsFront(filmsNodes);
}
