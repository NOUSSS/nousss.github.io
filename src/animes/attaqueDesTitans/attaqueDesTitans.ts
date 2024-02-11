import { getImage } from './constants/image-saisons';

import Affiche from '../../assets/Animes/AttaqueDesTitans/Affiche.jpg';
import episodesNames from './constants/episodes-names';
import { Anime } from '../../class/anime';

export class AttaqueDesTitans extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        aliases: ['debut'],
        image: () => getImage(1),
      },
      2: {
        name: 'Saison 2',
        aliases: ['titans'],
        image: () => getImage(2),
      },
      3: {
        name: 'Saison 3',
        aliases: ['eren'],
        image: () => getImage(3),
      },
      4: {
        name: 'Saison 4',
        aliases: ['mahr'],
        image: () => getImage(4),
      },
      5: {
        name: 'Saison 4 partie 2',
        aliases: ['mahr'],
        image: () => getImage(5),
      },
      6: {
        name: 'Saison 4 partie 3',
        aliases: ['mahr', 'grand terrassement'],
        image: () => getImage(6),
      },
      7: {
        name: 'Saison 4 partie 4',
        aliases: ['grand terrassement', 'vrai fin'],
        image: () => getImage(7),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/shingeki-no-kyojin/scan/vf/episodes.js',

      IMAGE_URL: (chapitre: string | number, index: string | number) =>
        `https://s22.anime-sama.fr/s1/scans/Shingeki%20no%20Kyojin/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: (index: string | number, lang: string) =>
        `https://anime-sama.fr/catalogue/shingeki-no-kyojin/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 25,
        3: 37,
        4: 59,
        5: 75,
        6: 87,
        7: 88,
      },
      names: episodesNames,
      lecteur: 'epsAS',
    };
  }
}
