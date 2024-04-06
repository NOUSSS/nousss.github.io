import { Film } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Film = {
  0: {
    name: "Fuka Ryōiki no Deja vu",
    aliases: ["1"],
    image: () => getImage(0),
  },
};
