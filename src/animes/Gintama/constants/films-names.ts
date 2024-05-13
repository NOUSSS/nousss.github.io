import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: { name: "Film 1", aliases: ["1"], image: () => getImage(0) },

  1: {
    name: "Film 2",

    image: () => getImage(1),
  },
  2: {
    name: "The Final",

    image: () => getImage(2),
  },
};
