import F1 from "@/assets/Animes/BlueExorcist/Films/0.webp";

export const images = {
  0: F1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
