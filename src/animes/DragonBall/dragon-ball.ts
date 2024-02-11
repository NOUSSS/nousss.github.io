import { getImage } from './constants/images-saisons';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/DragonBall/Affiche.jpg';
import episodesNames from './constants/episodes-names';

import { Anime } from '../../class/anime';

export class DragonBall extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Tout les épisodes',
        aliases: ['aliase1'],
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/dragon-ball/film/${langage}/episodes.js`,
      names: films,
      lecteur: 'eps1',
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: (index: string | number, lang: string) =>
        `https://anime-sama.fr/catalogue/dragon-ball/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
      },
      names: episodesNames,
      lecteur: 'eps1',
    };
  }
}
