import { Film } from '../../../typings/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: { name: 'Film 1', aliases: ['1'], image: () => getImage(0) },
};
