import Affiche from "@/assets/Animes/TheBoxer/affiche.webp";
import saison1 from "@/assets/Animes/TheBoxer/Saisons/saison1.webp";

import { Anime } from "@/app/class/anime";

export default class TheBoxer extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

    this.saisons = {
      1: {
        name: "Saison 1",
        image: () => saison1,
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/the-boxer/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/The boxer/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [51, 52, 53, 54, 55, 56, 99, 100, 101, 102, 103],
    };
  }
}
