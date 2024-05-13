import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/SuperDragonBallHeroes/affiche.jpg";

class SuperDragonBallHeroes extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",

        image: () => getImageSaisons(1),
      },
      2: {
        name: "Saison 2",

        image: () => getImageSaisons(2),
      },
      3: {
        name: "Saison 3",

        image: () => getImageSaisons(3),
      },
      4: {
        name: "Saison 4",

        image: () => getImageSaisons(4),
      },
      5: {
        name: "Saison 5",

        image: () => getImageSaisons(5),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/super-dragon-ball-heroes/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 6,
        3: 19,
        4: 30,
        5: 38,
        6: 40,
      },
    };
  }
}

export default SuperDragonBallHeroes;
