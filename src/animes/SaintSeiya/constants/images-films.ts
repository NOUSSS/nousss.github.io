import f1 from "@/assets/Animes/SaintSeiya/Films/1.webp";
import f2 from "@/assets/Animes/SaintSeiya/Films/2.jpg";
import f3 from "@/assets/Animes/SaintSeiya/Films/3.webp";
import f4 from "@/assets/Animes/SaintSeiya/Films/4.webp";
import f5 from "@/assets/Animes/SaintSeiya/Films/5.jpeg";

const images = {
  1: f1,
  2: f2,
  3: f3,
  4: f4,
  5: f5,
};

export type ImageKey = keyof typeof images;
export const getImageFilms = (key: ImageKey) => images[key];
