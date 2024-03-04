import { formatName } from "@/app/lib/formatName";
import { selectChapter } from "./chapterManager";

const attachButtonClickEvent = (
  className: string,
  clickHandler: () => void
) => {
  document
    .querySelectorAll(`.${className}`)
    .forEach((e) => e.addEventListener("click", clickHandler));
};

export const clickEvents = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>,
  currentAnime: string
): void => {
  attachButtonClickEvent("prevButton", () => {
    setScans(
      selectChapter(
        Number(localStorage.getItem(`${formatName(currentAnime)}--chapitre`)) -
          1,
        currentAnime
      )
    );
  });

  attachButtonClickEvent("nextButton", () => {
    setScans(
      selectChapter(
        Number(localStorage.getItem(`${formatName(currentAnime)}--chapitre`)) +
          1,
        formatName(currentAnime)
      )
    );
  });

  document.querySelector(".lastChapter")!.addEventListener("click", () => {
    const allChapitres = document.querySelector("select")!.options;

    const lastScan = allChapitres[allChapitres.length - 1].id
      .match(/[0-9]/g)!
      .join("");

    setScans(selectChapter(lastScan, formatName(currentAnime)));
  });
};
