import { getImage } from './constants/images-saisons';
import Affiche from '../../assets/Animes/TokyoGhoul/Affiche.jpg';

import { Anime } from '../../class/anime';

export default class TokyoGhoul extends Anime {
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
        aliases: ['2'],
        image: () => getImage(2),
      },
      3: {
        name: 'Tokyo Ghoul:RE',
        aliases: ['3'],
        image: () => getImage(3),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/tokyo-ghoul/scan/vf/episodes.js',

      IMAGE_URL: (chapitre: string | number, index: string | number) =>
        `https://s22.anime-sama.fr/s1/scans/Tokyo%20Ghoul/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: (index: string | number, lang: string) =>
        `https://anime-sama.fr/catalogue/tokyo-ghoul/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 24,
        4: 48,
        5: 336,
        6: 389,
        7: 516,
        8: 574,
        9: 746,
        10: 877,
        11: 1088,
      },
      names: [],
      lecteur: 'eps2',
    };
  }
}
