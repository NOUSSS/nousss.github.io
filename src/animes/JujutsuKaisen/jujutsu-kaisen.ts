import { getImage } from "./constants/images-saisons";
import { films } from "./constants/films-names";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/JujutsuKaisen/Affiche.jpeg";
import episodesNames from "./constants/episodes-names";

class JujutsuKaisen extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["sukuna"],
        image: () => getImage(1),
      },
      2: {
        name: "Shibuya",
        aliases: ["2", "sukuna", "gojo", "scelle", "sukuna", "jogo", "itadori"],
        image: () => getImage(2),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/jujutsu-kaisen/film/${langage}/episodes.js`,
      names: films,
    };

    this.SCANS_OPTIONS = {
      from: 0,
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/jujutsu-kaisen/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s1/scans/Jujutsu Kaisen/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/jujutsu-kaisen/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
        2: 24,
        3: 47,
      },
      names: episodesNames,
    };
  }
}

export default JujutsuKaisen;
