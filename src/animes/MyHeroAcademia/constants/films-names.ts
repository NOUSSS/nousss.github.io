import { Film } from '../../../interfaces/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'TWO HEREOS',
    aliases: [],
    image: () => getImage(0),
  },

  1: {
    name: 'HEREOS RISING',
    aliases: [],
    image: () => getImage(1),
  },
  2: {
    name: 'HEREOS MISSION',
    aliases: [],
    image: () => getImage(2),
  },
};
