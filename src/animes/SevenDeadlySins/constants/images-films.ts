import F1 from '../../../assets/Animes/SevenDeadlySins/Films/0.jpg';
import F2 from '../../../assets/Animes/SevenDeadlySins/Films/1.png';
import F3 from '../../../assets/Animes/SevenDeadlySins/Films/2.jpg';
import F4 from '../../../assets/Animes/SevenDeadlySins/Films/3.jpg';

export const images = {
  1: F1,
  2: F2,
  3: F3,
  4: F4,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
