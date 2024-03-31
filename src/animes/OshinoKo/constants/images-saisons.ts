import s1 from "@/assets/Animes/OshinoKo/saisons/saison1.webp";

const images = {
  1: s1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
