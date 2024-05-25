import { ItemsProps } from "@/app/components/Select";
import { AnimesType } from "@/animes/constants";
import { StaticImageData } from "next/image";

export interface Note {
  saison: string;
  message: string;
}

export type Datas = Data.EpisodesData | Data.FilmsData | Data.ScansData;
export type DatasArr = Datas[];

export interface Historique {
  name: string;
  redirect: string;

  detail: Datas;
}

export namespace Data {
  export interface EpisodesData {
    episode: string;
    lang: string;
    saison: string;
    lecteur: string;
    name: string;
  }

  export interface FilmsData {
    film: string;
    lang: string;
    lecteur: string;
    name: string;
  }

  export interface ScansData {
    chapitre: string;
    version: string;
    name: string;
    method: string;
  }
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
    saisonTitle?: string;
    episodeTitle?: React.ReactNode;
    episodes?: React.ReactNode[];
  }

  export interface FilmNodes {
    element: React.ReactNode;
    url: string;
    id: string;
  }

  export interface AnimeFilmsProps extends AnimeInfoProps {
    video?: string;
    lang?: string;
    lecteur?: string;
    currentLecteur?: string[];
    lecteurs?: LecteurReturnType;
    filmTitle?: React.ReactNode;
    films?: FilmNodes[];
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
    method?: "horizontal" | "vertical";
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
    index: string | number;
    name: string;
  }

  interface ScriptOptions {
    index: number | string;
    lang: string;
  }

  interface PartsProps {
    from: number;
    to: number;
    startToFirst: boolean;
  }

  export interface EpisodesOptions {
    SCRIPT_URL: ({ index, lang }: ScriptOptions) => string;

    horsSeries?: horsSeriesType[];
    names?: NameProps[];
    parts?: PartsProps;

    noc?: boolean;

    allIndex: allIndexType;
  }
}
