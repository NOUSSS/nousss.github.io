import f1 from "@/assets/Animes/MadeInAbyss/Films/1.webp";
import f2 from "@/assets/Animes/MadeInAbyss/Films/2.webp";

const images = {
  1: f1,
  2: f2,
};

export type ImageKey = keyof typeof images;
export const getImageFilms = (key: ImageKey) => images[key];
