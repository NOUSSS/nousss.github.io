import { Options } from "@/typings/types";
import { getImage } from "./images-films";

export const films: Options.Film = {
  0: {
    name: "Un funeste présage",

    image: () => getImage(0),
  },
  1: {
    name: "Les liens",

    image: () => getImage(1),
  },
  2: {
    name: "La flamme de la volonté",

    image: () => getImage(2),
  },
  3: {
    name: "La tour perdue",

    image: () => getImage(3),
  },
  4: {
    name: "BLOOD PRISON",

    image: () => getImage(4),
  },
  5: {
    name: "Road to Ninja",

    image: () => getImage(5),
  },
  6: {
    name: "The last",

    image: () => getImage(6),
  },
};
