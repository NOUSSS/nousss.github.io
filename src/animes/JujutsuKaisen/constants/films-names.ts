import { Film } from '../../../typings/types';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'JUJUTSU KAISEN 0',
    aliases: ['rika', 'gojo', 'geto'],
    image: () => getImage(0),
  },
};
