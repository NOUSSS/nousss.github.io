import {
  FilmOptions,
  ScansOptions,
  EpisodesOptions,
} from '../interfaces/interface';

import { Season } from '../interfaces/interface';

export class Anime {
  public affiche: string;

  public saisons: Season;
  public FILM_OPTIONS: FilmOptions;
  public SCANS_OPTIONS: ScansOptions;
  public EPISODES_OPTIONS: EpisodesOptions;

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
  }
}