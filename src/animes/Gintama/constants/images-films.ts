import f1 from "@/assets/Animes/Gintama/Films/0.jpg";
import f2 from "@/assets/Animes/Gintama/Films/1.jpg";
import f3 from "@/assets/Animes/Gintama/Films/2.webp";

const images = {
  0: f1,
  1: f2,
  2: f3,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
