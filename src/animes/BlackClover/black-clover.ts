import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/images-saisons';
import { Season } from '../../interfaces/interface';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/BlackClover/Affiche.jpg';
import episodes from './constants/episodes-names';

export const BlackClover_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Saison 1',
      aliases: ['magie'],
      image: () => getImage(1),
    },
  } as Season,
  FILM_OPTIONS: {
    SCRIPT_URL: (langage: string) =>
      `https://anime-sama.fr/catalogue/black-clover/film/${langage}/episodes.js`,
    names: films,
    BLACKLIST_URL: [],
  } as FilmOptions,

  SCANS_OPTIONS: {
    SCRIPT_URL:
      'https://anime-sama.fr/catalogue/black-clover/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/Black%20Clover/${chapitre}/${index}.jpg`,

    CHAPITRE_SPECIAUX: [],
  } as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/black-clover/saison${index}/${lang}/episodes.js`,

    horsSeries: [
      {
        saison: '1',
        hs: [170],
      },
    ] as horsSeriesType[],

    allIndex: {
      1: 0,
    } as allIndexType,

    names: episodes,
    lecteur: 'epsAS',
  },
};
