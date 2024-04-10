import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/VinlandSaga/Affiche.jpg";

import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

export default class VinlandSaga extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["knut", "askeladd", "thors", "thorkell"],
        image: () => getImage(1),
      },
      2: {
        name: "Saison 2",
        aliases: ["knut", "esclave", "serpent"],
        image: () => getImage(2),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/vinland-saga/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Vinland%20Saga/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [] as number[],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/vinland-saga/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
        2: 24,
        3: 48,
      },

      names,
    };
  }
}
