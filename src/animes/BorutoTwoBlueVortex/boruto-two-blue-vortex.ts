import Affiche from "@/assets/Animes/BorutoTwoBlueVortex/affiche.jpg";
import saison1 from "@/assets/Animes/BorutoTwoBlueVortex/saisons/saison1.webp";

import { Anime } from "@/app/class/anime";

export default class BorutoTwoBlueVortex extends Anime {
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
        "https://anime-sama.fr/catalogue/boruto/scan-boruto-two-blue-vortex/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Boruto Two Blue Vortex/${chapitre}/${index}.jpg`,
    };
  }
}
