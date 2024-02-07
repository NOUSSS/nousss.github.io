import { BlackClover_OPTIONS } from '../animes/BlackClover/black-clover';
import { HunterXHunter_OPTIONS } from '../animes/HunterXHunter/hunter-x-hunter';
import { JujutsuKaisen_OPTIONS } from '../animes/JujutsuKaisen/jujutsu-kaisen';
import { KurokoBasket_OPTIONS } from '../animes/KurokoBasket/kuroko-basket';
import { Mashle_OPTIONS } from '../animes/Mashle/mashle';
import { MyHeroAcademia_OPTIONS } from '../animes/MyHeroAcademia/my-hero-academia';
import { OnePiece_OPTIONS } from '../animes/OnePiece/one-piece';
import { SoloLeveling_OPTIONS } from '../animes/SoloLeveling/solo-leveling';
import { VinlandSaga_OPTIONS } from '../animes/VinlandSaga/vinland-saga';
import { AttaqueDesTitans_OPTIONS } from '../animes/attaqueDesTitans/attaqueDesTitans';

export const ANIMES_OPTIONS = [
  {
    anime: 'my-hero-academia',
    options: MyHeroAcademia_OPTIONS,
    category: 'New gen',
    synopsis:
      'Dans un futur proche suite à une mutation génétique, 80% de la population mondiale possède des super-pouvoirs appelés "Alters". Le plus célèbre des super-héros se nomme All Might. Izuku Midoriya en est fan, et rêve d\'intégrer la filière super-héroïque du lycée Yuei pour suivre les traces de son idole.',
  },
  {
    anime: 'vinland-saga',
    options: VinlandSaga_OPTIONS,
    category: 'Guerre',
    synopsis:
      "Depuis que Moussab, un chef de guerre fourbe et sans honneur, a tué son Jordi lorsqu'il était enfant, Thorfinn le suit partout dans le but de se venger. Mais bien qu'il soit devenu un guerrier redoutable, il ne parvient toujours pas à vaincre son ennemi.",
  },
  {
    anime: 'one-piece',
    options: OnePiece_OPTIONS,
    category: 'Aventure',
    synopsis:
      "L'histoire suit principalement l'équipage de Chapeau de paille, mené par son capitaine Monkey D. Luffy, un jeune homme ayant mangé, enfant, sans le savoir, le fruit du Gum Gum qui lui permet d'étirer ses membres, et dont le rêve est de devenir le Roi des pirates.",
  },
  {
    anime: 'solo-leveling',
    options: SoloLeveling_OPTIONS,
    category: 'Du moment',
    synopsis:
      "Dans un monde dans lequel les chasseurs - des guerriers humains dotés de capacités surnaturelles - doivent combattre des monstres mortels pour protéger l'humanité d'une annihilation certaine, un chasseur notoirement faible nommé Sung Jinwoo se retrouve dans une lutte apparemment sans fin pour sa survie.",
  },
  {
    anime: 'Kuroko Basket',
    category: 'Sport',
    options: KurokoBasket_OPTIONS,
    synopsis: `Les aventures de Tetsuyza Kuroko, un jeune garçon de 16 ans qui, sous son apparence chétive, cache un redoutable basketteur membre de la "génération des miracles" du collège Teiko. Tout juste arrivé au lycée de Seirin, il fait la connaissance de Taiga Kagami, jeune recrue fraîchement débarquée des États-unis.`,
  },
  {
    anime: 'jujutsu-kaisen',
    options: JujutsuKaisen_OPTIONS,
    category: 'New gen',
    synopsis:
      "L'intrigue de Jujutsu Kaisen se déroule dans un monde où l'énergie occulte existe, elle se matérialise par des démons appelés Fléaux, créés à partir des émotions négatives des Humains. Ceux-ci sont invisibles aux yeux des humains sauf pour une poignée de personnes.",
  },
  {
    anime: 'black-clover',
    options: BlackClover_OPTIONS,
    category: 'Magie',
    synopsis: `Asta est un jeune garçon déterminé qui vit avec son ami d'enfance, Yuno, dans un orphelinat du royaume de Clover. Depuis tout petit, Asta a pour ambition de devenir le magicien le plus puissant du royaume, "l'Empereur-Mage", ce qui a aussi inspiré Yuno à vouloir la même chose.`,
  },
  {
    anime: 'hunter-x-hunter',
    options: HunterXHunter_OPTIONS,
    category: 'Aventure',
    synopsis:
      "Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d'autres prétendants au titre de Hunter.",
  },
  {
    anime: 'mashle',
    options: Mashle_OPTIONS,
    category: 'Du moment',
    synopsis:
      "Mash Burnedead est né sans pouvoirs magiques mais a survécu caché dans une épaisse forêt. Le jour où son secret est découvert, il se voit proposer un marché : intégrer Easton, la prestigieuse académie de magie, et y obtenir le titre d'élu divin. Pour retrouver sa vie tranquille, Mash accepte.",
  },
  {
    anime: "L'attaque des titans",
    options: AttaqueDesTitans_OPTIONS,
    category: 'Guerre',
    synopsis:
      "L'humanité vit regroupée dans une citadelle pour se protéger des Titans, de gigantesques monstres dévoreurs de chair humaine. Un jeune garçon va néanmoins déjouer le destin des siens lorsqu'il se découvre la possibilité de se transformer en Titan.",
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
