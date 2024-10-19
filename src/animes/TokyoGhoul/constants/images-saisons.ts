import s1 from "@/assets/Animes/TokyoGhoul/Saisons/Saison1.jpg";
import s2 from "@/assets/Animes/TokyoGhoul/Saisons/Saison2.webp";
import s3 from "@/assets/Animes/TokyoGhoul/Saisons/Saison3.jpg";

const images = {
  1: s1,
  2: s2,
  3: s3,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
