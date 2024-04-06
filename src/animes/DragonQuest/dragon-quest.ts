import { Anime } from "@/app/class/anime";

import names from "./episodes-names";
import Affiche from "@/assets/Animes/DragonQuest/affiche.webp";
import saison1 from "@/assets/Animes/DragonQuest/Saisons/saison1.webp";

class DragonQuest extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes",
        aliases: [""],
        image: () => saison1,
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/dragon-quest/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names,
    };
  }
}

export default DragonQuest;
