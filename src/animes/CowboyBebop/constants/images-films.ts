import f1 from "@/assets/Animes/CowboyBebop/Films/1.jpg";

const images = {
  1: f1,
};

export type ImageKey = keyof typeof images;
export const getImageFilms = (key: ImageKey) => images[key];
