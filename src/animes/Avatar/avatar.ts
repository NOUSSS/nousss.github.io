import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Avatar/affiche.webp";

class Avatar extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      2: {
        name: "Saison 2",
        aliases: [""],
        image: () => getImageSaisons(2),
      },
      3: {
        name: "Saison 3",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
    } as Options.Season;

    this.note = "Uniquement la VF est disponible (mise automatiquement)";

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/avatar-le-dernier-maitre-de-l-air/saison${index}/vf/episodes.js`,

      allIndex: {
        1: 0,
        2: 20,
        3: 40,
        4: 61,
      },

      names: episodes,
    };
  }
}

export default Avatar;
