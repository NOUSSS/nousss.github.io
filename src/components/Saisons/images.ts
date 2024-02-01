import s1 from '../../Assets/Saisons/Saison1.jpeg';
import s2 from '../../Assets/Saisons/Saison2.jpeg';
import s3 from '../../Assets/Saisons/Saison3.jpeg';
import s4 from '../../Assets/Saisons/Saison4.jpeg';
import s5 from '../../Assets/Saisons/Saison5.jpeg';
import s6 from '../../Assets/Saisons/Saison6.jpeg';
import s7 from '../../Assets/Saisons/Saison7.jpeg';
import s8 from '../../Assets/Saisons/Saison8.jpeg';
import s9 from '../../Assets/Saisons/Saison9.jpeg';
import s10 from '../../Assets/Saisons/Saison10.jpeg';
import s11 from '../../Assets/Saisons/Saison11.jpeg';

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
