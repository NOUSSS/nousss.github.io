import s1 from "@/assets/Animes/SailorMoon/Saisons/saison1.webp";
import s2 from "@/assets/Animes/SailorMoon/Saisons/saison2.jpg";
import s3 from "@/assets/Animes/SailorMoon/Saisons/saison3.jpg";
import s4 from "@/assets/Animes/SailorMoon/Saisons/saison4.jpg";
import s5 from "@/assets/Animes/SailorMoon/Saisons/saison5.jpg";
import s6 from "@/assets/Animes/SailorMoon/Saisons/saison6.jpg";
import s7 from "@/assets/Animes/SailorMoon/Saisons/saison7.jpg";
import s8 from "@/assets/Animes/SailorMoon/Saisons/saison8.jpg";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
  6: s6,
  7: s7,
  8: s8,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
