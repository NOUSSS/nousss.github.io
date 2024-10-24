import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/KurokoBasket/Affiche.jpg";
import names from "./constants/episodes-names";

export default class KurokoBasket extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["kagami", "generation miracle"],
        image: () => getImage(1),
      },
      2: {
        name: "Saison 2",
        aliases: ["midorima"],
        image: () => getImage(2),
      },
      3: {
        name: "Winter cup (Saison 3)",
        aliases: ["akashi"],
        image: () => getImage(3),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/kuroko-no-basket/film/${langage}/episodes.js`,
      names: films,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/kuroko-no-basket/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "1",
          hs: [21],
        },
        {
          saison: "2",
          hs: [16],
        },
      ],

      allIndex: {
        1: 0,
        2: 25,
        3: 50,
      },

      names,
    };
  }
}
