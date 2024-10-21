import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/RisingImpact/affiche.jpg";

class RisingImpact extends Anime {
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
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/rising-impact/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 26,
      },

      names: episodes,
    };
  }
}

export default RisingImpact;
