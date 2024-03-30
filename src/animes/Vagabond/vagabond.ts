import Affiche from "@/assets/Animes/Vagabond/Affiche.webp";
import saison1 from "@/assets/Animes/Vagabond/Saisons/saison1.webp";

import { Anime } from "@/app/class/anime";

export default class Vagabond extends Anime {
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
        "https://anime-sama.fr/catalogue/vagabond/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s1/scans/Vagabond/${chapitre}/${index}.jpg`,
    };
  }
}
