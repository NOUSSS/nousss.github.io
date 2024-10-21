import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/Suzume/affiche.jpeg";

class Suzume extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/suzume/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Suzume no Tojimari",
          aliases: [""],
          image: () => getImageFilms(1),
        },
      } as Options.Film,
    };
  }
}

export default Suzume;
