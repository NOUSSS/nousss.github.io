import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import Affiche from "@/assets/Animes/SwordArtOnline/Affiche.jpg";

import { Anime } from "@/app/class/anime";

export default class SwordArtOnline extends Anime {
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
      4: {
        name: "Saison 4",
        aliases: ["robin", "cp9", "4"],
        image: () => getImage(4),
      },
      5: {
        name: "Alternative Gun Gale Online (1)",
        aliases: ["5"],
        image: () => getImage(5),
      },
      6: {
        name: "Alternative Gun Gale Online (2)",
        aliases: ["6"],
        image: () => getImage(6),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/sword-art-online/film/${langage}/episodes.js`,
      names: films,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/sword-art-online/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "2",
          hs: [14],
        },
      ],

      noc: true,

      allIndex: {
        1: 0,
      },
    };
  }
}
