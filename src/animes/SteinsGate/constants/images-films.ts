import f1 from "@/assets/Animes/SteinsGate/Films/0.jpg";

const images = {
  0: f1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
