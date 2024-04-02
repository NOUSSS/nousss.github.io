import s1 from "@/assets/Animes/7seeds/saisons/saison1.jpg";
import s2 from "@/assets/Animes/7seeds/saisons/saison2.jpg";

const images = {
  1: s1,
  2: s2,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
