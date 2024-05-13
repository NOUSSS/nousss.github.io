import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Bleach/affiche.webp";

import { Anime } from "@/app/class/anime";

class Bleach extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes",

        image: () => getImage(1),
      },
      2: {
        name: "Thousand Year Blood War (1)",
        aliases: ["partie 1"],
        image: () => getImage(2),
      },
      3: {
        name: "Thousand Year Blood War (2)",
        aliases: ["partie 2"],
        image: () => getImage(3),
      },
      oav: {
        name: "OAV",
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/bleach/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/bleach/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s1/scans/Bleach/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/bleach/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 366,
        3: 379,
        4: 392,
      },

      parts: {
        from: 2,
        to: 3,
        startToFirst: false,
      },

      names,
    };
  }
}

export default Bleach;
