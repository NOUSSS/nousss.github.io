import f1 from "@/assets/Animes/DanMachi/Films/1.webp";

const images = {
  1: f1,
};

export type ImageKey = keyof typeof images;
export const getImageFilms = (key: ImageKey) => images[key];
