import { Film } from '../../../interfaces/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'Les empereurs mages',
    aliases: ['empereurs'],
    image: () => getImage(0),
  },
};
