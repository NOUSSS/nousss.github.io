import s1 from "@/assets/Animes/SpyXFamily/saisons/saison1.jpg";
import s2 from "@/assets/Animes/SpyXFamily/saisons/saison2.webp";
import s3 from "@/assets/Animes/SpyXFamily/saisons/saison3.webp";

const images = {
  1: s1,
  2: s2,
  3: s3,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
