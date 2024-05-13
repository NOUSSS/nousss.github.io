import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/Erased/affiche.jpg";
import saison1 from "@/assets/Animes/Erased/Saisons/saison1.webp";
import names from "./constants/episodes-names";

class Erased extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes",

        image: () => saison1,
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/erased/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s1/scans/Erased/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/erased/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: names,
    };
  }
}

export default Erased;
