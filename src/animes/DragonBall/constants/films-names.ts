import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "La légende de Shenron",

    image: () => getImage(0),
  },

  1: {
    name: "Le chateau du demon",

    image: () => getImage(1),
  },

  2: {
    name: "L'aventure mystique",

    image: () => getImage(2),
  },
  3: {
    name: "L'armée du ruban rouge",

    image: () => getImage(3),
  },
};
