import Affiche from "@/assets/Animes/BorutoTwoBlueVortex/affiche.webp";
import { Anime } from "@/app/class/anime";

export default class BorutoTwoBlueVortex extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

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
