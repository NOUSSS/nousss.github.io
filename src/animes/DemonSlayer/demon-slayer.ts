import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import Affiche from "../../assets/Animes/DemonSlayer/Affiche.webp";

import { Anime } from "@/app/class/anime";

export default class DemonSlayer extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImage(1),
      },
      2: {
        name: "Le quartier des plaisirs",
        aliases: ["crocodile", "2"],
        image: () => getImage(2),
      },
      3: {
        name: "Le village des fourgerons",
        aliases: ["ile", "poneglyphe", "3"],
        image: () => getImage(3),
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
        `https://s22.anime-sama.fr/s1/scans/Demon%20Slayer/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [],
    };

    this.note = [
      {
        saison: "2",
        message:
          "Il est IMPERATIF d'avoir vu le film 'train de l'infini' avant de regarder cette saison !",
      },
    ];

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/demon-slayer/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 26,
        3: 37,
        4: 48,
      },
    };
  }
}
