import { Film } from '../../../typings/types';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'La légende de Shenron',
    aliases: [''],
    image: () => getImage(0),
  },

  1: {
    name: 'Le chateau du demon',
    aliases: [''],
    image: () => getImage(1),
  },

  2: {
    name: "L'aventure mystique",
    aliases: [''],
    image: () => getImage(2),
  },
  3: {
    name: "L'armée du ruban rouge",
    aliases: [''],
    image: () => getImage(3),
  },
};
