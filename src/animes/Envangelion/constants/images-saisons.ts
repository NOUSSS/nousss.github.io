import s1 from "@/assets/Animes/Evangelion/Saisons/Saison1.jpg";

const images = {
  1: s1,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
