import { ANIMES } from "@/animes/constants";

export const getAnime = (animeName: string) =>
  ANIMES.find(({ anime }) => anime.toLowerCase() === animeName?.toLowerCase());
