import { Film } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Film = {
  0: {
    name: "Un funeste présage",
    aliases: [""],
    image: () => getImage(0),
  },
  1: {
    name: "Les liens",
    aliases: [""],
    image: () => getImage(1),
  },
  2: {
    name: "La flamme de la volonté",
    aliases: [""],
    image: () => getImage(2),
  },
  3: {
    name: "La tour perdue",
    aliases: [""],
    image: () => getImage(3),
  },
  4: {
    name: "BLOOD PRISON",
    aliases: [""],
    image: () => getImage(4),
  },
  5: {
    name: "Road to Ninja",
    aliases: [""],
    image: () => getImage(5),
  },
  6: {
    name: "The last",
    aliases: [""],
    image: () => getImage(6),
  },
};
