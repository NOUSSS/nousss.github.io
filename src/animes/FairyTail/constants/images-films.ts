import F1 from '../../../assets/Animes/FairyTail/Films/0.webp';
import F2 from '../../../assets/Animes/FairyTail/Films/1.jpg';

export const images = {
  0: F1,
  1: F2,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
