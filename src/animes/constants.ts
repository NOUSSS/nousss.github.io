import { Anime } from "@/app/class/anime";

import AirGear from "./AirGear/air-gear";
import BlackClover from "./BlackClover/black-clover";
import Bleach from "./Bleach/bleach";
import BlueLock from "./BlueLock/blue-lock";
import Boruto from "./Boruto/boruto";
import ClassroomOfTheElites from "./ClassroomOfTheElites/classroom-of-the-elites";
import DeathNote from "./DeathNote/death-note";
import DemonSlayer from "./DemonSlayer/demon-slayer";
import DragonBall from "./DragonBall/dragon-ball";
import DragonBallSuper from "./DragonBallSuper/DragonBallSuper";
import DragonBallZ from "./DragonBallZ/dragon-ball-z";
import Haikyuu from "./Haikyuu/haikyuu";
import HunterXHunter from "./HunterXHunter/hunter-x-hunter";
import JujutsuKaisen from "./JujutsuKaisen/jujutsu-kaisen";
import KurokoBasket from "./KurokoBasket/kuroko-basket";
import Mashle from "./Mashle/mashle";
import MyHeroAcademia from "./MyHeroAcademia/my-hero-academia";
import NarutoShippuden from "./NarutoShippuden/naruto-shippuden";
import ChainsawMan from "./ChainsawMan/chainsaw-man";
import OnePiece from "./OnePiece/one-piece";
import OnePunchMan from "./OnePunchMan/one-punch-man";
import ShangriLaFrontier from "./ShangriLaFrontier/shangri-la-frontier";
import SlamDunk from "./SlamDunk/slam-dunk";
import SoloLeveling from "./SoloLeveling/solo-leveling";
import SwordArtOnline from "./SwordArtOnline/sword-art-online";
import TheDailyLifeOfTheImmortalKing from "./TheDailyLifeOfTheImmortalKing/the-daily-life-of-the-immortal-king";
import TheGodOfHighschool from "./TheGodOfHighschool/the-god-of-highschool";
import TokyoGhoul from "./TokyoGhoul/tokyo-ghoul";
import TowerOfGod from "./TowerOfGod/tower-of-god";
import VinlandSaga from "./VinlandSaga/vinland-saga";
import AttaqueDesTitans from "./attaqueDesTitans/attaqueDesTitans";
import Naruto from "./naruto/naruto";
import HellsParadise from "./HellsParadise/hells-paradise";
import FairyTail from "./FairyTail/fairy-tail";
import EminenceInShadow from "./EminenceInShadow/eminence-in-shadow";
import MobPsycho100 from "./MobPsycho100/mob-psycho-100";
import HajimeNoIppo from "./HajimeNoIppo/hajime-no-ippo";
import TokyoRevengers from "./TokyoRevengers/tokyo-revengers";
import BlueExorcist from "./BlueExorcist/blue-exorcist";
import KaguraBachi from "./KaguraBachi/kagura-bachi";
import CaptainTsubasa from "./CaptainTsubasa/captain-tsubasa";
import Monster103 from "./Monster103/monster-103";
import Monster from "./Monster/monster";
import FireForce from "./FireForce/fire-force";
import AssassinationClassroom from "./AssassinationClassroom/assassination-classroom";
import AoAshi from "./AoAshi/ao-ashi";
import GurrenLagann from "./GurrenLagann/gurren-lagann";
import SevenDeadlySins from "./SevenDeadlySins/seven-deadly-sins";
import RagnaCrimson from "./RagnaCrimson/ragna-crimson";
import NinjaKamui from "./NinjaKamui/ninja-kamui";
import YuyuHakusho from "./YuyuHakusho/yuyu-hakusho";
import Frieren from "./Frieren/frieren";
import Vagabond from "./Vagabond/vagabond";
import TheBoxer from "./TheBoxer/the-boxer";
import DoomBreaker from "./DoomBreaker/doom-breaker";
import BorutoTwoBlueVortex from "./BorutoTwoBlueVortex/boruto-two-blue-vortex";
import Bucchigiri from "./Bucchigiri/bucchigiri";
import FMAB from "./FMAB/fullmetal-alchemist-brotherhood";
import FMA from "./FMA/fullmetal-alchemist";
import Baki from "./Baki/baki";
import DragonBallGT from "./DragonBallGT/dragon-ball-gt";
import EightySix from "./EightySix/eighty-six";
import SpyXFamily from "./SpyXFamily/spy-x-family";
import CyberpunkEdgerunners from "./CyberpunkEdgerunner/cyberpunk-edgerunners";
import OshinoKo from "./OshinoKo/oshi-no-ko";
import MushokuTensei from "./MushokuTensei/mushoku-tensei";
import GTO from "./GTO/great-teacher-onizuka";
import SevenSeeds from "./7seeds/7-seeds";
import AkameGaKill from "./AkameGaKill/akame-ga-kill";
import Erased from "./Erased/erased";

export interface AnimesType {
  anime: string;
  aliases?: string[];
  options: Anime;
  category: string[];
  synopsis: string;
}

