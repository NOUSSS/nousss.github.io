import Affiche from "@/assets/Animes/BlueLock/Affiche.jpg";
import names from "./constants/episodes-names";

import { Anime } from "@/app/class/anime";
import { getImage } from "./constants/images-saisons";

export default class BlueLock extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/blue-lock/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Blue%20Lock/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/blue-lock/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 24,
      },

      names,
    };
  }
}
