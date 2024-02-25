type SeasonAndFilm = {
  [key: string]: {
    name: string;
    aliases?: string[];
    image: () => string;
  };
};

export type Season = SeasonAndFilm;
export type Film = SeasonAndFilm;

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

export type LecteurReturnType = {
  epsAS?: string[];

  eps1?: string[];
  eps2?: string[];
};

export type FilmOptions = {
  SCRIPT_URL: (langage: string) => string;

  BLACKLIST_URL?: string[];
  names: Film;
};

export type ScansOptions = {
  from?: number;
  SCRIPT_URL: string;

  IMAGE_URL: ({
    chapitre,
    index,
  }: {
    chapitre: string | number;
    index: string | number;
  }) => string;

  CHAPITRE_SPECIAUX?: number[];
};

export type EpisodesOptions = {
  SCRIPT_URL: ({
    index,
    lang,
    maxEpisode,
  }: {
    index: number | string;
    lang: string;
    maxEpisode?: string;
  }) => string;

  horsSeries?: horsSeriesType[];
  names?: {
    index: string;
    name: string;
  }[];
  oav?: boolean;

  allIndex: allIndexType;
};

export type Historique = {
  name: string;
  redirect: string;

  chapitre?: string;
  episode?: string;
  saison?: string;
  film?: string;
};
