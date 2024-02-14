import { Film } from '../../../typings/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: { name: 'Broly', aliases: ['Super sayan'], image: () => getImage(0) },
  1: {
    name: 'Super Heros',
    aliases: ['mecha'],
    image: () => getImage(1),
  },
};
