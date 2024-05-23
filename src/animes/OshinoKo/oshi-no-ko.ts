import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/OshinoKo/affiche.jpg";

class OshinoKo extends Anime {
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
        "https://anime-sama.fr/catalogue/oshi-no-ko/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Oshi no Ko/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [90, 126, 127, 128, 129],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/oshi-no-ko/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "1",
          hs: [7],
        },
      ],

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}

export default OshinoKo;
