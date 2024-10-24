import { Anime } from "@/app/class/anime";
import { getImage } from "./constants/images-films";

import Affiche from "@/assets/Animes/Naruto/Affiche.jpg";
import episodesNames from "./constants/episodes-names";

import s1 from "@/assets/Animes/Naruto/Saisons/Saison1.webp";

class Naruto extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes (fillers)",
        aliases: ["saisons"],
        image: () => s1,
      },
      2: {
        name: "Tous les épisodes (sans fillers)",
        aliases: ["saisons"],
        hs: true,
        image: () => s1,
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/naruto/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Naruto et la princesse des neiges",
          image: () => getImage(1),
        },
        2: {
          name: "La légende de la pierre de Guelel",
          image: () => getImage(2),
        },
        3: {
          name: "Mission spéciale au pays de la Lune",
          image: () => getImage(3),
        },
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/naruto/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) => `https://anime-sama.fr/s2/scans/Naruto/${chapitre}/${index}.jpg`,

      CHAPITRE_SPECIAUX: [700, 701],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/naruto/saison${index}/${lang}/episodes.js`,

      noc: true,

      allIndex: {
        1: 0,
      },

      names: episodesNames,
    };
  }
}

export default Naruto;
