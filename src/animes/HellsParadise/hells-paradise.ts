import { getImage } from './constants/images-saisons';

import episodes from './constants/episodes-names';
import Affiche from '../../assets/Animes/HellsParadise/Affiche.jpg';

import { Anime } from '../../class/anime';

export default class HellsParadise extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        aliases: [''],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/hells-paradise/scan/vf/episodes.js',

      IMAGE_URL: (chapitre: string | number, index: string | number) =>
        `https://s22.anime-sama.fr/s1/scans/Hell's%20Paradise/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [46],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: (index: string | number, lang: string) =>
        `https://anime-sama.fr/catalogue/hells-paradise/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 13,
      },

      names: episodes,
      lecteur: 'epsAS',
    };
  }
}