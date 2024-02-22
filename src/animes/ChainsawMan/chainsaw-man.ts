import { getImage } from './constants/images-saisons';

import episodes from './constants/episodes-names';
import Affiche from '../../assets/Animes/ChainsawMan/Affiche.jpg';

import { Anime } from '../../class/anime';

export default class ChainsawMan extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        aliases: [''],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/chainsaw-man/scan/vf/episodes.js',

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Chainsaw%20Man/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/chainsaw-man/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
      },

      names: episodes,
    };
  }
}
