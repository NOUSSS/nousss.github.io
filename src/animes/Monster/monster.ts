import { getImage } from "./constants/image-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/Monster/Affiche.jpg";
import names from "./constants/episodes-names";

export default class Monster extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les episodes",
        aliases: ["debut"],
        image: () => getImage(1),
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/monster/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names,
    };
  }
}
