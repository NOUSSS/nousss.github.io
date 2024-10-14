import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/RankingOfKings/affiche.jpg";

class RankingOfKings extends Anime {
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
        name: "Le trésor du courage",
        aliases: [""],
        hs: true,
        image: () => getImageSaisons(2),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/ousama-ranking/saison${index}/${lang}/episodes.js`,

      noc: true,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}

export default RankingOfKings;
