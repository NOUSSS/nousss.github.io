import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "PHANTOM ROUGE",
    aliases: ["brigade"],
    image: () => getImage(0),
  },
  1: {
    name: "THE LAST MISSION",
    aliases: ["kurapika"],
    image: () => getImage(1),
  },
};
