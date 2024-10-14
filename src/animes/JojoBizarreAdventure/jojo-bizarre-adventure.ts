import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/JojoBizarreAdventure/affiche.png";

class JojoBizarreAdventure extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Phantom Blood",

        image: () => getImage(1),
      },
      2: {
        name: "Battle Tendency",

        image: () => getImage(2),
      },
      3: {
        name: "Stardust Crusaders",

        image: () => getImage(3),
      },
      4: {
        name: "Diamond is Unbreakable",

        image: () => getImage(4),
      },
      5: {
        name: "Golden Wind",

        image: () => getImage(5),
      },
      6: {
        name: "Stone Ocean",

        image: () => getImage(6),
      },
      oav: {
        name: "OAV Rohan Kishibe",
        image: () => getImage(7),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/jojos-bizarre-adventure/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/JoJo's Bizarre Adventure/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/jojos-bizarre-adventure/saison${index}/${lang}/episodes.js`,

      noc: true,

      allIndex: {
        1: 0,
      },
    };
  }
}

export default JojoBizarreAdventure;
