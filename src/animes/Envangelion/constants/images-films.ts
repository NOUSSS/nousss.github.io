import f1 from "@/assets/Animes/Evangelion/Films/1.webp";
import f2 from "@/assets/Animes/Evangelion/Films/2.webp";
import f3 from "@/assets/Animes/Evangelion/Films/3.jpg";
import f4 from "@/assets/Animes/Evangelion/Films/4.jpg";
import f5 from "@/assets/Animes/Evangelion/Films/5.png";
import f6 from "@/assets/Animes/Evangelion/Films/6.webp";

const images = {
  1: f1,
  2: f2,
  3: f3,
  4: f4,
  5: f5,
  6: f6,
};

export type ImageKey = keyof typeof images;
export const getImageFilms = (key: ImageKey) => images[key];
