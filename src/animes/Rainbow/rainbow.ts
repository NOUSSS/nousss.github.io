import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./episodes-names";
import Affiche from "@/assets/Animes/Rainbow/affiche.jpg";
import saison1 from "@/assets/Animes/Rainbow/Saisons/saison1.jpg";

class Rainbow extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => saison1,
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/rainbow/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}

export default Rainbow;
