import s1 from "@/assets/Animes/TenseiShitara/Saisons/saison1.jpg";
import s2 from "@/assets/Animes/TenseiShitara/Saisons/saison2.webp";
import s3 from "@/assets/Animes/TenseiShitara/Saisons/saison3.webp";
import s4 from "@/assets/Animes/TenseiShitara/Saisons/Diaries.webp";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
