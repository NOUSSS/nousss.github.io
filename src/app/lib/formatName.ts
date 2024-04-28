import { ANIMES } from "@/animes/constants";

export default function formatName(animeName: string) {
  return ANIMES.find(
    ({ anime }) => anime.toLowerCase() === animeName.toLowerCase(),
  )?.anime;
}
