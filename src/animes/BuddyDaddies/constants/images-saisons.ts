import s1 from "@/assets/Animes/BuddyDaddies/Saisons/saison1.webp";

const images = {
  1: s1,
};

export type ImageKey = keyof typeof images;
export const getImageSaisons = (key: ImageKey) => images[key];
