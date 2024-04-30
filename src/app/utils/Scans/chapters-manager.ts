import { selectChapter } from "./chapters-utils";
import { RefObject } from "react";
import { Anime } from "@/typings/types";
import ScanData from "@/app/class/scanData";

export const PrevChapter = (
  Anime: Anime.AnimeScansProps,

  setAnime: (
    newData:
      | Partial<Anime.AnimeScansProps>
      | ((prevState: Anime.AnimeScansProps) => Partial<Anime.AnimeScansProps>),
  ) => void,

  placeholderRef: RefObject<HTMLElement>,
  newName: string | undefined,
) => {
  if (!Anime.anime) return;

  const StorageScans = new ScanData(Anime.anime.anime);
  const Scans = StorageScans.get();

  if (!Scans) return;

  setAnime((currentState) => ({
    ...currentState,
    scans: selectChapter(
      Anime,
      Anime.chapitresOptions![Number(Scans.chapitre) - 2],
      placeholderRef,
      newName,
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
  newName: string | undefined,
) => {
  const StorageScans = new ScanData(Anime.anime?.anime);
  const Scans = StorageScans.get();

  if (!Scans) return;

  setAnime((currentState) => ({
    ...currentState,
    scans: selectChapter(
      Anime,
      Anime.chapitresOptions![Number(Scans.chapitre)],
      placeholderRef,
      newName,
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
  newName: string | undefined,
) => {
  const items = Anime.chapitresOptions!;
  const lastScan = items[items.length - 1];

  setAnime((currentState) => ({
    ...currentState,
    scans: selectChapter(Anime, lastScan, placeholderRef, newName),
  }));
};
