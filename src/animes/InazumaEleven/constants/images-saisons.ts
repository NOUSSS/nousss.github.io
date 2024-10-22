import s1 from "@/assets/Animes/InazumaEleven/Saisons/saison1.webp";
import s2 from "@/assets/Animes/InazumaEleven/Saisons/saison1.webp";
import s3 from "@/assets/Animes/InazumaEleven/Saisons/saison1.webp";
import s4 from "@/assets/Animes/InazumaEleven/Saisons/saison4.jpg";
import s5 from "@/assets/Animes/InazumaEleven/Saisons/saison5.webp";
import s6 from "@/assets/Animes/InazumaEleven/Saisons/saison6.webp";
import s7 from "@/assets/Animes/InazumaEleven/Saisons/saison7.jpg";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
  6: s6,
  7: s7,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
