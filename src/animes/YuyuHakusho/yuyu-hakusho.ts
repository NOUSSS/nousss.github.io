import { getImage } from "./constants/image-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/YuyuHakusho/Affiche.webp";
import episodes from "./constants/episodes-names";

export default class YuyuHakusho extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes",
        aliases: ["debut"],
        image: () => getImage(1),
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/yuyu-hakusho/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}
