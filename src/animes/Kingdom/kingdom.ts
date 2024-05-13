import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Kingdom/affiche.jpg";

class Kingdom extends Anime {
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
      3: {
        name: "Saison 3",

        image: () => getImageSaisons(3),
      },
      4: {
        name: "Saison 4",

        image: () => getImageSaisons(4),
      },
      5: {
        name: "Saison 5",

        image: () => getImageSaisons(5),
      },
    } as Options.Season;

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/kingdom/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s1/scans/Kingdom/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/kingdom/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 38,
        3: 77,
        4: 103,
        5: 129,
        6: 142,
      },

      names: episodes,
    };
  }
}

export default Kingdom;
