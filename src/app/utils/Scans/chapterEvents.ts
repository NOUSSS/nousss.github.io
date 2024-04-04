import { ItemsProps } from "@/app/ui/Select";
import { selectChapter } from "./chapterManager";
import { RefObject } from "react";
import { AnimeScansProps } from "@/typings/types";

export const PrevChapter = (
  Anime: AnimeScansProps,
  setAnime: (
    newData:
      | Partial<AnimeScansProps>
      | ((prevState: AnimeScansProps) => Partial<AnimeScansProps>),
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
  Anime: AnimeScansProps,
  setAnime: (
    newData:
      | Partial<AnimeScansProps>
      | ((prevState: AnimeScansProps) => Partial<AnimeScansProps>),
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
  Anime: AnimeScansProps,
  setAnime: (
    newData:
      | Partial<AnimeScansProps>
      | ((prevState: AnimeScansProps) => Partial<AnimeScansProps>),
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
