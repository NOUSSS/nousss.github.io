import Affiche from "@/assets/Animes/KaguraBachi/Affiche.jpg";
import saison1 from "@/assets/Animes/KaguraBachi/saisons/saison1.webp";

import { Anime } from "@/app/class/anime";

export default class KaguraBachi extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

    this.saisons = {
      1: { name: "Saison 1", image: () => saison1 },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/kagura-bachi/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Kagura Bachi/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [],
    };
  }
}
