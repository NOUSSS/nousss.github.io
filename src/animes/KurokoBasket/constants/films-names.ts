import { Film } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Film = {
  0: {
    name: "LAST GAME",
    aliases: ["generation miracle", "masterclass", "fin"],
    image: () => getImage(0),
  },
};
