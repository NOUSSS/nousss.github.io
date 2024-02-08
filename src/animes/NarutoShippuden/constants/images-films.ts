import F1 from '../../../assets/Animes/NarutoShippuden/Films/0.webp';
import F2 from '../../../assets/Animes/NarutoShippuden/Films/1.jpg';
import F3 from '../../../assets/Animes/NarutoShippuden/Films/2.webp';
import F4 from '../../../assets/Animes/NarutoShippuden/Films/3.jpg';
import F5 from '../../../assets/Animes/NarutoShippuden/Films/4.jpg';
import F6 from '../../../assets/Animes/NarutoShippuden/Films/5.webp';
import F7 from '../../../assets/Animes/NarutoShippuden/Films/6.jpg';

export const images = {
  0: F1,
  1: F2,
  2: F3,
  3: F4,
  4: F5,
  5: F6,
  6: F7,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
