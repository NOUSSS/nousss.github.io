import s1 from "@/assets/Animes/Bleach/Saisons/Saison1.png";
import s2 from "@/assets/Animes/Bleach/Saisons/Saison2.webp";
import s3 from "@/assets/Animes/Bleach/Saisons/Saison3.jpg";
import s4 from "@/assets/Animes/Bleach/Saisons/Saison4.webp";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
