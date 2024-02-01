interface SeasonAndFilm {
  [key: string]: {
    name: string;
    aliases: string[];
  };
}

export interface windowKeys {
  [key: string]: any;
}

export interface Season extends SeasonAndFilm {}
export interface Film extends SeasonAndFilm {}
