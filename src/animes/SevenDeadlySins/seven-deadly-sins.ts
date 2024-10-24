import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/SevenDeadlySins/Affiche.jpg";
import names from "./constants/episodes-names";

export default class SevenDeadlySins extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        image: () => getImage(1),
      },
      2: {
        name: "Saison 2",
        image: () => getImage(2),
      },
      3: {
        name: "Saison 3",
        image: () => getImage(3),
      },
      4: {
        name: "Saison 4",
        image: () => getImage(4),
      },
      oav: {
        name: "OAV",
        image: () => getImage(5),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/seven-deadly-sins/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/seven-deadly-sins/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Seven Deadly Sins/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/seven-deadly-sins/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "1",
          hs: [28],
        },
      ],

      allIndex: {
        1: 0,
        2: 28,
        3: 52,
        4: 76,
        5: 100,
      },

      names,
    };
  }
}
