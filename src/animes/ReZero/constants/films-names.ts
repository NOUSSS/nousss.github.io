import { Film } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Film = {
  0: { name: "Memory Snow", aliases: ["1"], image: () => getImage(0) },
  1: {
    name: "The Frozen Bond",
    aliases: [""],
    image: () => getImage(1),
  },
};
