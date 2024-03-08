import F1 from "@/assets/Animes/HunterXHunter/Films/1.jpeg";
import F2 from "@/assets/Animes/HunterXHunter/Films/2.jpeg";

export const images = {
  0: F1,
  1: F2,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
