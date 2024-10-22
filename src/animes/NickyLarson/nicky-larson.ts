import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/NickyLarson/affiche.jpg";

class NickyLarson extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/city-hunter/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Film 1",
          aliases: [""],
          image: () => getImageSaisons(1),
        },
        2: {
          name: "Télé-Film 1",
          aliases: [""],
          image: () => getImageSaisons(1),
        },
        3: {
          name: "Télé-Film 2",
          aliases: [""],
          image: () => getImageSaisons(1),
        },
        4: {
          name: "Télé-Film 3",
          aliases: [""],
          image: () => getImageSaisons(1),
        },
      } as Options.Film,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/city-hunter/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}

export default NickyLarson;
