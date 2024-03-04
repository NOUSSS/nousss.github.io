import { Film } from '../../../typings/types';
import { getImage } from './images-films';

export const films: Film = {
  0: { name: 'Prisoners of the sky', aliases: ['1'], image: () => getImage(1) },
  1: {
    name: 'Cursed by light',
    aliases: ['2'],
    image: () => getImage(2),
  },
  2: {
    name: 'Gruge of Edinburgh (1)',
    aliases: ['3'],
    image: () => getImage(3),
  },
  3: {
    name: 'Gruge of Edinburgh (2)',
    aliases: ['4'],
    image: () => getImage(4),
  },
};
