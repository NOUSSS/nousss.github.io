import {
  FilmOptions,
  ScansOptions,
  EpisodesOptions,
  Note,
} from '../typings/interface';

import { Season } from '../typings/interface';

export class Anime {
  public affiche: string;

  public saisons: Season;
  public FILM_OPTIONS: FilmOptions;
  public SCANS_OPTIONS: ScansOptions;
  public EPISODES_OPTIONS: EpisodesOptions;

  public note: string | Note[];

  constructor() {
    this.affiche = '';

    this.saisons = {};
    this.FILM_OPTIONS = {};
    this.SCANS_OPTIONS = {};
    this.EPISODES_OPTIONS = {
      allIndex: {},

      lecteur: '',
      SCRIPT_URL: () => '',
    };

    this.note = '';
  }
}
