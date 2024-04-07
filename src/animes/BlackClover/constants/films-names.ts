import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "Les empereurs mages",
    aliases: ["empereurs"],
    image: () => getImage(0),
  },
};
