import { Historique } from "@/typings/types";
import { getAnime } from "@/app/lib/";

export const getCurrentChapitre = (
  animeName: string,
  index: number,
  historiques: Historique[],
) => {
  const anime = getAnime(animeName);
  if (!anime || !anime.options?.SCANS_OPTIONS) return;

  const { SCANS_OPTIONS } = anime.options;
  const currentChapitreIndex =
    Number(localStorage.getItem(`${animeName}--chapitre`)) - 1;

  if (SCANS_OPTIONS.CHAPITRE_SPECIAUX?.includes(currentChapitreIndex)) {
    return `Chapitre Special`;
  }

  const fromZero = SCANS_OPTIONS.from === 0;
  let chapterNumber = Number(historiques[index].chapitre);

  if (SCANS_OPTIONS.CHAPITRE_SPECIAUX?.length) {
    for (const specialIndex of SCANS_OPTIONS.CHAPITRE_SPECIAUX) {
      if (chapterNumber > specialIndex + 1) {
        chapterNumber--;
      }
    }
  }

  chapterNumber -= fromZero ? 1 : 0;

  return `Chapitre ${chapterNumber}`;
};
