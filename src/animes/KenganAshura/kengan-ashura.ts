import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/KenganAshura/affiche.jpg";

class KenganAshura extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1 (1)",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      2: {
        name: "Saison 1 (2)",
        aliases: [""],
        image: () => getImageSaisons(2),
      },
      3: {
        name: "Saison 2 (1)",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
      4: {
        name: "Saison 2 (2)",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
    } as Options.Season;

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/nom/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/Nom%20Nom/{chapitre}/{index}.jpg`,

      CHAPITRE_SPECIAUX: [1045],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/kengan-ashura/saison${index}/${lang}/episodes.js`,

      parts: [
        {
          from: 1,
          to: 2,
        },
        {
          startToFirst: true,
          from: 3,
          to: 4,
        },
      ],

      allIndex: {
        1: 0,
        2: 12,
        3: 24,
        4: 36,
        5: 52,
      },
    };
  }
}

export default KenganAshura;
