import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Toradora/affiche.jpg";

class Toradora extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImageSaisons(1),
      },
      oav: {
        name: " OAV",

        image: () => getImageSaisons(1),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/toradora/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 25,
      },

      names,
    };
  }
}

export default Toradora;
