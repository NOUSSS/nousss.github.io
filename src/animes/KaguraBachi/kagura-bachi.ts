import Affiche from "@/assets/Animes/KaguraBachi/Affiche.jpg";
import { Anime } from "@/app/class/anime";

export default class KaguraBachi extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

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
        `https://s22.anime-sama.fr/s1/scans/Kagura%20Bachi/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [],
    };
  }
}
