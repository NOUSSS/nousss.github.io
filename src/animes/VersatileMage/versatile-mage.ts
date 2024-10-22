import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/VersatileMage/affiche.webp";

class VersatileMage extends Anime {
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
        name: "Saison 3",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
      4: {
        name: "Saison 4",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
      5: {
        name: "Saison 5",
        aliases: [""],
        image: () => getImageSaisons(5),
      },
      6: {
        name: "Saison 6",
        image: () => getImageSaisons(6),
      },
    } as Options.Season;

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/versatile-mage/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Versatile Mage/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/versatile-mage/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 24,
        4: 36,
        5: 48,
        6: 60,
        7: 72,
      },
    };
  }
}

export default VersatileMage;
