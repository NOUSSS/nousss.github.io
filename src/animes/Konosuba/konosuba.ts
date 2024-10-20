import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Konosuba/affiche.jpg";

class Konosuba extends Anime {
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
      3: {
        name: "Saison 3",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
      4: {
        name: "An explosion on this wonderful world",
        aliases: [""],
        hs: true,
        image: () => getImageSaisons(4),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/konosuba/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Legend of Crimson",
          aliases: [""],
          image: () => getImageFilms(1),
        },
      } as Options.Film,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/konosuba/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 11,
        3: 22,
        4: 33,
        5: 45,
      },

      names: episodes,
    };
  }
}

export default Konosuba;
