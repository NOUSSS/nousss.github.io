import Affiche from "@/assets/Animes/DoomBreaker/affiche.webp";
import { Anime } from "@/app/class/anime";

export default class DoomBreaker extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/doom-breaker/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Doom Breaker/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [101],
    };
  }
}
