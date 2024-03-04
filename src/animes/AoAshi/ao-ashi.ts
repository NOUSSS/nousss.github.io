import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import episodes from "./constants/episodes-names";
import Affiche from "../../assets/Animes/AoAshi/Affiche.jpg";

class AoAshi extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        image: () => getImage(1),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL: "https://anime-sama.fr/catalogue/ao-ashi/scan/vf/episodes.js",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Ao%20Ashi/${chapitre}/${index}.jpg`,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({ index, lang }: { index: number | string; lang: string }) =>
        `https://anime-sama.fr/catalogue/ao-ashi/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },

      names: episodes,
    };
  }
}

export default AoAshi;
