import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/ASilentVoice/affiche.jpg";

class ASilentVoice extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/a-silent-voice/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "A Silent Voice",

          image: () => getImageFilms(1),
        },
      } as Options.Film,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/a-silent-voice/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/A Silent Voice/${chapitre}/${index}.jpg`,
    };
  }
}

export default ASilentVoice;
