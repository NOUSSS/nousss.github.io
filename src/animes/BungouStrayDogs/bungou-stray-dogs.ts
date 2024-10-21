import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/BungoStrayDogs/Affiche.jpeg";

class BungoStrayDogs extends Anime {
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
        name: "Saison 4",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
      5: {
        name: "Saison 5",
        aliases: [""],
        image: () => getImageSaisons(5),
      },
      6: {
        name: "Bungo Stray Dogs Wan",
        hs: true,
        aliases: [""],
        image: () => getImageSaisons(5),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/bungo-stray-dogs/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Dead Apple",
          aliases: [""],
          image: () => getImageFilms(1),
        },
      } as Options.Film,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/bungo-stray-dogs/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Bungou Stray Dogs/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/bungo-stray-dogs/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 25,
        4: 37,
        5: 50,
        6: 61,
      },

      names: episodes,
    };
  }
}

export default BungoStrayDogs;
