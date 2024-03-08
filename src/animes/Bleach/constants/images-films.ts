import F1 from "@/assets/Animes/Bleach/Films/0.jpg";
import F2 from "@/assets/Animes/Bleach/Films/1.jpg";
import F3 from "@/assets/Animes/Bleach/Films/2.jpg";
import F4 from "@/assets/Animes/Bleach/Films/3.jpg";

export const images = {
  0: F1,
  1: F2,
  2: F3,
  3: F4,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
