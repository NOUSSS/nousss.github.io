import { ANIMES } from "@/animes/constants";

export const formatName = (animeName: string) => {
  return ANIMES.find(
    ({ anime }) => anime.toLowerCase() === animeName.toLowerCase(),
  )?.anime;
};
