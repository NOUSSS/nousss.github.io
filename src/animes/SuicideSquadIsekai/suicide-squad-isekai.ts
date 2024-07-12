import { getImageSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/SuicideSquadIsekai/Affiche.webp";

class SuicideSquadIsekai extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        image: () => getImageSaisons(1),
      },
    } as Options.Season;

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/suicide-squad-isekai/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },
    };
  }
}

export default SuicideSquadIsekai;
