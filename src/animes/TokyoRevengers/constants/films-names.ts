import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: { name: "Live action", aliases: ["pas ouf"], image: () => getImage(0) },
};
