import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/EightySix/affiche.jpg";

class EightySix extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImage(1),
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/86-eighty-six/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "1",
          hs: [11, 19, 23],
        },
      ],

      allIndex: {
        1: 0,
      },

      names,
    };
  }
}

export default EightySix;
