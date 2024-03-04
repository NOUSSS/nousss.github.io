import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "../../assets/Animes/OnePunchMan/Affiche.jpg";

export default class OnePunchMan extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["1"],
        image: () => getImage(1),
      },
      2: {
        name: "Saison 2",
        aliases: ["2"],
        image: () => getImage(2),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/one-punch-man/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/One%20Punch%20Man/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/one-punch-man/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 24,
      },
    };
  }
}
