import { getImage } from './constants/image-saisons';
import { Anime } from '../../class/anime';

import Affiche from '../../assets/Animes/AirGear/Affiche.jpg';

export default class AirGear extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: 'Tout les épisodes',
        aliases: ['debut'],
        image: () => getImage(1),
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/air-gear/saison${index}/${lang}/episodes.js`,

      horsSeries: [{ saison: '1', hs: [21] }],
      allIndex: {
        1: 0,
      },
      names: [],
      lecteur: 'eps2',
    };
  }
}
