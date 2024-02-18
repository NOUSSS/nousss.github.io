import { getImage } from './constants/images-saisons';
import { Anime } from '../../class/anime';

import Affiche from '../../assets/Animes/CaptainTsubasa/Affiche.avif';

export default class CaptainTsubasa extends Anime {
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
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/captain-tsubasa/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 52,
      },
      lecteur: 'eps2',
    };
  }
}
