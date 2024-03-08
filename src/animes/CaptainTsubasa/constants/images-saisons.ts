import s1 from "@/assets/Animes/CaptainTsubasa/Saisons/Saison1.jpg";
import s2 from "@/assets/Animes/CaptainTsubasa/Saisons/Saison2.jpg";

const images = {
  1: s1,
  2: s2,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
