import s1 from "@/assets/Animes/KenganAshura/Saisons/saison1-1.jpg";
import s2 from "@/assets/Animes/KenganAshura/Saisons/saison1-2.webp";
import s3 from "@/assets/Animes/KenganAshura/Saisons/saison2-1.webp";
import s4 from "@/assets/Animes/KenganAshura/Saisons/saison2-2.webp";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
