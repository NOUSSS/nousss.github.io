import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/KaguyaSama/affiche.webp";

class KaguyaSama extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImageSaisons(1),
      },
      2: {
        name: "Saison 2",

        image: () => getImageSaisons(2),
      },
      3: {
        name: "Saison 3",

        image: () => getImageSaisons(3),
      },
      oav: {
        name: "OAV",
        image: () => getImageSaisons(3),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/kaguya-sama-love-is-war/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "The first kiss that never ends (part 1)",

          image: () => getImageFilms(1),
        },
        2: {
          name: "The first kiss that never ends (part 2)",

          image: () => getImageFilms(1),
        },
        3: {
          name: "The first kiss that never ends (part 3)",

          image: () => getImageFilms(1),
        },
        4: {
          name: "The first kiss that never ends (part 4)",

          image: () => getImageFilms(1),
        },
      } as Options.Film,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/kaguya-sama-love-is-war/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Kaguya-sama: Love is War/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [5, 28, 66, 139, 176],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/kaguya-sama-love-is-war/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 24,
        4: 37,
      },
    };
  }
}

export default KaguyaSama;
