import { Anime } from "@/app/class/anime";

import affiche from "@/assets/Animes/FMA/affiche.webp";
import saison1 from "@/assets/Animes/FMA/Saisons/saison1.webp";

import names from "./constants/episodes-names";

class FMA extends Anime {
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
        `https://anime-sama.fr/catalogue/fullmetal-alchemist/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/fullmetal-alchemist/scan/vf/episodes.js",

      IMAGE_URL: ({ chapitre, index }) =>
        `https://anime-sama.fr/s1/scans/Fullmetal Alchemist/${chapitre}/${index}.jpg`,
    };
  }
}

export default FMA;
