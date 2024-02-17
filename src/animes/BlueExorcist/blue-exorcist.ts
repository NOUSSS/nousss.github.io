import { getImage } from './constants/images-saisons';
import { films } from './constants/films-names';

import Affiche from '../../assets/Animes/BlueExorcist/Affiche.jpg';

import { Anime } from '../../class/anime';

export default class BlueExorcist extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        aliases: ['1'],
        image: () => getImage(1),
      },
      2: {
        name: 'Saison 2',
        aliases: ['2'],
        image: () => getImage(2),
      },
      3: {
        name: 'Saison 3',
        aliases: ['3'],
        image: () => getImage(3),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/blue-exorcist/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/blue-exorcist/scan/vf/episodes.js?filever=1728957',

      IMAGE_URL: (chapitre: string | number, index: string | number) =>
        `https://s22.anime-sama.fr/s1/scans/Blue%20Exorcist/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [37, 47, 48, 76, 87, 104],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({
        index,
        lang,
        maxEpisode,
      }: {
        index: number | string;
        lang: string;
        maxEpisode?: string;
      }) =>
        `https://anime-sama.fr/catalogue/blue-exorcist/saison${index}/${lang}/episodes.js${
          maxEpisode ? '?filever=' + maxEpisode : ''
        }`,

      allIndex: {
        1: 0,
        2: 25,
        3: 37,
      },
      names: [],
      lecteur: 'epsAS',
    };
  }
}
