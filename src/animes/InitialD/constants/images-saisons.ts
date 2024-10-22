import s1 from "@/assets/Animes/InitialD/Saisons/saison1.webp";
import s2 from "@/assets/Animes/InitialD/Saisons/saison2.webp";
import s3 from "@/assets/Animes/InitialD/Saisons/saison3.jpg";
import s4 from "@/assets/Animes/InitialD/Saisons/saison4.webp";
import s5 from "@/assets/Animes/InitialD/Saisons/saison5.webp";
import s6 from "@/assets/Animes/InitialD/Saisons/saison6.jpg";
import s7 from "@/assets/Animes/InitialD/Saisons/saison7.jpg";
import s8 from "@/assets/Animes/InitialD/Saisons/saison8.webp";
import s9 from "@/assets/Animes/InitialD/Saisons/saison9.jpg";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
  6: s6,
  7: s7,
  8: s8,
  9: s9,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
