import { StaticImageData } from "next/image";

export interface SeasonAndFilm {
  name: string;
  aliases?: string[];
  hs?: boolean;
  image: () => StaticImageData;
}

export type Season = Record<string, SeasonAndFilm>;
export type Film = Record<string, SeasonAndFilm>;

export interface Note {
  saison: string;
  message: string;
}

export interface horsSeriesType {
  saison: string;
  hs: number[];
}

export type allIndexType = Record<string, number>;

export interface LecteurReturnType {
  [key: string]: string[];
}

export interface FilmOptions {
  SCRIPT_URL: (langage: string) => string;

  BLACKLIST_URL?: string[];
  names: Film;
}

export interface ScansOptions {
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
}

interface NameProps {
  index: string;
  name: string;
}

export interface EpisodesOptions {
  SCRIPT_URL: ({
    index,
    lang,
    hs,
  }: {
    index: number | string;
    lang: string;
    hs?: boolean;
  }) => string;

  horsSeries?: horsSeriesType[];
  names?: NameProps[];

  fromParts?: number;

  allIndex: allIndexType;
}

export interface Historique {
  name: string;
  redirect: string;

  chapitre?: string;
  episode?: string;
  saison?: string;
  film?: string;
}
