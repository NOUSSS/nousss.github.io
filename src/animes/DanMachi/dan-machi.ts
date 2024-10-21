import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/DanMachi/affiche.jpg";

class DanMachi extends Anime {
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
        image: () => getImageSaisons(3),
      },
      3: {
        name: "Saison 3",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
      4: {
        name: "Saison 4 (1)",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
      5: {
        name: "Saison 4 (2)",
        aliases: [""],
        image: () => getImageSaisons(5),
      },
      6: {
        name: "Saison 5",
        aliases: [""],
        image: () => getImageSaisons(6),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/danmachi/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Arrow of the Orion",
          aliases: [""],
          image: () => getImageFilms(1),
        },
      } as Options.Film,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/danmachi/saison${index}/${lang}/episodes.js`,

      parts: {
        from: 4,
        to: 5,
        startToFirst: false,
      },

      noc: true,

      allIndex: {
        1: 0,
      },
    };
  }
}

export default DanMachi;
