import { getImageSaisons } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";
import { Anime } from "@/app/class/anime";
import { Options } from "@/typings/types";

import Affiche from "@/assets/Animes/DateALive/affiche.webp";

class DateALive extends Anime {
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
        name: "Saison 4",
        aliases: [""],
        image: () => getImageSaisons(4),
      },
      5: {
        name: "Saison 5",
        aliases: [""],
        image: () => getImageSaisons(5),
      },
    } as Options.Season;

    this.FILM_OPTIONS = {
      SCRIPT_URL: (langage: string) =>
        `https://anime-sama.fr/catalogue/date-a-live/film/${langage}/episodes.js`,
      names: {
        1: {
          name: "Date a Bullet 1",
          aliases: [""],
          image: () => getImageFilms(1),
        },
        2: {
          name: "Date a Bullet 2",
          aliases: [""],
          image: () => getImageFilms(2),
        },
        3: {
          name: "Mayuri Judgement",
          image: () => getImageFilms(3),
        },
      } as Options.Film,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/date-a-live/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 13,
        3: 24,
        4: 36,
        5: 48,
        6: 60,
      },
    };
  }
}

export default DateALive;
