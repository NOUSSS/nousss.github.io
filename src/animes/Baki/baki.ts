import { Anime } from "@/app/class/anime";
import affiche from "@/assets/Animes/Baki/affiche.webp";
import { getImage } from "./constants/images-saisons";
import { getImageFilms } from "./constants/images-films";

class Baki extends Anime {
  constructor() {
    super();

    this.affiche = affiche;

    this.saisons = {
      1: {
        name: "Baki the Grappler",
        image: () => getImage(1),
      },
      2: {
        name: "Saison 1 (2018)",
        image: () => getImage(2),
      },
      3: {
        name: "Saison 2 (2018)",
        image: () => getImage(3),
      },
      4: {
        name: "Saison 1 (2021)",
        image: () => getImage(4),
      },
      5: {
        name: "Saison 2 (2021)",
        image: () => getImage(5),
      },
    };

    this.FILM_OPTIONS = {
      SCRIPT_URL: (lang) =>
        `https://anime-sama.fr/catalogue/baki/film/${lang}/episodes.js`,
      names: {
        1: {
          name: "Baki vs Kengan",
          image: () => getImageFilms(1),
        },
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }) =>
        `https://anime-sama.fr/catalogue/baki/saison${index}/${lang}/episodes.js`,

      noc: true,

      allIndex: {
        1: 0,
      },
    };
  }
}

export default Baki;
