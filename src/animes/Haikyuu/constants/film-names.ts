import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "Film 1",
    aliases: [""],
    image: () => getImage(0),
  },
  1: {
    name: "Film 2",
    aliases: [""],
    image: () => getImage(1),
  },
};
