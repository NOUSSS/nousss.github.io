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
        aliases: [""],
        image: () => getImage(1),
      },
      2: {
        name: "Battle Tendency",
        aliases: [""],
        image: () => getImage(2),
      },
      3: {
        name: "Stardust Crusaders",
        aliases: [""],
        image: () => getImage(3),
      },
      4: {
        name: "Diamond is Unbreakable",
        aliases: [""],
        image: () => getImage(4),
      },
      5: {
        name: "Golden Wind",
        aliases: [""],
        image: () => getImage(5),
      },
      6: {
        name: "Stone Ocean",
        aliases: [""],
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
        `https://anime-sama.fr/s1/scans/JoJo's Bizarre Adventure/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/jojos-bizarre-adventure/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 9,
        3: 26,
        4: 74,
        5: 113,
        6: 152,
        7: 190,
        8: 194,
      },
    };
  }
}

export default JojoBizarreAdventure;
