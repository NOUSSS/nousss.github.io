import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/images-saisons';
import { Season } from '../../interfaces/interface';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/JujutsuKaisen/Affiche.jpeg';

export const JujutsuKaisen_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Saison 1',
      aliases: ['sukuna'],
      image: () => getImage(1),
    },
    2: {
      name: 'Shibuya',
      aliases: ['2', 'sukuna', 'gojo', 'scelle', 'sukuna', 'jogo', 'itadori'],
      image: () => getImage(2),
    },
  } as Season,
  FILM_OPTIONS: {
    SCRIPT_URL: (langage: string) =>
      `https://anime-sama.fr/catalogue/jujutsu-kaisen/film/${langage}/episodes.js`,
    names: films,
  } as FilmOptions,

  SCANS_OPTIONS: {
    from: 0,
    SCRIPT_URL:
      'https://anime-sama.fr/catalogue/jujutsu-kaisen/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/Jujutsu%20Kaisen/${chapitre}/${index}.jpg`,
  } as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/jujutsu-kaisen/saison${index}/${lang}/episodes.js`,

    horsSeries: [] as horsSeriesType[],

    allIndex: {
      1: 0,
      2: 23,
    } as allIndexType,
    names: [],
    lecteur: 'epsAS',
  },
};
