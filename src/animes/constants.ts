import seedrandom from "seedrandom";

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
import YourName from "./YourName/your-name";
import Gintama from "./Gintama/gintama";
import SteinsGate from "./SteinsGate/steins-gate";
import CodeGeass from "./CodeGeass/code-geass";
import ReZero from "./ReZero/re-zero";
import DragonQuest from "./DragonQuest/dragon-quest";
import JojoBizarreAdventure from "./JojoBizarreAdventure/jojo-bizarre-adventure";
import WindBreaker from "./WindBreaker/wind-breaker";
import ReMonster from "./ReMonster/re-monster";
import TheFable from "./TheFable/the-fable";
import NoGameNoLife from "./NoGameNoLife/no-game-no-life";
import ASilentVoice from "./ASilentVoice/a-silent-voice";
import YourLieInApril from "./YourLieInApril/your-lie-in-april";
import Toradora from "./Toradora/toradora";
import Noragami from "./Noragami/noragami";
import AngelBeats from "./AngelBeats/angel-beats";
import MiraiNikki from "./MiraiNikki/mirai-nikki";
import ThePromisedNeverland from "./ThePromisedNeverland/the-promised-neverland";
import Evangelion from "./Envangelion/evangelion";
import CowboyBebop from "./CowboyBebop/cowboy-bebop";
import KaguyaSama from "./KaguyaSama/kaguya-sama";
import FruitsBasket from "./FruitsBasket/fruits-basket";
import Clannad from "./Clannad/clannad";
import LesCarnetsDeLapothicaire from "./LesCarnetsDeLapothicaire/les-carnets-de-lapothicaire";
import MarchComesinLikeaLion from "./MarchComesinLikeaLion/march-comes-in-like-a-lion";
import TheDangersInMyHeart from "./TheDangersInMyHeart/the-dangers-in-my-heart";
import KaijuN8 from "./KaijuN8/kaiju-n8";
import VioletEvergarden from "./VioletEvergarden/violet-evergarden";
import Kingdom from "./Kingdom/kingdom";
import Parasite from "./Parasite/parasite";
import SuperDragonBallHeroes from "./SuperDragonBallHeroes/super-dragon-ball-heroes";
import Yatagarasu from "./Yatagarasu/yatagarasu";
import DrStone from "./DrStone/dr-stone";
import MadeInAbyss from "./MadeInAbyss/made-in-abyss";
import Rainbow from "./Rainbow/rainbow";
import ViralHit from "./ViralHit/viral-hit";
import SaintSeiya from "./SaintSeiya/saint-seiya";
import BlackLagoon from "./BlackLagoon/black-lagoon";
import BlackButler from "./BlackButler/black-butler";
import FoodWars from "./FoodWars/food-wars";
import SuicideSquadIsekai from "./SuicideSquadIsekai/suicide-squad-isekai";
import Berserk from "./Berserk/berserk";
import GrandBlue from "./GrandBlue/grand-blue";
import PrisonSchool from "./PrisonSchool/prison-school";
import Gleipnir from "./Gleipnir/gleipnir";
import DevilmanCrybaby from "./DevilmanCrybaby/devilman-crybaby";
import d91Days from "./91Days/91-days";
import Vivy from "./Vivy/vivy";
import JapanSinks from "./JapanSinks/japan-sinks";
import RankingOfKings from "./RankingOfKings/ranking-of-kings";
import Barakamon from "./Barakamon/barakamon";
import DeathParade from "./DeathParade/death-parade";
import RakudaiKishi from "./RakudaiKishi/rakudai-kishi";
import TenseiShitara from "./TenseiShitara/tensei-shitara";

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
    aliases: ["op"],
    options: new OnePiece(),
    category: ["Aventure", "Comédie", "Drame", "Fantasy"],
    synopsis:
      "L'histoire suit principalement l'équipage de Chapeau de paille, mené par son capitaine Monkey D. Luffy, un jeune homme ayant mangé, enfant, sans le savoir, le fruit du Gum Gum qui lui permet d'étirer ses membres, et dont le rêve est de devenir le Roi des pirates.",
  },
  {
    anime: "Dragon Ball",
    aliases: ["db"],
    options: new DragonBall(),
    category: [
      "Action",
      "Aventure",
      "Science-fiction",
      "Comédie",
      "Arts Martiaux",
    ],
    synopsis:
      "Son Gokû est un petit garçon exceptionnellement doué pour les arts martiaux, qui possède une mystérieuse queue de singe. Le jour où il rencontre Bulma, ils partent ensemble à la recherche des sept boules de cristal... Akira Toriyama - Paix à son âme.",
  },
  {
    anime: "Dragon Ball Z",
    aliases: ["dbz"],
    options: new DragonBallZ(),
    category: ["Action", "Aventure", "Science-fiction", "Arts Martiaux"],
    synopsis:
      "Dragon Ball Z se déroule cinq ans après le mariage de Son Goku et de Chichi. Raditz, un mystérieux guerrier de l'espace, frère de Son Goku, arrive sur Terre pour retrouver Goku. Ce dernier apprend qu'il vient d'une planète de guerriers redoutables dont il ne reste plus que quatre survivants.",
  },
  {
    anime: "Dragon Ball Super",
    aliases: ["dbs"],
    options: new DragonBallSuper(),
    category: ["Action", "Aventure", "Science-fiction", "Arts Martiaux"],
    synopsis:
      "Au début de l’histoire, le monde semble paisible et tout le monde vit librement, mais tout cela ne dure pas longtemps. Un nouvel ennemi a commencé à se cacher et l’entité « Destructeur » appelée le Dieu de la Destruction s’est réveillée de son sommeil. Tout cela a eu un très grand impact sur la terre, tout le monde a commencé à se préparer à une catastrophe encore plus grande. ",
  },
  {
    anime: "My Hero Academia",
    aliases: ["boku no hero academia", "mha"],
    options: new MyHeroAcademia(),
    category: [
      "Action",
      "School Life",
      "Fantastique",
      "Science-fiction",
      "Nouvelles saisons",
    ],
    synopsis: `Dans un futur proche suite à une mutation génétique, 80% de la population mondiale possède des super-pouvoirs appelés "Alters". Le plus célèbre des super-héros se nomme All Might. Izuku Midoriya en est fan, et rêve d'intégrer la filière super-héroïque du lycée Yuei pour suivre les traces de son idole.`,
  },
  {
    anime: "Vinland Saga",
    aliases: ["no ennemies"],
    options: new VinlandSaga(),
    category: ["Historique", "Action", "Drame"],
    synopsis:
      "Vinland Saga nous raconte l'histoire d'un jeune Viking, Thorfinn. Ce dernier fait partie de l'équipage d'un chef de guerre du nom d'Askeladd, qui est l'assassin du ... de Thorfinn ! Enchainant les combats et les missions dangereuses, Thorfinn s'endurcit et gagne en maturité. Il a un objectif : venger son ... de manière loyale...",
  },
  {
    anime: "Solo Leveling",
    aliases: ["only i level up", "Ore dake Level Up na Ken"],
    options: new SoloLeveling(),
    category: ["Action", "Fantasy", "Webtoon"],
    synopsis:
      "Dans un monde dans lequel les chasseurs - des guerriers humains dotés de capacités surnaturelles - doivent combattre des monstres mortels pour protéger l'humanité d'une annihilation certaine, un chasseur notoirement faible nommé Sung Jinwoo se retrouve dans une lutte apparemment sans fin pour sa survie.",
  },
  {
    anime: "Kuroko Basket",
    aliases: ["kuroko no basket", "knb"],
    category: ["Sport", "School Life"],
    options: new KurokoBasket(),
    synopsis:
      'Les aventures de Tetsuyza Kuroko, un jeune garçon de 16 ans qui, sous son apparence chétive, cache un redoutable basketteur membre de la "génération des miracles" du collège Teiko. Tout juste arrivé au lycée de Seirin, il fait la connaissance de Taiga Kagami, jeune recrue fraîchement débarquée des États-unis.',
  },
  {
    anime: "Jujutsu Kaisen",
    aliases: ["jjk", "Sorcery Fight"],
    options: new JujutsuKaisen(),
    category: [
      "Action",
      "Drame",
      "Fantastique",
      "Mystère",
      "School Life",
      "Surnaturel",
      "Tragique",
    ],
    synopsis:
      "L'intrigue de Jujutsu Kaisen se déroule dans un monde où l'énergie occulte existe, elle se matérialise par des démons appelés Fléaux, créés à partir des émotions négatives des Humains. Ceux-ci sont invisibles aux yeux des humains sauf pour une poignée de personnes.",
  },
  {
    anime: "Black Clover",
    aliases: ["bc"],
    options: new BlackClover(),
    category: ["Action", "Aventure", "Romance", "Fantastique"],
    synopsis: `Asta est un jeune garçon déterminé qui vit avec son ami d'enfance, Yuno, dans un orphelinat du royaume de Clover. Depuis tout petit, Asta a pour ambition de devenir le magicien le plus puissant du royaume, "l'Empereur-Mage", ce qui a aussi inspiré Yuno à vouloir la même chose.`,
  },
  {
    anime: "Hunter X Hunter",
    aliases: ["hxh"],
    options: new HunterXHunter(),
    category: ["Aventure", "Action", "Fantasy", "Drame", "Arts Martiaux"],
    synopsis:
      "Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d'autres prétendants au titre de Hunter.",
  },
  {
    anime: "Mashle",
    aliases: ["Magic and Muscles", "One punch man"],
    options: new Mashle(),
    category: ["Action", "Aventure", "Comédie", "Fantastique", "Arts Martiaux"],
    synopsis:
      "Mash Burnedead est né sans pouvoirs magiques mais a survécu caché dans une épaisse forêt. Le jour où son secret est découvert, il se voit proposer un marché : intégrer Easton, la prestigieuse académie de magie, et y obtenir le titre d'élu divin. Pour retrouver sa vie tranquille, Mash accepte.",
  },
  {
    anime: "L'attaque des titans",
    aliases: ["shingeki no kyojin", "snk"],
    options: new AttaqueDesTitans(),
    category: [
      "Action",
      "Mystère",
      "Horreur",
      "Fantasy",
      "Tragédie",
      "Thriller",
    ],
    synopsis:
      "L'humanité vit regroupée dans une citadelle pour se protéger des Titans, de gigantesques monstres dévoreurs de chair humaine. Un jeune garçon va néanmoins déjouer le destin des siens lorsqu'il se découvre la possibilité de se transformer en Titan.",
  },
  {
    anime: "Death Note",
    aliases: ["Carnet de la Mort"],
    options: new DeathNote(),
    category: [
      "Fantasy",
      "Thriller",
      "Tragédie",
      "Psychologique",
      "Surnaturel",
      "Mystère",
    ],
    synopsis: `Light Yagami, un jeune étudiant surdoué, ramasse un jour le "Death Note", un carnet abandonné par un dieu de la mort, Ryuk, qui apparemment s'ennuyait dans son monde. Il suffit d'écrire le nom d'une personne dans ce carnet, et celle-ci meurt.`,
  },
  {
    anime: "The god of highschool",
    aliases: ["tdoh"],
    options: new TheGodOfHighschool(),
    category: [
      "Action",
      "Comédie",
      "Webtoon",
      "Surnaturel",
      "Arts Martiaux",
      "Science-fiction",
    ],
    synopsis:
      "Un lycéen et ses amis prennent part à un tournoi épique dans lequel le gagnant verra tous ses vœux s'exaucer. Cependant, les participants découvrent très vite qu'une mystérieuse organisation semble manipuler cette compétition dans l'ombre...",
  },
  {
    anime: "Tower of god",
    aliases: ["Sinui Tap", "Tog"],
    options: new TowerOfGod(),
    category: [
      "Action",
      "Aventure",
      "Science-fiction",
      "Drame",
      "Fantasy",
      "Mystère",
      "Webtoon",
      "Nouvelles saisons",
    ],
    synopsis:
      "Afin de retrouver Rachel, la seule personne chère à ses yeux, Bam décide de prendre tous les risques pour atteindre le sommet d'une mystérieuse tour. Pour passer chaque étage, il devra réussir un test complexe dans lequel il jouera à chaque fois sa vie.",
  },
  {
    anime: "Naruto",
    options: new Naruto(),
    category: ["Action", "Arts Martiaux", "Drame"],
    synopsis:
      "Le ninja le plus puissant de Konoha à l'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur.",
  },
  {
    anime: "Naruto Shippuden",
    options: new NarutoShippuden(),
    category: ["Action", "Arts Martiaux", "Drame"],
    synopsis:
      "Après deux ans et demi d'entraînement avec Jiraya, il retrouve ses camarades de l'Académie des ninja ainsi que ses professeurs de Konoha. Tous ont évolué, y compris les ninjas du village de Suna. Seul Kakashi, semble être resté fidèle à lui-même ! Hélas, les retrouvailles sont de courte durée.",
  },
  {
    anime: "Shangri-La Frontier",
    options: new ShangriLaFrontier(),
    category: ["Action", "Aventure", "Fantastique"],
    synopsis:
      "Sunraku est un passionné de jeux vidéo, il s'essaye aux pires jeux existants. Un jour il décide de s'attaquer au MMORPG Shangri-La Frontier, jeu aux trente millions de membres inscrits, il va devoir faire affronter de multiples dangers avec un masque ridicule... en forme d'oiseau.",
  },
  {
    anime: "Classroom of the Elites",
    aliases: ["Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e"],
    options: new ClassroomOfTheElites(),
    category: [
      "Drame",
      "Psychologique",
      "Romance",
      "Slice of Life",
      "School Life",
    ],
    synopsis:
      "Kiyotaka Ayanokôji intègre le prestigieux lycée Tokyo Kôdo Ikusei où, une fois le diplôme en poche, quasiment 100 % des élèves trouvent un travail ou sont reçus à l'université. Pas de chance, il rate l'examen d'entrée et se retrouve dans la classe 1-D où finissent tous les élèves à problèmes !",
  },
  {
    anime: "The Daily Life of the Immortal King",
    aliases: [
      "Le quotidien du roi immortel",
      "Xian Wang De Ri Chang Sheng Huo",
    ],
    options: new TheDailyLifeOfTheImmortalKing(),
    category: ["Comédie", "Fantasy", "Romance", "School Life", "Slice of Life"],
    synopsis:
      "Wang Ling a développé depuis son plus jeune âge d'incroyables capacités. Cependant, afin de mener une vie ordinaire, ses pouvoirs sont confinés dans un talisman. Malgré cela ses pouvoirs restent puissants et son doux quotidien est menacé lors de son entrée au lycée.",
  },
  {
    anime: "Haikyuu",
    aliases: ["Haikyu !!"],
    options: new Haikyuu(),
    category: ["Sport"],
    synopsis:
      "Shôyô Hinata, surnommé Shô, aime plus que tout jouer au volley-ball et ce, malgré sa petite taille. Malheureusement, suite à une sévère défaite, son club de collège a été dissous, tous les membres étant partis. Mais Shô est bien décidé à jouer de nouveau et choisit son futur lycée en fonction de son ambition.",
  },
  {
    anime: "Blue Lock",
    options: new BlueLock(),
    category: ["Sport", "Thriller"],
    synopsis: `Coupe du monde 2018, l'équipe de football du Japon est éliminée en huitièmes de finale... Ce nouvel échec incite l'Union japonaise de football à fonder le "Blue Lock" : un centre de formation révolutionnaire rassemblant les 300 meilleurs attaquants lycéens du pays.`,
  },
  {
    anime: "Air Gear",
    options: new AirGear(),
    category: ["Action", "Sport", "Comédie", "Romance"],
    synopsis:
      "Ikki est le leader du gang qui règne sur son lycée. Malgré sa force, il va connaître sa première défaite lors d'une altercation avec les Skull Sader, un groupe de Stormriders, des riders d'un genre nouveau qui se déplacent en bande sur des Air Trecks, des rollers motorisés.",
  },
  {
    anime: "Slam Dunk",
    options: new SlamDunk(),
    category: ["Sport"],
    synopsis:
      "Hanamichi Sakuragi, un jeune homme immature et impopulaire, est bien décidé à en finir avec les déceptions amoureuses lors de son entrée au lycée de Shohoku. Il y rencontre alors Haruko Akagi, une fille dont il tombe amoureux.",
  },
  {
    anime: "Demon Slayer",
    aliases: ["kny", "kimetsu no yaiba", "Les Rôdeurs de la Nuit"],
    options: new DemonSlayer(),
    category: ["Action", "Aventure", "Drame", "Surnaturel", "Horreur"],
    synopsis:
      "Les citadins locaux ne s'aventurent jamais dans les bois la nuit à cause de démons mangeurs d'hommes. Un jour, le jeune Tanjiro découvre que sa famille s'est fait massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon.",
  },
  {
    anime: "Bleach",
    options: new Bleach(),
    category: ["Action", "Drame"],
    synopsis: `Adolescent de quinze ans, Ichigo Kurosaki possède un don particulier : celui de voir les esprits. Un jour, il croise la route d'une belle Shinigami (un être spirituel) en train de pourchasser une "âme perdue", un esprit maléfique qui hante notre monde et n'arrive pas à trouver le repos.`,
  },
  {
    anime: "Boruto",
    aliases: ["NARUTO NEXT GENERATIONS", "Two Blue Vortex"],
    options: new Boruto(),
    category: ["Action", "Comédie", "Drame", "Arts Martiaux"],
    synopsis:
      "UNE NOUVELLE GÉNÉRATION DE NINJAS DÉBARQUE À KONOHA ! Les grands affrontements dans le monde des ninjas appartiennent désormais au passé. Le village de Konoha est entré dans une ère de paix. Boruto, le fils du 7e Hokage, vit mal d'être dans l'ombre de son imminent paternel.",
  },
  {
    anime: "Sword Art Online",
    aliases: ["sao"],
    options: new SwordArtOnline(),
    category: ["Action", "Aventure", "Fantasy", "Romance", "Science-fiction"],
    synopsis:
      "En 2022, l'humanité a réussi à créer une réalité virtuelle. Grâce à un casque, les humains peuvent se plonger entièrement dans le monde virtuel en étant comme déconnectés de la réalité, et Sword Art Online est le premier MMORPG a utiliser ce système.",
  },
  {
    anime: "One Punch Man",
    aliases: ["opm"],
    options: new OnePunchMan(),
    category: [
      "Action",
      "Aventure",
      "Drame",
      "Comédie",
      "Surnaturel",
      "Science-fiction",
      "Arts Martiaux",
      "Fantastique",
    ],
    synopsis:
      "Histoire de passer le temps, Saitama est devenu un héros. Trois années d'un entraînement spécial lui ont donné un pouvoir le rendant invincible. Mais Saitama est devenu si fort qu'un seul coup de poing lui suffit à terrasser chaque adversaire se présentant, aussi puissant soit- il.",
  },
  {
    anime: "Tokyo Ghoul",
    aliases: ["Toukyou Kushu"],
    options: new TokyoGhoul(),
    category: ["Action", "Fantastique", "Drame", "Psychologique", "Horreur"],
    synopsis:
      "Dans la ville de Tokyo, des créatures nommées goules sont apparues et se nourrissent de chair humaine pour survivre. Un jour, Ken Kaneki, jeune étudiant, se fait attaquer par l'une d'entre elles et subit une grave blessure.",
  },
  {
    anime: "Chainsaw Man",
    category: ["Action", "Drame", "Surnaturel", "Fantasy"],
    options: new ChainsawMan(),
    synopsis:
      "Denji est un jeune homme sans argent qui travaille comme Devil Hunter auprès d'un mafieux. Avec l'aide de Pochita, son chien-démon-tronçonneuse, il continue de rembourser les dettes de son père. Cependant, après s'être fait trahir, il fusionne avec Pochita et devient un homme-tronçonneuse.",
  },
  {
    anime: "Hell's Paradise",
    aliases: ["Jigokuraku"],
    category: [
      "Action",
      "Drame",
      "Historique",
      "Surnaturel",
      "Arts Martiaux",
      "Fantastique",
    ],
    options: new HellsParadise(),
    synopsis:
      "Gabimaru, « Le Vide », le plus célèbre et puissant des assassins a été capturé et croupit en prison. Affirmant n'avoir plus aucune raison de vivre, il attend désespérément qu'un bourreau parvienne à lui ôter la vie car son entraînement surhumain lui permet de résister aux pires des châtiments.",
  },
  {
    anime: "Fairy Tail",
    options: new FairyTail(),
    category: ["Action", "Aventure", "Fantasy", "Comédie"],
    synopsis:
      "Lucy, une jeune fille, rêve de devenir magicienne. Un jour, elle rencontre Natsu, un magicien maîtrisant le feu, ce dernier l'invite alors à rejoindre sa guilde. Il s'agit de la célèbre Fairy Tail, le sujet de tous les rêves de Lucy. Mais celle-ci est bien mystérieuse et semble être à l'origine de nombreux scandales.",
  },
  {
    anime: "The Eminence in Shadow",
    options: new EminenceInShadow(),
    category: ["Fantasy", "Comédie", "Isekai"],
    synopsis:
      "L'histoire suit les péripéties de Cid, un jeune garçon transporté dans un autre monde. Souffrant du syndrome du chūnibyō, il parvient à convaincre son nouvel entourage qu'il est le chef d'une société secrète recrutant de puissants individus et visant à influencer le cours des événements.",
    aliases: ["Kage no Jitsuryokusha ni Naritakute"],
  },
  {
    anime: "Mob Psycho 100",
    options: new MobPsycho100(),
    category: [
      "Action",
      "Drame",
      "Thriller",
      "Psychologique",
      "Surnaturel",
      "Science-fiction",
    ],
    synopsis: `L'histoire suit Kageyama Shigeo, un élève de quatrième possédant des pouvoirs psychiques. Il peut plier et soulever n'importe quel objet avec son esprit. Cependant, il s'est lentement refusé d'exercer ses capacités en public car sa trop grande puissance peut infliger des conséquences négatives aux humains "normaux".`,
    aliases: ["One Hundred Mob Psycho", "Mob Psycho Hyaku"],
  },
  {
    anime: "Hajime no Ippo",
    options: new HajimeNoIppo(),
    category: ["Sport"],
    synopsis:
      "Ippo Makunouchi est un enfant doux et maladroit. Sa mère l'élève seule depuis qu'il est tout petit, et il l'aide dans son commerce de bateau de pêche. Au printemps de sa deuxième année de lycée, Ippo est martyrisé par le trio de brutes qui l'attaque régulièrement.",
    aliases: [
      "Ippo le challenger",
      "Fighting Spirit",
      "The First Step",
      "The Fighting",
    ],
  },
  {
    anime: "Tokyo Revengers",
    options: new TokyoRevengers(),
    category: ["Action", "Drame", "Romance", "Science-fiction"],
    synopsis:
      "À 26 ans, Takemichi a le sentiment d'avoir déjà raté sa vie. Vivotant de petits boulots ingrats tout juste bons à payer le loyer d'un studio miteux, il se lamente sur le désert de sa vie amoureuse lorsqu'il apprend la mort de Hinata, la seule petite amie qu'il ait eue...",
    aliases: ["Tokyo Manji Revengers"],
  },
  {
    anime: "Blue Exorcist",
    options: new BlueExorcist(),
    category: ["Action", "Surnaturel"],
    synopsis:
      "Rin okumura, un ado de 15 ans adopté par un exorciste dès son plus jeune âge découvre un jour qu'il est le fils du Malin. Son père, Satan en personne, lui apparaît pour l'emmener dans son monde, mais le jeune garçon ne peut oublier tout ce qui lui a été enseigné jusqu'ici.",
    aliases: ["Ao no Exorcist"],
  },
  {
    anime: "Kagura Bachi",
    synopsis:
      "Kagura Bachi suit Chihiro, un jeune forgeron subitement devenu épéiste pour des raisons encore inconnues pour le moment. Le protagoniste évolue dans un univers fantaisiste où la magie existe, et peut renforcer des armes comme le katana qu'il manie. Chihiro traque un ennemi inconnu pour le moment.",
    options: new KaguraBachi(),
    category: ["Action", "Drame"],
  },
  {
    anime: "Captain Tsubasa",
    synopsis:
      "Tsubasa Ozora est déjà un petit génie du ballon rond malgré son jeune âge. Son rêve est d'offrir la Coupe du monde de football au Japon. Roberto Hongô, son mentor, est un joueur de légende revenu du Brésil et Tsubasa suit un entraînement particulièrement rigoureux.",
    aliases: ["Olive et Tom"],
    category: ["Sport"],
    options: new CaptainTsubasa(),
  },
  {
    anime: "Monster 103 Mercies Dragon Damnation",
    synopsis:
      "Ryuma, un samouraï nomade sans le sou, est sauvé d'une mort certaine par Flare, une généreuse serveuse, dont l'admiration envers Cyrano, un escrimeur émérite, est sans faille. Cependant, lorsque ce dernier porte atteinte à l'honneur de Ryuma, le jeune homme se voit contraint de le provoquer en duel. Mais ce geste pourtant anodin pourrait bien avoir des conséquences irrémédiables.",
    options: new Monster103(),
    aliases: ["L'Enfer du Dragon Volant aux 103 Passions", "One Piece"],
    category: ["Hors Series"],
  },
  {
    anime: "Monster",
    category: ["Drame", "Thriller", "Psychologique"],
    synopsis:
      "Talentueux, respecté et fiancé à une belle jeune femme, le Dr Kenzo Tenma est un neurochirurgien japonais qui exerce en Allemagne. Tout lui sourit jusqu'au jour où il décide de suivre son coeur et de sauver en priorité la vie d'un petit réfugié d'Allemagne de l'Est plutôt que celle du maire de Düsseldorf.",
    options: new Monster(),
  },
  {
    anime: "Fire Force",
    category: [
      "Action",
      "Aventure",
      "Science-fiction",
      "Fantasy",
      "Surnaturel",
    ],
    aliases: ["Enen no Shouboutai"],
    synopsis:
      "L'humanité est terrifiée par le phénomène de combustion humaine. Des brigades spéciales Fire Force ont donc été mises en place avec pour mission de trouver la cause de ce mystérieux phénomène ! Le jeune Shinra, nouvelle recrue surnommée le Démon, rêve de devenir un héros.",
    options: new FireForce(),
  },
  {
    anime: "Assassination Classroom",
    category: ["Action", "Comédie", "Science-fiction"],
    aliases: ["Ansatsu Kyoushitsu"],
    synopsis:
      "Koro Sensei devient enseignant de la classe 3-E de l'école de Kunugigaoka. Après avoir détruit la Lune et promis de faire exploser la Terre, ses élèves tentent de l'arrêter. Unis par un lien mystérieux, ils ont un an pour achever leur mission.",
    options: new AssassinationClassroom(),
  },
  {
    anime: "Ao Ashi",
    synopsis:
      "Doté d'un tempérament de feu, le jeune Ashito Aoi aime le football plus que quiconque. Son rêve : devenir joueur professionnel ! Mais ses dons ne lui évitent pas une terrible déconvenue lors d'un match de coupe inter collèges.",
    category: ["Slice of Life", "Sport"],
    options: new AoAshi(),
  },
  {
    anime: "Gurren Lagann",
    category: ["Aventure", "Comédie", "Drame"],
    options: new GurrenLagann(),
    aliases: ["Tengen Toppa"],
    synopsis:
      "Tengen toppa Gurren-Lagann se déroule dans un futur lointain où l'humanité a été forcée de vivre sous terre, créant des civilisations souterraines isolées. Ces cités n'ont aucun contact avec la surface ni avec les autres villages souterrains. Les tremblements de terre sont fréquents et causent des dégâts aux villages.",
  },
  {
    anime: "Seven Deadly Sins",
    category: ["Action", "Aventure", "Comédie", "Fantasy", "Romance"],
    options: new SevenDeadlySins(),
    aliases: ["nanatsu no taizai"],
    synopsis:
      "Il y a dix ans, un groupe de Chevaliers Sacrés renégats appelé les Seven Deadly Sins s'est rebellé contre les Chevaliers Sacrés, la garde du royaume. Depuis, ils ont disparu et personne ne sait ce qu'ils sont devenus.",
  },
  {
    anime: "Ragna Crimson",
    category: ["Action", "Fantasy", "Aventure"],
    options: new RagnaCrimson(),
    synopsis:
      "Les chasseurs de dragons tuent leurs proies avec leur épée d'argent afin de toucher une récompense. Parmi eux, il y a Ragna, un jeune homme plutôt faible faisant équipe avec Léonica, une chasseuse de génie qui peut se vanter d'avoir tué bien plus de dragons que n'importe quel autre chasseur.",
  },
  {
    anime: "Ninja Kamui",
    category: [
      "Action",
      "Nouvelles saisons",
      "Science-fiction",
      "Arts Martiaux",
    ],
    options: new NinjaKamui(),
    synopsis:
      "Joe Higan, ancien ninja, tombe dans une embuscade tendue par des assassins qui cherchent à se venger de sa trahison et de celle de sa famille, après avoir échappé à son clan et s'être enfui dans l'Amérique rurale.",
  },
  {
    anime: "Yuyu Hakusho",
    category: [
      "Action",
      "Aventure",
      "Comédie",
      "Drame",
      "Fantastique",
      "Horreur",
      "Mystère",
      "Surnaturel",
      "Arts Martiaux",
    ],
    options: new YuyuHakusho(),
    synopsis:
      "Yusuke Urameshi est un jeune vaurien de 14 ans. Il va pourtant sauver la vie d'un petit garçon et se faire écraser... Il y laisse sa vie. Pourtant, sa mort, imprévue, pose problème à Enma Jr, le fils du Juge des Enfers. Il décide alors de lui faire passer un test, pour juger de ses qualités. S'il réussit ce test, il pourra ressusciter et deviendra un détective du monde des esprits, afin de combattre avec son guide spirituel Botan, tous les démons trouvés sur Terre pour y faire du mal.",
  },
  {
    anime: "Frieren",
    category: ["Aventure", "Drame", "Fantasy", "Slice of Life"],
    options: new Frieren(),
    aliases: ["sousou no frieren"],
    synopsis:
      "L'histoire suit l'elfe magicienne Frieren, une ancienne membre du groupe d'aventuriers qui a vaincu le roi des démons et restauré l'harmonie du monde après une quête de 10 ans. Ce groupe comptait : l'elfe magicienne Frieren, le héros humain Himmel, le guerrier nain Eisen et le prêtre humain Heiter.",
  },
  {
    anime: "Vagabond",
    category: ["Action", "Drame", "Historique"],
    options: new Vagabond(),
    synopsis:
      "En 1600 a lieu la terrible bataille de Sekigahara, qui assied le pouvoir du shôgun Tokugawa. Parmi les combattants se trouve Musashi, le fils d'un grand samurai, qui est prêt à tout pour survivre. Alors qu'il revient dans son village natal, il est pourchassé pour avoir déserté, et se trouve rejeté par les habitants. Commence alors pour lui une longue errance, avec un unique objectif : améliorer sa maitrise de la lame, et devenir le meilleur samurai du Japon.",
  },
  {
    anime: "The Boxer",
    category: ["Sport", "Webtoon"],
    options: new TheBoxer(),
    synopsis: `"The Boxer" raconte l'histoire captivante d'un jeune prodige de la boxe doté d'un talent naturel remarquable et d'une force inégalée, mais qui monte sur le ring sans passion ni ambition. Repéré par un entraîneur visionnaire convaincu de pouvoir faire de lui le meilleur boxeur du monde, il se lance dans un parcours semé de défis. À travers des combats intenses contre des adversaires de plus en plus puissants, chacun porteur de sa propre histoire, il est contraint d'affronter non seulement ses rivaux mais aussi ses propres interrogations sur le sens de la victoire et de la défaite.`,
  },
  {
    anime: "Doom Breaker",
    category: ["Action", "Fantasy", "Drame", "Webtoon"],
    options: new DoomBreaker(),
    aliases: ["Tusinjeonsaenggi"],
    synopsis:
      "Le dernier survivant de l'humanité, Zephyr, a finalement était vaincu. La guerre contre les démons s'est soldé par une défaite et le voici maintenant dans l'au-delà. Du moins, c'est ce qu'il pensait. Les mêmes dieux qui avaient abandonné les Hommes lui ont donné une nouvelle chance de les amuser. Remontant 10 ans en arrière, Zephyr se jure de ne plus refaire ses erreurs passées ainsi que de terrasser les démons et les dieux.",
  },

  {
    anime: "Bucchigiri",
    category: ["Action", "School Life"],
    options: new Bucchigiri(),
    synopsis:
      "Les retrouvailles d'Arajin Tomoshibi avec son vieil ami de lycée Matakara Asamine prennent une tournure inattendue lorsqu'ils sont entraînés dans une bagarre avec les caïds du coin. La situation devient encore plus bizarre quand débarque un véritable colosse ! Mais ce n’est que le début d’une bataille plus profonde qui s’en engagée…",
  },
  {
    anime: "Fullmetal Alchemist Brotherhood",
    category: [
      "Action",
      "Aventure",
      "Comédie",
      "Drame",
      "Fantasy",
      "Psychologique",
      "Surnaturel",
      "Thriller",
    ],
    options: new FMAB(),
    aliases: ["fmab", "Hagane no Renkinjutsushi", "Hagaren"],
    synopsis: `Dans un pays où l'alchimie permet de faire des choses extraordinaire, deux jeunes frères étudie cette science qui permet l'échange d'une chose contre une autre. Cette science repose sur le principe de "l'échange équivalent" qui requière de sacrifier une chose pour en obtenir une autre.`,
  },
  {
    anime: "Fullmetal Alchemist",
    category: ["Action", "Comédie", "Drame", "Mystère", "Surnaturel"],
    options: new FMA(),
    aliases: ["Hagane no Renkinjutsushi", "fma"],
    synopsis:
      "Après avoir perdu leur mère, Edward et Alphonse tentent de la ramener à la vie grâce à l'alchimie. Cependant, l'alchimie doit obéir à la loi de l'échange équivalent : l'objet transformé et l'objet issu de la transformation doivent être de masses équivalentes. Passer outre cette règle coûte très cher, et les frères Elric en feront les frais : Edward perd un bras et une jambe alors que son frère Alphonse perd son corps. Heureusement Edward réussit à enfermer l'âme de son frère dans une armure de métal grâce à un sceau de sang. Ils décident alors de quitter leur maison pour partir à la recherche d'informations sur la pierre philosophale, qui leur permettrait de regagner leurs corps. Cependant, ils ne sont pas les seuls à la recherche de cette pierre...",
  },
  {
    anime: "Baki",
    category: ["Action", "Arts Martiaux", "Sport"],
    options: new Baki(),
    aliases: ["New grappler Baki"],
    synopsis: `Cinq condamnés à mort s'évadent en même temps de leur prison respective. Ils ne se connaissent pas, n'ont même pas la même nationalité, et pourtant disent tous la même phrase : "Je veux connaître la défaite". Ils se dirigent au Japon, et là bas, un jeune garçon de 17 du nom de Baki s'y trouve. Il s'agit d'un jeune très doué pratiquant des arts-martiaux, qui n'est autre que le gagnant du précédant "tournoi du sous sol", un tournoi très violent auquel a également participé le père de Baki, Yujiro, qui n'est autre que "la Créature la plus forte du monde", un homme qui fait trembler même les sportifs les plus aguerris ! Baki va devoir au fur et a mesure progresser pour combattre et vaincre ses mastodontes qui ont l'air totalement surpuissant, et très dangereux !`,
  },
  {
    anime: "Dragon Ball GT",
    category: ["Arts Martiaux", "Science-fiction", "Action"],
    aliases: ["Dragonball Grand Tour", "dbg"],
    options: new DragonBallGT(),
    synopsis:
      "Dix ans se sont écoulés depuis la fin de Dragon Ball Z. Au palais de Dendé, Son Gokû, qui s'entrainait avec Uub, surprend Pilaf sur le point de dérober les boules de cristal. Par accident, celui-ci fait le voeu que Son Gokû redevienne un enfant pour qu'il puisse l'affronter. C'est alors que le Dragon exauce le voeu et que les boules de cristal s'éparpillent à travers toute la galaxie. Son Gokû, redevenu enfant, n'a qu'une année pour les retrouver et demander au Dragon de lui rendre sa taille normale sinon, la Terre se désintègrera. C'est ainsi que débutent les nouvelles aventures de Son Gokû, Trunks et Pan, la fille de Son Gohan et Videl, à travers la galaxie.",
  },
  {
    anime: "86: Eighty Six",
    options: new EightySix(),
    category: ["Action", "Drame", "Science-fiction"],
    synopsis: `Pour répondre aux attaques de drones autonomes envoyés par l’Empire voisin de Giad, la République de San Magnolia a développé ses propres drones de combat surnommés les “Juggernaut", espérant ainsi limiter les pertes humaines. En réalité, ces appareils sont pilotés par les 86, les habitants d’un district secret considérés comme du bétail. Déterminé dans sa mission, Shin, le capitaine de l'escadron Spearhead composé de plusieurs 86, poursuit ces opérations suicidaires. C’est alors qu’arrive un nouvel officier et soldat de l’élite militaire, Lena, qui déteste la façon dont la République utilise les 86. Ils n’auraient jamais dû se croiser, mais face aux événements de cette guerre féroce, ils vont entrevoir ensemble un nouvel avenir…`,
  },
  {
    anime: "Spy X Family",
    synopsis:
      "Twilight, le plus grand espion du monde, doit pour sa nouvelle mission créer une famille de toutes pièces afin de pouvoir s'introduire dans la plus prestigieuse école de l'aristocratie. Totalement dépourvu d'expérience familiale, il va adopter une petite fille en ignorant qu'elle est télépathe, et s'associer à une jeune femme timide, sans se douter qu'elle est une redoutable tueuse à gages. Ce trio atypique va devoir composer pour passer inaperçu, tout en découvrant les vraies valeurs d'une famille unie et aimante.",
    options: new SpyXFamily(),
    category: ["Action", "Comédie", "Thriller", "Slice of Life"],
  },
  {
    anime: "Cyberpunk: Edgerunners",
    options: new CyberpunkEdgerunners(),
    category: ["Action", "Drame", "Science-fiction", "School Life"],
    synopsis:
      "Elle raconte une histoire indépendante sur 10 épisodes à propos d’un enfant des rues essayant de survivre dans une ville du futur obsédée par la technologie et les modifications corporelles. Ayant tout à perdre, il choisit de rester en vie en devenant un edgerunner - un hors-la-loi mercenaire également connu comme un cyberpunk.",
  },
  {
    anime: "Oshi no Ko",
    category: [
      "Drame",
      "Psychologique",
      "Mystère",
      "Surnaturel",
      "Slice of Life",
    ],
    aliases: ["My Star"],
    synopsis:
      'Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Ai Hoshino, une chanteuse au succès grandissant dont il est "un fan absolu". Ces deux-là vont peut-être se rencontrer dans des circonstances peu favorables, mais cet événement changera leur vie à jamais !',
    options: new OshinoKo(),
  },
  {
    anime: "Mushoku Tensei: Jobless Reincarnation",
    category: [
      "Action",
      "Drame",
      "Fantasy",
      "Isekai",
      "Romance",
      "Psychologique",
      "Ecchi",
      "Nouvelles saisons",
    ],
    aliases: ["Isekai Ittara Honki Dasu"],
    synopsis:
      "Un NEET vient d'être chassé de chez ses parents. Ayant le moral au plus bas, il pense au suicide. Jusqu'au jour où il aperçoit une ancienne camarade de classe sur le point de se faire renverser. D'un geste héroïque, il la pousse et se fait renverser à sa place. Suite à ça, il meurt puis se retrouve réincarné dans un monde fantaisiste. Il se réincarne dans le corps d'un enfant du nom de Rudeus Greyrat. Il est le fils d'un épéiste nommé Paul Greyrat et d'une ancienne aventurière nommée Zenith Greyrat. Bien décidé à faire quelque chose de sa nouvelle vie en tant que Rudeus, il va essayer de devenir le plus grand magicien de l'histoire.",
    options: new MushokuTensei(),
  },
  {
    anime: "Great Teacher Onizuka",
    category: ["Comédie", "School Life", "Drame"],
    synopsis: `Eikichi Onizuka, un ancien biker et leader de gang de yakuzas décide un jour de devenir professeur d'école. Il veut devenir le plus grand professeur du Japon. Lorsqu'il était jeune, Onizuka détestait les profs car ils n'étaient pas à l'écoute des élèves. C'est pour cela qu'il veut devenir professeur, pour être au près de ses élèves, mais aussi parce qu'il y a de jeunes innocentes étudiantes qui ne le laissent pas indifférent ! Il lui est alors donné la pire classe de la prestigieuse école privée "Holy Forest Academy", la classe 3-4. Onizuka doit alors faire face à de nombreux problèmes causés par ses élèves...`,
    options: new GTO(),
    aliases: ["GTO"],
  },
  {
    anime: "7 Seeds",
    category: [
      "Action",
      "Aventure",
      "Drame",
      "Science-fiction",
      "Mystère",
      "Romance",
      "Psychologique",
    ],
    synopsis:
      "Un groupe de 7 personnes atterrissent sur une île inconnue et probablement déserte, après un long sommeil, ils ne se connaissent pas et ne savent pas ce qui leur est arrivé. Malgré les tensions au sein du groupe, ils vont devoir s'entraider pour faire face aux dangers de la jungle et tenter de découvrir la raison pour laquelle ils sont ici...",
    options: new SevenSeeds(),
  },
  {
    anime: "Akame Ga Kill",
    synopsis:
      "Tatsumi, jeune combattant, se rendait à la capitale dans l'optique de sauver son village. Mais, naïf, il se fait dérober tout ce qu'il possède par une mystérieuse jeune fille et se retrouve sans un sou. Heureusement, une autre jeune fille, une noble, propose de l'accueillir chez elle pendant quelque temps. Cependant, la poisse semble coller à la peau de Tatsumi quand un groupe d'assassins débarque pour s'en prendre à sa protectrice... qui n'est pas aussi innocente qu'elle en a l'air.",
    options: new AkameGaKill(),
    category: ["Action", "Fantasy", "Tragédie", "Comédie"],
    aliases: ["Red Eyes Sword"],
  },
  {
    anime: "Erased",
    synopsis:
      "2006. Aspirant mangaka dont la carrière peine à décoller, Satoru Fujinuma travaille comme livreur de pizzas pour joindre les deux bouts. Effacé et peu enclin à s'ouvrir aux autres, il observe le monde qui l'entoure sans vraiment y prendre part. Pourtant, Satoru possède un don exceptionnel : à chaque fois qu'un incident ou une tragédie se déroule près de lui, il est projeté quelques minutes dans le passé pour empêcher l'inévitable avant qu'il se produise... Cette anomalie de l'espace-temps lui vaut un séjour à l'hôpital le jour où, pour rattraper le conducteur d'un camion fou, il est percuté par un autre véhicule de plein fouet. Après l'accident, petit à petit, les souvenirs effacés de l'enfance traumatisante de Satoru resurgissent...",
    options: new Erased(),
    category: ["Fantastique", "Psychologique"],
    aliases: ["Boku Dake ga Inai Machi"],
  },
  {
    anime: "Your Name",
    synopsis:
      "Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo. Elle est loin d'imaginer pouvoir vivre l'aventure urbaine dans la peau de... Taki, un jeune lycéen vivant à Tokyo, occupé entre son petit boulot dans un restaurant italien et ses nombreux amis.",
    options: new YourName(),
    category: ["Comédie", "Romance", "Fantastique", "Drame", "Slice of Life"],
    aliases: ["Kimi no na wa"],
  },
  {
    anime: "Gintama",
    synopsis:
      "Dans un Japon mi-médiéval, mi-futuriste, des extraterrestres, les Amanto débarquent sur Terre. Forts de leur supériorité technologique, ils vont imposer leur loi : tout samouraï devra se défaire de son sabre... C'en est donc fini de l'âme du guerrier samouraï ! C'est sans compter Gintoki Sakata ! Armé de son sabre d'entraînement, il se placera en dernier défenseur du Bushido, le code du samouraï et ne se défera pas de son humour cinglant lors de ses missions délirantes !",
    category: [
      "Action",
      "Aventure",
      "Comédie",
      "Science-fiction",
      "Historique",
    ],
    aliases: ["Silver soul"],
    options: new Gintama(),
  },
  {
    anime: "Steins;Gate",
    category: ["Science-fiction", "Romance", "Mystère", "Thriller"],
    aliases: ["Steins Gate"],
    options: new SteinsGate(),
    synopsis:
      "L'histoire de Steins;Gate se déroule dans le quartier otaku d'Akihabara, et porte sur un groupe d'amis qui ont transformé leur micro-ondes par inadvertance en dispositif pouvant envoyer des messages texte vers le passé. Dans le but de comprendre ce phénomène ils effectuent différentes expériences concernant le voyage dans le temps.",
  },
  {
    anime: "Code Geass",
    aliases: ["Hangyaku no lelouch", "lelouch of rebellion"],
    options: new CodeGeass(),
    synopsis: `En 2017, le Japon vit sous le joug de l'empire de Britannia. Rebaptisé "Zone Eleven", le pays subit quotidiennement la terreur de l'occupant qui réprime toute sédition grâce à ses armées de Mécas, les "Nightmare Frames". Mais le jour de la révolte a peut-être sonné lorsqu'un jeune étudiant du nom de Lelouch Lamperouge va se retrouver accidentellement impliqué dans un attentat terroriste. Alors qu'il aurait dû mourir, Lelouch va au contraire survivre, et même hériter d'un mystérieux pouvoir, le "Geass", qui donne à celui qui le détient la possibilité de contrôler la volonté d'autrui. Ce pouvoir permettra-t-il à Lelouch de faire vaciller l'empire de Britannia ?`,
    category: ["Fantastique", "Science-fiction", "Drame"],
  },
  {
    anime: "Re:Zero",
    aliases: [
      "Life in a Different World from Zero",
      "Starting Life in Another World",
      "kara Hajimeru Isekai Seikatsu",
    ],
    category: ["Action", "Aventure", "Drame", "Fantasy", "Isekai"],
    options: new ReZero(),
    synopsis:
      "Il s'agit de l'adaptation du roman Re:Zero de Nagatsuki Tappei et de Ootsuka Shinichirou. Un jour un jeune homme nommé Natsuki Subaru, à la sortie d'une supérette, est transporté dans un monde parallèle sans aucune explication. En essayant de comprendre pour quoi il se trouve ici, Subaru est attaqué par une bande de brigands mais est sauvé par une jeune fille : Emilia. Pour la remercier de l'aide qu'elle lui a fournie, il décide à son tour de l'aider à retrouver une voleuse qui lui a dérobé quelque chose. Un beau jour, Emilia et Subaru sont attaqués et tués par une mystérieuse personne. Cependant, Subaru se réveille au lieu et au jour où il est arrivé dans ce monde. C'est à ce moment-là qu'il se rend compte qu'il peut retourner dans le passé après être mort. Pour échapper à son funeste destin, Subaru décide d'utiliser son pouvoir pour sauver Emilia et pour se sauver lui-même.",
  },
  {
    anime: "Dragon Quest",
    aliases: ["Dai no Daibouken", "La quête de dai", "The adventure of dai"],
    synopsis:
      "Il y a 15 ans, Hadlar, le Roi du Mal, qui terrorisait le monde avec ses hordes de monstres, a été vaincu par un grand héros. Libérés de ses maléfices, les monstres ont recommencé à vivre discrètement sur une petite île des mers du Sud, l'île de Dermline. C'est sur cette île que Daï a été élevé, par son grand-père adoptif Brass. Daï, un jeune garçon de 12 ans, rêve de devenir un héros et de protéger l'île, alors que son grand-père, un sage incube d'environ 180 ans, veut à tout prix qu'il soit mage. Mais, le jeune garçon n'est pas doué pour la magie... Malheureusement, le Roi du Mal ressuscite, grâce à l'empereur du Mal, et recommence à semer la terreur dans le monde. Daï est alors formé aux techniques de combat par maître Avan, en vue de défaire le Dieu du Mal... Mais alors que son entraînement est à peine entamé, Avan se sacrifie pour sauver ses disciples de Hadlar, le Roi du Mal. C'est pour venger sa mémoire que Daï se battra, aidé par ses amis, Pop, Maam, et d'autres... Ainsi débute sa quête...",
    category: ["Action", "Fantasy"],
    options: new DragonQuest(),
  },
  {
    anime: "JoJo's Bizarre Adventure",
    synopsis:
      "En Angleterre, dans les années 1880, Jonathan, fils unique de la famille aristocrate Joestar, s’efforce de devenir un gentleman accompli. Son quotidien est bouleversé par l’adoption de Dio Brando, un jeune homme mystérieux du même âge. Cette adoption résulte d’une vieille promesse liant leurs pères respectifs : Dario a sauvé la vie de George Joestar dans le passé et lui demande, sur son lit de mort, de recueillir son fils. Mais Dio est fourbe, ambitieux et sans scrupule : il fera tout pour s’emparer de la fortune des Joestar et détruire la vie de Jonathan. Leur lutte fratricide va les mener dans les recoins les plus sombres de la magie noire et se perpétuer de génération en génération comme une malédiction.",
    options: new JojoBizarreAdventure(),
    category: ["Action", "Aventure", "Fantastique"],
    aliases: ["JoJo no Kimyou na Bouken"],
  },
  {
    anime: "Wind Breaker",
    synopsis:
      "Haruka Sakura est le genre de lycéen qui fait passer la baston avant les révisions. Fraîchement débarqué en ville, c'est donc le sourire aux lèvres qu'il compte pousser les portes du lycée Fûrin, l'établissement scolaire au pire taux de délinquance du pays... Les intentions de Haruka sont claires : se mesurer aux meilleurs bagarreurs de ce bahut et devenir le meilleur de tous ! Mais entre-temps, il se retrouve mêlé à une altercation avec une bande de brutes dans un des quartiers de la ville, avant d'être sauvé in extremis par des élèves de son lycée. Haruka réalise alors à quel genre de phénomènes il risque d'avoir affaire...",
    options: new WindBreaker(),
    category: ["Action", "Aventure", "Arts Martiaux"],
  },
  {
    anime: "Re:Monster",
    category: ["Action", "Nouvelles saisons", "Isekai"],
    options: new ReMonster(),
    synopsis: `Après avoir été assassiné, Kanata Tomokui se réincarne dans le corps d'un faible gobelin du nom de Goburô. Cependant, ce dernier a conservé les souvenirs de sa vie antérieure. Bien que faible au départ, Goburô va rapidement devenir l'un des piliers de la race des gobelins grâce à sa compétence "d'absorption" qui lui permet d'obtenir les pouvoirs de ce qu'il mange. Dans ce monde où le plus fort survit, cette histoire va suivre l'ascension fulgurante de Goburô et de ses camarades.`,
  },
  {
    anime: "The Fable",
    category: ["Action", "Drame", "Nouvelles saisons"],
    options: new TheFable(),
    synopsis: `Muni de son arme favorite, un pistolet Nighthawk couleur anthracite, "Fable" est un tueur professionnel craint de toute la pègre japonaise. Hommes politiques, mafieux, personnalités publiques... Ce génie de l'assassinat peut envoyer n'importe laquelle de ses cibles six pieds sous terre. Et en six secondes, si le cœur lui en dit. Sauf qu'un beau jour, son commanditaire lui ordonne de tout mettre en pause et de mener la vie d'un citoyen ordinaire, dans la planque d'un clan de yakuzas à Osaka. Interdiction de tuer ou d'attaquer qui que ce soit pendant une année entière. Pour cette arme humaine au tempérament imprévisible, entourée de criminels à la gâchette facile, c'est le plus dur des contrats qui commence...`,
  },
  {
    anime: "No Game, No Life",
    category: [
      "Isekai",
      "Fantasy",
      "Action",
      "Comédie",
      "Science-fiction",
      "Ecchi",
    ],
    options: new NoGameNoLife(),
    synopsis:
      "Sora et Shiro sont deux frère et sœur hikikomori. L'hikikomori désigne une pathologie psycho-sociale caractérisant les personnes (souvent des adolescents) qui vivent coupées du monde en restant cloîtrées chez elles, refusant toute communication. Dans le cas des deux protagonistes, leur condition vient de leur vision du monde réel, qui se résume à un jeu guère intéressant. Ensemble, ils forment un duo de joueurs invaincus, véritable légende urbaine. Un jour, un garçon se qualifiant de \"Dieu\" les transporte dans un monde fantastique, où il a interdit toute forme de violence entre les 16 races différentes y vivant. À la place, toute décision ou conflit est réglé par le jeu. Les deux adolescents y sont convoqués car ils pourraient bien être les sauveurs de l'humanité, la race Imanity qui, classée dernière parmi les 16 races, se retrouve confinée dans leur seule et unique cité restante. Durant leur quête pour sauver l'Imanity, ils rencontrent Stephanie Dola : reconnue comme la petite fille de l'ancien roi considéré comme fou, Jibril : une Flügel qui est l'une des races les plus puissantes et Kurami Zell : une ancienne ennemie devenue une alliée.",
  },
  {
    anime: "A Silent Voice",
    category: [
      "Drame",
      "Psychologique",
      "Romance",
      "Slice of Life",
      "School Life",
    ],
    options: new ASilentVoice(),
    aliases: ["Koe no Katachi", "The Shape of Voice"],
    synopsis:
      "L'histoire débute avec l'arrivée de Shouko Nishimiya, une élève sourde, dans la classe de Shouya Ishida, un garçon turbulent. Ne comprenant pas comment interagir avec Shouko, Shouya commence à la brutaliser, entraînant le reste de la classe dans son comportement sans intervention significative de leur enseignant. Après avoir endommagé les appareils auditifs de Shouko, Shouya est ostracisé par ses camarades et Shouko change d'école. Avec le temps, Shouya, rongé par le remords et devenu lycéen, souhaite se racheter et apprend la langue des signes dans l'espoir de s'excuser auprès de Shouko. Avant de prendre une décision radicale quant à son avenir, il retrouve Shouko, un acte qui promet de transformer profondément sa vie.",
  },
  {
    anime: "Your Lie in April",
    aliases: ["Shigatsu wa Kimi no Uso", "Kimiuso"],
    options: new YourLieInApril(),
    synopsis:
      "Arima Kosei est un véritable prodige du piano : enfant, il dominait tous ses rivaux lors des concours et s'était déjà fait un nom dans le domaine musical. Mais, après la mort de sa mère, il sombre dans une forte dépression qui l'amène à être dégoûté de son propre instrument. Deux ans après le drame, continuant de considérer sa vie comme insipide, Arima se contente de vivre sa vie sans réel but... jusqu'à ce qu'il rencontre Miyazono Kaori, jeune violoniste extravertie qui, elle aussi, semble exceller dans son art...",
    category: ["Slice of Life", "Comédie", "Drame", "Tragédie", "Romance"],
  },
  {
    anime: "Toradora!",
    aliases: ["Tiger X Dragon"],
    synopsis:
      "Malgré sa douce personnalité, Ryuji Takasu fait peur à toutes les personnes qu'il rencontre à cause de son regard d'assassin, il a donc beaucoup de mal à s'intégrer et à se faire des amis. C'est alors, qu'à la rentrée, il se retrouve dans la même classe que son meilleur ami, Yusaku Kitamura. Il est l'un des seuls à ne pas le juger par son physique. Mais, il se retrouve aussi avec la fille qu'il aime, Minori Kushieda, et la meilleure amie de celle-ci, Taïga Aisaka. Enfin, on apprend que Taïga est amoureuse de Yusaku. Donc cette dernière et Ryuji vont se serrer les coudes. C'est ainsi que vont naître des relations auxquelles on ne s'attendait pas.",
    options: new Toradora(),
    category: ["Comédie", "Romance"],
  },
  {
    anime: "Noragami",
    category: ["Fantasy", "Action", "Comédie"],
    options: new Noragami(),
    synopsis:
      "Yato est un dieu mineur dont le rêve est de devenir la divinité la plus vénérée du pays, avec son propre temple et ses cérémonies. Pour ce faire, il exauce n'importe quelle demande contre une rémunération de 5 yens. Au cours de l'une de ses missions, il manque de se faire écraser par un bus qu'il évite grâce à une lycéenne, Hiyori Iki. N'ayant pu éviter le véhicule, la jeune fille verra alors son âme se séparer de son corps lorsqu'elle s'endort. Refusant de rester dans cet état, Hiyori demandera à Yato de l'aider à retrouver son état originel. En attendant de trouver une solution, sa condition va lui permettre de découvrir un autre univers collé au sien, qui est aussi fascinant que dangereux : le monde des esprits.",
  },
  {
    anime: "Angel Beats!",
    category: ["Action", "Comédie", "Drame", "Fantasy", "Romance"],
    options: new AngelBeats(),
    synopsis:
      "Dans le monde de l'au-delà existe un lieu, un immense campus, où sont envoyés les adolescents après leur décès. C'est là que se réveille Yuzuru Otonashi après son trépas, mais il n'a pas vraiment le temps de comprendre ce qui lui arrive qu'il est subitement pris dans un feu croisé entre les membres de la Shinda Sekai Sensen (SSS) et Tenshi. Plus tard, Yuri Nakamura, leader du SSS, lui explique que le groupe se rebelle contre le dieu qui leur a imposé une vie vide de sens. C'est pourquoi Tenshi est leur ennemie jurée. Mais Yuzuru, qui n'a aucun souvenir de sa vie sur Terre, a l'intuition que la jeune fille n'est pas une envoyée de Dieu.",
  },
  {
    anime: "Mirai Nikki",
    aliases: ["The Future Diary"],
    category: ["Action", "Horreur", "Psychologique", "Romance", "Surnaturel"],
    synopsis:
      "L'histoire nous entraîne dans le quotidien de Yukiteru Amano un jeune adolescent solitaire se renfermant sur lui-même détaché de la réalité. Il préfère se réfugier dans son monde avec ses amis imaginaires plutôt que de s'en faire de vrais dans la réalité. Seulement un jour, sa vie va basculer, lorsque Deus l'une de ses nombreuses créations se révèle être plus qu'un être imaginaire. Deus offre alors à Yukiteru la possibilité de voir dans le \"futur\" seulement, Deus est un dieu qui décide de céder sa place à celui qui survivra à un jeu de survie impitoyable.",
    options: new MiraiNikki(),
  },
  {
    anime: "The Promised Neverland",
    aliases: ["Yakusoku no Neverland"],
    category: [
      "Aventure",
      "Drame",
      "Thriller",
      "Mystère",
      "Psychologique",
      "Surnaturel",
      "Science-fiction",
      "Fantasy",
    ],
    synopsis:
      "Emma et ses amis, tous orphelins, ont été placés dans un établissement spécialisé lorsqu'ils étaient tout jeune. Bien que leur liberté soit limitée et que les règles soient parfois un peu strictes, ils mènent une vie agréable tous ensemble et la femme qui s'occupe d'eux est généreuse. Cependant, une question anime Emma et tous les autres : pourquoi n'ont-ils pas le droit de sortir de l'orphelinat ?",
    options: new ThePromisedNeverland(),
  },
  {
    anime: "Neon Genesis Evangelion",
    aliases: ["Shinseiki Evangelion", "NGE"],
    category: ["Science-fiction", "Psychologique"],
    synopsis:
      "En 2000, une gigantesque explosion se produit en Antarctique, provoquant un cataclysme (raz-de-marée, fonte des calottes polaires) qui dévaste une grande partie de la planète. Les autorités déclarent que cette catastrophe était due à la chute d'un astéroïde sur la planète. Quinze ans plus tard, l'humanité a surmonté cet événement, appelé le Second Impact. Mais de mystérieuses créatures nommées Anges font leur apparition, et tentent de détruire Tokyo-3, la nouvelle capitale forteresse du Japon, construite après le Second Impact. Pour les combattre, l'organisation secrète NERV a mis au point une arme ultime, l'Evangelion ou l'Eva, robot géant anthropoïde piloté. Shinji Ikari, quatorze ans, se rend à Tokyo-3 sur invitation de son père, qu'il n'a pas revu depuis dix ans. Il est loin de se douter qu'il sera impliqué dans un conflit qui pourrait bien signifier la fin de l'humanité quoi qu'il arrive...",
    options: new Evangelion(),
  },
  {
    anime: "Cowboy Bebop",
    category: ["Action", "Aventure", "Comédie", "Science-fiction"],
    options: new CowboyBebop(),
    synopsis:
      "L'histoire se déroule en l'an 2071, près de 50 ans après l'incident de la gate, et l'humanité s'est répandue à travers tout le système solaire grâce aux portes spatiales qu'elle a développé durant toutes ces années. Avec l'invention du MONO (Machine Operation Navigation of Outer space), les voyages interplanétaires se font de manière plus rapide, rendant les planètes distantes de la Terre comme Venus, mars ou encore Jupiter facilement accessibles, entraînant par la même occasion un trafic constant entre les différentes planètes et lunes du système solaire. Cowboy Bebop nous raconte les déboires de Spike et Jet, deux célibataires qui se sont associés dans la chasse aux hors-la-loi dont la tête est mise à prix. Tous les deux sans argent, ils sillonnent l'espace à bord du Bebop afin de renflouer leur compte en banque ainsi que leur frigo. Mais bientôt ils ne seront plus seuls car leurs chasses à l'homme les amèneront à croiser le chemin d'un chien intelligent, Ein, d'une belle brune, Faye et d'une jeune hackeur au comportement loufoque, Ed.",
  },
  {
    anime: "Kaguya-sama: Love is War",
    aliases: ["Kaguya-sama wa Kokurasetai: Ultra Romantic"],
    category: [
      "Comédie",
      "Romance",
      "Slice of Life",
      "School Life",
      "Psychologique",
    ],
    synopsis:
      "Kaguya Shinomiya, vice-présidente du conseil des élèves ne voit pas l'amour comme tout le monde. Pour elle, c'est un combat qu'elle doit livrer avec la personne dont elle est amoureuse, Miyuki Shirogane, qui n'est autre que le président du conseil des élèves et qui partage une vision de l'amour assez similaire. Bien que tous les deux éprouvent des sentiments réciproques, leur orgueil fait que le premier qui osera se déclarer devra alors se soumettre à l'autre...",
    options: new KaguyaSama(),
  },
  {
    anime: "Fruits Basket",
    category: ["Romance", "Fantasy", "Drame", "Comédie"],
    aliases: ["Furuba"],
    synopsis:
      "Tohru Honda, récemment orpheline, choisit de vivre dans une tente sur un terrain vague plutôt que de déranger ses amies Arisa Uotani et Saki Hanajima, tandis que son grand-père rénove sa maison. Ce terrain s'avère appartenir à la famille Sôma, où vit Shigure Sôma avec son neveu Yuki, un camarade de classe distant de Tohru. Après un glissement de terrain qui détruit sa tente, Tohru est accueillie chez les Sôma en échange d'aide domestique. Peu après son arrivée, Tohru est témoin d'une altercation entre Yuki et un jeune homme aux cheveux oranges, Kyô, qui se transforme en chat lorsqu'elle le touche. Elle découvre alors le secret des Sôma : certains membres de la famille sont possédés par les esprits des 12 animaux du zodiaque chinois, plus le chat, exclu de la légende originale. Tohru a ainsi rencontré le rat (Yuki), le chien (Shigure), et le chat (Kyô). Intriguée, elle se demande quels autres membres de la famille partagent cette malédiction.",
    options: new FruitsBasket(),
  },
  {
    anime: "Clannad: After Story",
    category: ["Drame", "Comédie", "Romance"],
    options: new Clannad(),
    synopsis:
      "Clannad After Story est la suite de la série Clannad. Cependant, elle ne reprend pas la même histoire et la même fin que le film. Il ne reste que quelques mois avant la fin du lycée pour Tomoya Okazaki et ses amis. En couple avec Nagisa Furukawa, il vit toujours chez cette dernière, mais souhaite songer à un avenir afin d'éviter de devenir un poids pour les parents de sa petite amie.",
  },
  {
    anime: "Les Carnets de l'Apothicaire",
    aliases: [
      "Kusuriya no Hitorigoto",
      "The Apothecary Diaries",
      "The Pharmacist's Monologue",
      "Drugstore Soliloquy",
    ],
    category: ["Drame", "Mystère", "Romance"],
    options: new LesCarnetsDeLapothicaire(),
    synopsis:
      "À 17 ans, Mao Mao a une vie compliquée. Formée dès son jeune âge par un apothicaire du quartier des plaisirs, elle se retrouve enlevée et vendue comme servante dans le quartier des femmes du palais impérial ! Entouré de hauts murs, il est coupé du monde extérieur. Afin de survivre dans cette prison de luxe grouillant de complots et de basses manœuvres, la jeune fille tente de cacher ses connaissances pour se fondre dans la masse. Mais, quand les morts suspectes de princes nouveau-nés mettent la cour en émoi, sa passion pour les poisons prend le dessus. Elle observe, enquête... et trouve la solution ! En voulant bien faire, la voilà repérée... Jinshi, haut fonctionnaire aussi beau que calculateur, devine son talent et la promeut goûteuse personnelle d'une des favorites de l'empereur. Au beau milieu de ce nid de serpents, le moindre faux pas peut lui être fatal !",
  },
  {
    anime: "March Comes in like a Lion",
    aliases: ["3-gatsu no Lion", "Sangatsu no Lion"],
    category: ["Drame", "Slice of Life"],
    synopsis:
      "Rei Kiriyama est un jeune homme de dix-sept ans au caractère pour le moins marginal : calme et réservé, celui-ci n'a ni famille ni ami et, contrairement aux autres garçons de son âge, il ne va pas à l'école. Vivant à Tokyo, il est un très bon joueur de shogi et peut au moins compter sur une personne : Akari Kawamoto, une jeune célibataire qui s'occupe de ses deux petites sœurs, Hinata et Momo.",
    options: new MarchComesinLikeaLion(),
  },
  {
    anime: "The Dangers in My Heart",
    aliases: ["Boku no Kokoro no Yabai Yatsu"],
    category: ["Comédie", "Romance", "Slice of Life"],
    synopsis:
      "Kyôtarô Ichikawa est un garçon qui pense être secrètement le personnage principal torturé d'un thriller psychologique. Il passe ses journées à observer ses camarades de classe et en particulier Anna Yamada, l'idole de la classe, qui est la personne qu'il veut le plus tuer. Mais Kyôtarô est loin d'être l'adolescent perturbé qu'il prétend être et il s'avère qu'Anna est elle-même un peu bizarre !",
    options: new TheDangersInMyHeart(),
  },
  {
    anime: "Kaiju N°8",
    aliases: ["Monster 8"],
    category: ["Aventure", "Science-fiction"],
    synopsis:
      "Les kaiju sont d'effroyables monstres géants qui surgissent de nulle part pour attaquer la population. Au Japon, ces apparitions font désormais partie du quotidien. Enfant, Kafka Hibino rêvait d'intégrer les Forces de Défense pour combattre ces terribles ennemis, mais après de nombreux échecs à l'examen d'entrée, ce trentenaire travaille à nettoyer les rues de leurs encombrants cadavres. Jusqu'au jour où une mystérieuse créature s'introduit dans son organisme et le métamorphose en une entité surpuissante mi-humaine, mi-kaiju. Son nouveau nom de code : \"Kaiju n° 8\" !",
    options: new KaijuN8(),
  },
  {
    anime: "Violet Evergarden",
    category: ["Drame", "Psychologique", "Romance", "Slice of Life"],
    synopsis:
      "Basé sur le roman Violet Evergarden de Akatsuki Kana. La guerre opposant Leidenschaftreich à l'Empire Gardarik a finalement pris fin après quatre longues années de conflit. Violet, une jeune fille formée dans le seul but de décimer les lignes ennemies, est hospitalisée suite à une violente opération. Après avoir tout perdu, elle se raccroche aux derniers mots du Major, son supérieur hiérarchique, mais sans comprendre leur signification. Se remettant de ses blessures, Violet est adoptée par la famille Evergarden mais ne se sentant pas à l'aise dans sa famille d'adoption, elle décide de commencer une nouvelle vie à CH Postal, une entreprise postale. Un jour, elle assiste par pur hasard au travail d'une «poupée de souvenirs automatiques», une personne qui retranscrit les pensées et les sentiments d'autrui dans des lettres. Intéressée, Violet commence à travailler en tant que poupée de souvenirs automatiques, un métier qui va lui permettre d'aider ses clients et de comprendre les derniers mots de celui qu'elle aimait.",
    options: new VioletEvergarden(),
  },
  {
    anime: "Kingdom",
    category: ["Action", "Aventure", "Drame", "Historique"],
    options: new Kingdom(),
    synopsis:
      "Au sein du Royaume de Qin vivent deux orphelins, Hyo et Shin. Au beau milieu des champs de bataille, les deux frères espèrent un jour qu'eux aussi, ils pourront servir leur royaume en combattant aux côtés des soldats qu'ils admirent. Alors qu'un jour, les deux orphelins se trouvent séparés, Shin décide de poursuivre son chemin pour devenir un grand général.",
  },
  {
    anime: "Parasite",
    aliases: ["Kiseijuu: Sei no Kakuritsu", "the maxime"],
    category: ["Science-fiction", "Horreur", "Thriller"],
    options: new Parasite(),
    synopsis:
      "Depuis des milliers d'années, l'Homme se trouve au sommet de la chaîne alimentaire. Jusqu'à ce jour où de mystérieuses sphères, abritant d'étranges parasites, se répandent un peu partout sur Terre. Rapidement, les entités prennent possession de certains habitants. Nul ne sait d'où elles viennent, mais ce qui semble certain, c'est qu'elles sont là pour débarrasser le monde de l'espèce humaine. Shinichi, jeune lycéen, est un « hôte » dont le cerveau a miraculeusement été épargné : et pour cause, Migi, son parasite, a pris possession de son bras droit ! Ce cas exceptionnel va déboucher sur une singulière cohabitation. Car au-delà de la fusion physique opérée entre Migi et Shinichi, qui partagent désormais le même corps et la même vie, va se développer un lien d'attachement particulier où les deux êtres vont apprendre chacun l'un de l'autre. Alors que Shinichi se découvre doté d'incroyables facultés physiques, il prend aussi conscience de la menace qui plane sur ses proches... et sur l'humanité tout entière.",
  },
  {
    anime: "Super Dragon Ball Heroes",
    aliases: ["sdbh"],
    category: ["Hors Series"],
    options: new SuperDragonBallHeroes(),
    synopsis:
      "Trunks est retenu prisonnier sur la Planète Prison. Gokû et Vegeta se rendent sur place, mais pour le libérer ils devront réunir les sept boules de cristal, chacune détenue par un guerrier surpuissant.",
  },
  {
    anime: "Yatagarasu",
    aliases: [
      "Karasu wa Aruji wo Erabanai",
      "The Raven Does Not Choose Its Master",
      "The Crow Does Not Choose the Lord",
    ],
    category: [
      "Surnaturel",
      "Drame",
      "Historique",
      "Fantasy",
      "Nouvelles saisons",
    ],
    options: new Yatagarasu(),
    synopsis:
      "Le monde alternatif de Yamauchi est gouverné par le clan Yatagarasu, dont les membres ont la faculté de se transformer en corbeaux. Yukiya, jeune membre du clan, est un jour choisi pour servir le prince. Entre complots et lutte de pouvoir, les deux garçons nouent une étroite amitié.",
  },
  {
    anime: "Dr. Stone",
    synopsis:
      "Un jour, une lumière éclaira la Terre, changeant tous les humains en pierre. Ainsi, l'humanité s'éteignit. Plusieurs millénaires plus tard, Taiju parvient à s'échapper de son enveloppe de pierre pour découvrir un monde dans lequel la nature a repris ses droits. Avec son ami Senku, ils décident de tout mettre en œuvres pour faire renaître l'humanité de ses cendres et survivre.",
    options: new DrStone(),
    category: ["Aventure", "Science-fiction", "Fantastique"],
  },
  {
    anime: "Made in Abyss",
    category: [
      "Action",
      "Aventure",
      "Fantasy",
      "Drame",
      "Mystère",
      "Surnaturel",
    ],
    synopsis:
      "\"Abyss\", un lieu intriguant et nimbé de mystère. Un trou béant, seul lieu inexploré du monde. Un endroit fascinant et dangereux. Riko, jeune orpheline, a grandi dans une petite ville située au bord du gouffre tout en rêvant de devenir exploratrice, comme sa mère. Un jour, alors qu'elle explore le premier niveau de l'Abyss, elle rencontre un étrange robot qui ressemble à s'y méprendre à un être humain.",
    options: new MadeInAbyss(),
  },
  {
    anime: "Rainbow",
    aliases: [
      "Nisha Rokubou no Shichinin",
      "Criminal Seven of Compound Two Cell Six",
    ],
    options: new Rainbow(),
    category: ["Historique", "Thriller", "Psychologique", "Drame"],
    synopsis:
      "Japon 1955, 10 ans après la seconde guerre mondiale, la pauvreté et la criminalité augmente à très grande vitesse, causant d'énormes dégâts à la société ! Cette série raconte l'histoire de sept détenus mineurs incarcérés dans une maison de redressement pour divers crimes, braquages, violences, meurtres... Il seront tout les sept confrontés à un monde de violence sans pitié et d'humiliation, ces derniers n'attendront qu'une seule chose... Une lueur d'espoir qui pourrait les guider tout droit vers la sortie de cet enfer carcéral !",
  },
  {
    anime: "Viral Hit",
    aliases: ["Ssaumdokhak", "Kenka Dokugaku"],
    category: [
      "School Life",
      "Action",
      "Arts Martiaux",
      "Drame",
      "Nouvelles saisons",
      "Webtoon",
    ],
    synopsis:
      "Le lycéen tout maigre et fragile Yoo Ho Bin est probablement le dernier gars qu'on s'attendrait à voir sur une chaîne Newtube qui tourne autour des combats. Mais après avoir suivi les conseils d'une mystérieuse chaîne Newtube, Ho Bin assomme des gars plus forts que lui et engrange plus d'argent qu'il n'aurait jamais pu rêver. Ho Bin pourra-t-il continuer comme ça ou finira-t-il par rencontrer son égal ?",
    options: new ViralHit(),
  },
  {
    anime: "Saint Seiya",
    aliases: ["Les Chevaliers du Zodiaque", "Knights of the Zodiac"],
    synopsis:
      "On raconte que quand les forces du mal veulent dominer la planète, Athéna et ses vaillants guerriers se dresseront contre l'envahisseur. Ces guerriers s'appellent les Saints (Chevaliers en VF), de leurs poings, ils pouvaient pourfendre le ciel et de leurs pieds, entrouvrir la terre. Aujourd'hui encore, la planète est la proie des forces maléfiques. Pour se préparer à lutter, la déesse Athéna se réincarne sous les traits de Saori Kido accompagnée des chevaliers de Bronze recueillis par son défunt grand-père : Seiya de Pégase de Grèce, Shiryu du Dragon des cinq Pics en Chine, Hyoga du Cygne de Sibérie, Shun d'Andromède de l'Ile d'Andromède et Ikki du Phénix de l'île de la Reine Morte et frère aîné de Shun.",
    category: ["Action", "Aventure", "Fantasy", "Science-fiction"],
    options: new SaintSeiya(),
  },
  {
    anime: "Black Lagoon",
    category: ["Action", "Drame", "Comédie"],
    synopsis: `Okajima Rokuro, surnommé Rock, est un jeune employé d'une firme Japonaise : Asahi Industrial. Il y mène une vie monotone. Cependant, sa vie d'employé va soudainement basculer lorsqu'il sera pris en otage par l'équipage du Black Lagoon, qui sont là pour lui prendre la disquette dont il était responsable.
    Rock sera abandonné par ses patrons, il décidera de se joindre à l'équipage en tant que matelot.
    C'est ainsi que Rock, rejoint Revy, Dutch et Benny.`,
    options: new BlackLagoon(),
  },
  {
    anime: "Black Butler",
    category: ["Drame", "Historique", "Psychologique", "Surnaturel"],
    aliases: ["Kuroshitsuji"],
    synopsis:
      "Lorsqu'on le regarde au début, ce manoir perdu dans la campagne de Londres parait tout à fait normal. Mais ce manoir est habité par des personnes pour le moins étranges : Ciel Phantomhive (Funtomhive) jeune maître de 12 ans, industriel hors-pair à la tête de la famille la plus redoutée de l'Angleterre ; un majordome démoniaque, Sebastian Michaelis, doué pour les tâches ménagères comme pour les arts-martiaux ; un maître d'hôtel, Tanaka, qui ne sait rien faire d'autre que boire du saké et dire \"oh oh oh\" ; un cuisinier aux plats douteux, Bard, ne sachant cuisiner sa viande qu'au lance-flammes ; une servante, May Lin, tellement maladroite qu'elle pourrait vous tuer sans le vouloir ; et un jardinier, Finnian, à la force surhumaine, qui se croit à démolition land qui ne sait donc entretenir un jardin qu'en le dévastant. Et lorsque tout ce petit monde a affaire à des personnages aussi peu recommandable que Jack L'éventreur, forcément, ça fait tâche...",
    options: new BlackButler(),
  },
  {
    anime: "Food Wars",
    aliases: ["Shokugeki no Soma"],
    category: ["Comédie", "Romance", "School Life"],
    synopsis:
      "Sôma Yukihira, 15 ans, rêve de surpasser son père Jôichirô, cuisinier de talent, et de reprendre le petit restaurant familial. Pour lui, son avenir est tout tracé : dès qu'il terminera sa dernière année de collège, il s'investira à plein temps dans le restaurant. Malheureusement, son père en décide autrement lorsqu'il accepte un travail à New York, dans un grand hôtel. Avant de partir, il oriente Sôma vers un prestigieux lycée, qui forme les meilleurs cuisiniers du Japon. Mais l'établissement est réputé extrêmement difficile et seuls 10% des élèves réussissent à y obtenir un diplôme. Mais Sôma, motivé par son père, a bien l'intention de faire partie des meilleurs.",
    options: new FoodWars(),
  },
  {
    anime: "Suicide Squad Isekai",
    category: ["Action", "Isekai"],
    synopsis:
      "Dans la ville de Gotham rongée par le crime, Amanda Waller, cheffe de l'A.R.G.U.S., a rassemblé un groupe de criminels notoires pour une mission : Harley Quinn, Deadshot, Peacemaker, Gueule d'argile et King Shark. Ces super-vilains sont envoyés dans un autre monde relié au nôtre par une porte. À cause des puces explosives plantées dans leur cou, ils ne peuvent ni s'enfuir, ni se cacher et échouer à la mission signifie un aller simple pour l'au-delà ! Harley Quinn et son équipe parviendront-ils à conquérir ce nouveau monde ?",
    options: new SuicideSquadIsekai(),
  },
  {
    anime: "Berserk",
    category: ["Aventure", "Fantastique", "Horreur", "Tragique", "Historique"],
    synopsis:
      "Dans un monde médiéval et marqué par un passé difficile, erre un mercenaire solitaire nommé Guts, décidé à être seul maître de son destin. Autrefois contraint par un pari perdu à rejoindre les Faucons, une troupe de mercenaires dirigés par Griffith, Guts fut acteur de nombreux combats sanglants et témoin de sombres intrigues politiques. Mais il réalisa soudain que la fatalité n'existe pas et qu'il pouvait reprendre sa liberté s'il le désirait vraiment... Mais un mal le traque sans relâche.",
    options: new Berserk(),
    aliases: ["The Prototype"],
  },
  {
    anime: "Grand Blue",
    category: ["Comédie", "School Life", "Slice of Life"],
    aliases: ["Dreaming"],
    synopsis:
      "L'histoire se centre sur Kitahara Iori qui vient de déménager de son plein gré dans la ville côtière d'Izu. Durant son temps libre, il travaille dans la boutique de plongée de son oncle où des étudiants à l'université, passionnés de plongée, y traînent. Il découvre qu'à l'université on passe plus de temps à draguer les filles et à s'amuser avec ses amis plutôt qu'à étudier. Ainsi, un nouveau chapitre de sa vie s'est ouvert, rempli de plongée avec de jolies femmes.",
    options: new GrandBlue(),
  },
  {
    anime: "Prison School",
    category: ["Comédie", "Ecchi", "Romance", "School Life"],
    options: new PrisonSchool(),
    aliases: ["Kangoku Gakuen"],
    synopsis:
      "Le lycée Hachimitsu est réputé pour être un des plus sévères du pays. Jusqu'à cette année, il était réservé aux filles, mais les garçons y sont désormais autorisés. Seulement, comme c'est l'année-test, ils ne sont que cinq dans tout l'établissement ! Kiyoshi est l'un d'eux. Il est particulièrement timide mais cherche à discuter avec des filles. Dès le premier jour, il fait connaissance avec Chiyo car la jeune fille est amatrice de sumo, tout comme lui. Mais à peine ont-ils lié amitié que ses quatre camarades garçons décident d'aller espionner les filles aux bains ! Kiyoshi acceptera-il de les accompagner, au risque de perdre la confiance de son amie ?",
  },
  {
    anime: "Gleipnir",
    category: [
      "Action",
      "Comédie",
      "Drame",
      "Ecchi",
      "Mystère",
      "Psychologique",
      "Romance",
      "School Life",
      "Surnaturel",
      "Thriller",
    ],
    synopsis:
      "Shûichi Kagaya, un lycéen jusqu'ici sans histoires devient subitement capable de se transformer en un gigantesque 'monstre' aux capacités hors normes. Il sauve ainsi la vie de Claire coincée dans une maison en feu. Mais Claire découvre son secret et également qu'elle a la possibilité de se faufiler, par le biais d'une fermeture éclair, dans la mascotte incarnée par Shuîchi. Et si Shuîchi n'était pas le seul dans ce cas !? Qu'est-ce qui attend ces deux lycéens désormais liés par le destin !? Leur plus grand combat est sur le point de commencer !! Ne faisons plus qu'un... à la vie, à la mort !",
    options: new Gleipnir(),
  },
  {
    anime: "Devilman Crybaby",
    category: ["Action", "Aventure", "Drame", "Horreur", "Surnaturel"],
    options: new DevilmanCrybaby(),
    synopsis:
      "Les démons qui dominaient la Terre il y a longtemps ont vu leur monde détruit. De nos jours, Fudô Akira, un lycéen de faible constitution logeant chez son amie Makimura Miki voit revenir son ami d'enfance,Asuka Ryô, qui a découvert lors de son séjour en Amérique que les démons agissent toujours dans l'ombre et se sont infiltrés dans la société humaine.Ce dernier lui demande de l'aider à les combattre et il va alors fusionner avec Amon, un démon, et ainsi devenir Devilman, l'homme-démon. S'ensuit alors des combats incessants et sanglants où démons et humains montreront les pires facettes de leurs personnalités.",
  },
  {
    anime: "91 Days",
    category: [
      "Action",
      "Drame",
      "Historique",
      "Mystère",
      "Psychologique",
      "Thriller",
    ],
    options: new d91Days(),
    synopsis:
      "L'histoire se déroule aux États-Unis, en pleine prohibition. La mafia est alors une puissante organisation à laquelle il ne vaut mieux pas se frotter. Pourtant, Avilio décide d'affronter cette organisation gigantesque dans le seul et unique but de venger sa famille assassinée. Sa cible ? Le groupe pour lequel travaillait son père autrefois.",
  },
  {
    anime: "Vivy: Fluorite Eye's Song",
    category: ["Action", "Drame", "Mystère", "Science-fiction"],
    options: new Vivy(),
    synopsis:
      "'NiaLand' est parc d'attraction à thème sur l'intelligence artificielle où se mêlent rêves, espoirs et science. Vivy, la première IA humanoïde autonome jamais créée, travaille au parc et continue de monter sur scène tous les jours pour chanter. Cependant, cette dernière est loin d'être aussi populaire que prévu.. Vivy a pour mission de rendre tout le monde heureux en chantant. Afin de remplir sa mission, elle continue de chanter avec l'objectif de se tenir un jour sur la scène principale du parc. Un jour, Vivy fait la rencontre d'une IA qui se fait appeler Matsumoto. Ce dernier prétend être une IA venant de 100 ans dans le futur et que sa mission est de travailler avec Vivy pour changer l'histoire afin d'empêcher la guerre entre les IA et les humains qui aura lieu dans 100 ans. Comment la rencontre entre deux IA ayant des objectifs différents va-t-elle changer l'avenir ?",
  },
  {
    anime: "Japan Sinks 2020",
    aliases: ["Nihon Chinbotsu 2020", "La Submersion du Japon"],
    category: ["Action", "Drame", "Science-fiction"],
    synopsis:
      "Peu de temps après Tokyo 2020, un séisme d'une rare gravité touche le Japon, poussant inexorablement le pays vers sa chute. Au milieu du chaos, Ayumu et Gou, les enfants de la famille Mutou, commencent à fuir la ville avec leur famille de quatre personnes. Face à la catastrophe, assistant aux dernières heures de l'Archipel, les enfants vont devoir affronter des conditions extrêmes et souvent se retrouver à devoir faire des choix cornéliens pour survivre. Mais le plus important pour eux, sera de toujours rester ensemble.",
    options: new JapanSinks(),
  },
  {
    anime: "Ranking of Kings",
    aliases: ["Ousama Ranking", "King Ranking"],
    category: ["Action", "Aventure", "Comédie", "Drame", "Fantasy"],
    synopsis:
      "Le royaume de Boss est en péril. Son fondateur, connu pour sa force herculéenne, est gravement malade, et l'héritier, le jeune prince Bojji, est loin d'avoir le profil pour prendre sa place... Sourd et muet, d'une faiblesse telle qu'il est incapable de manier l'épée, il est la cible de toutes les moqueries, du chevalier au paysan ! S'il accède au trône, le pays est promis à la déchéance dans le classement des rois, dont le principal critère est la puissance des souverains. De ce point de vue, c'est le prince cadet, Daida, qui remporte le soutien populaire... Pourtant, Bojji arbore un éternel sourire. Même quand une mystérieuse ombre lui ordonne de lui donner ses vêtements, il s'exécute avec plaisir ! Car, pour la première fois de sa vie, le garçon trouve un partenaire de conversation. Cet étrange voleur comprend ses paroles... Bojji lui dévoile alors son rêve : devenir le meilleur roi du monde !",
    options: new RankingOfKings(),
  },
  {
    anime: "Barakamon",
    category: ["Comédie", "Slice of Life"],
    synopsis:
      "Seishuu Handa, calligraphe de talent, est envoyé sur une île en pleine campagne pour avoir littéralement mis une gifle à un directeur d'exposition, non-content de ses œuvres. Alors qu'il traîne des pieds pour y aller, il finit par s'attacher petit à petit aux villageois : enfants, parents, grands-parents... tous ont une histoire à raconter et une expérience à apporter à Seishuu.",
    options: new Barakamon(),
  },
  {
    anime: "Death Parade",
    category: ["Drame", "Mystère", "Psychologique"],
    options: new DeathParade(),
    synopsis:
      "L'histoire débute avec l'arrivée de deux personnages, Takashi et Machiko, dans un bar étrange. Ils ne se souviennent même pas comment ils sont arrivés ici, et le maître des lieux, Decim, ne répond quasiment pas à leurs questions, leur imposant de jouer à un jeu. N'ayant pas d'autre choix, les voici entraînés dans une suite d'événements inattendus qui devraient révéler leur vraie nature que Decim jugera en conséquence. 'Bienvenue au Quindecim'",
  },
  {
    anime: "Rakudai Kishi no Cavalry",
    aliases: ["Chivalry of a Failed Knight", "Rakudai Kishi no Eiyuutan"],
    category: [
      "Action",
      "Drame",
      "Ecchi",
      "Fantasy",
      "Romance",
      "School Life",
      "Surnaturel",
    ],
    options: new RakudaiKishi(),
    synopsis:
      "Au sein de l'académie japonaise Hagune, les élèves sont répertoriés et classés selon leur aptitude au combat ainsi que leur niveau d'escrime. Kurogane Ikki est un chevalier-mage novice ne jouissant d'aucun talent particulier. Il est en outre l'un des élèves les plus faibles de l'académie bien qu'il soit issu d'un illustre clan dont la réputation n'est plus à faire. Malgré ses mauvaises notes et son faible rang, notre héros n'a jamais renoncé à ses rêves et espère bien un jour siéger sur la plus haute marche du podium des chevaliers-mages. La vie d'Ikki bascule du tout ou tout lorsqu'il est affecté au même dortoir que Stella Vermillon, une princesse dirigeant un modeste royaume situé en Europe. Belle, talentueuse et sérieuse, Stella est tout le contraire d'Ikki : elle est née avec un talent inné et nul ne peut l'égaler au combat. Qui plus est, elle est classée dans les meilleurs élèves de l'académie. En la personne de Stella, notre héros trouvera tout d'abord une rivale mais également une alliée, une partenaire de choc qui visiblement le poussera à se surpasser au plus haut niveau. Déterminés à remporter le tournoi réunissant les sept académies de magie les plus prestigieuses du pays, Ikki et Stella vont dès lors s'entrainer rigoureusement afin d'être sélectionnés. Seront-ils en mesure d'atteindre leur objectif ?",
  },
  {
    anime: "Tensei Shitara Slime Datta Ken",
    aliases: [
      "Moi, quand je me réincarne en Slime",
      "That Time I Got Reincarnated as a Slime",
      "Regarding Reincarnated to Slime",
      "Tensura",
    ],
    category: ["Action", "Aventure", "Comédie", "Drame", "Fantasy", "Isekai"],
    options: new TenseiShitara(),
    synopsis:
      "Satoru, employé de bureau lambda, se fait assassiner par un criminel en pleine rue. Son histoire aurait dû s'arrêter là, mais il se retrouve soudain réincarné dans un autre monde sous la forme d'un Slime, le monstre le plus faible du bestiaire fantastique. Son nouveau corps est équipé de deux compétences uniques : « Prédateur », lui permettant de récupérer les aptitudes de ses adversaires, et « Grand sage », grâce à laquelle il acquiert une compréhension aigüe de son environnement. Mais même muni de ces armes, ses chances de survie semblent encore limitées...",
  },
];

interface AnimeOption {
  anime: string;
  category: string[];
}

export interface GroupedAnimes {
  names: string[];
  category: string;
}

const rng = seedrandom("fix");

export const groupAnimesByCategory = (
  animes: AnimeOption[],
  length: boolean,
): GroupedAnimes[] => {
  const grouped: { [key: string]: string[] } = {};

  animes.forEach(({ anime, category }) => {
    category.forEach((category) => {
      if (!grouped[category]) grouped[category] = [];

      if (!grouped[category].includes(anime)) {
        if ((length && grouped[category].length < 10) || !length)
          grouped[category].push(anime);
      }
    });
  });

  for (const category in grouped) {
    grouped[category].sort(() => rng() - 0.5);
  }

  return Object.keys(grouped).map((category) => ({
    names: grouped[category],
    category: category,
  }));
};
