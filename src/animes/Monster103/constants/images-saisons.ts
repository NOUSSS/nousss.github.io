import s1 from '../../../assets/Animes/Monster103/Saisons/Saison1.png';

const images = {
  1: s1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
