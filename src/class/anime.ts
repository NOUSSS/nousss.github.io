import {
  FilmOptions,
  ScansOptions,
  EpisodesOptions,
  Note,
} from '../typings/types';

import { Season } from '../typings/types';

export class Anime {
  public affiche: string;

  public saisons: Season | null;
  public FILM_OPTIONS: FilmOptions | null;
  public SCANS_OPTIONS: ScansOptions | null;
  public EPISODES_OPTIONS: EpisodesOptions | null;

  public note: Note[] | string | undefined;

  constructor() {
    this.affiche = '';

    this.saisons = null;
    this.FILM_OPTIONS = null;
    this.SCANS_OPTIONS = null;
    this.EPISODES_OPTIONS = null;
  }
}
