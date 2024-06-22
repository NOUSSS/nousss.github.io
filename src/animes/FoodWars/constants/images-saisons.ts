import s1 from "@/assets/Animes/FoodWars/Saisons/saison1.webp";
import s2 from "@/assets/Animes/FoodWars/Saisons/saison2.webp";
import s3 from "@/assets/Animes/FoodWars/Saisons/saison3.webp";
import s4 from "@/assets/Animes/FoodWars/Saisons/saison4.webp";
import s5 from "@/assets/Animes/FoodWars/Saisons/saison5.webp";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
