import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/image-saisons';
import { Season } from '../../interfaces/interface';

import Affiche from '../../assets/Animes/DragonBallSuper/Affiche.jpg';
import { films } from './constants/films-names';
import episodesNames from './constants/episodes-names';

export const DragonBallSuper_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Saison 1',
      aliases: ['beerus', 'zeno'],
      image: () => getImage(1),
    },
  } as Season,
  FILM_OPTIONS: {
    SCRIPT_URL: (langage: string) =>
      `https://anime-sama.fr/catalogue/dragon-ball-super/film/${langage}/episodes.js`,
    names: films,
  } as FilmOptions,

  SCANS_OPTIONS: {
    SCRIPT_URL:
      'https://anime-sama.fr/catalogue/dragon-ball-super/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/Dragon%20Ball%20Super/${chapitre}/${index}.jpg`,
    CHAPITRE_SPECIAUX: [],
  } as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/dragon-ball-super/saison${index}/${lang}/episodes.js`,

    horsSeries: [] as horsSeriesType[],

    allIndex: {
      1: 0,
    } as allIndexType,
    names: episodesNames,
    lecteur: 'epsAS',
  },
};
