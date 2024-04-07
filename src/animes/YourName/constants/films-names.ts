import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: { name: "Your Name", aliases: ["1"], image: () => getImage(1) },
};
