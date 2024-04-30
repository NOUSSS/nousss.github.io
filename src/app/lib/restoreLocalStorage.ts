import getAnime from "./getAnime";
import { Data } from "@/typings/types";

export default function restoreLocalStorage() {
  const episodesData: Data.EpisodesData[] = [];
  const scansData: Data.ScansData[] = [];
  const filmsData: Data.FilmsData[] = [];

  for (const key of Object.keys(localStorage)) {
    const [name, type, property] = key.split("--");
    const item = localStorage.getItem(key);

    if (!getAnime(name)) {
      localStorage.removeItem(key);
      continue;
    }

    switch (type) {
      case "episode":
        if (property !== "lang") {
          const episode = item;
          const saison = localStorage.getItem(`${name}--saison`) ?? "1";

          const lang =
            localStorage.getItem(`${name}--episode--lang`) ?? "vostfr";

          const lecteur = localStorage.getItem(`${name}-1--lecteur`) ?? "";

          if (episode) {
            episodesData.push({
              name,
              episode,
              lang,
              saison,
              lecteur,
            });
          }
        }
        break;
      case "chapitre":
        const chapitre = item;

        const version = localStorage.getItem(`${name}--version`) ?? "";
        const method = localStorage.getItem(`${name}--method`) ?? "vertical";

        if (chapitre) {
          scansData.push({
            name,
            chapitre,
            version,
            method,
          });
        }
        break;
      case "currentFilm":
        const film = item;
        const lang = localStorage.getItem(`${name}--film--lang`) ?? "vostfr";
        const lecteur = localStorage.getItem(`${name}-1--lecteur`) ?? "";

        if (film) {
          filmsData.push({
            name,
            film,
            lang,
            lecteur,
          });
        }

        break;
    }
  }

  localStorage.setItem("episodes", JSON.stringify(episodesData));
  localStorage.setItem("scans", JSON.stringify(scansData));
  localStorage.setItem("films", JSON.stringify(filmsData));

  setTimeout(() => {
    for (const key of Object.keys(localStorage)) {
      if (
        key === "episodes" ||
        key === "scans" ||
        key === "films" ||
        key === "anime" ||
        key === "color"
      ) {
      } else {
        localStorage.removeItem(key);
      }
    }
  }, 500);
}
