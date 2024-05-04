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
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      2: {
        name: "Chapitre Hades",
        aliases: [""],
        image: () => getImageSaisons(2),
      },
      3: {
        name: "The Lost Canvas",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
      4: {
        name: "Omega",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
      5: {
        name: "Soul of God",
        aliases: [""],
        image: () => getImageSaisons(5),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/saint-seiya/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Eris",
          aliases: [""],
          image: () => getImageFilms(1),
        },
        2: {
          name: "Dorbal",
          aliases: [""],
          image: () => getImageFilms(2),
        },
        3: {
          name: "Abel",
          aliases: [""],
          image: () => getImageFilms(3),
        },
        4: {
          name: "Lucifer",
          aliases: [""],
          image: () => getImageFilms(4),
        },
        5: {
          name: "Artemis",
          aliases: [""],
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
