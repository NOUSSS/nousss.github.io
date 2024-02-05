export interface horsSeriesType {
  saison: string;
  hs: number[];
}

export interface allIndexType {
  [key: string]: number;
}

export interface windowKeys {
  [key: string]: any;
}

interface SeasonAndFilm {
  [key: string]: {
    name: string;
    aliases: string[];
    image: () => any;
  };
}

export interface Season extends SeasonAndFilm {}
export interface Film extends SeasonAndFilm {}

export interface FilmOptions {
  SCRIPT_URL: (langage: string) => string;
  BLACKLIST_URL: string;
  names: Film;
}
