import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "LAST GAME",
    aliases: ["generation miracle", "masterclass", "fin"],
    image: () => getImage(0),
  },
  1: {
    name: "L'ombre et la lumière (highlight 1)",
    image: () => getImage(1),
  },
  2: {
    name: "Au-delà des larmes (highlight 2)",
    image: () => getImage(2),
  },
  3: {
    name: "Franchir le pas (highlight 3)",
    image: () => getImage(3),
  },
};
