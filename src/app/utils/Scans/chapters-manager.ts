import { selectChapter } from "./chapters-utils";
import { RefObject } from "react";
import { Anime } from "@/typings/types";

export const PrevChapter = (
  Anime: Anime.AnimeScansProps,
  setAnime: (
    newData:
      | Partial<Anime.AnimeScansProps>
      | ((prevState: Anime.AnimeScansProps) => Partial<Anime.AnimeScansProps>),
  ) => void,
  placeholderRef: RefObject<HTMLElement>,
) => {
  setAnime((currentState) => ({
    ...currentState,
    scans: selectChapter(
      Anime,
      Anime.chapitresOptions![
        Number(localStorage.getItem(`${Anime?.anime?.anime}--chapitre`)) - 2
      ],
      placeholderRef,
    ),
  }));
};

export const NextChapter = (
  Anime: Anime.AnimeScansProps,
  setAnime: (
    newData:
      | Partial<Anime.AnimeScansProps>
      | ((prevState: Anime.AnimeScansProps) => Partial<Anime.AnimeScansProps>),
  ) => void,
  placeholderRef: RefObject<HTMLElement>,
) => {
  setAnime((currentState) => ({
    ...currentState,
    scans: selectChapter(
      Anime,
      Anime.chapitresOptions![
        Number(localStorage.getItem(`${Anime?.anime?.anime}--chapitre`))
      ],
      placeholderRef,
    ),
  }));
};

export const LastChapter = (
  Anime: Anime.AnimeScansProps,
  setAnime: (
    newData:
      | Partial<Anime.AnimeScansProps>
      | ((prevState: Anime.AnimeScansProps) => Partial<Anime.AnimeScansProps>),
  ) => void,
  placeholderRef: RefObject<HTMLElement>,
) => {
  const items = Anime.chapitresOptions!;
  const lastScan = items[items.length - 1];

  setAnime((currentState) => ({
    ...currentState,
    scans: selectChapter(Anime, lastScan, placeholderRef),
  }));
};
