import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/images-saisons';
import { Season } from '../../interfaces/interface';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/DragonBall/Affiche.jpg';
import episodesNames from './constants/episodes-names';

export const DragonBall_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Tout les épisodes',
      aliases: ['aliase1'],
      image: () => getImage(1),
    },
  } as Season,
  FILM_OPTIONS: {
    SCRIPT_URL: (langage: string) =>
      `https://anime-sama.fr/catalogue/dragon-ball/film/${langage}/episodes.js`,
    names: films,
    lecteur: 'eps1',
  } as FilmOptions,

  SCANS_OPTIONS: {} as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/dragon-ball/saison${index}/${lang}/episodes.js`,

    horsSeries: [] as horsSeriesType[],

    allIndex: {
      1: 0,
    } as allIndexType,
    names: episodesNames,
    lecteur: 'eps1',
  },
};
