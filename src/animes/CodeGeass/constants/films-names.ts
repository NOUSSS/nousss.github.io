import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "Lelouch of the Rebellion I - Initiation",
    aliases: ["1"],
    image: () => getImage(0),
  },
};
