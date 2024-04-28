import { formatName, getAnime } from "./";

export default function getCurrentAnime({
  wSaison,
}: {
  wSaison: boolean;
}): string {
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

    if (wSaison) {
      localStorage.setItem(`${formatName(anime)}--saison`, saison ?? "1");
    }
  }

  if (wSaison) {
    if (anime && !localStorage.getItem(`${anime}--saison`)) {
      localStorage.setItem(`${formatName(anime)}--saison`, saison ?? "1");
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
