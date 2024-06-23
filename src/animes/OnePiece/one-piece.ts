import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";
import { Anime } from "@/app/class/anime";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/OnePiece/Affiche.jpeg";

class OnePiece extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "East Blue",
        aliases: [
          "shanks",
          "debut",
          "début",
          "start",
          "luffy",
          "log town",
          "roger",
          "baggy",
          "1",
        ],
        image: () => getImage(1),
      },
      2: {
        name: "Alabasta",
        aliases: ["crocodile", "2"],
        image: () => getImage(2),
      },
      3: {
        name: "Les Îles célestes",
        aliases: ["ile", "poneglyphe", "3"],
        image: () => getImage(3),
      },
      4: {
        name: "Water Seven",
        aliases: ["robin", "cp9", "4"],
        image: () => getImage(4),
      },
      5: {
        name: "Thriller Bark",
        aliases: ["moria", "5"],
        image: () => getImage(5),
      },
      6: {
        name: "Guerre au sommet",
        aliases: ["marinford", "sabaody", "boa hancok", "6", "mort"],
        image: () => getImage(6),
      },
      7: {
        name: "Île des hommes poissons",
        aliases: ["ile", "7"],
        image: () => getImage(7),
      },
      8: {
        name: "Dressrosa",
        aliases: ["doflamingo", "vegapunk", "quatre", "4 empereurs", "8"],
        image: () => getImage(8),
      },
      9: {
        name: "Whole Cake Island",
        aliases: [
          "tougato",
          "big mom",
          "sanji",
          "vinsmoke",
          "judge",
          "quatre",
          "4 empereurs",
          "9",
        ],
        image: () => getImage(9),
      },
      10: {
        name: "Pays de Wano",
        aliases: [
          "kaido",
          "wanocuni",
          "zoro",
          "ashura",
          "quatre",
          "4 empereurs",
          "10",
          "gear 5",
          "oden",
        ],
        image: () => getImage(10),
      },
      11: {
        name: "Egg Head",
        aliases: ["vegapunk", "gorosei", "gear 5", "11"],
        image: () => getImage(11),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/one-piece/film/${langage}/episodes.js`,
      BLACKLIST_URL: ["https://video.sibnet.ru/shell.php?videoid=4736710"],
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/one-piece/scan_noir-et-blanc/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/One Piece/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [1045],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/one-piece/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: "10",
          hs: [127, 139, 147, 156, 162, 173, 190, 195, 204, 210, 221],
        },
        {
          saison: "11",
          hs: [4, 13, 22],
        },
      ],

      allIndex: {
        1: 0,
        2: 61,
        3: 143,
        4: 206,
        5: 336,
        6: 389,
        7: 516,
        8: 574,
        9: 746,
        10: 877,
        11: 1088,
      },
      names,
    };
  }
}

export default OnePiece;
