import s1 from "@/assets/Animes/SwordArtOnline/Saisons/Saison1.webp";
import s2 from "@/assets/Animes/SwordArtOnline/Saisons/Saison2.webp";
import s3 from "@/assets/Animes/SwordArtOnline/Saisons/Saison3.jpg";
import s4 from "@/assets/Animes/SwordArtOnline/Saisons/Saison4.webp";
import s5 from "@/assets/Animes/SwordArtOnline/Saisons/Saison5.jpg";
import s6 from "@/assets/Animes/SwordArtOnline/Saisons/Saison6.webp";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
  6: s6,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
