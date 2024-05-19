import EpisodeData from "@/app/class/episodeData";

export function changeSaison(index: string, currentAnime: string) {
  const StorageEpisodes = new EpisodeData(currentAnime);
  const Episodes = StorageEpisodes.get();

  if (!Episodes) return;

  if (Episodes.saison !== index) {
    StorageEpisodes.setLecteur("");
    StorageEpisodes.setEpisode("1");
  }

  StorageEpisodes.setSaison(index);
}
