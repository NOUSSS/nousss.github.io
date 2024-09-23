import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/TenseiShitara/affiche.webp";

class TenseiShitara extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImageSaisons(1),
      },
      2: {
        name: "Saison 2",
        aliases: [""],
        image: () => getImageSaisons(2),
      },
      3: {
        name: "Saison 3",
        aliases: [""],
        image: () => getImageSaisons(3),
      },
      4: {
        name: "The Slime Diaries",
        aliases: [""],
        hs: true,
        image: () => getImageSaisons(4),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/tensei-shitara-slime-datta-ken/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Scarlet Bond",
          aliases: [""],
          image: () => getImageFilms(1),
        },
      } as Options.Film,
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/tensei-shitara-slime-datta-ken/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://anime-sama.fr/s2/scans/Tensei Shitara Slime Datta Ken/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/tensei-shitara-slime-datta-ken/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 25,
        3: 51,
        4: 75,
        5: 87,
      },
    };
  }
}

export default TenseiShitara;
