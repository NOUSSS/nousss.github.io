import s1 from "@/assets/Animes/ReMonster/Saisons/saison1.webp";

const images = {
  1: s1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
