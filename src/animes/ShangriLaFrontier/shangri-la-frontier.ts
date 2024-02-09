import {
  FilmOptions,
  ScansOptions,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';

import { getImage } from './constants/images-saisons';
import { Season } from '../../interfaces/interface';

import Affiche from '../../assets/Animes/ShangriLaFrontier/Affiche.jpg';

export const ShangriLaFrontier_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Saison 1',
      aliases: [''],
      image: () => getImage(1),
    },
  } as Season,
  FILM_OPTIONS: {} as FilmOptions,

  SCANS_OPTIONS: {
    SCRIPT_URL:
      'https://anime-sama.fr/catalogue/shangri-la-frontier/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/Shangri-La%20Frontier/${chapitre}/${index}.jpg`,
    CHAPITRE_SPECIAUX: [],
  } as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/shangri-la-frontier/saison${index}/${lang}/episodes.js`,

    horsSeries: [{ saison: '1', hs: [14] }] as horsSeriesType[],
    allIndex: {
      1: 0,
    } as allIndexType,
    names: [],
    lecteur: 'epsAS',
  },
};
