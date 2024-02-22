import { getImage } from './constants/images-saisons';
import { Anime } from '../../class/anime';

import Affiche from '../../assets/Animes/TheGodOfHighschool/Affiche.jpg';

export default class TheGodOfHighschool extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Saison 1',
        aliases: ['saison 1'],
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        'https://anime-sama.fr/catalogue/the-god-of-high-school/scan/vf/episodes.js',

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/The%20God%20of%20High%20School/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [307],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/the-god-of-high-school/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
        2: 13,
      },
      names: [],
    };
  }
}
