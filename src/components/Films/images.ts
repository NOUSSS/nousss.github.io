import un from '../../assets/Films/0.jpg';
import deux from '../../assets/Films/1.jpg';
import trois from '../../assets/Films/2.jpg';
import quatre from '../../assets/Films/3.jpg';
import cinq from '../../assets/Films/4.jpg';
import six from '../../assets/Films/5.jpg';
import sept from '../../assets/Films/6.jpg';
import huit from '../../assets/Films/7.jpg';
import neuf from '../../assets/Films/8.jpg';
import dix from '../../assets/Films/9.jpg';
import onze from '../../assets/Films/10.jpg';
import douze from '../../assets/Films/11.jpg';
import treize from '../../assets/Films/12.jpg';
import quatorze from '../../assets/Films/13.jpg';

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
