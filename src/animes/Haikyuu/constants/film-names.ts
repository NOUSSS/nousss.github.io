import { Film } from '../../../interfaces/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'Film 1',
    aliases: [''],
    image: () => getImage(0),
  },
  1: {
    name: 'Film 2',
    aliases: [''],
    image: () => getImage(1),
  },
};