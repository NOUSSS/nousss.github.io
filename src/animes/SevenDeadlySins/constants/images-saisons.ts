import s1 from "@/assets/Animes/SevenDeadlySins/Saisons/Saison1.webp";
import s2 from "@/assets/Animes/SevenDeadlySins/Saisons/Saison2.webp";
import s3 from "@/assets/Animes/SevenDeadlySins/Saisons/Saison3.jpg";
import s4 from "@/assets/Animes/SevenDeadlySins/Saisons/Saison4.jpg";
import s5 from "@/assets/Animes/SevenDeadlySins/Saisons/OAV.jpg";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
