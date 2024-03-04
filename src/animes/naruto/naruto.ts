import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "../../assets/Animes/Naruto/Affiche.jpg";
import episodesNames from "./constants/episodes-names";

class Naruto extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Les episodes",
        aliases: ["saisons"],
        image: () => getImage(1),
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
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Naruto/${chapitre}/${index}.jpg`,
      CHAPITRE_SPECIAUX: [700, 701],
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/naruto/saison${index}/${lang}/episodes.js`,

      horsSeries: [],

      allIndex: {
        1: 0,
      },
      names: episodesNames,
    };
  }
}

export default Naruto;
