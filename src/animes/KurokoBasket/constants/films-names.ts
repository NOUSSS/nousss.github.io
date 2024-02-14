import { Film } from '../../../typings/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'LAST GAME',
    aliases: ['generation miracle', 'masterclass', 'fin'],
    image: () => getImage(0),
  },
};
