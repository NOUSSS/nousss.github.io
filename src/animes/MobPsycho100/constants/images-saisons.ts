import s1 from '../../../assets/Animes/MobPsycho100/Saisons/Saison1.webp';
import s2 from '../../../assets/Animes/MobPsycho100/Saisons/Saison2.jpg';
import s3 from '../../../assets/Animes/MobPsycho100/Saisons/Saison3.webp';

const images = {
  1: s1,
  2: s2,
  3: s3,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
