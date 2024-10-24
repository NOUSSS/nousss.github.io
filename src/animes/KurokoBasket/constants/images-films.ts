import F1 from "@/assets/Animes/KurokoBasket/Films/1.jpeg";
import F2 from "@/assets/Animes/KurokoBasket/Films/2.webp";
import F3 from "@/assets/Animes/KurokoBasket/Films/3.webp";
import F4 from "@/assets/Animes/KurokoBasket/Films/4.jpg";

export const images = {
  0: F1,
  1: F2,
  2: F3,
  3: F4,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
