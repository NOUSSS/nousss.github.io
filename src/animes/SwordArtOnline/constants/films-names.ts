import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: { name: "Extra Edition", aliases: ["1"], image: () => getImage(0) },
  1: {
    name: "Ordinal Scale",
    aliases: ["2"],
    image: () => getImage(1),
  },
  2: {
    name: "Aria Of A Starless Night",
    aliases: ["3"],
    image: () => getImage(2),
  },
  3: {
    name: "Scherzo of A Deep Night",
    aliases: ["4"],
    image: () => getImage(3),
  },
};
