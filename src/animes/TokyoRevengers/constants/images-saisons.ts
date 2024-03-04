import s1 from '../../../assets/Animes/TokyoRevengers/Saisons/Saison1.jpg';
import s2 from '../../../assets/Animes/TokyoRevengers/Saisons/Saison2.webp';
import s3 from '../../../assets/Animes/TokyoRevengers/Saisons/Saison3.webp';

const images = {
  1: s1,
  2: s2,
  3: s3,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
