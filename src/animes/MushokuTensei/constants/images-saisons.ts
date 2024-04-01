import s1 from "@/assets/Animes/MushokuTensei/saisons/saison1.webp";
import s2 from "@/assets/Animes/MushokuTensei/saisons/saison2.webp";

const images = {
  1: s1,
  2: s2,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
