import { ItemsProps } from "@/app/ui/Select";
import { selectChapter } from "./chapterManager";
import { RefObject } from "react";

export const PrevChapter = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>,
  currentAnime: string,
  items: ItemsProps[],
  placeholderRef: RefObject<HTMLElement>,
) => {
  localStorage.removeItem(`${currentAnime}--scrollPosition`);

  setScans(
    selectChapter(
      items[Number(localStorage.getItem(`${currentAnime}--chapitre`)) - 2],
      currentAnime,
      placeholderRef,
    ),
  );
};

export const NextChapter = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>,
  currentAnime: string,
  items: ItemsProps[],
  placeholderRef: RefObject<HTMLElement>,
) => {
  localStorage.removeItem(`${currentAnime}--scrollPosition`);

  setScans(
    selectChapter(
      items[Number(localStorage.getItem(`${currentAnime}--chapitre`))],
      currentAnime,
      placeholderRef,
    ),
  );
};

export const LastChapter = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>,
  currentAnime: string,
  items: ItemsProps[],
  placeholderRef: RefObject<HTMLElement>,
) => {
  const lastScan = items[items.length - 1];

  setScans(selectChapter(lastScan, currentAnime, placeholderRef));
};
