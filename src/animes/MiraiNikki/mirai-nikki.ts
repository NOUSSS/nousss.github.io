import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/MiraiNikki/affiche.jpg";

class MiraiNikki extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImageSaisons(1),
      },
      oav: {
        name: "OAV",

        image: () => getImageSaisons(1),
      },
    } as Options.Season;
    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/mirai-nikki/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 26,
      },

      names: episodes,
    };
  }
}

export default MiraiNikki;
