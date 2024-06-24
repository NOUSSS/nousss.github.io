import { Anime } from "@/app/class/anime";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/GTO/affiche.webp";
import saison1 from "@/assets/Animes/GTO/saisons/saison1.jpg";

class GTO extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes",

        image: () => saison1,
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/great-teacher-onizuka/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names,
    };
  }
}

export default GTO;
