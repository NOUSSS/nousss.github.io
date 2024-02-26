import { Historique } from '../../typings/types';
import { getAnime } from '../../functions/getAnime';

export const getCurrentChapitre = (
  animeName: string,
  index: number,
  historiques: Historique[]
) => {
  if (
    getAnime(animeName)?.options?.SCANS_OPTIONS!.CHAPITRE_SPECIAUX?.includes(
      Number(window.localStorage.getItem(`${animeName}--chapitre`)) - 1
    )
  ) {
    return `Chapitre Special`;
  } else {
    if (
      getAnime(animeName)?.options?.SCANS_OPTIONS?.CHAPITRE_SPECIAUX?.length ??
      0 > 0
    ) {
      const horsSeries =
        getAnime(animeName)!.options.SCANS_OPTIONS?.CHAPITRE_SPECIAUX;

      if (horsSeries) {
        let retard = 0;

        for (const horsSerie of horsSeries) {
          if (Number(historiques[index]!.chapitre) > horsSerie + 1) retard++;
        }

        return `Chapitre ${String(
          Number(historiques[index].chapitre) -
            retard -
            (getAnime(animeName)?.options?.SCANS_OPTIONS?.from === 0 ? 1 : 0)
        )}`;
      } else {
        return `Chapitre ${
          Number(historiques[index].chapitre) -
          (getAnime(animeName)?.options?.SCANS_OPTIONS?.from === 0 ? 1 : 0)
        }`;
      }
    } else {
      return `Chapitre ${
        Number(historiques[index].chapitre) -
        (getAnime(animeName)?.options?.SCANS_OPTIONS?.from === 0 ? 1 : 0)
      }`;
    }
  }
};
