import { getImage } from './constants/images-saisons';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/KurokoBasket/Affiche.jpg';
import { Anime } from '../../class/anime';

export default class KurokoBasket extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        aliases: ['kagami', 'generation miracle'],
        image: () => getImage(1),
      },
      2: {
        name: 'Saison 2',
        aliases: ['midorima'],
        image: () => getImage(2),
      },
      3: {
        name: 'Winter cup (Saison 3)',
        aliases: ['akashi'],
        image: () => getImage(3),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/kuroko-no-basket/film/${langage}/episodes.js`,
      names: films,
      BLACKLIST_URL: [
        'https://sendvid.com/embed/c66eycw4',
        'https://sendvid.com/embed/bg29pir3',
        'https://sendvid.com/embed/oj3esvvo',
      ],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: (index: string | number, lang: string) =>
        `https://anime-sama.fr/catalogue/kuroko-no-basket/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
        2: 26,
        3: 52,
      },
      names: [],
      lecteur: 'eps2',
    };
  }
}
