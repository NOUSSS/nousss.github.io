import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/images-saisons';
import { Season } from '../../interfaces/interface';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/DragonBallZ/Affiche.webp';
import episodesNames from './constants/episodes-names';

export const DragonBallZ_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Tout les épisodes',
      aliases: [''],
      image: () => getImage(1),
    },
  } as Season,
  FILM_OPTIONS: {
    SCRIPT_URL: (langage: string) =>
      `https://anime-sama.fr/catalogue/dragon-ball-z/film/${langage}/episodes.js`,
    names: films,
    lecteur: 'eps2',
  } as FilmOptions,

  SCANS_OPTIONS: {} as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/dragon-ball-z/saison${index}/${lang}/episodes.js`,

    horsSeries: [] as horsSeriesType[],

    allIndex: {
      1: 0,
    } as allIndexType,
    names: episodesNames,
    lecteur: 'eps1',
  },
};
