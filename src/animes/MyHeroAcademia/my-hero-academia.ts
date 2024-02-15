import { getImage } from './constants/images-saisons';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/MyHeroAcademia/Affiche.jpg';
import episodes from './constants/episodes-names';

import { Anime } from '../../class/anime';

export default class MyHeroAcademia extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        aliases: ['one for all', 'all might'],
        image: () => getImage(1),
      },
      2: {
        name: 'Saison 2',
        aliases: ['one for all'],
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
      5: {
        name: 'Saison 5',
        aliases: [''],
        image: () => getImage(5),
      },
      6: {
        name: 'Saison 6',
        aliases: ['shigaraki'],
        image: () => getImage(6),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/my-hero-academia/film/${langage}/episodes.js`,
      names: films,
      lecteur: 'eps2',
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/my-hero-academia/scan/vf/episodes.js',

      IMAGE_URL: (chapitre: string | number, index: string | number) =>
        `https://s22.anime-sama.fr/s1/scans/My%20Hero%20Academia/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [] as number[],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: (index: string | number, lang: string) =>
        `https://anime-sama.fr/catalogue/my-hero-academia/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
        2: 13,
        3: 38,
        4: 63,
        5: 88,
        6: 113,
        7: 138,
      },
      names: episodes,
      lecteur: 'epsAS',
    };
  }
}
