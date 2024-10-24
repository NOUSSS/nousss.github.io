import { getImage } from "./constants/image-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/SlamDunk/Affiche.webp";
import names from "./constants/episodes-names";
import { getImageFilms } from "./constants/images-films";

export default class SlamDunk extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes",
        aliases: ["debut"],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/slam-dunk/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/Slam Dunk/${chapitre}/${index}.jpg`,
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage) =>
        `https://anime-sama.fr/catalogue/slam-dunk/film/${langage}/episodes.js`,

      names: {
        1: {
          name: "The first Slam Dunk",
          image: () => getImageFilms(1),
        },
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/slam-dunk/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names,
    };
  }
}
