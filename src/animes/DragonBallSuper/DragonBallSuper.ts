import { getImage } from './constants/image-saisons';

import Affiche from '../../assets/Animes/DragonBallSuper/Affiche.jpg';
import { films } from './constants/films-names';
import episodesNames from './constants/episodes-names';
import { Anime } from '../../class/anime';

export default class DragonBallSuper extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Tout les épisodes',
        aliases: ['beerus', 'zeno'],
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/dragon-ball-super/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/dragon-ball-super/scan/vf/episodes.js',

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Dragon%20Ball%20Super/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/dragon-ball-super/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
      },
      names: episodesNames,
      lecteur: 'epsAS',
    };
  }
}
