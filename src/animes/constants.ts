import AirGear from './AirGear/air-gear';
import BlackClover from './BlackClover/black-clover';
import Bleach from './Bleach/bleach';
import BlueLock from './BlueLock/blue-lock';
import Boruto from './Boruto/boruto';
import ClassroomOfTheElites from './ClassroomOfTheElites/classroom-of-the-elites';
import DeathNote from './DeathNote/death-note';
import DemonSlayer from './DemonSlayer/demon-slayer';
import DragonBall from './DragonBall/dragon-ball';
import DragonBallSuper from './DragonBallSuper/DragonBallSuper';
import DragonBallZ from './DragonBallZ/dragon-ball-z';
import Haikyuu from './Haikyuu/haikyuu';
import HunterXHunter from './HunterXHunter/hunter-x-hunter';
import JujutsuKaisen from './JujutsuKaisen/jujutsu-kaisen';
import KurokoBasket from './KurokoBasket/kuroko-basket';
import Mashle from './Mashle/mashle';
import MyHeroAcademia from './MyHeroAcademia/my-hero-academia';
import NarutoShippuden from './NarutoShippuden/naruto-shippuden';
import ChainsawMan from './ChainsawMan/chainsaw-man';
import OnePiece from './OnePiece/one-piece';
import OnePunchMan from './OnePunchMan/one-punch-man';
import ShangriLaFrontier from './ShangriLaFrontier/shangri-la-frontier';
import SlamDunk from './SlamDunk/slam-dunk';
import SoloLeveling from './SoloLeveling/solo-leveling';
import SwordArtOnline from './SwordArtOnline/sword-art-online';
import TheDailyLifeOfTheImmortalKing from './TheDailyLifeOfTheImmortalKing/the-daily-life-of-the-immortal-king';
import TheGodOfHighschool from './TheGodOfHighschool/the-god-of-highschool';
import TokyoGhoul from './TokyoGhoul/tokyo-ghoul';
import TowerOfGod from './TowerOfGod/tower-of-god';
import VinlandSaga from './VinlandSaga/vinland-saga';
import AttaqueDesTitans from './attaqueDesTitans/attaqueDesTitans';
import Naruto from './naruto/naruto';
import HellsParadise from './HellsParadise/hells-paradise';
import FairyTail from './FairyTail/fairy-tail';
import EminenceInShadow from './EminenceInShadow/eminence-in-shadow';
import MobPsycho100 from './MobPsycho100/mob-psycho-100';
import HajimeNoIppo from './HajimeNoIppo/hajime-no-ippo';
import TokyoRevengers from './TokyoRevengers/tokyo-revengers';
import BlueExorcist from './BlueExorcist/blue-exorcist';
import KaguraBachi from './KaguraBachi/kagura-bachi';
import CaptainTsubasa from './CaptainTsubasa/captain-tsubasa';
import Monster103 from './Monster103/monster-103';
import Monster from './Monster/monster';
import FireForce from './FireForce/fire-force';
import { Anime } from '../class/anime';

