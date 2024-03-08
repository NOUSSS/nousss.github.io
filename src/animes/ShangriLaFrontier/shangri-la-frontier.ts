import { getImage } from "./constants/images-saisons";

import Affiche from "@/assets/Animes/ShangriLaFrontier/Affiche.jpg";
import { Anime } from "@/app/class/anime";

export default class ShangriLaFrontier extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/shangri-la-frontier/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Shangri-La%20Frontier/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/shangri-la-frontier/saison${index}/${lang}/episodes.js`,

      horsSeries: [{ saison: "1", hs: [14] }],
      allIndex: {
        1: 0,
      },
    };
  }
}
