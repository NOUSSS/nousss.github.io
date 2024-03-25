import { ItemsProps } from "@/app/ui/Select";
import { selectChapter } from "./chapterManager";

export const PrevChapter = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>,
  currentAnime: string,
  items: ItemsProps[],
) => {
  localStorage.removeItem(`${currentAnime}--scrollPosition`);

  setScans(
    selectChapter(
      items[Number(localStorage.getItem(`${currentAnime}--chapitre`)) - 2],
      currentAnime,
    ),
  );
};

export const NextChapter = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>,
  currentAnime: string,
  items: ItemsProps[],
) => {
  localStorage.removeItem(`${currentAnime}--scrollPosition`);

  setScans(
    selectChapter(
      items[Number(localStorage.getItem(`${currentAnime}--chapitre`))],
      currentAnime,
    ),
  );
};

export const LastChapter = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>,
  currentAnime: string,
  items: ItemsProps[],
) => {
  const lastScan = items[items.length - 1];

  setScans(selectChapter(lastScan, currentAnime));
};
