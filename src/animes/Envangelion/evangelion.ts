import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Evangelion/affiche.jpg";

class Evangelion extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImageSaisons(1),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/evangelion/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Death (True)²",

          image: () => getImageFilms(1),
        },
        2: {
          name: "The End of Evangelion",

          image: () => getImageFilms(2),
        },
        3: {
          name: "1.0 You Are (Not) Alone",

          image: () => getImageFilms(3),
        },
        4: {
          name: "2.0 You Can (Not) Advance",

          image: () => getImageFilms(4),
        },
        5: {
          name: "3.0 You Can (Not) Redo",

          image: () => getImageFilms(5),
        },
        6: {
          name: "3.0 + 1.0 Thrice Upon a Time",

          image: () => getImageFilms(6),
        },
      } as Options.Film,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/evangelion/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}

export default Evangelion;
