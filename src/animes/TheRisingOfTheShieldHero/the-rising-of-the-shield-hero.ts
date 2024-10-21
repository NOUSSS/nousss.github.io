import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/TheRisingOfTheShieldHero/affiche.jpg";

class TheRisingOfTheShieldHero extends Anime {
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
    } as Options.Season;

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/the-rising-of-the-shield-hero/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/The Rising of the Shield Hero/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/the-rising-of-the-shield-hero/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "10",
          hs: [127, 139, 147, 156, 162, 173, 190, 195, 204, 210, 221],
        },
        {
          saison: "11",
          hs: [4],
        },
      ],

      allIndex: {
        1: 0,
        2: 25,
        3: 38,
        4: 50,
      },

      names: episodes,
    };
  }
}

export default TheRisingOfTheShieldHero;
