import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "RELIGHT 1",

    image: () => getImage(0),
  },
  1: {
    name: "RELIGHT 2",

    image: () => getImage(1),
  },
};
