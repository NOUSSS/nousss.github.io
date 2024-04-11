import f1 from "@/assets/Animes/NoGameNoLife/Films/0.webp";

const images = {
  0: f1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
