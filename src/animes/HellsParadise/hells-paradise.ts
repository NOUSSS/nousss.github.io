import { getImage } from "./constants/images-saisons";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/HellsParadise/Affiche.jpg";

import { Anime } from "@/app/class/anime";

class HellsParadise extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/hells-paradise/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Hell's%20Paradise/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [46],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/hells-paradise/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 13,
      },

      names,
    };
  }
}

export default HellsParadise;
