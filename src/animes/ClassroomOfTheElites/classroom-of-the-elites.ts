import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "@/assets/Animes/ClassroomOfTheElites/Affiche.webp";
import episodes from "./constants/episodes-names";

export default class ClassroomOfTheElites extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: [""],
        image: () => getImage(1),
      },

      2: {
        name: "Saison 2",
        aliases: [""],
        image: () => getImage(2),
      },

      3: {
        name: "Saison 3",
        aliases: [""],
        image: () => getImage(3),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/classroom-of-the-elite/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Classroom%20of%20the%20Elite/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [109, 110],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/classroom-of-the-elite/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
        2: 12,
        3: 25,
      },

      names: episodes,
    };
  }
}
