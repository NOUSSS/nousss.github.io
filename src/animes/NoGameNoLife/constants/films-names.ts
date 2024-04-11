import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: { name: "Zero", aliases: ["1"], image: () => getImage(0) },
};
