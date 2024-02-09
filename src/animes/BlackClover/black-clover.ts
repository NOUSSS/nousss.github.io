import { getImage } from './constants/images-saisons';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/BlackClover/Affiche.jpg';
import episodes from './constants/episodes-names';
import { Anime } from '../../class/anime';

export class BlackClover_OPTIONS extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Tout les épisodes',
        aliases: ['magie'],
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/black-clover/film/${langage}/episodes.js`,
      names: films,
      BLACKLIST_URL: [],
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/black-clover/scan/vf/episodes.js',

      IMAGE_URL: (chapitre: string | number, index: string | number) =>
        `https://s22.anime-sama.fr/s1/scans/Black%20Clover/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: (index: string | number, lang: string) =>
        `https://anime-sama.fr/catalogue/black-clover/saison${index}/${lang}/episodes.js`,

      horsSeries: [
        {
          saison: '1',
          hs: [170],
        },
      ],

      allIndex: {
        1: 0,
      },

      names: episodes,
      lecteur: 'epsAS',
    };
  }
}
