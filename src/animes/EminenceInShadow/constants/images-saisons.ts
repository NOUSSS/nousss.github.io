import s1 from '../../../assets/Animes/EminenceInShadow/Saisons/Saison1.webp';
import s2 from '../../../assets/Animes/EminenceInShadow/Saisons/Saison2.webp';

const images = {
  1: s1,
  2: s2,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
