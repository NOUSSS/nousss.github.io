import s1 from '../../../assets/Animes/Haikyuu/Saisons/Saison1.jpg';
import s2 from '../../../assets/Animes/Haikyuu/Saisons/Saison2.jpg';
import s3 from '../../../assets/Animes/Haikyuu/Saisons/Saison3.webp';
import s4 from '../../../assets/Animes/Haikyuu/Saisons/Saison4.webp';

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