export const ANIMES: AnimesType[] = [
  {
    anime: "One Piece",
    aliases: ["luffy", "zoro", "op", "films", "saisons", "scans", "En équipe"],
    options: new OnePiece(),
    category: ["Classique", "Aventure"],
    synopsis:
      "L'histoire suit principalement l'équipage de Chapeau de paille, mené par son capitaine Monkey D. Luffy, un jeune homme ayant mangé, enfant, sans le savoir, le fruit du Gum Gum qui lui permet d'étirer ses membres, et dont le rêve est de devenir le Roi des pirates.",
  },
  {
    anime: "Dragon Ball",
    aliases: ["goku", "shenron", "db", "films", "saisons"],
    options: new DragonBall(),
    category: ["Classique", "Aventure", "Les anciens"],
    synopsis:
      "Son Gokû est un petit garçon exceptionnellement doué pour les arts martiaux, qui possède une mystérieuse queue de singe. Le jour où il rencontre Bulma, ils partent ensemble à la recherche des sept boules de cristal... Akira Toriyama - Paix à son âme.",
  },
  {
    anime: "Dragon Ball Z",
    aliases: [
      "goku",
      "vegeta",
      "dbz",
      "saisons",
      "films",
      "En équipe",
      "Les anciens",
    ],
    options: new DragonBallZ(),
    category: ["Classique", "Aventure"],
    synopsis:
      "Dragon Ball Z se déroule cinq ans après le mariage de Son Goku et de Chichi. Raditz, un mystérieux guerrier de l'espace, frère de Son Goku, arrive sur Terre pour retrouver Goku. Ce dernier apprend qu'il vient d'une planète de guerriers redoutables dont il ne reste plus que quatre survivants.",
  },
  {
    anime: "Dragon Ball Super",
    aliases: [
      "ultra instinct",
      "goku",
      "beerus",
      "zeno",
      "dbs",
      "films",
      "scans",
      "saisons",
    ],
    options: new DragonBallSuper(),
    category: ["Classique", "Aventure", "Puissance"],
    synopsis:
      "Au début de l’histoire, le monde semble paisible et tout le monde vit librement, mais tout cela ne dure pas longtemps. Un nouvel ennemi a commencé à se cacher et l’entité « Destructeur » appelée le Dieu de la Destruction s’est réveillée de son sommeil. Tout cela a eu un très grand impact sur la terre, tout le monde a commencé à se préparer à une catastrophe encore plus grande. ",
  },
  {
    anime: "My Hero Academia",
    aliases: [
      "boku no hero academia",
      "izuku",
      "all might",
      "mha",
      "films",
      "saisons",
      "scans",
    ],
    options: new MyHeroAcademia(),
    category: ["School Life"],
    synopsis:
      'Dans un futur proche suite à une mutation génétique, 80% de la population mondiale possède des super-pouvoirs appelés "Alters". Le plus célèbre des super-héros se nomme All Might. Izuku Midoriya en est fan, et rêve d\'intégrer la filière super-héroïque du lycée Yuei pour suivre les traces de son idole.',
  },
  {
    anime: "Vinland Saga",
    aliases: ["ennemi", "thorfinn", "thors", "thorkell", "saisons", "scans"],
    options: new VinlandSaga(),
    category: ["Réflexion"],
    synopsis:
      "Depuis que Moussab, un chef de guerre fourbe et sans honneur, a tué Jordi lorsqu'il était enfant, Thorfinn le suit partout dans le but de se venger. Mais bien qu'il soit devenu un guerrier redoutable, il ne parvient toujours pas à vaincre son ennemi.",
  },
  {
    anime: "Solo Leveling",
    aliases: ["only i level up", "saisons", "scans"],
    options: new SoloLeveling(),
    category: ["Nouveautés", "Webtoon"],
    synopsis:
      "Dans un monde dans lequel les chasseurs - des guerriers humains dotés de capacités surnaturelles - doivent combattre des monstres mortels pour protéger l'humanité d'une annihilation certaine, un chasseur notoirement faible nommé Sung Jinwoo se retrouve dans une lutte apparemment sans fin pour sa survie.",
  },
  {
    anime: "Kuroko Basket",
    aliases: ["kagami", "kuroko no basket", "knb", "films", "saisons"],
    category: ["Sport"],
    options: new KurokoBasket(),
    synopsis: `Les aventures de Tetsuyza Kuroko, un jeune garçon de 16 ans qui, sous son apparence chétive, cache un redoutable basketteur membre de la "génération des miracles" du collège Teiko. Tout juste arrivé au lycée de Seirin, il fait la connaissance de Taiga Kagami, jeune recrue fraîchement débarquée des États-unis.`,
  },
  {
    anime: "Jujutsu Kaisen",
    aliases: ["itadori", "gojo", "sukuna", "jjk", "films", "saisons", "scans"],
    options: new JujutsuKaisen(),
    category: ["Magie"],
    synopsis:
      "L'intrigue de Jujutsu Kaisen se déroule dans un monde où l'énergie occulte existe, elle se matérialise par des démons appelés Fléaux, créés à partir des émotions négatives des Humains. Ceux-ci sont invisibles aux yeux des humains sauf pour une poignée de personnes.",
  },
  {
    anime: "Black Clover",
    aliases: ["asta", "yuno", "bc", "films", "saisons", "scans"],
    options: new BlackClover(),
    category: ["Magie"],
    synopsis: `Asta est un jeune garçon déterminé qui vit avec son ami d'enfance, Yuno, dans un orphelinat du royaume de Clover. Depuis tout petit, Asta a pour ambition de devenir le magicien le plus puissant du royaume, "l'Empereur-Mage", ce qui a aussi inspiré Yuno à vouloir la même chose.`,
  },
  {
    anime: "Hunter X Hunter",
    aliases: ["nen", "hxh", "gon", "netero", "films", "saisons", "scans"],
    options: new HunterXHunter(),
    category: ["Aventure", "Classique"],
    synopsis:
      "Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d'autres prétendants au titre de Hunter.",
  },
  {
    anime: "Mashle",
    aliases: ["saitama v2", "muscle", "saisons", "scans"],
    options: new Mashle(),
    category: ["Nouveautés", "Humour", "Magie"],
    synopsis:
      "Mash Burnedead est né sans pouvoirs magiques mais a survécu caché dans une épaisse forêt. Le jour où son secret est découvert, il se voit proposer un marché : intégrer Easton, la prestigieuse académie de magie, et y obtenir le titre d'élu divin. Pour retrouver sa vie tranquille, Mash accepte.",
  },
  {
    anime: "L'attaque des titans",
    aliases: ["shingeki no kyojin", "snk", "eren", "saisons", "scans"],
    options: new AttaqueDesTitans(),
    category: ["Classique", "Réflexion"],
    synopsis:
      "L'humanité vit regroupée dans une citadelle pour se protéger des Titans, de gigantesques monstres dévoreurs de chair humaine. Un jeune garçon va néanmoins déjouer le destin des siens lorsqu'il se découvre la possibilité de se transformer en Titan.",
  },
  {
    anime: "Death Note",
    aliases: ["light", "L", "films", "saisons", "scans"],
    options: new DeathNote(),
    category: ["Réflexion", "School Life"],
    synopsis:
      "Light Yagami, un jeune étudiant surdoué, ramasse un jour le \"Death Note\", un carnet abandonné par un dieu de la mort, Ryuk, qui apparemment s'ennuyait dans son monde. Il suffit d'écrire le nom d'une personne dans ce carnet, et celle-ci meurt.",
  },
  {
    anime: "The god of highschool",
    aliases: ["tdoh", "scans", "saisons"],
    options: new TheGodOfHighschool(),
    category: ["Webtoon"],
    synopsis:
      "Un lycéen et ses amis prennent part à un tournoi épique dans lequel le gagnant verra tous ses vœux s'exaucer. Cependant, les participants découvrent très vite qu'une mystérieuse organisation semble manipuler cette compétition dans l'ombre...",
  },
  {
    anime: "Tower of god",
    aliases: ["tog", "scans", "saisons"],
    options: new TowerOfGod(),
    category: ["Webtoon"],
    synopsis:
      "Afin de retrouver Rachel, la seule personne chère à ses yeux, Bam décide de prendre tous les risques pour atteindre le sommet d'une mystérieuse tour. Pour passer chaque étage, il devra réussir un test complexe dans lequel il jouera à chaque fois sa vie.",
  },
  {
    anime: "Naruto",
    aliases: ["konoha", "kurama", "kyubi", "scans", "saisons"],
    options: new Naruto(),
    category: ["Classique"],
    synopsis:
      "Le ninja le plus puissant de Konoha à l'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur.",
  },
  {
    anime: "Naruto Shippuden",
    aliases: ["naruto adulte", "films", "saisons"],
    options: new NarutoShippuden(),
    category: ["Classique"],
    synopsis:
      "Après deux ans et demi d'entraînement avec Jiraya, il retrouve ses camarades de l'Académie des ninja ainsi que ses professeurs de Konoha. Tous ont évolué, y compris les ninjas du village de Suna. Seul Kakashi, semble être resté fidèle à lui-même ! Hélas, les retrouvailles sont de courte durée.",
  },
  {
    anime: "Shangri-La Frontier",
    aliases: ["scans", "saisons"],
    options: new ShangriLaFrontier(),
    category: ["Jeux Videos"],
    synopsis:
      "Sunraku est un passionné de jeux vidéo, il s'essaye aux pires jeux existants. Un jour il décide de s'attaquer au MMORPG Shangri-La Frontier, jeu aux trente millions de membres inscrits, il va devoir faire affronter de multiples dangers avec un masque ridicule... en forme d'oiseau.",
  },
  {
    anime: "Classroom of the Elites",
    aliases: ["kyotaka", "ecole", "scans", "saisons"],
    options: new ClassroomOfTheElites(),
    category: ["Nouveautés", "School Life"],
    synopsis:
      "Kiyotaka Ayanokôji intègre le prestigieux lycée Tokyo Kôdo Ikusei où, une fois le diplôme en poche, quasiment 100 % des élèves trouvent un travail ou sont reçus à l'université. Pas de chance, il rate l'examen d'entrée et se retrouve dans la classe 1-D où finissent tous les élèves à problèmes !",
  },
  {
    anime: "The Daily Life of the Immortal King",
    aliases: ["saitama v2", "saisons"],
    options: new TheDailyLifeOfTheImmortalKing(),
    category: ["School Life", "Puissance"],
    synopsis:
      "Wang Ling a développé depuis son plus jeune âge d'incroyables capacités. Cependant, afin de mener une vie ordinaire, ses pouvoirs sont confinés dans un talisman. Malgré cela ses pouvoirs restent puissants et son doux quotidien est menacé lors de son entrée au lycée.",
  },
  {
    anime: "Haikyuu",
    aliases: ["volley", "films", "scans", "saisons"],
    options: new Haikyuu(),
    category: ["Sport"],
    synopsis:
      "Shôyô Hinata, surnommé Shô, aime plus que tout jouer au volley-ball et ce, malgré sa petite taille. Malheureusement, suite à une sévère défaite, son club de collège a été dissous, tous les membres étant partis. Mais Shô est bien décidé à jouer de nouveau et choisit son futur lycée en fonction de son ambition.",
  },
  {
    anime: "Blue Lock",
    aliases: ["foot", "scans", "saisons"],
    options: new BlueLock(),
    category: ["Sport"],
    synopsis:
      "Coupe du monde 2018, l'équipe de football du Japon est éliminée en huitièmes de finale... Ce nouvel échec incite l'Union japonaise de football à fonder le \"Blue Lock\" : un centre de formation révolutionnaire rassemblant les 300 meilleurs attaquants lycéens du pays.",
  },

  {
    anime: "Air Gear",
    options: new AirGear(),
    category: ["Sport", "Les anciens"],
    aliases: ["saisons"],
    synopsis:
      "Ikki est le leader du gang qui règne sur son lycée. Malgré sa force, il va connaître sa première défaite lors d'une altercation avec les Skull Sader, un groupe de Stormriders, des riders d'un genre nouveau qui se déplacent en bande sur des Air Trecks, des rollers motorisés.",
  },
  {
    anime: "Slam Dunk",
    aliases: ["basket", "saisons"],
    options: new SlamDunk(),
    category: ["Sport", "Les anciens"],
    synopsis:
      "Hanamichi Sakuragi, un jeune homme immature et impopulaire, est bien décidé à en finir avec les déceptions amoureuses lors de son entrée au lycée de Shohoku. Il y rencontre alors Haruko Akagi, une fille dont il tombe amoureux.",
  },
  {
    anime: "Demon Slayer",
    aliases: ["kny", "kimetsu no yaiba", "films", "scans", "saisons"],
    options: new DemonSlayer(),
    category: ["New gen", "Aventure"],
    synopsis:
      "Les citadins locaux ne s'aventurent jamais dans les bois la nuit à cause de démons mangeurs d'hommes. Un jour, le jeune Tanjiro découvre que sa famille s'est fait massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon.",
  },
  {
    anime: "Bleach",
    aliases: ["kurosaki", "ichigo", "films", "scans", "saisons"],
    options: new Bleach(),
    category: ["Classique", "Aventure"],
    synopsis:
      "Adolescent de quinze ans, Ichigo Kurosaki possède un don particulier : celui de voir les esprits. Un jour, il croise la route d'une belle Shinigami (un être spirituel) en train de pourchasser une \"âme perdue\", un esprit maléfique qui hante notre monde et n'arrive pas à trouver le repos.",
  },
  {
    anime: "Boruto",
    aliases: ["suite", "code", "scans", "saisons", "films"],
    options: new Boruto(),
    category: ["New gen"],
    synopsis:
      "UNE NOUVELLE GÉNÉRATION DE NINJAS DÉBARQUE À KONOHA ! Les grands affrontements dans le monde des ninjas appartiennent désormais au passé. Le village de Konoha est entré dans une ère de paix. Boruto, le fils du 7e Hokage, vit mal d'être dans l'ombre de son imminent paternel.",
  },
  {
    anime: "Sword Art Online",
    aliases: ["sao", "films", "saisons"],
    options: new SwordArtOnline(),
    category: ["Jeux Videos", "Isekai"],
    synopsis:
      "En 2022, l'humanité a réussi à créer une réalité virtuelle. Grâce à un casque, les humains peuvent se plonger entièrement dans le monde virtuel en étant comme déconnectés de la réalité, et Sword Art Online est le premier MMORPG a utiliser ce système.",
  },
  {
    anime: "One Punch Man",
    aliases: ["opm", "scans", "saisons"],
    options: new OnePunchMan(),
    category: ["Puissance"],
    synopsis:
      "Histoire de passer le temps, Saitama est devenu un héros. Trois années d'un entraînement spécial lui ont donné un pouvoir le rendant invincible. Mais Saitama est devenu si fort qu'un seul coup de poing lui suffit à terrasser chaque adversaire se présentant, aussi puissant soit- il.",
  },
  {
    anime: "Tokyo Ghoul",
    aliases: ["tg", "re", "scans", "saisons"],
    options: new TokyoGhoul(),
    category: ["Réflexion"],
    synopsis:
      "Dans la ville de Tokyo, des créatures nommées goules sont apparues et se nourrissent de chair humaine pour survivre. Un jour, Ken Kaneki, jeune étudiant, se fait attaquer par l'une d'entre elles et subit une grave blessure.",
  },
  {
    anime: "Chainsaw Man",
    aliases: ["cm", "denji", "scans", "saisons"],
    category: ["New gen", "Réflexion"],
    options: new ChainsawMan(),
    synopsis:
      "Denji est un jeune homme sans argent qui travaille comme Devil Hunter auprès d'un mafieux. Avec l'aide de Pochita, son chien-démon-tronçonneuse, il continue de rembourser les dettes de son père. Cependant, après s'être fait trahir, il fusionne avec Pochita et devient un homme-tronçonneuse.",
  },
  {
    anime: "Hell's Paradise",
    aliases: ["gabimaru", "scans", "saisons"],
    category: ["New gen"],
    options: new HellsParadise(),
    synopsis:
      "Gabimaru, « Le Vide », le plus célèbre et puissant des assassins a été capturé et croupit en prison. Affirmant n'avoir plus aucune raison de vivre, il attend désespérément qu'un bourreau parvienne à lui ôter la vie car son entraînement surhumain lui permet de résister aux pires des châtiments.",
  },
  {
    anime: "Fairy Tail",
    options: new FairyTail(),
    category: ["Magie"],
    synopsis:
      "Lucy, une jeune fille, rêve de devenir magicienne. Un jour, elle rencontre Natsu, un magicien maîtrisant le feu, ce dernier l'invite alors à rejoindre sa guilde. Il s'agit de la célèbre Fairy Tail, le sujet de tous les rêves de Lucy. Mais celle-ci est bien mystérieuse et semble être à l'origine de nombreux scandales.",
    aliases: ["films", "scans", "saisons"],
  },
  {
    anime: "The Eminence in Shadow",
    options: new EminenceInShadow(),
    category: ["Puissance", "Isekai"],
    synopsis:
      "L'histoire suit les péripéties de Cid, un jeune garçon transporté dans un autre monde. Souffrant du syndrome du chūnibyō, il parvient à convaincre son nouvel entourage qu'il est le chef d'une société secrète recrutant de puissants individus et visant à influencer le cours des événements.",
    aliases: ["scans", "saisons"],
  },
  {
    anime: "Mob Psycho 100",
    options: new MobPsycho100(),
    category: ["New gen"],
    synopsis:
      "L'histoire suit Kageyama Shigeo, un élève de quatrième possédant des pouvoirs psychiques. Il peut plier et soulever n'importe quel objet avec son esprit. Cependant, il s'est lentement refusé d'exercer ses capacités en public car sa trop grande puissance peut infliger des conséquences négatives aux humains \"normaux\".",
    aliases: ["scans", "saisons"],
  },
  {
    anime: "Hajime no Ippo",
    options: new HajimeNoIppo(),
    category: ["Sport"],
    synopsis:
      "Ippo Makunouchi est un enfant doux et maladroit. Sa mère l'élève seule depuis qu'il est tout petit, et il l'aide dans son commerce de bateau de pêche. Au printemps de sa deuxième année de lycée, Ippo est martyrisé par le trio de brutes qui l'attaque régulièrement.",
    aliases: ["films", "scans", "saisons"],
  },
  {
    anime: "Tokyo Revengers",
    options: new TokyoRevengers(),
    category: ["New gen"],
    synopsis:
      "À 26 ans, Takemichi a le sentiment d'avoir déjà raté sa vie. Vivotant de petits boulots ingrats tout juste bons à payer le loyer d'un studio miteux, il se lamente sur le désert de sa vie amoureuse lorsqu'il apprend la mort de Hinata, la seule petite amie qu'il ait eue...",
    aliases: ["films", "scans", "saisons"],
  },
  {
    anime: "Blue Exorcist",
    options: new BlueExorcist(),
    category: ["Nouveautés", "Magie"],
    synopsis:
      "Rin okumura, un ado de 15 ans adopté par un exorciste dès son plus jeune âge découvre un jour qu'il est le fils du Malin. Son père, Satan en personne, lui apparaît pour l'emmener dans son monde, mais le jeune garçon ne peut oublier tout ce qui lui a été enseigné jusqu'ici.",
    aliases: ["films", "scans", "saisons"],
  },
  {
    anime: "Kagura Bachi",
    synopsis:
      "Kagura Bachi suit Chihiro, un jeune forgeron subitement devenu épéiste pour des raisons encore inconnues pour le moment. Le protagoniste évolue dans un univers fantaisiste où la magie existe, et peut renforcer des armes comme le katana qu'il manie. Chihiro traque un ennemi inconnu pour le moment.",
    options: new KaguraBachi(),
    category: ["New gen"],
    aliases: ["scans"],
  },
  {
    anime: "Captain Tsubasa",
    synopsis:
      "Tsubasa Ozora est déjà un petit génie du ballon rond malgré son jeune âge. Son rêve est d'offrir la Coupe du monde de football au Japon. Roberto Hongô, son mentor, est un joueur de légende revenu du Brésil et Tsubasa suit un entraînement particulièrement rigoureux.",
    aliases: ["olive et tom", "saisons"],
    category: ["Sport", "Les anciens"],
    options: new CaptainTsubasa(),
  },
  {
    anime: "Monster 103 Mercies Dragon Damnation",
    synopsis:
      "Ryuma, un samouraï nomade sans le sou, est sauvé d'une mort certaine par Flare, une généreuse serveuse, dont l'admiration envers Cyrano, un escrimeur émérite, est sans faille. Cependant, lorsque ce dernier porte atteinte à l'honneur de Ryuma, le jeune homme se voit contraint de le provoquer en duel. Mais ce geste pourtant anodin pourrait bien avoir des conséquences irrémédiables.",
    options: new Monster103(),
    aliases: ["saisons", "one piece", "op"],
    category: ["New gen"],
  },
  {
    anime: "Monster",
    category: ["Réflexion"],
    aliases: ["saisons"],
    synopsis:
      "Talentueux, respecté et fiancé à une belle jeune femme, le Dr Kenzo Tenma est un neurochirurgien japonais qui exerce en Allemagne. Tout lui sourit jusqu'au jour où il décide de suivre son coeur et de sauver en priorité la vie d'un petit réfugié d'Allemagne de l'Est plutôt que celle du maire de Düsseldorf.",
    options: new Monster(),
  },
  {
    anime: "Fire Force",
    category: ["New gen"],
    aliases: ["feu"],
    synopsis:
      "L'humanité est terrifiée par le phénomène de combustion humaine. Des brigades spéciales Fire Force ont donc été mises en place avec pour mission de trouver la cause de ce mystérieux phénomène ! Le jeune Shinra, nouvelle recrue surnommée le Démon, rêve de devenir un héros.",
    options: new FireForce(),
  },
  {
    anime: "Assassination Classroom",
    category: ["School Life"],
    aliases: ["koro", "sensei"],
    synopsis:
      "Koro Sensei devient enseignant de la classe 3-E de l'école de Kunugigaoka. Après avoir détruit la Lune et promis de faire exploser la Terre, ses élèves tentent de l'arrêter. Unis par un lien mystérieux, ils ont un an pour achever leur mission.",
    options: new AssassinationClassroom(),
  },
  {
    anime: "Ao Ashi",
    synopsis:
      "Doté d'un tempérament de feu, le jeune Ashito Aoi aime le football plus que quiconque. Son rêve : devenir joueur professionnel ! Mais ses dons ne lui évitent pas une terrible déconvenue lors d'un match de coupe inter collèges.",
    category: ["Sport", "Les anciens"],
    options: new AoAshi(),
  },
  {
    anime: "Gurren Lagann",
    category: ["Aventure", "Puissance", "Humour", "En équipe"],
    options: new GurrenLagann(),
    aliases: ["anti spiral"],
    synopsis:
      "Tengen toppa Gurren-Lagann se déroule dans un futur lointain où l'humanité a été forcée de vivre sous terre, créant des civilisations souterraines isolées. Ces cités n'ont aucun contact avec la surface ni avec les autres villages souterrains. Les tremblements de terre sont fréquents et causent des dégâts aux villages.",
  },
  {
    anime: "Seven Deadly Sins",
    category: ["Aventure", "Puissance", "En équipe"],
    options: new SevenDeadlySins(),
    aliases: ["meliodas"],
    synopsis:
      "Il y a dix ans, un groupe de Chevaliers Sacrés renégats appelé les Seven Deadly Sins s'est rebellé contre les Chevaliers Sacrés, la garde du royaume. Depuis, ils ont disparu et personne ne sait ce qu'ils sont devenus.",
  },
  {
    anime: "Ragna Crimson",
    category: ["Aventure"],
    options: new RagnaCrimson(),
    synopsis:
      "Les chasseurs de dragons tuent leurs proies avec leur épée d'argent afin de toucher une récompense. Parmi eux, il y a Ragna, un jeune homme plutôt faible faisant équipe avec Léonica, une chasseuse de génie qui peut se vanter d'avoir tué bien plus de dragons que n'importe quel autre chasseur.",
  },
  {
    anime: "Ninja Kamui",
    category: ["Nouveautés"],
    options: new NinjaKamui(),
    synopsis:
      "Joe Higan, ancien ninja, tombe dans une embuscade tendue par des assassins qui cherchent à se venger de sa trahison et de celle de sa famille, après avoir échappé à son clan et s'être enfui dans l'Amérique rurale.",
  },
  {
    anime: "Yuyu Hakusho",
    category: ["Classique", "Aventure", "Les anciens"],
    options: new YuyuHakusho(),
    synopsis:
      "Yusuke Urameshi est un jeune vaurien de 14 ans. Il va pourtant sauver la vie d'un petit garçon et se faire écraser... Il y laisse sa vie. Pourtant, sa mort, imprévue, pose problème à Enma Jr, le fils du Juge des Enfers. Il décide alors de lui faire passer un test, pour juger de ses qualités. S'il réussit ce test, il pourra ressusciter et deviendra un détective du monde des esprits, afin de combattre avec son guide spirituel Botan, tous les démons trouvés sur Terre pour y faire du mal.",
  },
  {
    anime: "Frieren",
    category: ["Nouveautés"],
    options: new Frieren(),
    synopsis:
      "L'histoire suit l'elfe magicienne Frieren, une ancienne membre du groupe d'aventuriers qui a vaincu le roi des démons et restauré l'harmonie du monde après une quête de 10 ans. Ce groupe comptait : l'elfe magicienne Frieren, le héros humain Himmel, le guerrier nain Eisen et le prêtre humain Heiter.",
  },
  {
    anime: "Vagabond",
    category: ["Réflexion"],
    options: new Vagabond(),
    synopsis:
      "En 1600 a lieu la terrible bataille de Sekigahara, qui assied le pouvoir du shôgun Tokugawa. Parmi les combattants se trouve Musashi, le fils d'un grand samurai, qui est prêt à tout pour survivre. Alors qu'il revient dans son village natal, il est pourchassé pour avoir déserté, et se trouve rejeté par les habitants. Commence alors pour lui une longue errance, avec un unique objectif : améliorer sa maitrise de la lame, et devenir le meilleur samurai du Japon.",
  },
  {
    anime: "The Boxer",
    category: ["Webtoon", "Sport"],
    options: new TheBoxer(),
    synopsis:
      "\"The Boxer\" raconte l'histoire captivante d'un jeune prodige de la boxe doté d'un talent naturel remarquable et d'une force inégalée, mais qui monte sur le ring sans passion ni ambition. Repéré par un entraîneur visionnaire convaincu de pouvoir faire de lui le meilleur boxeur du monde, il se lance dans un parcours semé de défis. À travers des combats intenses contre des adversaires de plus en plus puissants, chacun porteur de sa propre histoire, il est contraint d'affronter non seulement ses rivaux mais aussi ses propres interrogations sur le sens de la victoire et de la défaite.",
  },
  {
    anime: "Doom Breaker",
    category: ["Webtoon"],
    options: new DoomBreaker(),
    synopsis:
      "Le dernier survivant de l'humanité, Zephyr, a finalement était vaincu. La guerre contre les démons s'est soldé par une défaite et le voici maintenant dans l'au-delà. Du moins, c'est ce qu'il pensait. Les mêmes dieux qui avaient abandonné les Hommes lui ont donné une nouvelle chance de les amuser. Remontant 10 ans en arrière, Zephyr se jure de ne plus refaire ses erreurs passées ainsi que de terrasser les démons et les dieux.",
  },
  {
    anime: "Boruto Two Blue Vortex",
    category: ["New gen"],
    options: new BorutoTwoBlueVortex(),
    synopsis: "En gros c'est boruto shippuden",
  },
  {
    anime: "Bucchigiri",
    category: ["New gen"],
    options: new Bucchigiri(),
    synopsis:
      "Les retrouvailles d'Arajin Tomoshibi avec son vieil ami de lycée Matakara Asamine prennent une tournure inattendue lorsqu'ils sont entraînés dans une bagarre avec les caïds du coin. La situation devient encore plus bizarre quand débarque un véritable colosse ! Mais ce n’est que le début d’une bataille plus profonde qui s’en engagée…",
  },
  {
    anime: "Fullmetal Alchemist Brotherhood",
    category: ["Classique"],
    options: new FMAB(),
    synopsis:
      "Dans un pays où l'alchimie permet de faire des choses extraordinaire, deux jeunes frères étudie cette science qui permet l'échange d'une chose contre une autre. Cette science repose sur le principe de \"l'échange équivalent\" qui requière de sacrifier une chose pour en obtenir une autre.",
  },
  {
    anime: "Fullmetal Alchemist",
    category: ["Magie"],
    options: new FMA(),
    synopsis:
      "Après avoir perdu leur mère, Edward et Alphonse tentent de la ramener à la vie grâce à l'alchimie. Cependant, l'alchimie doit obéir à la loi de l'échange équivalent : l'objet transformé et l'objet issu de la transformation doivent être de masses équivalentes. Passer outre cette règle coûte très cher, et les frères Elric en feront les frais : Edward perd un bras et une jambe alors que son frère Alphonse perd son corps. Heureusement Edward réussit à enfermer l'âme de son frère dans une armure de métal grâce à un sceau de sang. Ils décident alors de quitter leur maison pour partir à la recherche d'informations sur la pierre philosophale, qui leur permettrait de regagner leurs corps. Cependant, ils ne sont pas les seuls à la recherche de cette pierre...",
  },
  {
    anime: "Baki",
    category: ["Sport"],
    options: new Baki(),
    synopsis:
      "Cinq condamnés à mort s'évadent en même temps de leur prison respective. Ils ne se connaissent pas, n'ont même pas la même nationalité, et pourtant disent tous la même phrase : \"Je veux connaître la défaite\". Ils se dirigent au Japon, et là bas, un jeune garçon de 17 du nom de Baki s'y trouve. Il s'agit d'un jeune très doué pratiquant des arts-martiaux, qui n'est autre que le gagnant du précédant \"tournoi du sous sol\", un tournoi très violent auquel a également participé le père de Baki, Yujiro, qui n'est autre que \"la Créature la plus forte du monde\", un homme qui fait trembler même les sportifs les plus aguerris ! Baki va devoir au fur et a mesure progresser pour combattre et vaincre ses mastodontes qui ont l'air totalement surpuissant, et très dangereux !",
  },
  {
    anime: "Dragon Ball GT",
    category: ["Classique"],
    options: new DragonBallGT(),
    synopsis:
      "Dix ans se sont écoulés depuis la fin de Dragon Ball Z. Au palais de Dendé, Son Gokû, qui s'entrainait avec Uub, surprend Pilaf sur le point de dérober les boules de cristal. Par accident, celui-ci fait le voeu que Son Gokû redevienne un enfant pour qu'il puisse l'affronter. C'est alors que le Dragon exauce le voeu et que les boules de cristal s'éparpillent à travers toute la galaxie. Son Gokû, redevenu enfant, n'a qu'une année pour les retrouver et demander au Dragon de lui rendre sa taille normale sinon, la Terre se désintègrera. C'est ainsi que débutent les nouvelles aventures de Son Gokû, Trunks et Pan, la fille de Son Gohan et Videl, à travers la galaxie.",
  },
  {
    anime: "86: Eighty Six",
    options: new EightySix(),
    category: ["New gen"],
    synopsis: `Pour répondre aux attaques de drones autonomes envoyés par l’Empire voisin de Giad, la République de San Magnolia a développé ses propres drones de combat surnommés les “Juggernaut", espérant ainsi limiter les pertes humaines. En réalité, ces appareils sont pilotés par les 86, les habitants d’un district secret considérés comme du bétail. Déterminé dans sa mission, Shin, le capitaine de l'escadron Spearhead composé de plusieurs 86, poursuit ces opérations suicidaires. C’est alors qu’arrive un nouvel officier et soldat de l’élite militaire, Lena, qui déteste la façon dont la République utilise les 86. Ils n’auraient jamais dû se croiser, mais face aux événements de cette guerre féroce, ils vont entrevoir ensemble un nouvel avenir…`,
  },
  {
    anime: "Spy X Family",
    synopsis:
      "Twilight, le plus grand espion du monde, doit pour sa nouvelle mission créer une famille de toutes pièces afin de pouvoir s'introduire dans la plus prestigieuse école de l'aristocratie. Totalement dépourvu d'expérience familiale, il va adopter une petite fille en ignorant qu'elle est télépathe, et s'associer à une jeune femme timide, sans se douter qu'elle est une redoutable tueuse à gages. Ce trio atypique va devoir composer pour passer inaperçu, tout en découvrant les vraies valeurs d'une famille unie et aimante.",
    options: new SpyXFamily(),
    category: ["New gen"],
  },
  {
    anime: "Cyberpunk: Edgerunners",
    options: new CyberpunkEdgerunners(),
    category: ["New gen", "Musique"],
    synopsis:
      "Elle raconte une histoire indépendante sur 10 épisodes à propos d’un enfant des rues essayant de survivre dans une ville du futur obsédée par la technologie et les modifications corporelles. Ayant tout à perdre, il choisit de rester en vie en devenant un edgerunner - un hors-la-loi mercenaire également connu comme un cyberpunk.",
  },
  {
    anime: "Oshi no Ko",
    category: ["New gen", "Musique"],
    synopsis:
      'Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Ai Hoshino, une chanteuse au succès grandissant dont il est "un fan absolu". Ces deux-là vont peut-être se rencontrer dans des circonstances peu favorables, mais cet événement changera leur vie à jamais !',
    options: new OshinoKo(),
  },
  {
    anime: "Mushoku Tensei: Jobless Reincarnation",
    category: ["Aventure", "Isekai"],
    synopsis:
      "Un NEET vient d'être chassé de chez ses parents. Ayant le moral au plus bas, il pense au suicide. Jusqu'au jour où il aperçoit une ancienne camarade de classe sur le point de se faire renverser. D'un geste héroïque, il la pousse et se fait renverser à sa place. Suite à ça, il meurt puis se retrouve réincarné dans un monde fantaisiste. Il se réincarne dans le corps d'un enfant du nom de Rudeus Greyrat. Il est le fils d'un épéiste nommé Paul Greyrat et d'une ancienne aventurière nommée Zenith Greyrat. Bien décidé à faire quelque chose de sa nouvelle vie en tant que Rudeus, il va essayer de devenir le plus grand magicien de l'histoire.",
    options: new MushokuTensei(),
  },
  {
    anime: "Great Teacher Onizuka",
    category: ["Humour", "Classique", "Les anciens"],
    synopsis:
      "Eikichi Onizuka, un ancien biker et leader de gang de yakuzas décide un jour de devenir professeur d'école. Il veut devenir le plus grand professeur du Japon. Lorsqu'il était jeune, Onizuka détestait les profs car ils n'étaient pas à l'écoute des élèves. C'est pour cela qu'il veut devenir professeur, pour être au près de ses élèves, mais aussi parce qu'il y a de jeunes innocentes étudiantes qui ne le laissent pas indifférent ! Il lui est alors donné la pire classe de la prestigieuse école privée \"Holy Forest Academy\", la classe 3-4. Onizuka doit alors faire face à de nombreux problèmes causés par ses élèves...",
    options: new GTO(),
  },
  {
    anime: "7 Seeds",
    category: ["Aventure", "En équipe"],
    synopsis:
      "Un groupe de 7 personnes atterrissent sur une île inconnue et probablement déserte, après un long sommeil, ils ne se connaissent pas et ne savent pas ce qui leur est arrivé. Malgré les tensions au sein du groupe, ils vont devoir s'entraider pour faire face aux dangers de la jungle et tenter de découvrir la raison pour laquelle ils sont ici...",
    options: new SevenSeeds(),
  },
  {
    anime: "Akame Ga Kill",
    synopsis: `Tatsumi, jeune combattant, se rendait à la capitale dans l'optique de sauver son village. Mais, naïf, il se fait dérober tout ce qu'il possède par une mystérieuse jeune fille et se retrouve sans un sou. Heureusement, une autre jeune fille, une noble, propose de l'accueillir chez elle pendant quelque temps. Cependant, la poisse semble coller à la peau de Tatsumi quand un groupe d'assassins débarque pour s'en prendre à sa protectrice... qui n'est pas aussi innocente qu'elle en a l'air.`,
    options: new AkameGaKill(),
    category: ["Aventure"],
  },
  {
    anime: "Erased",
    synopsis: `2006. Aspirant mangaka dont la carrière peine à décoller, Satoru Fujinuma travaille comme livreur de pizzas pour joindre les deux bouts. Effacé et peu enclin à s'ouvrir aux autres, il observe le monde qui l'entoure sans vraiment y prendre part. Pourtant, Satoru possède un don exceptionnel : à chaque fois qu'un incident ou une tragédie se déroule près de lui, il est projeté quelques minutes dans le passé pour empêcher l'inévitable avant qu'il se produise... Cette anomalie de l'espace-temps lui vaut un séjour à l'hôpital le jour où, pour rattraper le conducteur d'un camion fou, il est percuté par un autre véhicule de plein fouet. Après l'accident, petit à petit, les souvenirs effacés de l'enfance traumatisante de Satoru resurgissent...`,
    options: new Erased(),
    category: ["Les anciens", "Classique"],
  },
];

interface AnimeOption {
  anime: string;
  category: string[];
}

interface GroupedAnimes {
  names: string[];
  category: string;
}

interface Group {
  [key: string]: string[];
}

export const groupAnimesByCategory = (
  animes: AnimeOption[],
): GroupedAnimes[] => {
  const grouped: Group = {};

  animes.forEach(({ anime, category }) => {
    category.forEach((category) => {
      if (!grouped[category]) grouped[category] = [];
      if (!grouped[category].includes(anime)) grouped[category].push(anime);
    });
  });

  return Object.keys(grouped).map((category) => ({
    names: grouped[category],
    category: category,
  }));
};
