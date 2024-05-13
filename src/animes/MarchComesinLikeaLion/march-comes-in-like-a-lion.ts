import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/MarchComesinLikeaLion/affiche.webp";

class MarchComesinLikeaLion extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImageSaisons(1),
      },
      2: {
        name: "Saison 2",

        image: () => getImageSaisons(2),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/march-comes-in-like-a-lion/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 22,
        3: 44,
      },
    };
  }
}

export default MarchComesinLikeaLion;
