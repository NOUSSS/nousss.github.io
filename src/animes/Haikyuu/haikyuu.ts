import Affiche from '../../assets/Animes/Haikyuu/Affiche.jpg';

import { Anime } from '../../class/anime';
import { getImage } from './constants/images-saisons';
import { films } from './constants/film-names';

export default class Haikyuu extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        aliases: [''],
        image: () => getImage(1),
      },

      2: {
        name: 'Saison 2',
        aliases: [''],
        image: () => getImage(2),
      },
      3: {
        name: 'Saison 3',
        aliases: [''],
        image: () => getImage(3),
      },
      4: {
        name: 'Saison 4',
        aliases: [''],
        image: () => getImage(4),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/haikyuu/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL: 'https://anime-sama.fr/catalogue/haikyuu/scan/vf/episodes.js',

      IMAGE_URL: (chapitre: string | number, index: string | number) =>
        `https://s22.anime-sama.fr/s1/scans/Haikyuu/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [207, 208, 298, 299, 309, 319, 408],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: (index: string | number, lang: string) =>
        `https://anime-sama.fr/catalogue/haikyuu/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 25,
        3: 50,
        4: 60,
        5: 85,
      },

      lecteur: 'eps2',
    };
  }
}
