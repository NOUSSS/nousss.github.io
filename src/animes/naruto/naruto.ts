import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/images-saisons';
import { Season } from '../../interfaces/interface';

import Affiche from '../../assets/Animes/Naruto/Affiche.jpg';
import episodesNames from './constants/episodes-names.ts';

export const Naruto_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Les episodes',
      aliases: ['saisons'],
      image: () => getImage(1),
    },
  } as Season,
  FILM_OPTIONS: {} as FilmOptions,

  SCANS_OPTIONS: {
    SCRIPT_URL: 'https://anime-sama.fr/catalogue/naruto/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/Naruto/${chapitre}/${index}.jpg`,
    CHAPITRE_SPECIAUX: [700, 701],
  } as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/naruto/saison${index}/${lang}/episodes.js`,

    horsSeries: [] as horsSeriesType[],

    allIndex: {
      1: 0,
    } as allIndexType,
    names: episodesNames,
    lecteur: 'epsAS',
  },
};
