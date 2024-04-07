import { StaticImageData } from "next/image";
import { Note, Options } from "@/typings/types";

export class Anime {
  public affiche: StaticImageData | null;
  public saisons: Options.Season | null;

  public FILM_OPTIONS: Options.FilmOptions | null;
  public SCANS_OPTIONS: Options.ScansOptions | null;
  public EPISODES_OPTIONS: Options.EpisodesOptions | null;

  public note: Note[] | string | undefined;

  constructor() {
    this.affiche = null;
    this.saisons = null;

    this.FILM_OPTIONS = null;
    this.SCANS_OPTIONS = null;
    this.EPISODES_OPTIONS = null;
  }
}
