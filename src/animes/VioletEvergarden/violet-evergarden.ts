import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/VioletEvergarden/affiche.jpg";

class VioletEvergarden extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImageSaisons(1),
      },
      oav: {
        name: "OAV",
        image: () => getImageSaisons(1),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/violet-evergarden/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Pour mémoire",

          image: () => getImageFilms(1),
        },
        2: {
          name: "Eternité et la poupée de souvenirs automatiques",

          image: () => getImageFilms(2),
        },
        3: {
          name: "Le film",

          image: () => getImageFilms(3),
        },
      } as Options.Film,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/violet-evergarden/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 13,
      },

      names: episodes,
    };
  }
}

export default VioletEvergarden;
