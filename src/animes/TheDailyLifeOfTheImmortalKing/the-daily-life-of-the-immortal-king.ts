import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/TheDailyLifeOfTheImmortalKing/Affiche.jpg";

export default class TheDailyLifeOfTheImmortalKing extends Anime {
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

        image: () => getImage(3),
      },

      4: {
        name: "Saison 4",

        image: () => getImage(4),
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/the-daily-life-of-the-immortal-king/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 15,
        3: 27,
        4: 39,
      },
    };
  }
}
