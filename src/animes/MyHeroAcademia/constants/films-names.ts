import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "TWO HEREOS",
    aliases: [],
    image: () => getImage(0),
  },

  1: {
    name: "HEREOS RISING",
    aliases: [],
    image: () => getImage(1),
  },
  2: {
    name: "HEREOS MISSION",
    aliases: [],
    image: () => getImage(2),
  },
};
