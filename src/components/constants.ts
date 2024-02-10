import { BlackClover_OPTIONS } from '../animes/BlackClover/black-clover';
import { ClassroomOfTheElites_OPTIONS } from '../animes/ClassroomOfTheElites/classroom-of-the-elites';
import { DeathNote_OPTIONS } from '../animes/DeathNote/death-note';
import { DragonBall_OPTIONS } from '../animes/DragonBall/dragon-ball';
import { DragonBallSuper_OPTIONS } from '../animes/DragonBallSuper/DragonBallSuper';
import { DragonBallZ_OPTIONS } from '../animes/DragonBallZ/dragon-ball-z';
import { Haikyuu } from '../animes/Haikyuu/haikyuu';
import { HunterXHunter_OPTIONS } from '../animes/HunterXHunter/hunter-x-hunter';
import { JujutsuKaisen_OPTIONS } from '../animes/JujutsuKaisen/jujutsu-kaisen';
import { KurokoBasket_OPTIONS } from '../animes/KurokoBasket/kuroko-basket';
import { Mashle_OPTIONS } from '../animes/Mashle/mashle';
import { MyHeroAcademia_OPTIONS } from '../animes/MyHeroAcademia/my-hero-academia';
import { NarutoShippuden_OPTIONS } from '../animes/NarutoShippuden/naruto-shippuden';
import { OnePiece_OPTIONS } from '../animes/OnePiece/one-piece';
import { ShangriLaFrontier_OPTIONS } from '../animes/ShangriLaFrontier/shangri-la-frontier';
import { SoloLeveling_OPTIONS } from '../animes/SoloLeveling/solo-leveling';
import { TheDailyLifeOfTheImmortalKing_OPTIONS } from '../animes/TheDailyLifeOfTheImmortalKing/the-daily-life-of-the-immortal-king';
import { TheGodOfHighschool_OPTIONS } from '../animes/TheGodOfHighschool/the-god-of-highschool';
import { TowerOfGod_OPTIONS } from '../animes/TowerOfGod/tower-of-god';
import { VinlandSaga_OPTIONS } from '../animes/VinlandSaga/vinland-saga';
import { AttaqueDesTitans_OPTIONS } from '../animes/attaqueDesTitans/attaqueDesTitans';
import { Naruto_OPTIONS } from '../animes/naruto/naruto';

