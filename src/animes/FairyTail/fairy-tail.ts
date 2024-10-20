import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/FairyTail/Affiche.jpg";

import { Anime } from "@/app/class/anime";

class FairyTail extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes",
        image: () => getImage(1),
      },
      2: {
        name: "100 Years Quest Saison 1",
        hs: true,
        image: () => getImage(2),
      },
      oav: {
        name: "OAV",

        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/fairy-tail/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/fairy-tail/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Fairy Tail/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [425, 451, 464, 492],

      versions: [
        {
          name: "La grande aventure de Happy",
          value:
            "_la-grande-aventure-de-happy|Fairy Tail - La Grande Aventure de Happy",
        },
        {
          name: "100 Years Quest",
          value: "_100-years-quest|Fairy Tail - 100 Years Quest",
        },
        {
          name: "City Hero",
          value: "_city-hero|Fairy Tail - City Hero",
        },
      ],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/fairy-tail/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      noc: true,

      names,
    };
  }
}

export default FairyTail;
