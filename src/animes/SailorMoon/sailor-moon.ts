import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/SailorMoon/affiche.jpg";

class SailorMoon extends Anime {
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
        name: "Crystal Saison 1",
        aliases: [""],
        image: () => getImageSaisons(6),
      },
      7: {
        name: "Crystal Saison 2",
        aliases: [""],
        image: () => getImageSaisons(7),
      },
      8: {
        name: "Crystal Saison 3",
        aliases: [""],
        image: () => getImageSaisons(8),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/sailor-moon/saison${index}/${lang}/episodes.js`,

      noc: true,

      allIndex: {
        1: 0,
      },
    };
  }
}

export default SailorMoon;
