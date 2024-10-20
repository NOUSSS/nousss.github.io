import s1 from "@/assets/Animes/Kaiji/Saisons/saison1.webp";

const images = {
  1: s1,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
