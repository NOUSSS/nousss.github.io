import { Film } from '../../../typings/types';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'Les empereurs mages',
    aliases: ['empereurs'],
    image: () => getImage(0),
  },
};
