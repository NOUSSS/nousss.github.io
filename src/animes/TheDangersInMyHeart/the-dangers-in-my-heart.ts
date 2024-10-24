import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/TheDangersInMyHeart/affiche.jpg";

class TheDangersInMyHeart extends Anime {
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

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/boku-no-kokoro-no-yabai-yatsu/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Boku no Kokoro no Yabai Yatsu/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/boku-no-kokoro-no-yabai-yatsu/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 13,
        3: 26,
      },
    };
  }
}

export default TheDangersInMyHeart;