export const ANIMES: {
  anime: string;
  aliases?: string[];
  options: Anime;
  category: string;
  synopsis: string;
}[] = [
  {
    anime: 'one piece',
    aliases: ['luffy', 'zoro', 'op', 'films', 'saisons', 'scans'],
    options: new OnePiece(),
    category: 'Classique',
    synopsis:
      "L'histoire suit principalement l'équipage de Chapeau de paille, mené par son capitaine Monkey D. Luffy, un jeune homme ayant mangé, enfant, sans le savoir, le fruit du Gum Gum qui lui permet d'étirer ses membres, et dont le rêve est de devenir le Roi des pirates.",
  },
  {
    anime: 'Dragon Ball',
    aliases: ['goku', 'shenron', 'db', 'films', 'saisons'],
    options: new DragonBall(),
    category: 'Classique',
    synopsis:
      "L'histoire de Dragon Ball suit la vie de Son Goku, un garçon à la queue de singe inspiré du conte traditionnel chinois La Pérégrination vers l'Ouest. Son Goku est un jeune garçon simple d'esprit et pur doté d'une queue de singe et d'une force extraordinaire.",
  },
  {
    anime: 'Dragon Ball Z',
    aliases: ['goku', 'vegeta', 'dbz', 'saisons', 'films'],
    options: new DragonBallZ(),
    category: 'Classique',
    synopsis:
      "Dragon Ball Z se déroule cinq ans après le mariage de Son Goku et de Chichi. Raditz, un mystérieux guerrier de l'espace, frère de Son Goku, arrive sur Terre pour retrouver Goku. Ce dernier apprend qu'il vient d'une planète de guerriers redoutables dont il ne reste plus que quatre survivants.",
  },
  {
    anime: 'Dragon Ball Super',
    aliases: [
      'ultra instinct',
      'goku',
      'beerus',
      'zeno',
      'dbs',
      'films',
      'scans',
      'saisons',
    ],
    options: new DragonBallSuper(),
    category: 'Classique',
    synopsis:
      'Au début de l’histoire, le monde semble paisible et tout le monde vit librement, mais tout cela ne dure pas longtemps. Un nouvel ennemi a commencé à se cacher et l’entité « Destructeur » appelée le Dieu de la Destruction s’est réveillée de son sommeil. Tout cela a eu un très grand impact sur la terre, tout le monde a commencé à se préparer à une catastrophe encore plus grande. ',
  },
  {
    anime: 'my hero academia',
    aliases: [
      'boku no hero academia',
      'izuku',
      'all might',
      'mha',
      'films',
      'saisons',
      'scans',
    ],
    options: new MyHeroAcademia(),
    category: 'New gen',
    synopsis:
      'Dans un futur proche suite à une mutation génétique, 80% de la population mondiale possède des super-pouvoirs appelés "Alters". Le plus célèbre des super-héros se nomme All Might. Izuku Midoriya en est fan, et rêve d\'intégrer la filière super-héroïque du lycée Yuei pour suivre les traces de son idole.',
  },
  {
    anime: 'vinland saga',
    aliases: ['ennemi', 'thorfinn', 'thors', 'thorkell', 'saisons', 'scans'],
    options: new VinlandSaga(),
    category: 'Reflexion',
    synopsis:
      "Depuis que Moussab, un chef de guerre fourbe et sans honneur, a tué Jordi lorsqu'il était enfant, Thorfinn le suit partout dans le but de se venger. Mais bien qu'il soit devenu un guerrier redoutable, il ne parvient toujours pas à vaincre son ennemi.",
  },
  {
    anime: 'solo leveling',
    aliases: ['only i level up', 'saisons', 'scans'],
    options: new SoloLeveling(),
    category: 'En ce moment',
    synopsis:
      "Dans un monde dans lequel les chasseurs - des guerriers humains dotés de capacités surnaturelles - doivent combattre des monstres mortels pour protéger l'humanité d'une annihilation certaine, un chasseur notoirement faible nommé Sung Jinwoo se retrouve dans une lutte apparemment sans fin pour sa survie.",
  },
  {
    anime: 'Kuroko Basket',
    aliases: ['kagami', 'kuroko no basket', 'knb', 'films', 'saisons'],
    category: 'Sport',
    options: new KurokoBasket(),
    synopsis: `Les aventures de Tetsuyza Kuroko, un jeune garçon de 16 ans qui, sous son apparence chétive, cache un redoutable basketteur membre de la "génération des miracles" du collège Teiko. Tout juste arrivé au lycée de Seirin, il fait la connaissance de Taiga Kagami, jeune recrue fraîchement débarquée des États-unis.`,
  },
  {
    anime: 'jujutsu kaisen',
    aliases: ['itadori', 'gojo', 'sukuna', 'jjk', 'films', 'saisons', 'scans'],
    options: new JujutsuKaisen(),
    category: 'New gen',
    synopsis:
      "L'intrigue de Jujutsu Kaisen se déroule dans un monde où l'énergie occulte existe, elle se matérialise par des démons appelés Fléaux, créés à partir des émotions négatives des Humains. Ceux-ci sont invisibles aux yeux des humains sauf pour une poignée de personnes.",
  },
  {
    anime: 'black clover',
    aliases: ['asta', 'yuno', 'bc', 'films', 'saisons', 'scans'],
    options: new BlackClover(),
    category: 'Magie',
    synopsis: `Asta est un jeune garçon déterminé qui vit avec son ami d'enfance, Yuno, dans un orphelinat du royaume de Clover. Depuis tout petit, Asta a pour ambition de devenir le magicien le plus puissant du royaume, "l'Empereur-Mage", ce qui a aussi inspiré Yuno à vouloir la même chose.`,
  },
  {
    anime: 'hunter x hunter',
    aliases: ['nen', 'hxh', 'gon', 'netero', 'films', 'saisons', 'scans'],
    options: new HunterXHunter(),
    category: 'Classique',
    synopsis:
      "Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d'autres prétendants au titre de Hunter.",
  },
  {
    anime: 'mashle',
    aliases: ['saitama v2', 'muscle', 'saisons', 'scans'],
    options: new Mashle(),
    category: 'En ce moment',
    synopsis:
      "Mash Burnedead est né sans pouvoirs magiques mais a survécu caché dans une épaisse forêt. Le jour où son secret est découvert, il se voit proposer un marché : intégrer Easton, la prestigieuse académie de magie, et y obtenir le titre d'élu divin. Pour retrouver sa vie tranquille, Mash accepte.",
  },
  {
    anime: "L'attaque des titans",
    aliases: ['shingeki no kyojin', 'snk', 'eren', 'saisons', 'scans'],
    options: new AttaqueDesTitans(),
    category: 'Classique',
    synopsis:
      "L'humanité vit regroupée dans une citadelle pour se protéger des Titans, de gigantesques monstres dévoreurs de chair humaine. Un jeune garçon va néanmoins déjouer le destin des siens lorsqu'il se découvre la possibilité de se transformer en Titan.",
  },
  {
    anime: 'Death Note',
    aliases: ['light', 'L', 'films', 'saisons', 'scans'],
    options: new DeathNote(),
    category: 'Reflexion',
    synopsis:
      "Light Yagami, un jeune étudiant surdoué, ramasse un jour le \"Death Note\", un carnet abandonné par un dieu de la mort, Ryuk, qui apparemment s'ennuyait dans son monde. Il suffit d'écrire le nom d'une personne dans ce carnet, et celle-ci meurt.",
  },
  {
    anime: 'The god of highschool',
    aliases: ['tdoh', 'scans', 'saisons'],
    options: new TheGodOfHighschool(),
    category: 'Webtoon',
    synopsis:
      "Un lycéen et ses amis prennent part à un tournoi épique dans lequel le gagnant verra tous ses vœux s'exaucer. Cependant, les participants découvrent très vite qu'une mystérieuse organisation semble manipuler cette compétition dans l'ombre...",
  },
  {
    anime: 'Tower of god',
    aliases: ['tog', 'scans', 'saisons'],
    options: new TowerOfGod(),
    category: 'Webtoon',
    synopsis:
      "Afin de retrouver Rachel, la seule personne chère à ses yeux, Bam décide de prendre tous les risques pour atteindre le sommet d'une mystérieuse tour. Pour passer chaque étage, il devra réussir un test complexe dans lequel il jouera à chaque fois sa vie.",
  },
  {
    anime: 'naruto',
    aliases: ['konoha', 'kurama', 'kyubi', 'scans', 'saisons'],
    options: new Naruto(),
    category: 'Classique',
    synopsis:
      "Le ninja le plus puissant de Konoha à l'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur.",
  },
  {
    anime: 'naruto shippuden',
    aliases: ['naruto adulte', 'films', 'saisons'],
    options: new NarutoShippuden(),
    category: 'Classique',
    synopsis:
      "Après deux ans et demi d'entraînement avec Jiraya, il retrouve ses camarades de l'Académie des ninja ainsi que ses professeurs de Konoha. Tous ont évolué, y compris les ninjas du village de Suna. Seul Kakashi, semble être resté fidèle à lui-même ! Hélas, les retrouvailles sont de courte durée.",
  },
  {
    anime: 'Shangri-La Frontier',
    aliases: ['scans', 'saisons'],
    options: new ShangriLaFrontier(),
    category: 'Jeux Videos',
    synopsis:
      "Sunraku est un passionné de jeux vidéo, il s'essaye aux pires jeux existants. Un jour il décide de s'attaquer au MMORPG Shangri-La Frontier, jeu aux trente millions de membres inscrits, il va devoir faire affronter de multiples dangers avec un masque ridicule... en forme d'oiseau.",
  },
  {
    anime: 'Classroom of the Elites',
    aliases: ['kyotaka', 'ecole', 'scans', 'saisons'],
    options: new ClassroomOfTheElites(),
    category: 'En ce moment',
    synopsis:
      "Kiyotaka Ayanokôji intègre le prestigieux lycée Tokyo Kôdo Ikusei où, une fois le diplôme en poche, quasiment 100 % des élèves trouvent un travail ou sont reçus à l'université. Pas de chance, il rate l'examen d'entrée et se retrouve dans la classe 1-D où finissent tous les élèves à problèmes !",
  },
  {
    anime: 'The Daily Life of the Immortal King',
    aliases: ['saitama v2', 'saisons'],
    options: new TheDailyLifeOfTheImmortalKing(),
    category: 'Puissance',
    synopsis:
      "Wang Ling a développé depuis son plus jeune âge d'incroyables capacités. Cependant, afin de mener une vie ordinaire, ses pouvoirs sont confinés dans un talisman. Malgré cela ses pouvoirs restent puissants et son doux quotidien est menacé lors de son entrée au lycée.",
  },
  {
    anime: 'haikyuu',
    aliases: ['volley', 'films', 'scans', 'saisons'],
    options: new Haikyuu(),
    category: 'Sport',
    synopsis:
      'Shôyô Hinata, surnommé Shô, aime plus que tout jouer au volley-ball et ce, malgré sa petite taille. Malheureusement, suite à une sévère défaite, son club de collège a été dissous, tous les membres étant partis. Mais Shô est bien décidé à jouer de nouveau et choisit son futur lycée en fonction de son ambition.',
  },
  {
    anime: 'Blue Lock',
    aliases: ['foot', 'scans', 'saisons'],
    options: new BlueLock(),
    category: 'Sport',
    synopsis:
      'Coupe du monde 2018, l\'équipe de football du Japon est éliminée en huitièmes de finale... Ce nouvel échec incite l\'Union japonaise de football à fonder le "Blue Lock" : un centre de formation révolutionnaire rassemblant les 300 meilleurs attaquants lycéens du pays.',
  },

  {
    anime: 'Air Gear',
    options: new AirGear(),
    category: 'Sport',
    aliases: ['saisons'],
    synopsis:
      "Ikki est le leader du gang qui règne sur son lycée. Malgré sa force, il va connaître sa première défaite lors d'une altercation avec les Skull Sader, un groupe de Stormriders, des riders d'un genre nouveau qui se déplacent en bande sur des Air Trecks, des rollers motorisés.",
  },
  {
    anime: 'Slam Dunk',
    aliases: ['basket', 'saisons'],
    options: new SlamDunk(),
    category: 'Sport',
    synopsis:
      'Hanamichi Sakuragi, un jeune homme immature et impopulaire, est bien décidé à en finir avec les déceptions amoureuses lors de son entrée au lycée de Shohoku. Il y rencontre alors Haruko Akagi, une fille dont il tombe amoureux.',
  },
  {
    anime: 'Demon Slayer',
    aliases: ['kny', 'kimetsu no yaiba', 'films', 'scans', 'saisons'],
    options: new DemonSlayer(),
    category: 'New gen',
    synopsis:
      "Les citadins locaux ne s'aventurent jamais dans les bois la nuit à cause de démons mangeurs d'hommes. Un jour, le jeune Tanjiro découvre que sa famille s'est fait massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon.",
  },
  {
    anime: 'Bleach',
    aliases: ['kurosaki', 'ichigo', 'films', 'scans', 'saisons'],
    options: new Bleach(),
    category: 'Classique',
    synopsis:
      'Adolescent de quinze ans, Ichigo Kurosaki possède un don particulier : celui de voir les esprits. Un jour, il croise la route d\'une belle Shinigami (un être spirituel) en train de pourchasser une "âme perdue", un esprit maléfique qui hante notre monde et n\'arrive pas à trouver le repos.',
  },
  {
    anime: 'Boruto',
    aliases: ['suite', 'code', 'scans', 'saisons', 'films'],
    options: new Boruto(),
    category: 'New gen',
    synopsis:
      "UNE NOUVELLE GÉNÉRATION DE NINJAS DÉBARQUE À KONOHA ! Les grands affrontements dans le monde des ninjas appartiennent désormais au passé. Le village de Konoha est entré dans une ère de paix. Boruto, le fils du 7e Hokage, vit mal d'être dans l'ombre de son imminent paternel.",
  },
  {
    anime: 'Sword Art Online',
    aliases: ['sao', 'films', 'saisons'],
    options: new SwordArtOnline(),
    category: 'Jeux Videos',
    synopsis:
      "En 2022, l'humanité a réussi à créer une réalité virtuelle. Grâce à un casque, les humains peuvent se plonger entièrement dans le monde virtuel en étant comme déconnectés de la réalité, et Sword Art Online est le premier MMORPG a utiliser ce système.",
  },
  {
    anime: 'One Punch Man',
    aliases: ['opm', 'scans', 'saisons'],
    options: new OnePunchMan(),
    category: 'Puissance',
    synopsis:
      "Histoire de passer le temps, Saitama est devenu un héros. Trois années d'un entraînement spécial lui ont donné un pouvoir le rendant invincible. Mais Saitama est devenu si fort qu'un seul coup de poing lui suffit à terrasser chaque adversaire se présentant, aussi puissant soit- il.",
  },
  {
    anime: 'Tokyo Ghoul',
    aliases: ['tg', 're', 'scans', 'saisons'],
    options: new TokyoGhoul(),
    category: 'Reflexion',
    synopsis:
      "Dans la ville de Tokyo, des créatures nommées goules sont apparues et se nourrissent de chair humaine pour survivre. Un jour, Ken Kaneki, jeune étudiant, se fait attaquer par l'une d'entre elles et subit une grave blessure.",
  },
  {
    anime: 'Chainsaw Man',
    aliases: ['cm', 'denji', 'scans', 'saisons'],
    category: 'New gen',
    options: new ChainsawMan(),
    synopsis:
      "Denji est un jeune homme sans argent qui travaille comme Devil Hunter auprès d'un mafieux. Avec l'aide de Pochita, son chien-démon-tronçonneuse, il continue de rembourser les dettes de son père. Cependant, après s'être fait trahir, il fusionne avec Pochita et devient un homme-tronçonneuse.",
  },
  {
    anime: "Hell's Paradise",
    aliases: ['gabimaru', 'scans', 'saisons'],
    category: 'New gen',
    options: new HellsParadise(),
    synopsis:
      "Gabimaru, « Le Vide », le plus célèbre et puissant des assassins a été capturé et croupit en prison. Affirmant n'avoir plus aucune raison de vivre, il attend désespérément qu'un bourreau parvienne à lui ôter la vie car son entraînement surhumain lui permet de résister aux pires des châtiments.",
  },
  {
    anime: 'Fairy Tail',
    options: new FairyTail(),
    category: 'Magie',
    synopsis:
      "Lucy, une jeune fille, rêve de devenir magicienne. Un jour, elle rencontre Natsu, un magicien maîtrisant le feu, ce dernier l'invite alors à rejoindre sa guilde. Il s'agit de la célèbre Fairy Tail, le sujet de tous les rêves de Lucy. Mais celle-ci est bien mystérieuse et semble être à l'origine de nombreux scandales.",
    aliases: ['films', 'scans', 'saisons'],
  },
  {
    anime: 'The Eminence in Shadow',
    options: new EminenceInShadow(),
    category: 'Puissance',
    synopsis:
      "L'histoire suit les péripéties de Cid, un jeune garçon transporté dans un autre monde. Souffrant du syndrome du chūnibyō, il parvient à convaincre son nouvel entourage qu'il est le chef d'une société secrète recrutant de puissants individus et visant à influencer le cours des événements.",
    aliases: ['scans', 'saisons'],
  },
  {
    anime: 'Mob Psycho 100',
    options: new MobPsycho100(),
    category: 'New gen',
    synopsis:
      "L'histoire suit Kageyama Shigeo, un élève de quatrième possédant des pouvoirs psychiques. Il peut plier et soulever n'importe quel objet avec son esprit. Cependant, il s'est lentement refusé d'exercer ses capacités en public car sa trop grande puissance peut infliger des conséquences négatives aux humains \"normaux\".",
    aliases: ['scans', 'saisons'],
  },
  {
    anime: 'Hajime no Ippo',
    options: new HajimeNoIppo(),
    category: 'Sport',
    synopsis:
      "Ippo Makunouchi est un enfant doux et maladroit. Sa mère l'élève seule depuis qu'il est tout petit, et il l'aide dans son commerce de bateau de pêche. Au printemps de sa deuxième année de lycée, Ippo est martyrisé par le trio de brutes qui l'attaque régulièrement.",
    aliases: ['films', 'scans', 'saisons'],
  },
  {
    anime: 'Tokyo Revengers',
    options: new TokyoRevengers(),
    category: 'New gen',
    synopsis:
      "À 26 ans, Takemichi a le sentiment d'avoir déjà raté sa vie. Vivotant de petits boulots ingrats tout juste bons à payer le loyer d'un studio miteux, il se lamente sur le désert de sa vie amoureuse lorsqu'il apprend la mort de Hinata, la seule petite amie qu'il ait eue...",
    aliases: ['films', 'scans', 'saisons'],
  },
  {
    anime: 'Blue Exorcist',
    options: new BlueExorcist(),
    category: 'En ce moment',
    synopsis:
      "Rin okumura, un ado de 15 ans adopté par un exorciste dès son plus jeune âge découvre un jour qu'il est le fils du Malin. Son père, Satan en personne, lui apparaît pour l'emmener dans son monde, mais le jeune garçon ne peut oublier tout ce qui lui a été enseigné jusqu'ici.",
    aliases: ['films', 'scans', 'saisons'],
  },
  {
    anime: 'Kagura Bachi',
    synopsis:
      "Kagura Bachi suit Chihiro, un jeune forgeron subitement devenu épéiste pour des raisons encore inconnues pour le moment. Le protagoniste évolue dans un univers fantaisiste où la magie existe, et peut renforcer des armes comme le katana qu'il manie. Chihiro traque un ennemi inconnu pour le moment.",
    options: new KaguraBachi(),
    category: 'New gen',
    aliases: ['scans'],
  },
  {
    anime: 'Captain Tsubasa',
    synopsis:
      "Tsubasa Ozora est déjà un petit génie du ballon rond malgré son jeune âge. Son rêve est d'offrir la Coupe du monde de football au Japon. Roberto Hongô, son mentor, est un joueur de légende revenu du Brésil et Tsubasa suit un entraînement particulièrement rigoureux.",
    aliases: ['olive et tom', 'saisons'],
    category: 'Sport',
    options: new CaptainTsubasa(),
  },
  {
    anime: 'Monster 103 Mercies Dragon Damnation',
    synopsis:
      "Ryuma, un samouraï nomade sans le sou, est sauvé d'une mort certaine par Flare, une généreuse serveuse, dont l'admiration envers Cyrano, un escrimeur émérite, est sans faille. Cependant, lorsque ce dernier porte atteinte à l'honneur de Ryuma, le jeune homme se voit contraint de le provoquer en duel. Mais ce geste pourtant anodin pourrait bien avoir des conséquences irrémédiables.",
    options: new Monster103(),
    aliases: ['saisons', 'one piece', 'op'],
    category: 'New gen',
  },
  {
    anime: 'Monster',
    category: 'Reflexion',
    aliases: ['saisons'],
    synopsis:
      "Talentueux, respecté et fiancé à une belle jeune femme, le Dr Kenzo Tenma est un neurochirurgien japonais qui exerce en Allemagne. Tout lui sourit jusqu'au jour où il décide de suivre son coeur et de sauver en priorité la vie d'un petit réfugié d'Allemagne de l'Est plutôt que celle du maire de Düsseldorf.",
    options: new Monster(),
  },
  {
    anime: 'Fire Force',
    category: 'New gen',
    aliases: ['feu'],
    synopsis:
      "L'humanité est terrifiée par le phénomène de combustion humaine. Des brigades spéciales Fire Force ont donc été mises en place avec pour mission de trouver la cause de ce mystérieux phénomène ! Le jeune Shinra, nouvelle recrue surnommée le Démon, rêve de devenir un héros.",
    options: new FireForce(),
  },
];

type AnimeOption = {
  anime: string;
  category: string;
};

type GroupedAnimes = {
  names: string[];
  category: string;
};

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