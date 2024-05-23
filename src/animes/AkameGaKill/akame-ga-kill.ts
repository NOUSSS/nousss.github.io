import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/AkameGaKill/affiche.png";

class AkameGaKill extends Anime {
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
        "https://anime-sama.fr/catalogue/akame-ga-kill/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Akame Ga Kill/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [23, 34],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/akame-ga-kill/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}

export default AkameGaKill;
