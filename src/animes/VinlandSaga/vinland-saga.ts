import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/images-saisons';
import { Season } from '../../interfaces/interface';

import Affiche from '../../assets/Animes/VinlandSaga/Affiche.jpg';

export const VinlandSaga_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Saison 1',
      aliases: ['knut', 'askeladd', 'thors', 'thorkell'],
      image: () => getImage(1),
    },
    2: {
      name: 'Saison 2',
      aliases: ['knut', 'esclave', 'serpent'],
      image: () => getImage(2),
    },
  } as Season,
  FILM_OPTIONS: {} as FilmOptions,

  SCANS_OPTIONS: {
    SCRIPT_URL:
      'https://anime-sama.fr/catalogue/vinland-saga/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/Vinland%20Saga/${chapitre}/${index}.jpg`,
    CHAPITRE_SPECIAUX: [] as number[],
  } as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/vinland-saga/saison${index}/${lang}/episodes.js`,

    horsSeries: [] as horsSeriesType[],

    allIndex: {
      1: 0,
      2: 24,
      3: 48,
    } as allIndexType,
    names: [],
    lecteur: 'epsAS',
  },
};
