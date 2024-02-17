import { getImage } from './constants/images-saisons';

import Affiche from '../../assets/Animes/TowerOfGod/Affiche.jpg';
import { Anime } from '../../class/anime';

export default class TowerOfGod extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        aliases: ['Saison 1'],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/tower-of-god/scan/vf/episodes.js',

      IMAGE_URL: (chapitre: string | number, index: string | number) =>
        `https://s22.anime-sama.fr/s1/scans/Tower%20Of%20God/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [78],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/tower-of-god/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
        2: 13,
      },
      names: [],
      lecteur: 'eps2',
    };
  }
}
