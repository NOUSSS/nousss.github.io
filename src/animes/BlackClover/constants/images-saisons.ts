import s1 from '../../../assets/Animes/BlackClover/Saisons/Saison1.jpg';

const images = {
  1: s1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
