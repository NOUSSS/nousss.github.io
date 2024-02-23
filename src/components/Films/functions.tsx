import React from 'react';
import { getURLFilm } from '../../functions/main';
import { ANIMES } from '../../animes/constants';
import { getAnime } from '../../functions/getAnime';

export async function appearVideo(
  id: string,

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>
) {
  const currentAnime = getAnime({ wSaison: false });

  const { names } =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
    )!.options.FILM_OPTIONS || {};

  const lang = window.localStorage.getItem(`${currentAnime}--lang`);

  window.scrollTo({
    top:
      document.querySelector('iframe')?.offsetTop ||
      (document.querySelector('.vid') as HTMLElement)?.offsetTop,
    behavior: 'smooth',
  });

  const [url, index] = id.split(' ');

  window.localStorage.setItem(`${currentAnime}--currentFilm`, index);

  if (lang === 'vostfr') {
    setTitle(
      <>
        <span>{names![index].name}</span> [
        <span style={{ color: 'white' }}>VOSTFR</span>]
      </>
    );
  } else if (lang === 'vf') {
    setTitle(
      <>
        <span>{names![index].name}</span> [
        <span style={{ color: 'white' }}>VF</span>]
      </>
    );
  }

  setVideo(url);

  return url;
}

export function getFilms(
  setFilmsFront: React.Dispatch<
    React.SetStateAction<React.ReactNode[] | undefined>
  >,
  lecteur: string
) {
  const currentAnime = getAnime({ wSaison: false });

  const { names } =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
    )!.options.FILM_OPTIONS || {};

  const filmsNodes: React.ReactNode[] = [];

  for (let i = 0; i < Object.keys(names!).length; i++) {
    const url = getURLFilm(i, lecteur as 'eps1' | 'eps2');
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
