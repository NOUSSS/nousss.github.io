import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/SpyXFamily/affiche.jpg";
import { getImageFilms } from "./constants/images-films";

class SpyXFamily extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImage(1),
      },
      2: {
        name: "Saison 1 partie 2",

        image: () => getImage(2),
      },
      3: {
        name: "Saison 2",

        image: () => getImage(3),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/spy-x-family/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Spy X Family/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [8, 18, 25, 26, 34, 42, 50, 60, 74, 75],
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (lang) =>
        `https://anime-sama.fr/catalogue/spy-x-family/film/${lang}/episodes.js`,
      names: {
        1: {
          name: "Code White",
          image: () => getImageFilms(1),
        },
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/spy-x-family/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 25,
        4: 37,
      },

      parts: {
        from: 1,
        to: 2,
        startToFirst: false,
      },

      names,
    };
  }
}

export default SpyXFamily;
