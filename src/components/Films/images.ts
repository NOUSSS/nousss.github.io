import F1 from '../../assets/Films/0.jpg';
import F2 from '../../assets/Films/1.jpg';
import F3 from '../../assets/Films/2.jpg';
import F4 from '../../assets/Films/3.jpg';
import F5 from '../../assets/Films/4.jpg';
import F6 from '../../assets/Films/5.jpg';
import F7 from '../../assets/Films/6.jpg';
import F8 from '../../assets/Films/7.jpg';
import F9 from '../../assets/Films/8.jpg';
import F10 from '../../assets/Films/9.jpg';
import F11 from '../../assets/Films/10.jpg';
import F12 from '../../assets/Films/11.jpg';
import F13 from '../../assets/Films/12.jpg';
import F14 from '../../assets/Films/13.jpg';

export const images = {
  0: F1,
  1: F2,
  2: F3,
  3: F4,
  4: F5,
  5: F6,
  6: F7,
  7: F8,
  8: F9,
  9: F10,
  10: F11,
  11: F12,
  12: F13,
  13: F14,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
