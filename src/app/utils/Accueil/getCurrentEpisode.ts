import { Data, Historique } from "@/typings/types";
import { getAnime } from "@/app/lib/";

import EpisodeData from "@/app/class/episodeData";

export const getCurrentEpisode = (
  animeName: string,
  index: number,
  hists: Historique[],
) => {
  const historiques = hists[index].detail as Data.EpisodesData;

  const anime = getAnime(animeName);

  const StorageEpisodes = new EpisodeData(animeName);
  const Episodes = StorageEpisodes.get();

  if (!anime || !anime.options?.EPISODES_OPTIONS || !Episodes) return;

  const currentSeason = Episodes.saison;
  const currentEpisode = Number(Episodes.episode);

  const { horsSeries } = anime.options.EPISODES_OPTIONS;

  let retard = 0;

  const isHorsSerie = horsSeries?.find(
    ({ saison }) => saison === historiques.saison,
  )?.hs;

  if (isHorsSerie)
    for (const specialEpisode of isHorsSerie) {
      if (Number(historiques.episode) > specialEpisode + 1) retard++;
    }

  const isSpecialEpisode = horsSeries
    ?.find(({ saison }) => saison === currentSeason)
    ?.hs.includes(currentEpisode - 1);

  if (isSpecialEpisode) {
    return `ESP`;
  }

  return `E${Number(historiques.episode) - retard}`;
};
