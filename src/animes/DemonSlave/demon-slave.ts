import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "../../assets/Animes/DemonSlave/Affiche.jpg";

export default class DemonSlave extends Anime {
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
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/demon-slave/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Demon%20Slave/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [24, 25, 41, 42, 51, 61],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/demon-slave/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },
    };
  }
}
