import F1 from '../../../assets/Animes/TemplateName/Films/1.jpeg';

export const images = {
  0: F1,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
