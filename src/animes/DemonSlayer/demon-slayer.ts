import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import Affiche from "@/assets/Animes/DemonSlayer/Affiche.webp";

import { Anime } from "@/app/class/anime";
import episodes from "./constants/episodes-names";

export default class DemonSlayer extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImage(1),
      },
      2: {
        name: "Récap Film",
        image: () => films[0].image(),
        hs: true,
      },
      3: {
        name: "Le quartier des plaisirs",
        aliases: ["crocodile", "2"],
        image: () => getImage(2),
      },
      4: {
        name: "Le village des fourgerons",
        aliases: ["ile", "poneglyphe", "3"],
        image: () => getImage(3),
      },
      5: {
        name: "L'entraînement des piliers",
        aliases: ["hashira training"],
        image: () => getImage(4),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/demon-slayer/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/demon-slayer/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Demon Slayer/${chapitre}/${index}.jpg`,

      versions: [
        {
          name: "Spin off Rengoku",
          value: "-rengoku|Demon Slayer Rengoku",
        },
        {
          name: "Spin off Tomioka",
          value: "-tomioka|Demon Slayer Tomioka",
        },
      ],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/demon-slayer/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 26,
        3: 33,
        4: 44,
        5: 55,
      },

      names: episodes,
    };
  }
}
