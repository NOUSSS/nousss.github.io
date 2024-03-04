import s1 from '../../../assets/Animes/SoloLeveling/Saisons/Saison1.jpeg';

const images = {
  1: s1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
