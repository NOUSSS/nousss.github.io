import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";
import { Anime } from "@/app/class/anime";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/ReZero/affiche.webp";

class ReZero extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImage(1),
      },
      2: {
        name: "Saison 2",

        image: () => getImage(2),
      },
      3: {
        name: "Saison 3",
        image: () => getImage(3)
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/re-zero/film/${langage}/episodes.js`,
      names: films,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/re-zero/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 25,
        3: 50,
      },

      names,
    };
  }
}

export default ReZero;
