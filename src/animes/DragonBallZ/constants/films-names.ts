import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "A la poursuite de Garlic",

    image: () => getImage(0),
  },
  1: {
    name: "Le robot des glaces",

    image: () => getImage(1),
  },
  2: {
    name: "Le combat fratricide",

    image: () => getImage(2),
  },
  3: {
    name: "La menace de Namek",

    image: () => getImage(3),
  },
  4: {
    name: "La revanche de cooler",

    image: () => getImage(4),
  },
  5: {
    name: "Cent milles guerries de metal",

    image: () => getImage(5),
  },
  6: {
    name: "L'offensive des Cyborgs",

    image: () => getImage(6),
  },
  7: {
    name: "Broly le Super Guerrier",

    image: () => getImage(7),
  },
  8: {
    name: "Les mercenaires de l'espace",

    image: () => getImage(8),
  },
  9: {
    name: "Attaque Super Warrior",

    image: () => getImage(9),
  },
  10: {
    name: "Fusions",

    image: () => getImage(10),
  },
  11: {
    name: "L'attaque du Dragon",

    image: () => getImage(11),
  },
  12: {
    name: "Battle Of Gods",

    image: () => getImage(12),
  },
  13: {
    name: "La resurection de 'F'",

    image: () => getImage(13),
  },
};
