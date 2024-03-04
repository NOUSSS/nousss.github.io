import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import episodes from "./constants/episodes-names";
import Affiche from "../../assets/Animes/MobPsycho100/Affiche.webp";

class MobPsycho100 extends Anime {
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
      3: {
        name: "Saison 3",
        aliases: ["3"],
        image: () => getImage(3),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/mob-psycho-100/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Mob%20Psycho%20100/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [9, 18, 45, 77, 87, 93, 96, 102, 105, 108, 109],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/mob-psycho-100/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 25,
        4: 37,
      },
      names: episodes,
    };
  }
}

export default MobPsycho100;