export const ANIMES_OPTIONS = [
  {
    anime: 'one-piece',
    options: new OnePiece_OPTIONS(),
    category: 'Classique',
    synopsis:
      "L'histoire suit principalement l'équipage de Chapeau de paille, mené par son capitaine Monkey D. Luffy, un jeune homme ayant mangé, enfant, sans le savoir, le fruit du Gum Gum qui lui permet d'étirer ses membres, et dont le rêve est de devenir le Roi des pirates.",
  },
  {
    anime: 'Dragon Ball',
    options: new DragonBall_OPTIONS(),
    category: 'Classique',
    synopsis:
      "L'histoire de Dragon Ball suit la vie de Son Goku, un garçon à la queue de singe inspiré du conte traditionnel chinois La Pérégrination vers l'Ouest. Son Goku est un jeune garçon simple d'esprit et pur doté d'une queue de singe et d'une force extraordinaire.",
  },
  {
    anime: 'Dragon Ball Z',
    options: new DragonBallZ_OPTIONS(),
    category: 'Classique',
    synopsis:
      "Dragon Ball Z se déroule cinq ans après le mariage de Son Goku et de Chichi. Raditz, un mystérieux guerrier de l'espace, frère de Son Goku, arrive sur Terre pour retrouver Goku. Ce dernier apprend qu'il vient d'une planète de guerriers redoutables dont il ne reste plus que quatre survivants.",
  },
  {
    anime: 'Dragon Ball Super',
    options: new DragonBallSuper_OPTIONS(),
    category: 'Classique',
    synopsis:
      'Au début de l’histoire, le monde semble paisible et tout le monde vit librement, mais tout cela ne dure pas longtemps. Un nouvel ennemi a commencé à se cacher et l’entité « Destructeur » appelée le Dieu de la Destruction s’est réveillée de son sommeil. Tout cela a eu un très grand impact sur la terre, tout le monde a commencé à se préparer à une catastrophe encore plus grande. ',
  },
  {
    anime: 'my-hero-academia',
    options: new MyHeroAcademia_OPTIONS(),
    category: 'New gen',
    synopsis:
      'Dans un futur proche suite à une mutation génétique, 80% de la population mondiale possède des super-pouvoirs appelés "Alters". Le plus célèbre des super-héros se nomme All Might. Izuku Midoriya en est fan, et rêve d\'intégrer la filière super-héroïque du lycée Yuei pour suivre les traces de son idole.',
  },
  {
    anime: 'vinland-saga',
    options: new VinlandSaga_OPTIONS(),
    category: 'Reflexion',
    synopsis:
      "Depuis que Moussab, un chef de guerre fourbe et sans honneur, a tué Jordi lorsqu'il était enfant, Thorfinn le suit partout dans le but de se venger. Mais bien qu'il soit devenu un guerrier redoutable, il ne parvient toujours pas à vaincre son ennemi.",
  },
  {
    anime: 'solo-leveling',
    options: new SoloLeveling_OPTIONS(),
    category: 'Du moment',
    synopsis:
      "Dans un monde dans lequel les chasseurs - des guerriers humains dotés de capacités surnaturelles - doivent combattre des monstres mortels pour protéger l'humanité d'une annihilation certaine, un chasseur notoirement faible nommé Sung Jinwoo se retrouve dans une lutte apparemment sans fin pour sa survie.",
  },
  {
    anime: 'Kuroko Basket',
    category: 'Sport',
    options: new KurokoBasket_OPTIONS(),
    synopsis: `Les aventures de Tetsuyza Kuroko, un jeune garçon de 16 ans qui, sous son apparence chétive, cache un redoutable basketteur membre de la "génération des miracles" du collège Teiko. Tout juste arrivé au lycée de Seirin, il fait la connaissance de Taiga Kagami, jeune recrue fraîchement débarquée des États-unis.`,
  },
  {
    anime: 'jujutsu-kaisen',
    options: new JujutsuKaisen_OPTIONS(),
    category: 'New gen',
    synopsis:
      "L'intrigue de Jujutsu Kaisen se déroule dans un monde où l'énergie occulte existe, elle se matérialise par des démons appelés Fléaux, créés à partir des émotions négatives des Humains. Ceux-ci sont invisibles aux yeux des humains sauf pour une poignée de personnes.",
  },
  {
    anime: 'black-clover',
    options: new BlackClover_OPTIONS(),
    category: 'Magie',
    synopsis: `Asta est un jeune garçon déterminé qui vit avec son ami d'enfance, Yuno, dans un orphelinat du royaume de Clover. Depuis tout petit, Asta a pour ambition de devenir le magicien le plus puissant du royaume, "l'Empereur-Mage", ce qui a aussi inspiré Yuno à vouloir la même chose.`,
  },
  {
    anime: 'hunter-x-hunter',
    options: new HunterXHunter_OPTIONS(),
    category: 'Classique',
    synopsis:
      "Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d'autres prétendants au titre de Hunter.",
  },
  {
    anime: 'mashle',
    options: new Mashle_OPTIONS(),
    category: 'Du moment',
    synopsis:
      "Mash Burnedead est né sans pouvoirs magiques mais a survécu caché dans une épaisse forêt. Le jour où son secret est découvert, il se voit proposer un marché : intégrer Easton, la prestigieuse académie de magie, et y obtenir le titre d'élu divin. Pour retrouver sa vie tranquille, Mash accepte.",
  },
  {
    anime: "L'attaque des titans",
    options: new AttaqueDesTitans_OPTIONS(),
    category: 'Reflexion',
    synopsis:
      "L'humanité vit regroupée dans une citadelle pour se protéger des Titans, de gigantesques monstres dévoreurs de chair humaine. Un jeune garçon va néanmoins déjouer le destin des siens lorsqu'il se découvre la possibilité de se transformer en Titan.",
  },
  {
    anime: 'Death Note',
    options: new DeathNote_OPTIONS(),
    category: 'Reflexion',
    synopsis:
      "Light Yagami, un jeune étudiant surdoué, ramasse un jour le \"Death Note\", un carnet abandonné par un dieu de la mort, Ryuk, qui apparemment s'ennuyait dans son monde. Il suffit d'écrire le nom d'une personne dans ce carnet, et celle-ci meurt.",
  },
  {
    anime: 'The god of highschool',
    options: new TheGodOfHighschool_OPTIONS(),
    category: 'Webtoon',
    synopsis:
      "Un lycéen et ses amis prennent part à un tournoi épique dans lequel le gagnant verra tous ses vœux s'exaucer. Cependant, les participants découvrent très vite qu'une mystérieuse organisation semble manipuler cette compétition dans l'ombre...",
  },
  {
    anime: 'Tower of god',
    options: new TowerOfGod_OPTIONS(),
    category: 'Webtoon',
    synopsis:
      "Afin de retrouver Rachel, la seule personne chère à ses yeux, Bam décide de prendre tous les risques pour atteindre le sommet d'une mystérieuse tour. Pour passer chaque étage, il devra réussir un test complexe dans lequel il jouera à chaque fois sa vie.",
  },
  {
    anime: 'naruto',
    options: new Naruto_OPTIONS(),
    category: 'Classique',
    synopsis:
      "Le ninja le plus puissant de Konoha à l'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur.",
  },
  {
    anime: 'naruto shippuden',
    options: new NarutoShippuden_OPTIONS(),
    category: 'Classique',
    synopsis:
      "Après deux ans et demi d'entraînement avec Jiraya, il retrouve ses camarades de l'Académie des ninja ainsi que ses professeurs de Konoha. Tous ont évolué, y compris les ninjas du village de Suna. Seul Kakashi, semble être resté fidèle à lui-même ! Hélas, les retrouvailles sont de courte durée.",
  },
  {
    anime: 'Shangri-La Frontier',
    options: new ShangriLaFrontier_OPTIONS(),
    category: 'Jeux Videos',
    synopsis:
      "Sunraku est un passionné de jeux vidéo, il s'essaye aux pires jeux existants. Un jour il décide de s'attaquer au MMORPG Shangri-La Frontier, jeu aux trente millions de membres inscrits, il va devoir faire affronter de multiples dangers avec un masque ridicule... en forme d'oiseau.",
  },
  {
    anime: 'Classroom of the Elites',
    options: new ClassroomOfTheElites_OPTIONS(),
    category: 'Lycée',
    synopsis:
      "Kiyotaka Ayanokôji intègre le prestigieux lycée Tokyo Kôdo Ikusei où, une fois le diplôme en poche, quasiment 100 % des élèves trouvent un travail ou sont reçus à l'université. Pas de chance, il rate l'examen d'entrée et se retrouve dans la classe 1-D où finissent tous les élèves à problèmes !",
  },
  {
    anime: 'The Daily Life of the Immortal King',
    options: new TheDailyLifeOfTheImmortalKing_OPTIONS(),
    category: 'Lycée',
    synopsis:
      "Wang Ling a développé depuis son plus jeune âge d'incroyables capacités. Cependant, afin de mener une vie ordinaire, ses pouvoirs sont confinés dans un talisman. Malgré cela ses pouvoirs restent puissants et son doux quotidien est menacé lors de son entrée au lycée.",
  },
  {
    anime: 'haikyuu',
    options: new Haikyuu(),
    category: 'Sport',
    synopsis:
      'Shôyô Hinata, surnommé Shô, aime plus que tout jouer au volley-ball et ce, malgré sa petite taille. Malheureusement, suite à une sévère défaite, son club de collège a été dissous, tous les membres étant partis. Mais Shô est bien décidé à jouer de nouveau et choisit son futur lycée en fonction de son ambition.',
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
