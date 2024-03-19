import { getImage } from "./constants/image-saisons";
import { films } from "./constants/films-names";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/DragonBallSuper/Affiche.jpg";
import episodesNames from "./constants/episodes-names";

class DragonBallSuper extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Tous les épisodes",
        aliases: ["beerus", "zeno"],
        image: () => getImage(1),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/dragon-ball-super/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/dragon-ball-super/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Dragon Ball super/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/dragon-ball-super/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
      },
      names: episodesNames,
    };
  }
}

export default DragonBallSuper;
