import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/MushokuTensei/affiche.jpg";
import episodes from "./constants/episodes-names";

class MushokuTensei extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImage(1),
      },
      2: {
        name: "Saison 2 partie 1",

        image: () => getImage(2),
      },
      3: {
        name: "Saison 2 partie 2",

        image: () => getImage(3),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/mushoku-tensei/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Mushoku Tensei/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [5, 11, 20, 59, 67, 73, 78, 86],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/mushoku-tensei/saison${index}/${lang}/episodes.js`,

      parts: {
        from: 2,
        to: 3,
        startToFirst: true,
      },

      noc: true,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}

export default MushokuTensei;
