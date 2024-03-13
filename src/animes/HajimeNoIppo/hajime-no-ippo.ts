import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import Affiche from "@/assets/Animes/HajimeNoIppo/Affiche.webp";

import { Anime } from "@/app/class/anime";

export default class HajimeNoIppo extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["1"],
        image: () => getImage(1),
      },
      2: {
        name: "Saison 2",
        aliases: ["2"],
        image: () => getImage(2),
      },
      3: {
        name: "Saison 3",
        aliases: ["3"],
        image: () => getImage(3),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/hajime-no-ippo/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/hajime-no-ippo/scan/vf/episodes.js?filever=1728957",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Hajime%20no%20Ippo/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: string | number; lang: string }) =>
        `https://anime-sama.fr/catalogue/hajime-no-ippo/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 76,
        3: 102,
        4: 127,
      },
    };
  }
}
