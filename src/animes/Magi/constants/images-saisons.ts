import s1 from "@/assets/Animes/Magi/Saisons/saison1.png";
import s2 from "@/assets/Animes/Magi/Saisons/saison2.webp";

const images = {
  1: s1,
  2: s2,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
