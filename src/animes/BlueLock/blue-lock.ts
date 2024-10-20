import Affiche from "@/assets/Animes/BlueLock/Affiche.jpg";
import names from "./constants/episodes-names";

import { Anime } from "@/app/class/anime";
import { getImage } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";

export default class BlueLock extends Anime {
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
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/blue-lock/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/Blue lock/${chapitre}/${index}.jpg`,

      versions: [
        {
          name: "Spin-off Nagi",
          value: "_spin-off|Blue Lock Spin-off Nagi",
        },
      ],
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/blue-lock/film/${langage}/episodes.js`,
      names: {
        0: {
          name: "Nagi",
          aliases: ["1"],
          image: () => getImageFilms(1),
        },
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/blue-lock/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 24,
      },

      names,
    };
  }
}
