import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/MadeInAbyss/affiche.jpg";

class MadeInAbyss extends Anime {
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
        `https://anime-sama.fr/catalogue/made-in-abyss/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "L'aurore de l'âme des profondeurs",
          aliases: [""],
          image: () => getImageFilms(1),
        },
        2: {
          name: "Récapitulatif 1",
          aliases: [""],
          image: () => getImageFilms(2),
        },
        3: {
          name: "Récapitulatif 2",
          aliases: [""],
          image: () => getImageFilms(2),
        },
      } as Options.Film,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/made-in-abyss/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Made in Abyss/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/made-in-abyss/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 13,
        3: 25,
      },

      names: episodes,
    };
  }
}

export default MadeInAbyss;