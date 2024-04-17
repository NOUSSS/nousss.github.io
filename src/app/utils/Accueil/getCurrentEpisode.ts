import { Historique } from "@/typings/types";
import { getAnime } from "@/app/lib/getAnime";

export const getCurrentEpisode = (
  animeName: string,
  index: number,

  historiques: Historique[],
) => {
  const anime = getAnime(animeName);

  if (
    anime?.options.EPISODES_OPTIONS?.horsSeries &&
    anime.options.EPISODES_OPTIONS.horsSeries
      .find(
        ({ saison }) => saison === localStorage.getItem(`${animeName}--saison`),
      )
      ?.hs.includes(Number(localStorage.getItem(`${animeName}--episode`)))
  ) {
    return localStorage.getItem(`${animeName}--episode`)!;
  } else {
    if (anime?.options.EPISODES_OPTIONS?.horsSeries?.length ?? 0 > 0) {
      const horsSeries = getAnime(
        animeName,
      )!.options.EPISODES_OPTIONS?.horsSeries!.find(
        ({ saison }) => saison === historiques?.[index].saison,
      )?.hs;

      if (horsSeries) {
        let retard = 0;

        for (const horsSerie of horsSeries) {
          if (Number(historiques[index]!.episode) > horsSerie + 1) retard++;
        }

        return `Episode ${Number(historiques[index].episode) - retard}`;
      } else {
        return `Episode ${historiques[index].episode}`;
      }
    } else {
      return `Episode ${historiques[index].episode}`;
    }
  }
};
