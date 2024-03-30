import { Anime } from "@/app/class/anime";
import { films } from "./constants/films-names";

import affiche from "@/assets/Animes/DragonBallGT/affiche.webp";
import saison1 from "@/assets/Animes/DragonBallGT/Saisons/saison1.webp";
import names from "./constants/episodes-names";

class DragonBallGT extends Anime {
  constructor() {
    super();

    this.affiche = affiche;

    this.saisons = {
      1: {
        name: "Tous les épisodes",
        image: () => saison1,
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/dragon-ball-gt/film/${langage}/episodes.js`,

      names: films,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/dragon-ball-gt/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names,
    };
  }
}

export default DragonBallGT;
