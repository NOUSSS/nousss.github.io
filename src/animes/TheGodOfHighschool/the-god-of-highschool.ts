import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/images-saisons';
import { Season } from '../../interfaces/interface';

import Affiche from '../../assets/Animes/TheGodOfHighschool/Affiche.jpg';

export const TheGodOfHighschool_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Saison 1',
      aliases: ['saison 1'],
      image: () => getImage(1),
    },
  } as Season,
  FILM_OPTIONS: {} as FilmOptions,

  SCANS_OPTIONS: {
    SCRIPT_URL:
      'https://anime-sama.fr/catalogue/the-god-of-high-school/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/The%20God%20of%20High%20School/${chapitre}/${index}.jpg`,
    CHAPITRE_SPECIAUX: [307],
  } as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/the-god-of-high-school/saison${index}/${lang}/episodes.js`,

    horsSeries: [] as horsSeriesType[],

    allIndex: {
      1: 0,
      2: 13,
    } as allIndexType,
    names: [],
    lecteur: 'eps2',
  },
};
