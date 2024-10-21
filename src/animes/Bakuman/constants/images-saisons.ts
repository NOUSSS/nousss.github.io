import s1 from "@/assets/Animes/Bakuman/Saisons/saison1.webp";
import s2 from "@/assets/Animes/Bakuman/Saisons/saison2.webp";
import s3 from "@/assets/Animes/Bakuman/Saisons/saison3.webp";

const images = {
  1: s1,
  2: s2,
  3: s3,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
