import { getImage } from './constants/images-saisons';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/DragonBallZ/Affiche.webp';
import episodesNames from './constants/episodes-names';
import { Anime } from '../../class/anime';

export class DragonBallZ extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Tout les épisodes',
        aliases: [''],
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/dragon-ball-z/film/${langage}/episodes.js`,
      names: films,
      lecteur: 'eps2',
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: (index: string | number, lang: string) =>
        `https://anime-sama.fr/catalogue/dragon-ball-z/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
      },
      names: episodesNames,
      lecteur: 'eps1',
    };
  }
}
