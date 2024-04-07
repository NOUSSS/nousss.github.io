import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: { name: "Childhoods's end", aliases: ["1"], image: () => getImage(0) },
  1: {
    name: "The lights in the sky are stars",
    image: () => getImage(1),
  },
};
