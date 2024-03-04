const names = [
  {
    index: "1",
    name: "Une récompense pour la paix. À qui reviennent les 100 millions de Zenis ?",
  },
  {
    index: "2",
    name: "Une promesse, c’est une promesse. Des vacances en famille pour Vegeta",
  },
  {
    index: "3",
    name: "Quelle est la suite du rêve, déjà ? À la recherche du Super Saïyen Divin !",
  },
  {
    index: "4",
    name: "À la poursuite des Dragon Balls ! Le Plan d’attaque de la bande à Pilaf",
  },
  {
    index: "5",
    name: "Duel chez Maître Kaio ! Goku contre Beerus, le dieu de la destruction !",
  },
  {
    index: "6",
    name: "Il ne faut pas énerver le dieu de la destruction ! Un anniversaire sous tension",
  },
  {
    index: "7",
    name: "Touche pas à ma Bulma ! La Transformation enragée de Vegeta",
  },
  {
    index: "8",
    name: "L’Arrivée de Son Goku ! Beerus accorde une dernière chance ?",
  },
  {
    index: "9",
    name: "Merci d’avoir patienté, seigneur Beerus ! Le Super Saïyen Divin est enfin parmi nous !",
  },
  {
    index: "10",
    name: "Son Goku ! Montre-nous la puissance du Super Saïyen Divin !",
  },
  {
    index: "11",
    name: "Seigneur Beerus, continuons le combat des dieux !",
  },
  {
    index: "12",
    name: "L’univers s’effondre ? L’affrontement dégénère !",
  },
  {
    index: "13",
    name: "Goku, dépasse le Super Saïyen Divin qui est en toi !",
  },
  {
    index: "14",
    name: "Je vais tout donner ! La Fin du combat des dieux !",
  },
  {
    index: "15",
    name: "Les Miracles de Satan ! Le Défi venu de l’espace",
  },
  {
    index: "16",
    name: "Vegeta devient disciple. À la conquête de Whis !",
  },
  {
    index: "17",
    name: "La petite Pan est née ! Goku s’en va pour suivre un entraînement ?",
  },
  {
    index: "18",
    name: "Vegeta, me voilà ! L’entraînement commence sur la planète de Beerus !",
  },
  {
    index: "19",
    name: "Le Retour de la terreur ! Freezer, l’empereur du mal, renaît !",
  },
  {
    index: "20",
    name: "L’Avertissement de Jaco ! Freezer et ses mille soldats à l’approche",
  },
  {
    index: "21",
    name: "L’heure de la vengeance a sonné ! Les Soldats de Freezer contre Gohan !",
  },
  {
    index: "22",
    name: "L’Incroyable Permutation ! Le Retour inattendu de Ginyu !",
  },
  {
    index: "23",
    name: "La Terre ! Gohan ! Une situation désespérée ! Goku, reviens vite !",
  },
  {
    index: "24",
    name: "Freezer contre Goku ! Voilà le résultat de mon entraînement !",
  },
  {
    index: "25",
    name: "Un combat explosif ! La Revanche de Golden Freezer",
  },
  {
    index: "26",
    name: "Il doit bien y avoir un moyen de se sortir de là ! Goku contre-attaque !",
  },
  {
    index: "27",
    name: "La Terre explose ? Le Kâmé hâmé hâ décisif",
  },
  {
    index: "28",
    name: "Le Dieu de la destruction de l’univers 6. Champa !",
  },
  {
    index: "29",
    name: "Le Grand Tournoi d’arts martiaux ! Le Capitaine bien plus fort que Goku !",
  },
  {
    index: "30",
    name: "Le recrutement commence. Qui seront les deux derniers membres de l’équipe ?",
  },
  {
    index: "31",
    name: "Rencontre avec le seigneur Zuno ! À la recherche des Super Dragon Balls !",
  },
  {
    index: "32",
    name: "Le tournoi commence. Direction la Planète Sans Nom !",
  },
  {
    index: "33",
    name: "Surprise pour l’univers 6 ! Voici Goku, le Super Saïyen",
  },
  {
    index: "34",
    name: "Piccolo contre Frost. On mise tout sur le rayon maléfique !",
  },
  {
    index: "35",
    name: "De la colère naît la puissance ! Vegeta se lance à corps perdu dans la bataille.",
  },
  {
    index: "36",
    name: "Un combat plus difficile que prévu ! Explosion de colère de Vegeta !",
  },
  {
    index: "37",
    name: "N’oublie pas la fierté des Saïyens ! Vegeta contre Cabba",
  },
  {
    index: "38",
    name: "L’Ultime Guerrier de l’univers 6. Un assassin nommé Hit !",
  },
  {
    index: "39",
    name: "La Contre-attaque de l’incroyable saut temporel ! La Nouvelle Technique de Goku.",
  },
  {
    index: "40",
    name: "La Fin du tournoi ! Mais qui a gagné, Beerus ou Champa ?",
  },
  {
    index: "41",
    name: "Viens à moi, Dragon Divin et réalise mon souhait, s’teplaît !",
  },
  {
    index: "42",
    name: "Une fête de la victoire mouvementée. L’AffrontemenMonaka contre Goku !",
  },
  {
    index: "43",
    name: "L’Énergie de Goku incontrôlable ! Difficile de s’occuper de Pan !",
  },
  {
    index: "44",
    name: "Le sceau de la planète Potofeu. Les secrets de l’eau surhumaine",
  },
  {
    index: "45",
    name: "Vegeta disparaît ? La menace du clone de Vegeta !",
  },
  {
    index: "46",
    name: "Goku contre le clone de Vegeta ! Mais qui va gagner ?",
  },
  {
    index: "47",
    name: "Un SOS venu du futur ! Un nouvel ennemi apparaît",
  },
  {
    index: "48",
    name: "L’espoir renaît ! Trunks de retour dans le présent",
  },
  {
    index: "49",
    name: "Un message venu du futur. L’Apparition de Black Goku !",
  },
  {
    index: "50",
    name: "Goku affronte Black ! Le Chemin vers un avenir déjà scellé",
  },
  {
    index: "51",
    name: "Des sentiments plus forts que le temps. Trunks et Mai !",
  },
  {
    index: "52",
    name: "Le Maître et l’Élève réunis. Son Gohan et Trunks du futur !",
  },
  {
    index: "53",
    name: "La Véritable Identité de Black révélée. En route pour la planète Kaio de l’univers dix !",
  },
  {
    index: "54",
    name: "L’Héritier des Saïyens. La Détermination de Trunks !",
  },
  {
    index: "55",
    name: "J’ai envie de revoir Son Goku. La Convocation du roi Zeno !",
  },
  {
    index: "56",
    name: "Deuxième manche contre Black Goku. Le Super Saïyen rosé entre en scène !",
  },
  {
    index: "57",
    name: "Le Dieu au corps invulnérable. L’Avènement de Zamasu",
  },
  {
    index: "58",
    name: "Zamasu et Black. Le mystère s’épaissit.",
  },
  {
    index: "59",
    name: "Protéger le dieu Kaio Gowasu. Détruire Zamasu !",
  },
  {
    index: "60",
    name: "Retour vers le futur. L’Identité de Black révélée !",
  },
  {
    index: "61",
    name: "La Folle Ambition de Zamasu. Le Sinistre Plan « Zéro mortel »",
  },
  {
    index: "62",
    name: "Je protégerai le monde. Trunks laisse exploser sa colère !",
  },
  {
    index: "63",
    name: "Ne pas déshonorer le sang Saïyen. La Démonstration de Vegeta !!",
  },
  {
    index: "64",
    name: "À genoux, mortels ! La Fusion de Zamasu et Black !",
  },
  {
    index: "65",
    name: "Serait-ce le jugement dernier ? Le Pouvoir du dieu suprême.",
  },
  {
    index: "66",
    name: "La Confrontation finale ! Le Miracle des guerriers qui n’abandonnent jamais.",
  },
  {
    index: "67",
    name: "Un nouvel espoir. Adieu, Trunks !",
  },
  {
    index: "68",
    name: "Apparaîs, grand Shenron ! Quel vœu vas-tu exaucer ?",
  },
  {
    index: "69",
    name: "Goku contre Aralé ! La Terre survivra-t-elle à ce combat absurde ?",
  },
  {
    index: "70",
    name: "Le Nouveau Défi de Champa ! Un match de baseball !",
  },
  {
    index: "71",
    name: "La Mort de Goku ! Hit exécute sa mission.",
  },
  {
    index: "72",
    name: "Y aura-t-il une contre-attaque ? La technique d’assassinat invisible !",
  },
  {
    index: "73",
    name: "La Mésaventure de Gohan ! Un film inattendu de Great Saïyaman.",
  },
  {
    index: "74",
    name: "Pour ceux qu’il aime ! L’Indomptable Great Saïyaman !",
  },
  {
    index: "75",
    name: "Goku et Krilin. Retour aux bonnes vieilles méthodes d’entraînement.",
  },
  {
    index: "76",
    name: "Vaincre de redoutables adversaires. L’esprit combatif de Krilin renaît !",
  },
  {
    index: "77",
    name: "Faisons-le, roi Zeno. Organisons le plus grand tournoi d’arts martiaux de l’univers !",
  },
  {
    index: "78",
    name: "Les Dieux sous le choc ? Le Tournoi du Pouvoir, où défaite rime avec destruction !",
  },
  {
    index: "79",
    name: "Basil la jambe leste de l’univers 9 contre Boo de l’univers 7 !",
  },
  {
    index: "80",
    name: "Réveille le guerrier qui sommeille en toi ! Le Combat de Son Gohan !",
  },
  {
    index: "81",
    name: "Bergamo l’écraseur contre Son Goku ! Qui possède le pouvoir illimité ?",
  },
  {
    index: "82",
    name: "Son Goku doit payer ! Toppo, le soldat de la justice, entre en scène !",
  },
  {
    index: "83",
    name: "Constituer l’équipe de l’univers 7 ! Qui seront les dix meilleurs ?",
  },
  {
    index: "84",
    name: "Son Goku, le chasseur de têtes. Une invitation pour Krilin et C-18",
  },
  {
    index: "85",
    name: "Chaque univers passe à l’action. Résoudre les problèmes",
  },
  {
    index: "86",
    name: "Premiers échanges de coups, C-17 contre Goku !",
  },
  {
    index: "87",
    name: "Chassons les chasseurs. Goku et C-17 unis pour se battre !",
  },
  {
    index: "88",
    name: "Piccolo entraîne Gohan. Le disciple pourra-t-il surpasser le maître ?",
  },
  {
    index: "89",
    name: "Une mystérieuse beauté apparaît. La Malédiction du dojo Ten Shin !",
  },
  {
    index: "90",
    name: "Dépasse toutes tes limites ! Goku contre Gohan",
  },
  {
    index: "91",
    name: "Quel univers survivra ? Les plus grands guerriers se rassemblent !",
  },
  {
    index: "92",
    name: "État de crise dans l’univers 7 ! Les 10 membres ne répondent pas tous à l’appel !",
  },
  {
    index: "93",
    name: "Le 10e, ce sera toi ! Goku tente de recruter Freezer !",
  },
  {
    index: "94",
    name: "L’Empereur du mal est de retour ! Des assassins énigmatiques se dressent sur sa route",
  },
  {
    index: "95",
    name: "Le Plus Cruel ! Le Plus Impitoyable ! Freezer se déchaîne !",
  },
  {
    index: "96",
    name: "L’heure a sonné ! Tous vers le monde du néant pour sauver l’univers !",
  },
  {
    index: "97",
    name: "Prêts à tout pour survivre ! Le Tournoi du Pouvoir débute enfin !",
  },
  {
    index: "98",
    name: "Le Temps de l’incertitude. Un univers désespéré !",
  },
  {
    index: "99",
    name: "Montre de quoi tu es capable ! Le Véritable Pouvoir de Krilin",
  },
  {
    index: "100",
    name: "Fureur sans limite ! Le Réveil d’une guerrière déchaînée !",
  },
  {
    index: "101",
    name: "La Menace des guerriers de la justice ! Place aux Pride Troopers !!",
  },
  {
    index: "102",
    name: "Le Pouvoir de l’amour jaillit ! Les Guerrières féeriques de l’univers 2.",
  },
  {
    index: "103",
    name: "Sois sans pitié, Gohan ! Combat décisif contre l’univers 10.",
  },
  {
    index: "104",
    name: "Une bataille à la vitesse de la lumière ! Goku et Hit unissent leurs forces.",
  },
  {
    index: "105",
    name: "Un combat acharné. Tortue Géniale s’enflamme pour la victoire !",
  },
  {
    index: "106",
    name: "Trouvez le sniper ! Affrontement fatal contre un adversaire invisible.",
  },
  {
    index: "107",
    name: "La Vengeance de ‘F’ ! Un piège machiavélique",
  },
  {
    index: "108",
    name: "Freezer et Frost. Un cocktail de perfidie !",
  },
  {
    index: "109",
    name: "Le plus puissant des guerriers attaque Goku ! Place au fatal orbe d’énergie !",
  },
  {
    index: "110",
    name: "L’Éveil de Son Goku. L’Ultra-Instinct de l’éveillé.",
  },
  {
    index: "111",
    name: "Le Combat extra-dimensionnel ultime ! Jiren contre Hit !",
  },
  {
    index: "112",
    name: "La Promesse d’un Saīyen ! La Détermination de Vegeta !",
  },
  {
    index: "113",
    name: "Avec plaisir ! Nouveau combat frénétique de Saīyens !",
  },
  {
    index: "114",
    name: "Au-delà des frontières du possible ! Un nouveau super guerrier voit le jour !",
  },
  {
    index: "115",
    name: "Goku contre Kefla ! Le Super Saīyen bleu connaîtra-t-il sa première défaite ?",
  },
  {
    index: "116",
    name: "Le vent tourne ! L’Ultra-Instinct détruit tout sur son passage !",
  },
  {
    index: "117",
    name: "L’amour vaincra-t-il ? Les Cyborgs contre l’univers 2 !",
  },
  {
    index: "118",
    name: "L’étau du destin se resserre. Des univers disparaissent.",
  },
  {
    index: "119",
    name: "Impossible à esquiver ? La Menace de l’attaque fantôme.",
  },
  {
    index: "120",
    name: "Une stratégie de survie parfaite. Les Redoutables Assassins de l’univers 3.",
  },
  {
    index: "121",
    name: "Guerre totale ! Offensive coordonnée de l’univers 7 contre la quadruple fusion de l’univers 3.",
  },
  {
    index: "122",
    name: "Avec la fierté pour seul enjeu ! Vegeta défie son plus puissant adversaire",
  },
  {
    index: "123",
    name: "Un esprit puissant dans un corps puissant ! Place à l’alliance de Goku et de Vegeta !",
  },
  {
    index: "124",
    name: "Un cyclone féroce s’abat sur l’arène ! L’Ultime Combat de Son Gohan",
  },
  {
    index: "125",
    name: "Grandiose ! L’Avènement du dieu de la destruction, Toppo",
  },
  {
    index: "126",
    name: "Surpasse les dieux ! L’Ultime Sacrifice de Vegeta",
  },
  {
    index: "127",
    name: "Un mur d’énergie se rapproche ! La Dernière Barrière de l’espoir",
  },
  {
    index: "128",
    name: "Noble fierté jusqu’au bout ! La Chute de Vegeta",
  },
  {
    index: "129",
    name: "Au-delà des limites ! L’Ultra-Instinct maîtrisé",
  },
  {
    index: "130",
    name: "La Plus Grande Confrontation de tous les temps ! L’Ultime Bataille pour la survie",
  },
  {
    index: "131",
    name: "Un dénouement miraculeux. Adieu, Goku ! Jusqu’à la prochaine fois !",
  },
];

export default names;
