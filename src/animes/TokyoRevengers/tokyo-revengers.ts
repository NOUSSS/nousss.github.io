import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";
import { Anime } from "@/app/class/anime";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/TokyoRevengers/Affiche.jpg";

class TokyoRevengers extends Anime {
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
        name: "Christmas Showdown",
        aliases: ["2"],
        image: () => getImage(2),
      },
      3: {
        name: "Tenjiku",
        aliases: ["3"],
        image: () => getImage(3),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/tokyo-revengers/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/tokyo-revengers/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Tokyo%20Revengers/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: string | number; lang: string }) =>
        `https://anime-sama.fr/catalogue/tokyo-revengers/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 24,
        3: 37,
        4: 50,
      },

      names: episodes,
    };
  }
}

export default TokyoRevengers;
