import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: { name: "Champion Road", aliases: ["1"], image: () => getImage(0) },
  1: {
    name: "Mashiba VF Kimura",
    aliases: ["2"],
    image: () => getImage(1),
  },
};
