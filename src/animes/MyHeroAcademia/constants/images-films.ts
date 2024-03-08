import F1 from "@/assets/Animes/MyHeroAcademia/Films/1.webp";
import F2 from "@/assets/Animes/MyHeroAcademia/Films/2.webp";
import F3 from "@/assets/Animes/MyHeroAcademia/Films/3.webp";

export const images = {
  0: F1,
  1: F2,
  2: F3,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
