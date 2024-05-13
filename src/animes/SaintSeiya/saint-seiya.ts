import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/SaintSeiya/affiche.jpg";

class SaintSeiya extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Les Chevaliers du Zodiaque",

        image: () => getImageSaisons(1),
      },
      2: {
        name: "Chapitre Hades",

        image: () => getImageSaisons(2),
      },
      3: {
        name: "The Lost Canvas",

        image: () => getImageSaisons(3),
      },
      4: {
        name: "Omega",

        image: () => getImageSaisons(4),
      },
      5: {
        name: "Soul of God",

        image: () => getImageSaisons(5),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/saint-seiya/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Eris",

          image: () => getImageFilms(1),
        },
        2: {
          name: "Dorbal",

          image: () => getImageFilms(2),
        },
        3: {
          name: "Abel",

          image: () => getImageFilms(3),
        },
        4: {
          name: "Lucifer",

          image: () => getImageFilms(4),
        },
        5: {
          name: "Artemis",

          image: () => getImageFilms(5),
        },
      } as Options.Film,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/saint-seiya/saison${index}/${lang}/episodes.js`,
      allIndex: {
        1: 0,
        2: 114,
        3: 139,
        4: 165,
        5: 262,
        6: 275,
      },
    };
  }
}

export default SaintSeiya;
