import f1 from "@/assets/Animes/Berserk/Films/1.webp";
import f2 from "@/assets/Animes/Berserk/Films/2.webp";
import f3 from "@/assets/Animes/Berserk/Films/3.jpg";

const images = {
  1: f1,
  2: f2,
  3: f3,
};

export type ImageKey = keyof typeof images;
export const getImageFilms = (key: ImageKey) => images[key];
