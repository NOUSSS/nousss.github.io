import { getImage } from './constants/images-saisons';
import { films } from './constants/films-names';
import { Anime } from '../../class/anime';

import Affiche from '../../assets/Animes/SevenDeadlySins/Affiche.jpg';

export default class SevenDeadlySins extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        image: () => getImage(1),
      },
      2: {
        name: 'Saison 2',
        image: () => getImage(2),
      },
      3: {
        name: 'Saison 3',
        image: () => getImage(3),
      },
      4: {
        name: 'Saison 4',
        image: () => getImage(4),
      },
      5: {
        name: 'OAV',
        image: () => getImage(5),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/seven-deadly-sins/film/${langage}/episodes.js`,
      names: films,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/seven-deadly-sins/saison${index}/${lang}/episodes.js`,

      oav: true,

      allIndex: {
        1: 0,
        2: 29,
        3: 53,
        4: 77,
        5: 101,
      },
    };
  }
}