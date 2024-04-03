import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/Nom/Affiche.jpeg";

class Gintama extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes",
        aliases: [""],
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/gintama/film/${langage}/episodes.js`,

      names: films,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/gintama/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },
    };
  }
}

export default Gintama;
