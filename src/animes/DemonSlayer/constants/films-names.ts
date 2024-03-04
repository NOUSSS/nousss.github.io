import { Film } from '../../../typings/types';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: "Le train de l'infini",
    aliases: ['rengoku', 'mort', 'pilier'],
    image: () => getImage(0),
  },
};
