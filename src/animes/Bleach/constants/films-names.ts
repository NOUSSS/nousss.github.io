import { Film } from '../../../typings/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: { name: 'Memories of Nobody', aliases: ['1'], image: () => getImage(0) },
  1: {
    name: 'The Diamond Dust Rebellion',
    aliases: ['2'],
    image: () => getImage(1),
  },
  2: {
    name: 'Fade to Black',
    aliases: ['3'],
    image: () => getImage(2),
  },
  3: {
    name: 'Hell Verse',
    aliases: ['4'],
    image: () => getImage(3),
  },
};
