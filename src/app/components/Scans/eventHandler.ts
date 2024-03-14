import { selectChapter } from "./chapterManager";
import { ItemsProps } from "@/app/ui/Select";

const attachButtonClickEvent = (
  className: string,
  clickHandler: () => void,
) => {
  document
    .querySelectorAll(`.${className}`)
    .forEach((e) => e.addEventListener("click", clickHandler));
};

export const clickEvents = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>,
  currentAnime: string,
  items: ItemsProps[],
): void => {
  attachButtonClickEvent("prevButton", () => {
    window.localStorage.removeItem(`${currentAnime}--scrollPosition`);

    setScans(
      selectChapter(
        items[Number(localStorage.getItem(`${currentAnime}--chapitre`)) - 2],
        currentAnime,
      ),
    );
  });

  attachButtonClickEvent("nextButton", () => {
    window.localStorage.removeItem(`${currentAnime}--scrollPosition`);

    setScans(
      selectChapter(
        items[Number(localStorage.getItem(`${currentAnime}--chapitre`))],
        currentAnime,
      ),
    );
  });

  document.querySelector(".lastChapter")!.addEventListener("click", () => {
    if (items) {
      const lastScan = items[items.length - 1];

      setScans(selectChapter(lastScan, currentAnime));
    }
  });
};
