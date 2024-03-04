import { getImage } from "./constants/images-saisons";
import { Anime } from "@/app/class/anime";

import Affiche from "../../assets/Animes/FireForce/Affiche.webp";

export default class FireForce extends Anime {
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
        name: "Saison 2",
        aliases: ["2"],
        image: () => getImage(2),
      },
    };

    this.SCANS_OPTIONS = {
      SCRIPT_URL:
        "https://anime-sama.fr/catalogue/fire-force/scan/vf/episodes.js?filever=1728957",

      IMAGE_URL: ({
        chapitre,
        index,
      }: {
        chapitre: string | number;
        index: string | number;
      }) =>
        `https://s22.anime-sama.fr/s1/scans/Fire%20Force/${chapitre}/${index}.jpg`,

      from: 0,
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({
        index,
        lang,
        maxEpisode,
      }: {
        index: number | string;
        lang: string;
        maxEpisode?: string;
      }) =>
        `https://anime-sama.fr/catalogue/fire-force/saison${index}/${lang}/episodes.js${
          maxEpisode ? "?filever=" + maxEpisode : ""
        }`,

      allIndex: {
        1: 0,
        2: 24,
        3: 48,
      },
    };
  }
}
