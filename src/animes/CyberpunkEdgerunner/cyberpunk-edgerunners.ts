import { Anime } from "@/app/class/anime";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/CyberpunkEdgerunners/affiche.webp";
import saison1 from "@/assets/Animes/CyberpunkEdgerunners/saisons/saison1.webp";

class CyberpunkEdgerunners extends Anime {
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
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/cyberpunk-edgerunners/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}

export default CyberpunkEdgerunners;
