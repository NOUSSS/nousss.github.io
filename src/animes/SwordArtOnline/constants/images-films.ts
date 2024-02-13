import F1 from '../../../assets/Animes/SwordArtOnline/Films/0.jpg';
import F2 from '../../../assets/Animes/SwordArtOnline/Films/1.jpg';
import F3 from '../../../assets/Animes/SwordArtOnline/Films/2.webp';
import F4 from '../../../assets/Animes/SwordArtOnline/Films/3.webp';

export const images = {
  0: F1,
  1: F2,
  2: F3,
  3: F4,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
