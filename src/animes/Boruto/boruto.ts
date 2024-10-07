import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import names from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Boruto/Affiche.jpg";

import { Anime } from "@/app/class/anime";

class Boruto extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes (avec fillers)",
        aliases: ["code", "shikamaru", "sasuke", "naruto"],
        image: () => getImage(1),
      },
      2: {
        name: "Tous les épisodes (sans fillers)",
        hs: true,
        aliases: ["code", "shikamaru", "sasuke", "naruto"],
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/boruto/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/boruto/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/Boruto/${chapitre}/${index}.jpg`,

      versions: [
        {
          name: "Two Blue Vortex",
          value: "-boruto-two-blue-vortex|Boruto - Two Blue Vortex",
        },
      ],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/boruto/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      noc: true,

      names,
    };
  }
}

export default Boruto;
