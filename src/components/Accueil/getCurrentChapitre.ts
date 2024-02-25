import { Historique } from '../../typings/types';
import { fetchAnime } from '../../functions/fetchAnime';

export const getCurrentChapitre = (
  animeName: string,
  index: number,
  historiques: Historique[]
) => {
  if (
    fetchAnime(animeName)?.options?.SCANS_OPTIONS!.CHAPITRE_SPECIAUX?.includes(
      Number(window.localStorage.getItem(`${animeName}--chapitre`)) - 1
    )
  ) {
    return `Chapitre Special`;
  } else {
    if (
      fetchAnime(animeName)?.options?.SCANS_OPTIONS?.CHAPITRE_SPECIAUX
        ?.length ??
      0 > 0
    ) {
      const horsSeries =
        fetchAnime(animeName)!.options.SCANS_OPTIONS?.CHAPITRE_SPECIAUX;

      if (horsSeries) {
        let retard = 0;

        for (const horsSerie of horsSeries) {
          if (Number(historiques[index]!.chapitre) > horsSerie + 1) retard++;
        }

        return `Chapitre ${String(
          Number(historiques[index].chapitre) -
            retard -
            (fetchAnime(animeName)?.options?.SCANS_OPTIONS?.from === 0 ? 1 : 0)
        )}`;
      } else {
        return `Chapitre ${
          Number(historiques[index].chapitre) -
          (fetchAnime(animeName)?.options?.SCANS_OPTIONS?.from === 0 ? 1 : 0)
        }`;
      }
    } else {
      return `Chapitre ${
        Number(historiques[index].chapitre) -
        (fetchAnime(animeName)?.options?.SCANS_OPTIONS?.from === 0 ? 1 : 0)
      }`;
    }
  }
};
