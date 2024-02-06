import { HunterXHunter_OPTIONS } from '../animes/HunterXHunter/hunter-x-hunter';
import { JujutsuKaisen_OPTIONS } from '../animes/JujutsuKaisen/jujutsu-kaisen';
import { KurokoBasket_OPTIONS } from '../animes/KurokoBasket/kuroko-basket';
import { Mashle_OPTIONS } from '../animes/Mashle/mashle';
import { OnePiece_OPTIONS } from '../animes/OnePiece/one-piece';
import { SoloLeveling_OPTIONS } from '../animes/SoloLeveling/solo-leveling';
import { AttaqueDesTitans_OPTIONS } from '../animes/attaqueDesTitans/attaqueDesTitans';

export const ANIMES_OPTIONS = [
  { anime: 'one-piece', options: OnePiece_OPTIONS, category: 'Masterclass' },
  {
    anime: 'solo-leveling',
    options: SoloLeveling_OPTIONS,
    category: 'En cours ...',
  },
  {
    anime: 'Kuroko Basket',
    category: 'Sport',
    options: KurokoBasket_OPTIONS,
  },
  {
    anime: 'jujutsu-kaisen',
    options: JujutsuKaisen_OPTIONS,
    category: 'À voir',
  },
  {
    anime: 'hunter-x-hunter',
    options: HunterXHunter_OPTIONS,
    category: 'Masterclass',
  },
  {
    anime: 'mashle',
    options: Mashle_OPTIONS,
    category: 'En cours ...',
  },
  {
    anime: "L'attaque des titans",
    options: AttaqueDesTitans_OPTIONS,
    category: 'Masterclass',
  },
];

interface AnimeOption {
  anime: string;
  category: string;
}

interface GroupedAnimes {
  names: string[];
  category: string;
}

export const groupAnimesByCategory = (
  animes: AnimeOption[]
): GroupedAnimes[] => {
  const grouped: { [key: string]: string[] } = {};

  animes.forEach(({ anime, category }) => {
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(anime);
  });

  return Object.keys(grouped).map((category) => ({
    names: grouped[category],
    category: category,
  }));
};
