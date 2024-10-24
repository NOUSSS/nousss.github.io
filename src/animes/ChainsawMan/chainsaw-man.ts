import { getImage } from "./constants/images-saisons";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/ChainsawMan/Affiche.jpg";

import { Anime } from "@/app/class/anime";

class ChainsawMan extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/chainsaw-man/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Chainsaw Man/${chapitre}/${index}.jpg`,

      versions: [
        {
          name: "Digital colored comics",
          value: "_special|Chainsaw Man – Digital Colored Comics",
        },
      ],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/chainsaw-man/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
      },

      names,
    };
  }
}

export default ChainsawMan;
