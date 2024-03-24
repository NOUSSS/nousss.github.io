import { Anime } from "@/app/class/anime";

import affiche from "@/assets/Animes/Bucchigiri/affiche.webp";
import saison1 from "@/assets/Animes/Bucchigiri/Saisons/Saison1.webp";

class Bucchigiri extends Anime {
  constructor() {
    super();

    this.affiche = affiche;

    this.saisons = {
      1: {
        name: "Saison 1",
        image: () => saison1,
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/bucchigiri/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      horsSeries: [
        {
          saison: "1",
          hs: [6],
        },
      ],
    };
  }
}

export default Bucchigiri;
