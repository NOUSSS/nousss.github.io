import f1 from "@/assets/Animes/YourName/Films/film1.webp";

const images = {
  1: f1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
