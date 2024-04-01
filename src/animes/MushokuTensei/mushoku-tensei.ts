import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/MushokuTensei/affiche.jpg";

class MushokuTensei extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImage(1),
      },
      2: {
        name: "Saison 2",
        aliases: [""],
        image: () => getImage(2),
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
        `https://anime-sama.fr/s1/scans/Mushoku Tensei/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [5, 11, 20, 59, 67, 73, 78, 86],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/mushoku-tensei/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "1",
          hs: [23],
        },
        {
          saison: "2",
          hs: [0],
        },
      ],

      allIndex: {
        1: 0,
        2: 23,
        3: 35,
      },
    };
  }
}

export default MushokuTensei;
