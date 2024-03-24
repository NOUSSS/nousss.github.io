import { Anime } from "@/app/class/anime";

import affiche from "@/assets/Animes/FMAB/affiche.webp";
import saison1 from "@/assets/Animes/FMAB/Saisons/saison1.webp";
import episodes from "./constants/episodes-names";

class FMAB extends Anime {
  constructor() {
    super();

    this.affiche = affiche;

    this.saisons = {
      1: {
        name: "Saison 1",
        image: () => saison1,
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/fullmetal-alchemist-brotherhood/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/fullmetal-alchemist-brotherhood/scan/vf/episodes.js",

      IMAGE_URL: ({ chapitre, index }) =>
        `https://anime-sama.fr/s1/scans/FullMetal Alchemist Brotherhood/${chapitre}/${index}.jpg`,
    };
  }
}

export default FMAB;
