import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Boruto/Affiche.jpg";

import { Anime } from "@/app/class/anime";

class Boruto extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tout les épisodes",
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
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Boruto/${chapitre}/${index}.jpg`,
    };

    this.note =
      'Je conseille d\'aller sur <a href="https://furansujapon.com/actualite/boruto-liste-episode/" target="_blank">ce site</a> pour voir les hors series';

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/boruto/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },
      names: episodes,
    };
  }
}

export default Boruto;
