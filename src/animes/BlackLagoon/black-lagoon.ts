import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/BlackLagoon/affiche.webp";

class BlackLagoon extends Anime {
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
      3: {
        name: "Saison 3",
        image: () => getImageSaisons(3),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/black-lagoon/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 24,
        4: 29,
      },

      names: episodes,
    };
  }
}

export default BlackLagoon;
