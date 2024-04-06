import { Film } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Film = {
  0: {
    name: "Lelouch of the Rebellion I - Initiation",
    aliases: ["1"],
    image: () => getImage(0),
  },
};
