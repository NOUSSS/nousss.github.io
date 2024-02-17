type SeasonAndFilm = {
  [key: string]: {
    name: string;
    aliases: string[];
    image: () => string;
  };
};

type Episode = {
  index: string;
  name: string;
};

export type Note = {
  saison: string;
  message: string;
};

export type horsSeriesType = {
  saison: string;
  hs: number[];
};

export type allIndexType = {
  [key: string]: number;
};

export type windowKeys = {
  [key: string]: string[];
};

export type FilmOptions = {
  SCRIPT_URL?: (langage: string) => string;

  BLACKLIST_URL?: string[];
  names?: Film;
  lecteur?: string;
};

export type ScansOptions = {
  from?: number;
  SCRIPT_URL?: string;

  IMAGE_URL?: (chapitre: string | number, index: string | number) => string;

  CHAPITRE_SPECIAUX?: number[];
};

export type EpisodesOptions = {
  SCRIPT_URL: (
    index: string | number,
    lang: string,
    maxEpisode?: string
  ) => string;

  horsSeries?: horsSeriesType[];
  names?: Episode[];

  allIndex: allIndexType;
  lecteur: string;
};

export type Season = SeasonAndFilm;
export type Film = SeasonAndFilm;
