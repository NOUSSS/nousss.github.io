import { Film } from '../../../typings/types';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'La Prêtresse du Phoenix',
    aliases: ['1'],
    image: () => getImage(0),
  },
  1: {
    name: 'Dragon Cry',
    aliases: ['2'],
    image: () => getImage(1),
  },
};
