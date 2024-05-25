import f1 from "@/assets/Animes/BlackButler/Films/0.webp";

const images = {
  1: f1,
};

export type ImageKey = keyof typeof images;
export const getImageFilms = (key: ImageKey) => images[key];
