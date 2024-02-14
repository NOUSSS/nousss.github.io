import { Film } from '../../../typings/interface';
import { getImage } from './images-films';

export const films: Film = {
  0: { name: 'Le film', aliases: ['1'], image: () => getImage(0) },
  1: {
    name: "L'Aventure de l'Île de l'Horloge",
    aliases: ['ile', '2'],
    image: () => getImage(1),
  },
  2: {
    name: "Le Royaume de Chopper, l'Étrange Île des Animaux",
    aliases: ['ile', '3'],
    image: () => getImage(2),
  },
  3: {
    name: "L'Aventure sans Issue",
    aliases: ['4'],
    image: () => getImage(3),
  },
  4: {
    name: "La Malédiction de l'Épée Sacrée",
    aliases: ['epee sacre', '5'],
    image: () => getImage(4),
  },
  5: {
    name: "Le Baron Omatsuri et l'Île aux Secrets",
    aliases: ['ile', '6'],
    image: () => getImage(5),
  },
  6: {
    name: 'Le Mecha Géant du Château Karakuri',
    aliases: ['chateau', '7'],
    image: () => getImage(6),
  },
  7: {
    name: 'Les Pirates et la Princesse du Désert',
    aliases: ['desert', '8'],
    image: () => getImage(7),
  },
  8: {
    name: 'Le Miracle des Cerisiers en Hiver',
    aliases: ['9'],
    image: () => getImage(8),
  },
  9: { name: 'Strong World', aliases: ['10'], image: () => getImage(9) },
  10: { name: 'Z', aliases: ['zed', '12'], image: () => getImage(10) },
  11: { name: 'Gold', aliases: ['or', '13'], image: () => getImage(11) },
  12: {
    name: 'Stampede',
    aliases: [
      '14',
      'boa',
      'roger',
      'fugitora',
      'mihawk',
      'bullet',
      'barbe noire',
      'buster call',
      'kizaru',
      'Laugh Tale',
    ],
    image: () => getImage(12),
  },
  13: {
    name: 'Red',
    aliases: ['shanks', 'uta', 'gear', '5', 'gear 5'],
    image: () => getImage(13),
  },
};
