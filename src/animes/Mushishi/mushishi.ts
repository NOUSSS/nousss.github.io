import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/Mushishi/affiche.png";

class Mushishi extends Anime {
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
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/mushishi/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Film 1",
          aliases: [""],
          image: () => getImageSaisons(1),
        },
      } as Options.Film,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/mushishi/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 26,
        3: 46,
      },
    };
  }
}

export default Mushishi;
