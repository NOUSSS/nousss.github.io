import { allIndexType, horsSeriesType } from './interfaces/interface';

export const FILM_OPTIONS = {
  SCRIPT_URL: (langage: string) =>
    `https://anime-sama.fr/catalogue/one-piece/film/${langage}/episodes.js`,
  BLACKLIST_URL: 'https://video.sibnet.ru/shell.php?videoid=4736710',
};

export const SCANS_OPTIONS = {
  SCRIPT_URL:
    'https://anime-sama.fr/catalogue/one-piece/scan_noir-et-blanc/vf/episodes.js',

  IMAGE_URL: (chapitre: string | number, index: string | number) =>
    `https://s22.anime-sama.fr/s1/scans/One%20Piece/${chapitre}/${index}.jpg`,

  CHAPITRE_SPECIAUX: [1045],
};

export const EPISODES_OPTIONS = {
  SCRIPT_URL: (index: string | number) =>
    `https://anime-sama.fr/catalogue/one-piece/saison${index}/vostfr/episodes.js`,

  horsSeries: [
    {
      saison: '10',
      hs: [127, 139, 147, 156, 162, 173, 190, 195, 204, 210, 221],
    },
    {
      saison: '11',
      hs: [4],
    },
  ] as horsSeriesType[],

  allIndex: {
    1: 0,
    2: 61,
    3: 143,
    4: 206,
    5: 336,
    6: 389,
    7: 516,
    8: 574,
    9: 746,
    10: 877,
    11: 1088,
  } as allIndexType,
};
