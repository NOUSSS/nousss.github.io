import f1 from "@/assets/Animes/ReZero/Films/0.jpg";
import f2 from "@/assets/Animes/ReZero/Films/1.jpg";

const images = {
  0: f1,
  1: f2,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
