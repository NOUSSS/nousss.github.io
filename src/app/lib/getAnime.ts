import { ANIMES } from "@/animes/constants";

export default function getAnime(animeName: string) {
  return ANIMES.find(
    ({ anime }) => anime.toLowerCase() === animeName?.toLowerCase(),
  );
}
