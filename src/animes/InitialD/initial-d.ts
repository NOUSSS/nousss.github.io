import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/InitialD/affiche.webp";

class InitialD extends Anime {
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
        name: "Saison 4",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
      5: {
        name: "Saison 5",
        aliases: [""],
        image: () => getImageSaisons(5),
      },
      6: {
        name: "Saison 6",
        aliases: [""],
        image: () => getImageSaisons(6),
      },
      7: {
        name: "Battle Stage (saison 7)",
        aliases: [""],
        image: () => getImageSaisons(7),
      },
      8: {
        name: "Extra Stage (saison 8)",
        aliases: [""],
        image: () => getImageSaisons(8),
      },
      9: {
        name: "Legend (saison 9)",
        aliases: [""],
        image: () => getImageSaisons(9),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/initial-d/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      noc: true,
    };
  }
}

export default InitialD;
