import { getImage } from "./constants/images-saisons";
import names from "./constants/episodes-names";

import Affiche from "@/assets/Animes/TowerOfGod/Affiche.jpg";
import { Anime } from "@/app/class/anime";

export default class TowerOfGod extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["Saison 1"],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/tower-of-god/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Tower of God/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [78],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/tower-of-god/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
        2: 13,
      },

      names,
    };
  }
}
