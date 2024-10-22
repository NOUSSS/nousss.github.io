import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/SaikiKusuo/affiche.jpg";

class SaikiKusuo extends Anime {
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
        name: "Saison 3 (Final Chapter)",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
      oav: {
        name: "Reawakened",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/saiki-kusuo/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 24,
        3: 48,
        4: 50,
      },
    };
  }
}

export default SaikiKusuo;
