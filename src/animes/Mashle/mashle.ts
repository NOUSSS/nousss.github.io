import {
  FilmOptions,
  ScansOptions,
  Season,
  allIndexType,
  horsSeriesType,
} from '../../interfaces/interface';
import { getImage } from './constants/images-saisons';

import Affiche from '../../assets/Animes/Mashle/Affiche.jpeg';

export const Mashle_OPTIONS = {
  affiche: Affiche,
  saisons: {
    1: {
      name: 'Saison 1',
      aliases: ['1'],
      image: () => getImage(1),
    },
    2: {
      name: 'Saison 2',
      aliases: ['2'],
      image: () => getImage(2),
    },
  } as Season,

  FILM_OPTIONS: {} as FilmOptions,

  SCANS_OPTIONS: {
    SCRIPT_URL: 'https://anime-sama.fr/catalogue/mashle/scan/vf/episodes.js',

    IMAGE_URL: (chapitre: string | number, index: string | number) =>
      `https://s22.anime-sama.fr/s1/scans/Mashle/${chapitre}/${index}.jpg`,
    CHAPITRE_SPECIAUX: [] as number[],
  } as ScansOptions,

  EPISODES_OPTIONS: {
    SCRIPT_URL: (index: string | number, lang: string) =>
      `https://anime-sama.fr/catalogue/mashle/saison${index}/${lang}/episodes.js`,

    horsSeries: [
      {
        saison: '1',
        hs: [6],
      },
    ] as horsSeriesType[],
    allIndex: {
      1: 0,
      2: 12,
    } as allIndexType,
    names: [],
  },
};
