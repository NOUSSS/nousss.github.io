import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import Affiche from "../../assets/Animes/HunterXHunter/Affiche.jpeg";
import episodes from "./constants/episodes-names";
import { Anime } from "@/app/class/anime";

class HunterXHunter extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Anime de 2011",
        aliases: [
          "fourmi",
          "election",
          "greed",
          "york shin",
          "brigade",
          "netero",
          "ging",
          "tour",
          "hisoka",
        ],
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/hunter-x-hunter/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/hunter-x-hunter/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Hunter%20x%20Hunter/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [358, 392],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/hunter-x-hunter/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
      },
      names: episodes,
    };
  }
}

export default HunterXHunter;
