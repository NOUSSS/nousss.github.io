import { Historique } from "@/typings/types";
import { getAnime } from "@/app/lib/getAnime";

export const getCurrentEpisode = (
  animeName: string,
  index: number,
  historiques: Historique[],
) => {
  const anime = getAnime(animeName);

  if (!anime || !anime.options?.EPISODES_OPTIONS) return;

  const currentSeason = localStorage.getItem(`${animeName}--saison`);
  const currentEpisode = Number(localStorage.getItem(`${animeName}--episode`));

  const { horsSeries } = anime.options.EPISODES_OPTIONS;

  let retard = 0;

  const isHorsSerie = horsSeries?.find(
    ({ saison }) => saison === historiques[index].saison,
  )?.hs;

  if (isHorsSerie)
    for (const specialEpisode of isHorsSerie) {
      console.log(specialEpisode);
      console.log(Number(historiques[index].episode));

      if (Number(historiques[index].episode) > specialEpisode + 1) retard++;
    }

  const isSpecialEpisode = horsSeries
    ?.find(({ saison }) => saison === currentSeason)
    ?.hs.includes(currentEpisode - 1);

  if (isSpecialEpisode) {
    return `Episode Special`;
  }

  return `Episode ${Number(historiques[index].episode) - retard}`;
};
