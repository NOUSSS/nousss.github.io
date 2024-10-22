import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/InazumaEleven/affiche.jpg";

class InazumaEleven extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      2: {
        name: "Saison 2",
        aliases: [""],
        image: () => getImageSaisons(2),
      },
      3: {
        name: "Saison 3",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
      4: {
        name: "GO",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
      5: {
        name: "Go: Chrono Stones",
        aliases: [""],
        image: () => getImageSaisons(5),
      },
      6: {
        name: "Go: Galaxy",
        aliases: [""],
        image: () => getImageSaisons(6),
      },
      7: {
        name: "Outer Code",
        aliases: [""],
        image: () => getImageSaisons(7),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/inazuma-eleven/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      noc: true,
    };
  }
}

export default InazumaEleven;
