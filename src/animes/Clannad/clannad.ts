import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Clannad/affiche.jpg";

class Clannad extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImageSaisons(1),
      },
      2: {
        name: "Saison 2",

        image: () => getImageSaisons(2),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/clannad/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "1",
          hs: [22, 23],
        },
        {
          saison: "2",
          hs: [22, 23, 24],
        },
      ],

      allIndex: {
        1: 0,
        2: 22,
        3: 44,
      },

      names: episodes,
    };
  }
}

export default Clannad;
