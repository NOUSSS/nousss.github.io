import F1 from "@/assets/Animes/Naruto/Films/1.jpg";
import F2 from "@/assets/Animes/Naruto/Films/2.webp";
import F3 from "@/assets/Animes/Naruto/Films/3.jpg";

export const images = {
  1: F1,
  2: F2,
  3: F3,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
