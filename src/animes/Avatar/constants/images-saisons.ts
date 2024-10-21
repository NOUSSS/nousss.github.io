import s1 from "@/assets/Animes/Avatar/Saisons/saison1.webp";
import s2 from "@/assets/Animes/Avatar/Saisons/saison2.jpg";
import s3 from "@/assets/Animes/Avatar/Saisons/saison3.jpg";

const images = {
  1: s1,
  2: s2,
  3: s3,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
