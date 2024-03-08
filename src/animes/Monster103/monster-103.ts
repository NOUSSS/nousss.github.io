import { getImage } from "./constants/images-saisons";

import episodes from "./constants/episodes-names";
import Affiche from "@/assets/Animes/Monster103/Affiche.webp";

import { Anime } from "@/app/class/anime";

export default class Monster103 extends Anime {
  constructor() {
    super();

    this.affiche = Affiche;
    this.saisons = {
      1: {
        name: "Saison 1",
        aliases: ["1"],
        image: () => getImage(1),
      },
    };

    this.EPISODES_OPTIONS = {
      SCRIPT_URL: ({
        index,
        lang,
      }: {
        index: number | string;
        lang: string;
        maxEpisode?: string;
      }) =>
        `https://anime-sama.fr/catalogue/monster-103-mercies-dragon-damnation/saison${index}/${lang}/episodes.js`,

      allIndex: {
        1: 0,
      },
      names: episodes,
    };
  }
}
