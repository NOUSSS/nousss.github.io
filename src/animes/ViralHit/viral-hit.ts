import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/ViralHit/affiche.jpeg";
import names from "./constants/episodes-names";

class ViralHit extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImageSaisons(1),
      },
    } as Options.Season;

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/viral-hit/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/Viral Hit/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [134, 135, 136, 137],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/viral-hit/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: names,
    };
  }
}

export default ViralHit;
