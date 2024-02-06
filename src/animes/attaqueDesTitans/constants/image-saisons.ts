import s1 from '../../../assets/Animes/AttaqueDesTitans/Saisons/Saison1.jpg';
import s2 from '../../../assets/Animes/AttaqueDesTitans/Saisons/Saison2.jpeg';
import s3 from '../../../assets/Animes/AttaqueDesTitans/Saisons/Saison3.jpg';
import s4 from '../../../assets/Animes/AttaqueDesTitans/Saisons/Saison4.jpeg';
import s5 from '../../../assets/Animes/AttaqueDesTitans/Saisons/Saison4-2.png';
import s6 from '../../../assets/Animes/AttaqueDesTitans/Saisons/Saison4-3.jpeg';
import s7 from '../../../assets/Animes/AttaqueDesTitans/Saisons/Saison4-4.jpeg';

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
  6: s6,
  7: s7,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
