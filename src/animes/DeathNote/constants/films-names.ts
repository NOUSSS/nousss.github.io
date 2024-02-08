import { Film } from '../../../interfaces/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'RELIGHT 1',
    aliases: [''],
    image: () => getImage(0),
  },
  1: {
    name: 'RELIGHT 2',
    aliases: [''],
    image: () => getImage(1),
  },
};
