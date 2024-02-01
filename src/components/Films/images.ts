import un from '../../Assets/Films/0.jpg';
import deux from '../../Assets/Films/1.jpg';
import trois from '../../Assets/Films/2.jpg';
import quatre from '../../Assets/Films/3.jpg';
import cinq from '../../Assets/Films/4.jpg';
import six from '../../Assets/Films/5.jpg';
import sept from '../../Assets/Films/6.jpg';
import huit from '../../Assets/Films/7.jpg';
import neuf from '../../Assets/Films/8.jpg';
import dix from '../../Assets/Films/9.jpg';
import onze from '../../Assets/Films/10.jpg';
import douze from '../../Assets/Films/11.jpg';
import treize from '../../Assets/Films/12.jpg';
import quatorze from '../../Assets/Films/13.jpg';

type ImageKey = keyof typeof images;

export const images = {
  0: un,
  1: deux,
  2: trois,
  3: quatre,
  4: cinq,
  5: six,
  6: sept,
  7: huit,
  8: neuf,
  9: dix,
  10: onze,
  11: douze,
  12: treize,
  13: quatorze,
};

export const getImage = (key: ImageKey) => images[key];
