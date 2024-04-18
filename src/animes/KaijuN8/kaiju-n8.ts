import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/KaijuN8/affiche.webp";
import names from "./constants/episodes-names";

class KaijuN8 extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
    } as Options.Season;

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/kaiju-n8/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s1/scans/Kaiju N°8/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [73, 93, 99],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/kaiju-n8/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names,
    };
  }
}

export default KaijuN8;
