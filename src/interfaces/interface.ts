interface SeasonAndFilm {
  [key: string]: {
    name: string;
    aliases: string[];
    image: () => any;
  };
}

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

export interface FilmOptions {
  SCRIPT_URL: (langage: string) => string;

  BLACKLIST_URL: string[];
  names: Film;
}

export interface ScansOptions {
  from?: number;
  SCRIPT_URL: string;

  IMAGE_URL: (chapitre: string | number, index: string | number) => string;

  CHAPITRE_SPECIAUX: number[];
}

export interface Season extends SeasonAndFilm {}
export interface Film extends SeasonAndFilm {}
