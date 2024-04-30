import { Data, Historique } from "@/typings/types";
import { getAnime } from "@/app/lib/";
import ScanData from "@/app/class/scanData";

export const getCurrentChapitre = (
  animeName: string,
  index: number,
  hists: Historique[],
) => {
  const historiques = hists[index].detail as Data.ScansData;
  const StorageScans = new ScanData(animeName);
  const Scan = StorageScans.get();

  const anime = getAnime(animeName);
  if (!anime || !anime.options?.SCANS_OPTIONS || !Scan) return;

  const { SCANS_OPTIONS } = anime.options;
  const currentChapitreIndex = Number(Scan.chapitre) - 1;

  if (SCANS_OPTIONS.CHAPITRE_SPECIAUX?.includes(currentChapitreIndex)) {
    return `Chapitre Special`;
  }

  const fromZero = SCANS_OPTIONS.from === 0;
  let chapterNumber = Number(historiques.chapitre);

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
