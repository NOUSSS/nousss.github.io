import { ItemsProps } from "@/app/components/Select";
import { AnimesType } from "@/animes/constants";
import { StaticImageData } from "next/image";

export interface Note {
  saison: string;
  message: string;
}

export interface Historique {
  name: string;
  redirect: string;

  chapitre?: string;
  episode?: string;
  saison?: string;
  film?: string;
}

export namespace Anime {
  export interface LecteurReturnType {
    [key: string]: string[];
  }

  export interface AnimeInfoProps {
    anime?: AnimesType;
  }

  export interface AnimeEpisodesProps extends AnimeInfoProps {
    video?: string;
    lang?: string;
    lecteur?: string;
    currentLecteur?: string[];
    lecteurs?: LecteurReturnType;
    saison?: string;
    saisonTitle?: React.ReactNode;
    episodeTitle?: React.ReactNode;
    episodes?: React.ReactNode[];
  }

  export interface AnimeFilmsProps extends AnimeInfoProps {
    video?: string;
    lang?: string;
    lecteur?: string;
    currentLecteur?: string[];
    lecteurs?: LecteurReturnType;
    filmTitle?: React.ReactNode;
    films?: React.ReactNode[];
  }

  interface SaisonsProps {
    id: string;
    element: React.ReactNode;
  }

  export interface AnimeSaisonsProps extends AnimeInfoProps {
    saisons?: SaisonsProps[];
    saison?: string;
  }

  export interface AnimeScansProps extends AnimeInfoProps {
    scans?: React.ReactNode[];
    chapitresOptions?: ItemsProps[];
    version?: string;
  }
}

export namespace Options {
  export interface SeasonAndFilm {
    name: string;
    aliases?: string[];
    hs?: boolean;

    image: () => StaticImageData;
  }

  export type Season = Record<string, SeasonAndFilm>;
  export type Film = Record<string, SeasonAndFilm>;

  export type allIndexType = Record<string, number>;

  export interface horsSeriesType {
    saison: string;
    hs: number[];
  }

  export interface FilmOptions {
    SCRIPT_URL: (langage: string) => string;

    BLACKLIST_URL?: string[];
    names: Film;
  }

  interface ImageUrlOptions {
    chapitre: string | number;
    index: string | number;
  }

  interface VersionType {
    name: string;
    value: string;
  }

  export interface ScansOptions {
    from?: number;
    SCRIPT_URL: string;

    IMAGE_URL: ({ chapitre, index }: ImageUrlOptions) => string;

    CHAPITRE_SPECIAUX?: number[];
    versions?: VersionType[];
  }

  interface NameProps {
    index: string;
    name: string;
  }

  interface ScriptOptions {
    index: number | string;
    lang: string;

    hs?: boolean;
  }

  interface PartsProps {
    from: number;
    to: number;
  }

  export interface EpisodesOptions {
    SCRIPT_URL: ({ index, lang, hs }: ScriptOptions) => string;

    horsSeries?: horsSeriesType[];
    names?: NameProps[];
    parts?: PartsProps;

    allIndex: allIndexType;
  }
}
