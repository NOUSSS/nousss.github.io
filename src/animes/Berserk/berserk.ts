import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/Berserk/affiche.png";

class Berserk extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Berserk 1997",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      2: {
        name: "Berserk 2016",
        aliases: [""],
        image: () => getImageSaisons(2),
      },
      3: {
        name: "L'âge d'or - Memorial Edition",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/berserk/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "L'oeuf du roi conquérant",
          aliases: [""],
          image: () => getImageFilms(1),
        },
        2: {
          name: "La bataille de Doldrey",
          aliases: [""],
          image: () => getImageFilms(2),
        },
        3: {
          name: "L'avent",
          aliases: [""],
          image: () => getImageFilms(2),
        },
      } as Options.Film,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/berserk/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/Berserk/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/berserk/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 25,
        3: 49,
        4: 62,
      },

      noc: true,
    };
  }
}

export default Berserk;
