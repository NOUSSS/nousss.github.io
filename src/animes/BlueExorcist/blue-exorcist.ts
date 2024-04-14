import Affiche from "@/assets/Animes/BlueExorcist/Affiche.jpg";
import names from "./constants/episodes-names";

import { getImagesSaisons } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";
import { getImagesFilms } from "./constants/images-films";

export default class BlueExorcist extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["1"],
        image: () => getImagesSaisons(1),
      },
      2: {
        name: "Saison 2",
        aliases: ["2"],
        image: () => getImagesSaisons(2),
      },
      3: {
        name: "Saison 3",
        aliases: ["3"],
        image: () => getImagesSaisons(3),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/blue-exorcist/film/${langage}/episodes.js`,
      names: {
        0: { name: "Le film", aliases: ["1"], image: () => getImagesFilms(0) },
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/blue-exorcist/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Blue Exorcist/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [37, 47, 48, 76, 87, 104],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/blue-exorcist/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 25,
        3: 37,
      },

      names,
    };
  }
}
