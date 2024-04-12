import { Anime, Note } from "@/typings/types";

export default function getNote(
  note: Note[] | string | null,
  anime: Anime.AnimeEpisodesProps,
): string {
  if (note) {
    if (typeof note === "string") {
      return note;
    } else {
      if (note.find((obj) => obj.saison === anime?.saison)) {
        return note.find((obj) => obj.saison === anime?.saison)?.message || "";
      }
    }
  }

  return "";
}
