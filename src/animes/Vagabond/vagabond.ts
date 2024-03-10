import Affiche from "@/assets/Animes/Vagabond/Affiche.webp";
import { Anime } from "@/app/class/anime";

export default class Vagabond extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/vagabond/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Vagabond/${chapitre}/${index}.jpg`,
    };
  }
}
