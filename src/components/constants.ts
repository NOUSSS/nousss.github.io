import { HunterXHunter_OPTIONS } from '../animes/HunterXHunter/hunter-x-hunter';
import { JujutsuKaisen_OPTIONS } from '../animes/JujutsuKaisen/jujutsu-kaisen';
import { Mashle_OPTIONS } from '../animes/Mashle/mashle';
import { OnePiece_OPTIONS } from '../animes/OnePiece/one-piece';
import { SoloLeveling_OPTIONS } from '../animes/SoloLeveling/solo-leveling';
import { AttaqueDesTitans_OPTIONS } from '../animes/attaqueDesTitans/attaqueDesTitans';

export const ANIMES_OPTIONS = [
  { anime: 'one-piece', options: OnePiece_OPTIONS },
  {
    anime: 'solo-leveling',
    options: SoloLeveling_OPTIONS,
  },
  {
    anime: 'jujutsu-kaisen',
    options: JujutsuKaisen_OPTIONS,
  },
  {
    anime: 'hunter-x-hunter',
    options: HunterXHunter_OPTIONS,
  },
  {
    anime: 'mashle',
    options: Mashle_OPTIONS,
  },
  {
    anime: "L'attaque des titans",
    options: AttaqueDesTitans_OPTIONS,
  },
];
