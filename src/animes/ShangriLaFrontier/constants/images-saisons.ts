import s1 from "@/assets/Animes/ShangriLaFrontier/Saisons/Saison1.webp";
import s2 from "@/assets/Animes/ShangriLaFrontier/Saisons/saison2.webp";

const images = {
  1: s1,
  2: s2,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
