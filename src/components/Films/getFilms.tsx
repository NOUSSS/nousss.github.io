import { ANIMES } from '../../animes/constants';

import { getCurrentAnime } from '../../functions/getCurrentAnime';
import { getLecteur } from '../../functions/getLecteur';
import { appearVideo } from './appearVideo';

export function getFilms(
  setFilmsFront: React.Dispatch<
    React.SetStateAction<React.ReactNode[] | undefined>
  >,

  setCurrentLecteur: React.Dispatch<
    React.SetStateAction<{ lecteur: string; change?: boolean } | null>
  >,

  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,
  setVideo: React.Dispatch<React.SetStateAction<string>>,

  currentLecteur: {
    lecteur: string;
    change?: boolean;
  }
) {
  let LecteursFilms: string[] = [];

  const currentAnime = getCurrentAnime({ wSaison: false });
  const Lecteurs = getLecteur();

  const { names } =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
    )!.options.FILM_OPTIONS || {};

  const filmsNodes: React.ReactNode[] = [];

  if (currentLecteur) {
    LecteursFilms =
      Lecteurs[currentLecteur.lecteur as 'epsAS' | 'eps1' | 'eps2']!;
  } else {
    if (Lecteurs.epsAS) {
      setCurrentLecteur({ lecteur: 'epsAS' });

      LecteursFilms = Lecteurs.epsAS;
    } else {
      const lecteur = Object.keys(Lecteurs)[0] as 'eps1' | 'eps2' | 'epsAS';

      setCurrentLecteur({ lecteur });

      LecteursFilms = Lecteurs[lecteur]!;
    }
  }

  for (let i = 0; i < Object.keys(names!).length; i++) {
    const url = LecteursFilms[i];
    const id = `${names![i].name}|${
      typeof names![i].aliases === 'undefined'
        ? ''
        : names![i].aliases?.join(', ')
    }`;

    filmsNodes.push(
      <div id={id} key={id} className="list-poster">
        <img
          className="poster"
          src={names![i].image()}
          id={`${url} ${i}`}
          onClick={() => {
            appearVideo(`${url} ${i}`, setVideo, setTitle);
          }}
        />
        <p className="text--films">{names![i].name}</p>
      </div>
    );
  }

  setFilmsFront(filmsNodes);
}
