import { Film } from '../../../interfaces/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'Name1',
    aliases: ['aliase1 '],
    image: () => getImage(0),
  },
};
