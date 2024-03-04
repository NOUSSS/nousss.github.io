import { Film } from '../../../typings/types';
import { getImage } from './images-films';

export const films: Film = {
  0: {
    name: 'A la poursuite de Garlic',
    aliases: [''],
    image: () => getImage(0),
  },
  1: {
    name: 'Le robot des glaces',
    aliases: [''],
    image: () => getImage(1),
  },
  2: {
    name: 'Le combat fratricide',
    aliases: [''],
    image: () => getImage(2),
  },
  3: {
    name: 'La menace de Namek',
    aliases: [''],
    image: () => getImage(3),
  },
  4: {
    name: 'La revanche de cooler',
    aliases: [''],
    image: () => getImage(4),
  },
  5: {
    name: 'Cent milles guerries de metal',
    aliases: [''],
    image: () => getImage(5),
  },
  6: {
    name: "L'offensive des Cyborgs",
    aliases: [''],
    image: () => getImage(6),
  },
  7: {
    name: 'Broly le Super Guerrier',
    aliases: [''],
    image: () => getImage(7),
  },
  8: {
    name: "Les mercenaires de l'espace",
    aliases: [''],
    image: () => getImage(8),
  },
  9: {
    name: 'Attaque Super Warrior',
    aliases: [''],
    image: () => getImage(9),
  },
  10: {
    name: 'Fusions',
    aliases: [''],
    image: () => getImage(10),
  },
  11: {
    name: "L'attaque du Dragon",
    aliases: [''],
    image: () => getImage(11),
  },
  12: {
    name: 'Battle Of Gods',
    aliases: [''],
    image: () => getImage(12),
  },
  13: {
    name: "La resurection de 'F'",
    aliases: [''],
    image: () => getImage(13),
  },
};
