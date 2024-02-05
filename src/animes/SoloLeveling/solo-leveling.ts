import {
  FilmOptions,
  Season,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';
import { getImage } from './constants/images';

import episodes from './constants/episodes--names';
import Affiche from '../../assets/Animes/SoloLeveling/Affiche.jpeg';

export const SoloLeveling_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Saison 1',
      aliases: ['1'],
      image: () => getImage(1),
    },
  } as Season,

  FILM_OPTIONS: {} as FilmOptions,

  SCANS_OPTIONS: {
    SCRIPT_URL:
      'https://anime-sama.fr/catalogue/solo-leveling/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/Solo%20Leveling/${chapitre}/${index}.jpg`,
    CHAPITRE_SPECIAUX: [] as number[],
  },

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number) =>
      `https://anime-sama.fr/catalogue/solo-leveling/saison${index}/vostfr/episodes.js`,

    horsSeries: [] as horsSeriesType[],
    allIndex: {
      1: 0,
    } as allIndexType,
    names: episodes,
  },
};
