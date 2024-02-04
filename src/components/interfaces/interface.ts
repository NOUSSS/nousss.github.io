interface SeasonAndFilm {
  [key: string]: {
    name: string;
    aliases: string[];
  };
}

export type horsSeriesType = {
  saison: string;
  hs: number[];
};

export interface allIndexType {
  [key: string]: number;
}

export interface windowKeys {
  [key: string]: any;
}

export interface Season extends SeasonAndFilm {}
export interface Film extends SeasonAndFilm {}
