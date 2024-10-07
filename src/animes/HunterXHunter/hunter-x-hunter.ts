import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import Affiche from "@/assets/Animes/HunterXHunter/Affiche.jpeg";
import names from "./constants/episodes-names";
import { Anime } from "@/app/class/anime";

class HunterXHunter extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Version 2011",
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
        image: () => getImage(2),
      },
      2: {
        name: "Version 1999",
        hs: true,
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
        `https://anime-sama.fr/s2/scans/Hunter x Hunter/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [358, 392],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/hunter-x-hunter/saison${index}/${lang}/episodes.js`,

      noc: true,

      allIndex: {
        1: 0,
      },
      names,
    };
  }
}

export default HunterXHunter;
