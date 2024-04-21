import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/DrStone/affiche.webp";

class DrStone extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      2: {
        name: "Saison 2",
        aliases: [""],
        image: () => getImageSaisons(2),
      },
      3: {
        name: "Saison 3 partie 1",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
      4: {
        name: "Saison 3 partie 2",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
      oav: {
        name: "OAV",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
    } as Options.Season;

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/dr-stone/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s1/scans/Dr Stone/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [232],

      versions: [
        {
          name: "Reboot Byakuya",
          value: "_byakuya|Dr Stone Reboot Byakuya",
        },
        {
          name: "4D Special",
          value: "_4d_special|Dr Stone 4D Science",
        },
      ],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/dr-stone/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 24,
        3: 35,
        4: 46,
        5: 57,
      },

      parts: {
        from: 3,
        to: 4,
      },

      names: episodes,
    };
  }
}

export default DrStone;
