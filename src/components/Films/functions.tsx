import React from 'react';

import { ANIMES } from '../../animes/constants';
import { getAnime } from '../../functions/getAnime';
import { LecteurReturnType } from '../../typings/types';
import { getLecteur } from '../../functions/main';

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
  setCurrentLecteur: React.Dispatch<React.SetStateAction<string | null>>,
  currentLecteur: string | null
) {
  let LecteursFilms: string[] = [];
  let Lecteurs: LecteurReturnType;

  const currentAnime = getAnime({ wSaison: false });

  const { names } =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
    )!.options.FILM_OPTIONS || {};

  const filmsNodes: React.ReactNode[] = [];

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

  for (let i = 0; i < Object.keys(names!).length; i++) {
    const url = LecteursFilms[i];
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
