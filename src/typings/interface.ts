interface SeasonAndFilm {
  [key: string]: {
    name: string;
    aliases: string[];
    image: () => string;
  };
}

interface Episode {
  index: string;
  name: string;
}

export interface Note {
  saison: string;
  message: string;
}

export interface horsSeriesType {
  saison: string;
  hs: number[];
}

export interface allIndexType {
  [key: string]: number;
}

export interface windowKeys {
  [key: string]: string[];
}

export interface FilmOptions {
  SCRIPT_URL?: (langage: string) => string;

  BLACKLIST_URL?: string[];
  names?: Film;
  lecteur?: string;
}

export interface ScansOptions {
  from?: number;
  SCRIPT_URL?: string;

  IMAGE_URL?: (chapitre: string | number, index: string | number) => string;

  CHAPITRE_SPECIAUX?: number[];
}

export interface EpisodesOptions {
  SCRIPT_URL: (
    index: string | number,
    lang: string,
    maxEpisode?: string
  ) => string;

  horsSeries?: horsSeriesType[];
  names?: Episode[];

  allIndex: allIndexType;
  lecteur: string;
}

export interface Season extends SeasonAndFilm {}
export interface Film extends SeasonAndFilm {}
