import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: { name: "Memory Snow", aliases: ["1"], image: () => getImage(0) },
  1: {
    name: "The Frozen Bond",

    image: () => getImage(1),
  },
};
