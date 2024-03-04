import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import episodes from "./constants/episodes-names";
import Affiche from "../../assets/Animes/FairyTail/Affiche.jpg";

import { Anime } from "@/app/class/anime";

class FairyTail extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tout les épisodes",
        aliases: [""],
        image: () => getImage(1),
      },
      2: {
        name: "OAV",
        aliases: [""],
        image: () => getImage(2),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/fairy-tail/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/fairy-tail/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Fairy%20Tail/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [425, 451, 464, 492],
    };

    this.note = [
      {
        saison: "2",
        message:
          "Ce sont des episodes speciaux, ils ne sont donc pas important pour l'histoire voir inutile.",
      },
    ];

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/fairy-tail/saison${index}/${lang}/episodes.js`,

      oav: true,

      allIndex: {
        1: 0,
        2: 328,
      },

      names: episodes,
    };
  }
}

export default FairyTail;
