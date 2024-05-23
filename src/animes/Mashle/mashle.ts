import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/Mashle/Affiche.jpeg";
import names from "./constants/episodes-names";

export default class Mashle extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["1"],
        image: () => getImage(1),
      },
      2: {
        name: "Saison 2",
        aliases: ["2"],
        image: () => getImage(2),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/mashle/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/Mashle/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [] as number[],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/mashle/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "1",
          hs: [6],
        },
      ],

      allIndex: {
        1: 0,
        2: 12,
      },

      names,
    };
  }
}
