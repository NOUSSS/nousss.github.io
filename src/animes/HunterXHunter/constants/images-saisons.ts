import s1 from "@/assets/Animes/HunterXHunter/Saisons/1999.webp";
import s2 from "@/assets/Animes/HunterXHunter/Saisons/Saison1.jpeg";

const images = {
  1: s1,
  2: s2,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
