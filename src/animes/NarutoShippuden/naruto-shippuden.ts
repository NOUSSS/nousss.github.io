import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import Affiche from "@/assets/Animes/NarutoShippuden/Affiche.jpg";
import { Anime } from "@/app/class/anime";

export default class NarutoShippuden extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes (fillers)",

        image: () => getImage(1),
      },
      2: {
        name: "Tous les épisodes (sans fillers)",
        hs: true,
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/naruto-shippuden/film/${langage}/episodes.js`,
      names: films,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/naruto-shippuden/saison${index}/${lang}/episodes.js`,

      noc: true,

      allIndex: {
        1: 0,
      },
    };
  }
}
