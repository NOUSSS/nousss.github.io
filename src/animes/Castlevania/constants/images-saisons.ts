import s1 from "@/assets/Animes/Castlevania/Saisons/saison1.webp";
import s2 from "@/assets/Animes/Castlevania/Saisons/saison2.jpg";
import s3 from "@/assets/Animes/Castlevania/Saisons/saison3.jpg";
import s4 from "@/assets/Animes/Castlevania/Saisons/saison4.jpg";
import s5 from "@/assets/Animes/Castlevania/Saisons/saison5.jpg";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
