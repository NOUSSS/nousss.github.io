import s1 from "@/assets/Animes/MobileSuitGundam/Saisons/saison1.webp";
import s2 from "@/assets/Animes/MobileSuitGundam/Saisons/saison2.jpg";

const images = {
  1: s1,
  2: s2,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
