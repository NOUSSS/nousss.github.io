import { getImage } from "./constants/image-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "../../assets/Animes/SlamDunk/Affiche.webp";

export default class SlamDunk extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tout les épisodes",
        aliases: ["debut"],
        image: () => getImage(1),
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/slam-dunk/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },
    };
  }
}
