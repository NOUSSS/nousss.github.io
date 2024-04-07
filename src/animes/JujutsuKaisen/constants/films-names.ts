import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "JUJUTSU KAISEN 0",
    aliases: ["rika", "gojo", "geto"],
    image: () => getImage(0),
  },
};
