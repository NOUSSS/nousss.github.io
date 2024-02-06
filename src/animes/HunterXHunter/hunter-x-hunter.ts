import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/images-saisons';
import { Season } from '../../interfaces/interface';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/HunterXHunter/Affiche.jpeg';
import episodes from './constants/episodes-names';

export const HunterXHunter_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Anime de 2011',
      aliases: [
        'fourmi',
        'election',
        'greed',
        'york shin',
        'brigade',
        'netero',
        'ging',
        'tour',
        'hisoka',
      ],
      image: () => getImage(1),
    },
  } as Season,
  FILM_OPTIONS: {
    SCRIPT_URL: (langage: string) =>
      `https://anime-sama.fr/catalogue/hunter-x-hunter/film/${langage}/episodes.js`,
    names: films,
  } as FilmOptions,

  SCANS_OPTIONS: {
    SCRIPT_URL:
      'https://anime-sama.fr/catalogue/hunter-x-hunter/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/Hunter%20x%20Hunter/${chapitre}/${index}.jpg`,

    CHAPITRE_SPECIAUX: [358, 392],
  } as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/hunter-x-hunter/saison${index}/${lang}/episodes.js`,

    horsSeries: [] as horsSeriesType[],

    allIndex: {
      1: 0,
    } as allIndexType,
    names: episodes,
  },
};
