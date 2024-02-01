import s1 from '../../assets/Saisons/Saison1.jpeg';
import s2 from '../../assets/Saisons/Saison2.jpeg';
import s3 from '../../assets/Saisons/Saison3.jpeg';
import s4 from '../../assets/Saisons/Saison4.jpeg';
import s5 from '../../assets/Saisons/Saison5.jpeg';
import s6 from '../../assets/Saisons/Saison6.jpeg';
import s7 from '../../assets/Saisons/Saison7.jpeg';
import s8 from '../../assets/Saisons/Saison8.jpeg';
import s9 from '../../assets/Saisons/Saison9.jpeg';
import s10 from '../../assets/Saisons/Saison10.jpeg';
import s11 from '../../assets/Saisons/Saison11.jpeg';

type ImageKey = keyof typeof images;

export const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
  6: s6,
  7: s7,
  8: s8,
  9: s9,
  10: s10,
  11: s11,
};

export const getImage = (key: ImageKey) => images[key];
