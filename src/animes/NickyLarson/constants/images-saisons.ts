import s1 from "@/assets/Animes/NickyLarson/Saisons/saison1.jpg";

const images = {
  1: s1,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
