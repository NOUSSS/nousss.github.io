import { getImage } from "./constants/images";
import { Anime } from "@/app/class/anime";

import names from "./constants/episodes--names";
import Affiche from "@/assets/Animes/SoloLeveling/Affiche.jpeg";

class SoloLeveling extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["1"],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      from: 0,
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/solo-leveling/scan/vf/episodes.js",

      IMAGE_URL: ({ chapitre, index }) =>
        `https://anime-sama.fr/s2/scans/Solo Leveling/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/solo-leveling/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "1",
          hs: [7],
        },
      ],
      allIndex: {
        1: 0,
      },
      names,
    };
  }
}

export default SoloLeveling;
