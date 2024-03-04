import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import Affiche from "../../assets/Animes/AssassinationClassroom/Affiche.webp";

import { Anime } from "@/app/class/anime";

export default class AssassinationClassroom extends Anime {
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

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/assassination-classroom/film/${langage}/episodes.js`,
      names: films,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/assassination-classroom/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 22,
        3: 47,
      },
    };
  }
}
