import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/DetectiveConan/affiche.webp";

class DetectiveConan extends Anime {
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
        image: () => getImageSaisons(1),
      },
      3: {
        name: "Saison 3",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      4: {
        name: "Saison 4",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      5: {
        name: "Saison 5",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      6: {
        name: "Saison 6",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      7: {
        name: "Saison 7",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      8: {
        name: "Saison 8",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      9: {
        name: "Saison 9",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      10: {
        name: "Saison 10",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      11: {
        name: "Saison 11",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      12: {
        name: "Saison 12",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      13: {
        name: "Saison 13",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      14: {
        name: "Saison 14",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      15: {
        name: "Saison 15",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      16: {
        name: "Saison 16",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      17: {
        name: "Saison 17",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      18: {
        name: "Saison 18",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      19: {
        name: "Saison 19",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      20: {
        name: "Saison 20",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      21: {
        name: "Saison 21",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      22: {
        name: "Saison 22",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      23: {
        name: "Saison 23",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      24: {
        name: "Saison 24",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      25: {
        name: "Saison 25",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      26: {
        name: "Saison 26",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      27: {
        name: "Saison 27",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      28: {
        name: "Saison 28",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      29: {
        name: "Saison 29",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      30: {
        name: "Zero no Tea Time",
        aliases: [""],
        hs: true,
        image: () => getImageSaisons(2),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/detective-conan/film/${langage}/episodes.js`,

      names: {
        "1": { name: "Le Gratte Ciel Infernal", image: () => getImageFilms(1) },
        "2": { name: "La 14ème Cible", image: () => getImageFilms(2) },
        "3": {
          name: "Le Magicien de la fin du siècle",
          image: () => getImageFilms(3),
        },
        "4": { name: "Mémoire assassine", image: () => getImageFilms(4) },
        "5": { name: "Décompte aux cieux", image: () => getImageFilms(5) },
        "6": {
          name: "Le Fantôme de Baker Street",
          image: () => getImageFilms(6),
        },
        "7": {
          name: "Croisement dans l'ancienne capitale",
          image: () => getImageFilms(7),
        },
        "8": {
          name: "Le Magicien du ciel argenté",
          image: () => getImageFilms(8),
        },
        "9": { name: "Stratégie en profondeur", image: () => getImageFilms(9) },
        "10": {
          name: "Le Requiem des détectives",
          image: () => getImageFilms(10),
        },
        "11": {
          name: "Jolly Roger et le Cercueil bleu azur",
          image: () => getImageFilms(11),
        },
        "12": { name: "La Mélodie de la peur", image: () => getImageFilms(12) },
        "13": {
          name: "Le Chasseur noir de jais",
          image: () => getImageFilms(13),
        },
        "14": { name: "L'Arche du Ciel", image: () => getImageFilms(14) },
        "15": {
          name: "Les 15 Minutes de silence",
          image: () => getImageFilms(15),
        },
        "16": { name: "Le 11ème Attaquant", image: () => getImageFilms(16) },
        "17": {
          name: "Un Détective privé en mer lointaine",
          image: () => getImageFilms(17),
        },
        "18": {
          name: "Le Sniper Dimensionnel",
          image: () => getImageFilms(18),
        },
        "19": {
          name: "Les Tournesols des flammes infernales",
          image: () => getImageFilms(19),
        },
        "20": { name: "Le Pire Cauchemar", image: () => getImageFilms(20) },
        "21": {
          name: "La Lettre d'amour écarlate",
          image: () => getImageFilms(21),
        },
        "22": { name: "L'Exécutant de Zero", image: () => getImageFilms(22) },
        "23": {
          name: "Le Poing de saphir bleu",
          image: () => getImageFilms(23),
        },
        "24": { name: "The Scarlet Bullet", image: () => getImageFilms(24) },
        "25": { name: "La Fiancée de Shibuya", image: () => getImageFilms(25) },
        "26": {
          name: "The Story of Ai Haibara",
          image: () => getImageFilms(26),
        },
        "27": { name: "Le Sous-marin noir", image: () => getImageFilms(27) },
      } as Options.Film,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/detective-conan/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 42,
        3: 87,
        4: 131,
        5: 178,
        6: 224,
        7: 269,
        8: 311,
        9: 353,
        10: 393,
        11: 435,
        12: 471,
        13: 503,
        14: 534,
        15: 576,
        16: 617,
        17: 658,
        18: 698,
        19: 742,
        20: 782,
        21: 825,
        22: 867,
        23: 910,
        24: 951,
        25: 990,
        26: 1019,
        27: 1060,
        28: 1096,
        29: 1138,
        30: 1169,
      },

      names: episodes,
    };
  }
}

export default DetectiveConan;
