import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/Frieren/affiche.webp";

export default class Frieren extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/frieren/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Frieren/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [110, 111, 112],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/frieren/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },
    };
  }
}
