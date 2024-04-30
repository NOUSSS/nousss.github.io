import EpisodeData from "../class/episodeData";
import { formatName, getAnime } from "./";

interface CurrentAnimeProps {
  wSaison: boolean;
}

export default function getCurrentAnime({
  wSaison,
}: CurrentAnimeProps): string {
  const hash = window.location.href;
  const queryParams = hash.substring(hash.indexOf("?") + 1);

  const urlParams = new URLSearchParams(queryParams);

  const currentAnimeURL = urlParams.get("anime");
  const saison = urlParams.get("saison");

  let anime = localStorage.getItem("anime");

  if (
    (!currentAnimeURL && !anime) ||
    (currentAnimeURL && !getAnime(currentAnimeURL!))
  )
    window.location.hash = "/";

  if (!anime) {
    localStorage.setItem("anime", currentAnimeURL!);

    anime = localStorage.getItem("anime")!;

    const episodeData = new EpisodeData(anime);

    if (wSaison) {
      episodeData?.setSaison(saison ?? "1");
    }
  }

  if (wSaison) {
    const episodeData = new EpisodeData(anime);

    if (anime && !episodeData.get()?.saison) {
      episodeData?.setSaison(saison ?? "1");
    }
  }

  if (currentAnimeURL) {
    anime = currentAnimeURL;

    localStorage.setItem("anime", currentAnimeURL);
  }

  if (!currentAnimeURL && anime) {
    anime = localStorage.getItem("anime")!;
  }

  return formatName(anime)!;
}
