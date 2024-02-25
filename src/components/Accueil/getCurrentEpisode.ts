import { Historique } from '../../typings/types';
import { fetchAnime } from '../../functions/fetchAnime';

export const getCurrentEpisode = (
  animeName: string,
  index: number,
  historiques: Historique[]
) => {
  if (window.localStorage.getItem(`${animeName}--e-sp`)) {
    return window.localStorage.getItem(`${animeName}--e-sp`)!;
  } else {
    if (
      fetchAnime(animeName)?.options.EPISODES_OPTIONS?.horsSeries?.length ??
      0 > 0
    ) {
      const horsSeries = fetchAnime(
        animeName
      )!.options.EPISODES_OPTIONS?.horsSeries!.find(
        ({ saison }) => saison === historiques?.[index].saison
      )?.hs;

      if (horsSeries) {
        let retard = 0;

        for (const horsSerie of horsSeries) {
          if (Number(historiques[index]!.episode) > horsSerie + 1) retard++;
        }

        return `Episode ${String(Number(historiques[index].episode) - retard)}`;
      } else {
        return `Episode ${historiques[index].episode}`;
      }
    } else {
      return `Episode ${historiques[index].episode}`;
    }
  }
};
