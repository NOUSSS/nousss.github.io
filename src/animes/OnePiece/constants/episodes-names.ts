const episodes = [
  {
    index: "1",
    name: "Je suis Luffy ! Celui qui deviendra le Seigneur des Pirates",
  },
  {
    index: "2",
    name: "L’apparition du bretteur ! Roronoa Zoro le chasseur de Pirates !",
  },
  { index: "3", name: "Morgan vs Luffy ! Qui est cette jolie inconnue ?" },
  { index: "4", name: "Le passé de Luffy ! L’apparition de Shanks le roux" },
  {
    index: "5",
    name: "Le terrifiant pouvoir du Capitaine Baggy le Clown !",
  },
  {
    index: "6",
    name: "Situation désespérée ! Mohji le dresseur de fauves vs Luffy !",
  },
  {
    index: "7",
    name: "Grand affrontement ! Zoro le bretteur vs Cabaji l’acrobate !",
  },
  { index: "8", name: "Qui va gagner ? Le choc des pouvoirs du démon !" },
  { index: "9", name: "Menteur honorable ? Capitaine Usopp !" },
  {
    index: "10",
    name: "Le type le plus étrange du monde ! Jango l’hypnotiseur",
  },
  {
    index: "11",
    name: "La Conspiration révélée ! Le pirate majordome, Capitaine Kuro !",
  },
  {
    index: "12",
    name: "Bataille ! L’équipage du Capitaine Kuro ! Combat sur la pente !",
  },
  { index: "13", name: "Le duo terrifiant ! Les frères siamois vs Zoro !" },
  {
    index: "14",
    name: "La résurrection de Luffy ! La confrontation pour Kaya !",
  },
  { index: "15", name: "Battre Kuro ! La détermination d’Usopp !" },
  {
    index: "16",
    name: "Protéger Kaya ! Les pirates d’Usopp entrent en action !",
  },
  { index: "17", name: "Colère immense ! Kuro vs Luffy, le combat final !" },
  {
    index: "18",
    name: "Tu es un animal spécial ! Gaimon et ses fabuleux amis",
  },
  {
    index: "19",
    name: "Le passé des trois épées ! La promesse entre Zoro et Kuina !",
  },
  {
    index: "20",
    name: "Le fameux cuisinier ! Sanji et le navire-restaurant !",
  },
  {
    index: "21",
    name: "Un invité innatendu ! La cuisine de Sanji et la grâce de Gyn !",
  },
  {
    index: "22",
    name: "La plus grande flotte de pirates ! Le captaine Don Krieg !",
  },
  {
    index: "23",
    name: "Protéger le Baratie ! Le grand pirate Zeff aux pieds rouges !",
  },
  {
    index: "24",
    name: "Mihawk œil de faucon ! Zoro le bretteur tombe dans la mer !",
  },
  {
    index: "25",
    name: "Super technique de coups de pieds ! Sanji vs Pearl !",
  },
  { index: "26", name: "Le rêve de Zeff et Sanji ! All Blue" },
  {
    index: "27",
    name: "Le démon sans cœur ! Gyn, le commandant de la flotte pirate",
  },
  {
    index: "28",
    name: "Je ne mourrai pas ! Conclusion : Luffy vs Don Krieg !",
  },
  { index: "29", name: "La fin d’une bataille désespérée !" },
  { index: "30", name: "Départ ! Le chef cuisinier part avec Luffy !" },
  {
    index: "31",
    name: "L’homme le plus terrifiant d’Eastblue : l’homme-poisson Arlong !",
  },
  {
    index: "32",
    name: "La sorcière du village de Cocoyashi ! L’équipière d’Arlong",
  },
  { index: "33", name: "Usopp est-il mort ? Luffy n’a pas encore accosté ?" },
  { index: "34", name: "Réunis ! Usopp dit la vérité à propos de Nami" },
  { index: "35", name: "Le passé caché ! Belmer !" },
  { index: "36", name: "Survivre ! Belmer et Nami" },
  { index: "37", name: "Luffy se relève ! La fin de la promesse brisée !" },
  {
    index: "38",
    name: "Luffy en danger ! Les hommes-poissons vs l’équipage de Luffy !",
  },
  { index: "39", name: "Luffy coule ! Zoro vs Hatchan !" },
  { index: "40", name: "Difficile combat pour Sanji et Usopp !" },
  { index: "41", name: "Luffy fait de son mieux ! Le courage de Nami !" },
  { index: "42", name: "Eclatement ! L’attaque terrifiante d’Arlong !" },
  {
    index: "43",
    name: "La fin de l’empire des hommes poissons ! Nami est ma partenaire !",
  },
  {
    index: "44",
    name: "Lever les voiles avec le sourire ! Au revoir mon village natal, Cocoyashi !",
  },
  {
    index: "45",
    name: "Mise à prix ! Luffy au chapeau de paille devient célèbre !",
  },
  {
    index: "46",
    name: "C’est ce que vous attendiez ! Le retour de Buggy le clown !",
  },
  {
    index: "47",
    name: "Je t’aurai chapeau de paille ! Les aventures de Buggy rétréci !",
  },
  {
    index: "48",
    name: "La ville où tout commence et où tout finit : Logue Town",
  },
  {
    index: "49",
    name: "Sandai Kitetsu et Yubashiri ! Les nouvelles épées de Zoro !",
  },
  { index: "50", name: "Usopp vs Daddy the Father! Affrontement à midi !" },
  {
    index: "51",
    name: "Une bataille culinaire acharnée ? Sanji vs la jolie chef",
  },
  {
    index: "52",
    name: "La revanche de Buggy ! L’homme qui sourit sur la plateforme d’exécution !",
  },
  {
    index: "53",
    name: "La légende est née ! Direction la Route de tous les Périls !",
  },
  {
    index: "54",
    name: "Le pressentiment d’une nouvelle aventure ! Apis, la fillette énigmatique",
  },
  {
    index: "55",
    name: "La créature sacrée ! Le secret d’Apis et l’île légendaire",
  },
  {
    index: "56",
    name: "Le raid d’Erik ! La grande évasion de Gunkan Island !",
  },
  {
    index: "57",
    name: "L’île solitaire dans une mer lointaine ! La légendaire Île Perdue",
  },
  { index: "58", name: "Affrontement dans les ruines ! Zoro vs Erik !" },
  {
    index: "59",
    name: "Luffy, complétement encerclé ! Le plan secret de l’amiral Nelson",
  },
  {
    index: "60",
    name: "Celui qui vole à travers le ciel ! Une légende vieille de 1000 ans revit !",
  },
  { index: "61", name: "Fin de la colère ! Traverser Red Line !" },
  {
    index: "62",
    name: "Le premier obstacle ? La grande baleine Laboon apparait",
  },
  {
    index: "63",
    name: "La promesse d’un homme ! Luffy et la baleine jurent de se retrouver",
  },
  {
    index: "64",
    name: "Une ville aimant les pirates ? Arrivée à Whiskey Peak",
  },
  { index: "65", name: "Santouryu explosif ! Zoro vs Baroque Works !" },
  {
    index: "66",
    name: "Un combat sérieux ! Luffy vs Zoro : Le duel inattendu !",
  },
  {
    index: "67",
    name: "Escorter la princesse Vivi ! Le départ de l’équipage",
  },
  { index: "68", name: "Persévère Kobby ! Le journal de Kobby et d’Hermep" },
  {
    index: "69",
    name: "La détermination de Kobby et Hermep ! Le paternel vice-amiral Garp",
  },
  {
    index: "70",
    name: "L’île préhistorique ! L’ombre cachée dans Little Garden !",
  },
  {
    index: "71",
    name: "Une immense bataille ! Les géants Dorry et Broggy !",
  },
  {
    index: "72",
    name: "Luffy en colère ! Un sale tour pour un combat sacré",
  },
  {
    index: "73",
    name: "Broggy pleure dans la victoire ! Le jugement d’Elbaf",
  },
  {
    index: "74",
    name: "La bougie diabolique ! Larmes de regret et larmes de colère",
  },
  { index: "75", name: "Luffy attaqué par la magie ! Color Trap" },
  {
    index: "76",
    name: "Contre-attaque cruciale ! L’esprit vif d’Usopp et le Kaenboshi !",
  },
  { index: "77", name: "Au revoir l’île des géants ! Direction Alabasta" },
  {
    index: "78",
    name: "Nami est malade ? Au-delà de la neige qui tombe sur l’océan !",
  },
  { index: "79", name: "Ambuscade! Le Bliking et Wapol le glouton." },
  {
    index: "80",
    name: "Une île sans docteur ? Aventure dans une contrée sans nom !",
  },
  { index: "81", name: "Ça va ? Le docteur qui est appelé sorcière !" },
  {
    index: "82",
    name: "La résolution de Dalton ! Les forces de Wapol débarquent",
  },
  {
    index: "83",
    name: "L’île qui vit sous la neige ! L’ascension des Drum Rockies !",
  },
  { index: "84", name: "Le renne au nez bleu ! Le secret de Chopper" },
  { index: "85", name: "Le rêve du banni ! Hiluluk le charlatan" },
  {
    index: "86",
    name: "Les cerisiers d’Hiluluk et l’héritage d’une volonté",
  },
  {
    index: "87",
    name: "Le corps d’armée de Wapol ! Les capacités du fruit Baku Baku !",
  },
  {
    index: "88",
    name: "Un fruit du démon du type Zoan ! Les sept transformations de Chopper",
  },
  {
    index: "89",
    name: "Quand l’autorité du royaume disparait ! Le drapeau de la détermination flotte !",
  },
  {
    index: "90",
    name: "Les cerisiers d’Hiluluk ! Miracle sur les Drum Rockies",
  },
  { index: "91", name: "Au revoir, Drum Island ! Je m’en vais en mer !" },
  { index: "92", name: "Le héros d’Alabasta et la ballerine sur le navire" },
  {
    index: "93",
    name: "Arrivée au royaume désertique ! La poudre qui fait tomber la pluie et l’armée rebelle",
  },
  {
    index: "94",
    name: "Réunion des puissants ! Son nom est Ace aux Poings Ardents",
  },
  { index: "95", name: "Ace et Luffy ! Souvenirs chaleureux et fraternité" },
  { index: "96", name: "Erumalu la ville verte et les Kung-Fu Dugongs !" },
  {
    index: "97",
    name: "Aventure au pays du sable ! Un monstre vivant dans les terres brûlantes",
  },
  {
    index: "98",
    name: "L’apparition d’une flotte de pirates des sables ! Les hommes vivant librement",
  },
  { index: "99", name: "La fierté d’un bluffeur ! Camus, rebelle du cœur !" },
  {
    index: "100",
    name: "Kohza, guerrier de l’armée rebelle ! La promesse qu’il a fait à Vivi !",
  },
  { index: "101", name: "Duel dans les vagues de chaleur ! Ace vs Scorpion" },
  {
    index: "102",
    name: "Anciennes ruines et âmes perdues ! Vivi, les amis et la nation !",
  },
  {
    index: "103",
    name: "Les officiers enemis se rassemblent à 20:00 au Spider café",
  },
  {
    index: "104",
    name: "Luffy vs Vivi ! Serment de larmes, tes amis sont là !",
  },
  {
    index: "105",
    name: "La guerre d’Arabasta ! Rainbase, la cité des rêves",
  },
  {
    index: "106",
    name: "Le piège de la crise absolue ! Course vers Rain Dinners",
  },
  {
    index: "107",
    name: "L’opération Utopia commence ! Les rebelles sont en marche",
  },
  { index: "108", name: "Les terribles Banana-croco et Mister Prince" },
  {
    index: "109",
    name: "La clef du revirement et la fuite ! Dolu Dolu Ball !",
  },
  { index: "110", name: "Combat à mort ! Luffy vs Crocodile" },
  { index: "111", name: "Course vers un Miracle ! Les animaux d’Arabasta" },
  {
    index: "112",
    name: "L’armée rebelle vs l’armée royale ! La confrontation finale aura lieu à Alubarna !",
  },
  {
    index: "113",
    name: "La peine d’Alubarna ! Le fier capitaine combat au mieux !",
  },
  { index: "114", name: "La promesse ! Duel dans la taupinière de Mr 04" },
  {
    index: "115",
    name: "Aujourd’hui, c’est la grande représentation ! Mane Mane Montage !",
  },
  {
    index: "116",
    name: "Déguisé en un compagnon ! Le ballet style Kempo de Bon Clay",
  },
  {
    index: "117",
    name: "Les sens de Nami en alerte ! L’exposion du ClimaTact",
  },
  {
    index: "118",
    name: "Le secret confié à la famille royale ! Pluton, l’arme antique !",
  },
  {
    index: "119",
    name: "Le secret d’une arme maudite ! La technique permettant de fendre l’acier",
  },
  {
    index: "120",
    name: "La fin de l’affrontement ! Kohza agite le drapeau blanc !",
  },
  {
    index: "121",
    name: "Quelque part la voix de Vivi ! La chute du héros !",
  },
  {
    index: "122",
    name: "L’alligator des sables et Water Luffy ! Le deuxième round du duel !",
  },
  {
    index: "123",
    name: "Luffy cours vers le mausolé de la famille royale !",
  },
  { index: "124", name: "Pression pendant la crise ! Le clan Suna Suna" },
  {
    index: "125",
    name: "Superbes ailes ! Mon nom est Pell, le gardien de ce royaume",
  },
  { index: "126", name: "Enfin ! Il pleut à Arabasta !" },
  { index: "127", name: "Le mérite de Smoker ! Les pirates et la justice" },
  {
    index: "128",
    name: "La fêtes des pirates et le plan pour s’enfuir d’Arabasta !",
  },
  {
    index: "129",
    name: "Le jour du renouveau ! Le jour du discours de Vivi",
  },
  {
    index: "130",
    name: "Une odeur de danger ! Le septième compagnon sera Nico Robin !",
  },
  { index: "131", name: "Le premier patient ! L’histoire de la Rumble Ball" },
  {
    index: "132",
    name: "Rebellion d’un officier navigateur ! Vers le rêve qui n’en est pas un !",
  },
  {
    index: "133",
    name: "Rêve hérité ! Les gens de fer et le curry de Sanji",
  },
  { index: "134", name: "Il fait des fleurs et des montres ! Usopp !" },
  {
    index: "135",
    name: "La rumeur du chasseur de pirates ! Zoro le bretteur errant !",
  },
  {
    index: "136",
    name: "Zenni de l’île des chèvres et le navire pirate sur la montagne !",
  },
  { index: "137", name: "Profit et ambition du prêteur sur gage Zenni !" },
  {
    index: "138",
    name: "Où se trouve le trésor de l’île ! La sortie de l’équipage pirate de Zenni !",
  },
  {
    index: "139",
    name: "Tradition bizarre ! Henzo, le vieil homme de l’île Ruruka",
  },
  {
    index: "140",
    name: "Résident d’un royaume éternel ! L’équipage de pirates citrouilles !",
  },
  {
    index: "141",
    name: "La pensée de ma ville natale ! Le cimetière de pirates d’où l’on ne revient !",
  },
  {
    index: "142",
    name: "Combat désespéré ! La tour de l’ambition de Wetton et l’arc-en-ciel",
  },
  { index: "143", name: "Et la tradition débute ! Droit vers l’arc-en-ciel" },
  {
    index: "144",
    name: "Le log pose volé ! Masira le roi du repêchage de navires !",
  },
  {
    index: "145",
    name: "L’apparition du monstre ! Ne touche pas aux amis de Barbe Blanche",
  },
  {
    index: "146",
    name: "Ne croyez pas en vos rêves ! Mocktown la ville méprisante !",
  },
  {
    index: "147",
    name: "Un grand pirate ! L’homme et Masira racontent leur rêve",
  },
  {
    index: "148",
    name: "La légendaire famille Monbran ! « Norland le Menteur »",
  },
  { index: "149", name: "Attraper un oiseau du sud !" },
  {
    index: "150",
    name: "La fantaisie est finie ! Bellamy vs l’équipage des primates",
  },
  {
    index: "151",
    name: "L’homme à 100 millions de berrys ! L’équipage de Barbe Noire",
  },
  { index: "152", name: "Un navire meurt vide ! Le grand geyser" },
  {
    index: "153",
    name: "C’est une vaste océan ici ! Un chevalier et une porte du paradis",
  },
  {
    index: "154",
    name: "Skypiea, la terre des dieux ! Les anges de la plage de nuages",
  },
  {
    index: "155",
    name: "Le lieu sacré interdit ! Jugement sur l’île où vit Dieu",
  },
  { index: "156", name: "Déjà criminel ? Le gardien de la loi de Skypiea" },
  { index: "157", name: "Échappatoire ! L’épreuve de Dieu débute !" },
  { index: "158", name: "Le piège ! Le Dieu Eneru, omnipotent !" },
  {
    index: "159",
    name: "Le petit navire ! L’autel du sacrifice peut être maintenant rejoint",
  },
  {
    index: "160",
    name: "10 % de survivants ! Satori l’oracle des sphères !",
  },
  {
    index: "161",
    name: "Affrontement désespéré dans la forêt des illusions !",
  },
  {
    index: "162",
    name: "Le sifflet de Chopper est entendu ! L’ancien dieu vs l’oracle Shura",
  },
  {
    index: "163",
    name: "Miracle mystérieux ! L’ordalie des fils et celle de l’amour ?",
  },
  {
    index: "164",
    name: "L’espoir des Shandorans se consume ! Waipa le Berzerker",
  },
  {
    index: "165",
    name: "Le village en or, Jaya dans le ciel ! L’apparition du temple de Dieu !",
  },
  { index: "166", name: "Tous désirent le « Vearth »" },
  {
    index: "167",
    name: "L’apparition du Dieu Eneru !! Qui survivra à l’épreuve ?",
  },
  {
    index: "168",
    name: "Pure ! L’anaconda et le Survival qui commence enfin",
  },
  {
    index: "169",
    name: "Refus désespéré ! La préparation de Waipa le guerrier",
  },
  {
    index: "170",
    name: "Affrontement dans les airs ! Zoro VS Braham le guerrier",
  },
  { index: "171", name: "Le bazooka qui brûle ! Luffy vs Waipa le guerrier" },
  { index: "172", name: "L’ordalie des marais ! Chopper VS Gedatsu !" },
  {
    index: "173",
    name: "Une force sans précédent ! La véritable puissance d’Eneru",
  },
  {
    index: "174",
    name: "La capitale en vue ! Les grandes ruines Shandoranes",
  },
  {
    index: "175",
    name: "Zero pourcent de probabilité de survie ! Chopper vs l’oracle Ohmu",
  },
  {
    index: "176",
    name: "Le Giant Jack a porté de main !! Combat désespéré dans les ruines supérieures",
  },
  {
    index: "177",
    name: "La véritable valeur de l’Ordalie de Fer ! Epines blanches, combat desespéré !",
  },
  {
    index: "178",
    name: "Le jaillissement de fer ! Zoro vs Ohmu l’oracle de fer !",
  },
  {
    index: "179",
    name: "Les ruines supérieures vont s’effondrer et disparaître ! Quintette pour un final !",
  },
  {
    index: "180",
    name: "Affrontement dans les anciennes ruines ! L’objectif d’Eneru !!",
  },
  {
    index: "181",
    name: "Ambition pour le Fairy Vearth ! Maxim: l’arche volante !!",
  },
  { index: "182", name: "Le choc ! Luffy le Pirate Vs Eneru le Dieu !" },
  { index: "183", name: "Le Maxim fait surface ! Le désespoir débute !" },
  {
    index: "184",
    name: "La chute de Luffy ! Le jugement divin et le souhait de Nami !",
  },
  {
    index: "185",
    name: "Deux personnes se réveillent ! Sauvetage à la frontière de l’amour !",
  },
  { index: "186", name: "Vers la rhapsodie du désespoir, Capriccio !" },
  {
    index: "187",
    name: "Guidé par le son d’une cloche ! L’histoire d’un grand guerrier et explorateur",
  },
  { index: "188", name: "Libéré du sort ! Les larmes d’un grand guerrier !" },
  {
    index: "189",
    name: "L’étenel meilleur ami ! La cloche du serment résonne à travers l’océan !",
  },
  {
    index: "190",
    name: "La disparition du Paradis ! La terrifiante descente du Raiku !!",
  },
  { index: "191", name: "Abattre le Giant Jack ! L’unique solution !" },
  {
    index: "192",
    name: "Le miracle dans la contrée de Dieu ! Une chanson qui atteignait l’île du paradis",
  },
  {
    index: "193",
    name: "La fin de l’affrontement ! Le rêve qui résonne fierement au lion",
  },
  { index: "194", name: "J’étais ici ! Ce que le ponéglyphe raconte" },
  {
    index: "195",
    name: "Retour vers les mers bleues ! Mémoires d’une superbe aventure",
  },
  { index: "196", name: "Annonce Urgente ! Infiltration de pirates !" },
  {
    index: "197",
    name: "Sanji le cuistot ! La réelle valeur de la salle à manger de la Marine !",
  },
  { index: "198", name: "L’opération urgente de Zoro et Chopper !" },
  {
    index: "199",
    name: "La Marine en action ! Un autre membre d’équipage capturé !",
  },
  {
    index: "200",
    name: "La détermination de Luffy et Sanji ! L’imparable plan d’évasion !",
  },
  {
    index: "201",
    name: "L’unité spéciale « Sang bouillonnant » entre en scène ! Affrontement sur le pont",
  },
  {
    index: "202",
    name: "Briser les lignes de défenses enemies ! Le sauvetage du Vogue Merry !",
  },
  {
    index: "203",
    name: "Le navire pirate disparu ! Le second assaut contre la forteresse !",
  },
  { index: "204", name: "Le plan pour récupérer l’or et le Waver !" },
  {
    index: "205",
    name: "Tous les attraper en un coup ! Le plan secret de Jonathan !",
  },
  {
    index: "206",
    name: "Au revoir la forteresse de la Marine ! L’affrontement final pour la liberté !",
  },
  { index: "207", name: "Grande aventure à Long Ring Long Land" },
  { index: "208", name: "L’équipage pirate de Foxy et le Davy Back Fight !" },
  { index: "209", name: "Premier Round ! La Donut Race !" },
  {
    index: "210",
    name: "Foxy le Renard Argenté ! Une intervention violente !",
  },
  { index: "211", name: "Second Round! Shooter dans le Groggy Ring !" },
  { index: "212", name: "Carton Rouge ! Le Groggy Ring !" },
  { index: "213", name: "Troisième Round ! La course de Roller !" },
  {
    index: "214",
    name: "La fin de la course explosive ! En route pour le dernier Round !",
  },
  {
    index: "215",
    name: "Le service rapide hurlant ! Balle au prisonnier Pirate !",
  },
  { index: "216", name: "Round final ! Lumière rouge ! Lumière verte !" },
  {
    index: "217",
    name: "La confrontation des Capitaines ! Le dernier Round : Combattez !",
  },
  { index: "218", name: "Noro Noro Beam Vs l’invulnérable Luffy" },
  { index: "219", name: "Le fier affrontement ! La fin décisive !" },
  {
    index: "220",
    name: "Vous avez perdu la mémoire ? Quelque chose manque ? Qui êtes-vous ?",
  },
  {
    index: "221",
    name: "Le mystérieux garçon au sifflet et la théorie de Robin !",
  },
  {
    index: "222",
    name: "Récupérer les mémoires ! Débarquement sur l’île des pirates.",
  },
  {
    index: "223",
    name: "Zoro aiguise ses crocs ! Combat contre un animal sauvage !",
  },
  {
    index: "224",
    name: "Contre-attaque finale du voleur de mémoires qui révèle sa véritable nature !",
  },
  {
    index: "225",
    name: "L’homme à l’incroyable honneur ! Foxy le renard argenté !",
  },
  {
    index: "226",
    name: "Le pouvoir imbattable s’approche ? Un homme très dangereux !",
  },
  {
    index: "227",
    name: "Officier de la Marine : Amiral Ao Kiji ! La menace de la plus grande bataille du pouvoir.",
  },
  {
    index: "228",
    name: "Caoutchouc et glace s’affrontent en duel ! Luffy VS Ao Kiji !",
  },
  {
    index: "229",
    name: "Le train roulant sur l’eau et la métropole aquatique : Water Seven.",
  },
  {
    index: "230",
    name: "Aventure dans la cité de l’eau ! Direction le chantier naval.",
  },
  { index: "231", name: "La Franky Family et monsieur Iceburg !" },
  { index: "232", name: "La Galley-La Company ! Le magnifique Quai n°1." },
  {
    index: "233",
    name: "L’incident du pirate kidnappé et la mort imminente du navire !",
  },
  {
    index: "234",
    name: "Sauvons notre ami ! Faisons un raid à la Franky House !",
  },
  {
    index: "235",
    name: "Grand combat au clair de lune ! Le bateau pirate tremble de tristesse.",
  },
  { index: "236", name: "Luffy vs Pipo ! Le choc de l’esprit des hommes." },
  {
    index: "237",
    name: "La cité de l’eau est sous le choc ! On a tiré sur Monsieur Iceburg !",
  },
  {
    index: "238",
    name: "L’homme élastique VS l’homme qui crache du feu : Cyborg !",
  },
  {
    index: "239",
    name: "Le coupable est l’équipage du Chapeau de Paille ? Les défenseurs de Water Seven.",
  },
  {
    index: "240",
    name: "Une séparation pour toujours ? Nico Robin, la femme qui attire les ténèbres.",
  },
  {
    index: "241",
    name: "Nous devons attraper Robin ! La détermination des Chapeau de Paille.",
  },
  { index: "242", name: "Le signal de l’attaque ! Le CP9 passe à l’action." },
  {
    index: "243",
    name: "Le CP9 démasqué ! Le choc de leur véritable identité.",
  },
  { index: "244", name: "Le lien secret ! Iceburg et Franky." },
  { index: "245", name: "Reviens Robin ! Bataille contre le CP9." },
  {
    index: "246",
    name: "L’anéantissement des pirates au Chapeau de Paille ? La menace du modèle Léopard.",
  },
  {
    index: "247",
    name: "L’homme qui aime son navire ! Les larmes de Pipo !",
  },
  {
    index: "248",
    name: "Le passé de Franky ! Le jour où le train des mers bouge.",
  },
  {
    index: "249",
    name: "La conspiration de Spandam ! Le jour où le train des mers tremble.",
  },
  {
    index: "250",
    name: "Les derniers moments d’un homme légendaire ! Le jour où le train de mer s’afflige.",
  },
  {
    index: "251",
    name: "La vérité derrière la trahison ! La décision douloureuse de Robin !",
  },
  {
    index: "252",
    name: "Le sifflement de vapeur sépare le groupe ! Le train des mers part.",
  },
  {
    index: "253",
    name: "Sanji entre par effraction ! La bataille du train de mer dans l’orage !",
  },
  {
    index: "254",
    name: "L’âme de Nami crie ! La renaissance de Luffy au Chapeau de Paille !",
  },
  { index: "255", name: "Un autre train des mers ! La sortie du Rocketman." },
  {
    index: "256",
    name: "Secourons nos amis ! Les ennemis mutuels se lient par un serment !",
  },
  {
    index: "257",
    name: "Frapper la vague ! Le plus puissant combo de Luffy et Zoro.",
  },
  {
    index: "258",
    name: "Un homme mystérieux entre en scène ! Son nom est Sniperking",
  },
  {
    index: "259",
    name: "Duel de chefs ! Sanji contre l’art martial des nouilles",
  },
  { index: "260", name: "Combat sur le toit ! Franky contre Nero" },
  {
    index: "261",
    name: "Gare à la collision ! Le Demon Slash de Zoro contre le Boat Slash de T-Bone",
  },
  {
    index: "262",
    name: "Bataille pour reprendre Robin ! L’ingénieux stratagème de Sniperking",
  },
  { index: "263", name: "L’île judiciaire ! Panorama d’Enies Lobby !" },
  {
    index: "264",
    name: "L’opération débarquement débute ! L’équipage du Chapeau de paille se précipite !",
  },
  {
    index: "265",
    name: "Luffy fonce ! Grande bataille décisive sur l’île de la Justice !",
  },
  {
    index: "266",
    name: "Bataille avec les géants ! Ouvrir la seconde porte !",
  },
  {
    index: "267",
    name: "Le moyen de s’échapper est ouvert ! Vole à travers le ciel, Rocketman !",
  },
  {
    index: "268",
    name: "Rattrapons Luffy ! Les pirates du Chapeau de Paille en guerre.",
  },
  {
    index: "269",
    name: "Robin a été trahie ! Les espérances du Gouvernement Mondial !",
  },
  { index: "270", name: "Rendez-nous Robin ! Luffy VS Blueno !" },
  {
    index: "271",
    name: "Ne nous arrêtons pas ! Lançons le signal d’une contre attaque !",
  },
  {
    index: "272",
    name: "Luffy est proche ! Rassemblement à la place du tribunal !",
  },
  { index: "273", name: "Tout pour protéger mes amis ! Gear 2 en action !" },
  {
    index: "274",
    name: "Réponds-nous Robin ! Le cri de l’équipage du Chapeau de Paille !",
  },
  {
    index: "275",
    name: "Le passé de Robin ! La jeune fille appelée démon !",
  },
  {
    index: "276",
    name: "Le destin d’une mère et de son enfant ! Le nom de sa mère est Olvia !",
  },
  { index: "277", name: "La tragédie d’Ohara ! La terreur du Buster Call." },
  {
    index: "278",
    name: "Dis que tu veux vivre ! Nous sommes tes compagnons !!",
  },
  { index: "279", name: "Sauter dans la chute ! Les sentiments de Luffy !!" },
  {
    index: "280",
    name: "Le mode de vie d’un homme ! Les actions de Zoro, le rêve de Pipo.",
  },
  {
    index: "281",
    name: "Les larmes qui ont tissé les liens de l’amitié ! La carte du monde de Nami.",
  },
  {
    index: "282",
    name: "Séparations qui perfectionnent des hommes ! Sanji et Chopper.",
  },
  { index: "283", name: "Tous pour une Nakama ! Robin dans l’obscurité." },
  {
    index: "284",
    name: "Les plans ne sont pas confiés ! La décision de Franky.",
  },
  { index: "285", name: "Retrouvons les 5 clefs ! Mugiwara VS CP9." },
  {
    index: "286",
    name: "Pouvoir du Fruit du Démon ! Kaku et Jabura se transforment.",
  },
  {
    index: "287",
    name: "Même si je meurs, je ne te frapperai pas ! La galanterie de Sanji.",
  },
  {
    index: "288",
    name: "L’erreur de Fukuro ! Mon cola est l’eau de la vie !",
  },
  {
    index: "289",
    name: "La nouvelle technique de Zoro explose ! Le nom du katana est Sniperking ?",
  },
  {
    index: "290",
    name: "Chopper est incontrôlable ! La rumble ball de trop !",
  },
  {
    index: "291",
    name: "Le retour de Luffy, le chef ! Loterie et déboires, rêve ou réalité ?",
  },
  {
    index: "292",
    name: "La grande course aux gâteaux de riz ! Le complot de Gros Pif",
  },
  {
    index: "293",
    name: "Kalifa la manipulatrice des bulles ! Nami s’approche du piège de savon.",
  },
  {
    index: "294",
    name: "Mauvaises nouvelles retentissantes ! Appeler le Buster Call !",
  },
  { index: "295", name: "5 Nami ? Contre-attaque ensemble avec un mirage !" },
  {
    index: "296",
    name: "La décision de Nami ! Tirer sur Chopper le saccageur !",
  },
  {
    index: "297",
    name: "Le chasseur Sanji apparaît ? L’élégie offerte au loup menteur.",
  },
  {
    index: "298",
    name: "Le coup de pied Flambé ! Les techniques de pied de Sanji à pleine puissance.",
  },
  {
    index: "299",
    name: "Une féroce attaque d’épées tirées ! Zoro Vs Kaku : La puissante confrontation tailladante.",
  },
  {
    index: "300",
    name: "Zoro le démon féroce ! L’incarnation d’Asura révélé par son âme.",
  },
  {
    index: "301",
    name: "Spandam choqué ! Le héros qui se tient sur la Tour de la Justice.",
  },
  {
    index: "302",
    name: "Robin libérée ! Luffy Vs Lucci : Le sommet de la bataille décisive.",
  },
  {
    index: "303",
    name: "Le criminel est le boss Luffy ? A la poursuite du grand cerisier disparu.",
  },
  {
    index: "304",
    name: "Si je ne peux pas gagner, je ne peux protéger personne ! Le Gear 3 est activé.",
  },
  {
    index: "305",
    name: "Le passé effrayant ! La justice des ténèbres et Rob Lucci.",
  },
  {
    index: "306",
    name: "Une illusion de sirène apparaît ? Dans une conscience qui disparaît.",
  },
  {
    index: "307",
    name: "L’île qui sombre sous les coups de canon ! Le cri de regret de Franky.",
  },
  {
    index: "308",
    name: "Attendons Luffy ! Lutte mortelle sur le pont de l’hésitation.",
  },
  {
    index: "309",
    name: "Les sentiments montrés avec des poings ! La gatling de Luffy à pleine puissance.",
  },
  {
    index: "310",
    name: "Un ami venu de la mer ! Le lien le plus fort de l’équipage du Chapeau de Paille.",
  },
  {
    index: "311",
    name: "Tout le monde s’échappe ! Le chemin de la victoire est pour les pirates.",
  },
  {
    index: "312",
    name: "Merci Merry ! La mer des adieux embrumée dans la neige",
  },
  {
    index: "313",
    name: "Le repos est brisé ! Le vice-amiral de la marine qui possède le poing de l’amour",
  },
  {
    index: "314",
    name: "La lignée de famille la plus forte ? Le père de Luffy révélé !",
  },
  {
    index: "315",
    name: "Son nom est le Nouveau Monde ! A propos de Grand Line",
  },
  {
    index: "316",
    name: "Shanks en mouvement ! L’assurance d’une ère sauvage",
  },
  {
    index: "317",
    name: "La jeune fille qui cherche le Yagara ! La grande enquête dans la cité de l’eau !",
  },
  {
    index: "318",
    name: "La mère est forte ! L’aide aux travaux domestiques comiques de Zoro",
  },
  {
    index: "319",
    name: "Le choc de Sanji ! Le grand-père mystérieux et sa cuisine incroyablement délicieuse",
  },
  {
    index: "320",
    name: "Tout le monde est enfin mis à prix ! L’équipage qui dépasse les 600 millions !",
  },
  {
    index: "321",
    name: "Le roi des animaux fait face à la mer ! Le grand achèvement du navire des rêves !",
  },
  {
    index: "322",
    name: "Adieu mes chers compagnons ! Le départ de Franky !",
  },
  {
    index: "323",
    name: "Départ de la métropole aquatique ! Usopp termine son duel comme un homme !",
  },
  {
    index: "324",
    name: "Les avis de recherche circulent. Les connaissances dansent, le navire avance.",
  },
  {
    index: "325",
    name: "Un pouvoir malfaisant. Les ténèbres de Barbe Noire attaquent Ace !",
  },
  {
    index: "326",
    name: "La mystérieuse fête pirate ! Le Sunny et un piège dangereux",
  },
  {
    index: "327",
    name: "Le Sunny en danger ! Les mécanismes secrets super rapides rugissent",
  },
  {
    index: "328",
    name: "Le rêve sombrant dans le nouveau monde ! Le pirate du désespoir, Puzzle.",
  },
  {
    index: "329",
    name: "Les assassins attaquent ! La grande bataille sur la glace débute !",
  },
  {
    index: "330",
    name: "L’équipage du chapeau de paille combattent durement ! L’âme d’un pirate se joue sur le drapeau",
  },
  {
    index: "331",
    name: "La douleur à pleine puissance ! Le pouvoir d’attraction magnétique des jumeaux approche",
  },
  {
    index: "332",
    name: "La demeure du grand chaos ! Don en colère et l’équipage capturé",
  },
  {
    index: "333",
    name: "Le retour du Phénix ! Le rêve du drapeau pirate prête serment à un ami",
  },
  {
    index: "334",
    name: "La bataille décisive de la chaleur ! Luffy vs Don le brûlant",
  },
  {
    index: "335",
    name: "Le Nouveau Monde nous attend ! Adieux aux pirates courageux",
  },
  { index: "336", name: "Le départ de ChopPerman ! Protéger la station TV" },
  {
    index: "337",
    name: "Entrée sur la mer du diable ! Le mystérieux squelette flottant dans la brume",
  },
  {
    index: "338",
    name: "Le plaisir de rencontrer des gens ! La vraie nature du squelette gentleman",
  },
  {
    index: "339",
    name: "Mystérieux phénomènes donnant le frisson ! Débarquement à Thriller Bark",
  },
  {
    index: "340",
    name: "L’homme qu’on appelle génie ! Hogback entre en scène !",
  },
  {
    index: "341",
    name: "Nami en danger ! Le manoir zombie et l’homme invisible",
  },
  {
    index: "342",
    name: "Le mystère des zombies ! Le laboratoire cauchemardesque de Hogback",
  },
  {
    index: "343",
    name: "Son nom est Moria ! Le piège du grand pirate voleur d’ombres",
  },
  {
    index: "344",
    name: "La joie du chant des zombies ! La cloche de l’attaque de nuit est une musique des ténèbres",
  },
  {
    index: "345",
    name: "Rempli d’animaux !? Le merveilleux jardin de Perona",
  },
  {
    index: "346",
    name: "L’équipage du chapeau de paille disparaît ! Le mystérieux sabreur apparaît !",
  },
  {
    index: "347",
    name: "L’esprit chevaleresque reste ! Le zombie traître qui protège Nami",
  },
  {
    index: "348",
    name: "Une visite venue du ciel ! Cet homme est l’épéiste fredonneur !",
  },
  {
    index: "349",
    name: "Luffy en état d’urgence ! La destination de l’ombre la plus forte !",
  },
  {
    index: "350",
    name: "Le guerrier appelé démon !! L’heure de la résurrection d’Oz",
  },
  { index: "351", name: "Réveillé après 500 ans !! Oz ouvre les yeux !!" },
  {
    index: "352",
    name: "Parier sa vie sur ses convictions !! Brook protège sa coupe afro",
  },
  {
    index: "353",
    name: "Le serment d’un homme ne meurt jamais !! Pour ami qui attend dans un ciel lointain !",
  },
  {
    index: "354",
    name: "On se reverra sûrement !! Brook et le cap de la promesse !",
  },
  {
    index: "355",
    name: "La nourriture, Nami et les ombres !! La grande contre-attaque de Luffy en colère",
  },
  { index: "356", name: "Usopp le plus fort ? Laissez-moi les négatifs !" },
  {
    index: "357",
    name: "La mort soudaine des Généraux Zombies !! Oz a envie d’aventure !!",
  },
  {
    index: "358",
    name: "Sanji le chevalier de feu !! Défoncer à coups de pied le faux mariage",
  },
  {
    index: "359",
    name: "Le lien de l’invisibilité ? Le rêve de Sanji est volé !",
  },
  {
    index: "360",
    name: "Le héros sauveur !? L’ennemi est la princesse invisible",
  },
  {
    index: "361",
    name: "La frayeur de Perona ? Le U de Uso*(mensonge) est le U de Usopp",
  },
  {
    index: "362",
    name: "L’attaque tranchante qui danse sur le toit !! La conclusion de Zoro vs Ryuma",
  },
  {
    index: "363",
    name: "Chopper est en colère !! La médecine démoniaque de Hogback",
  },
  {
    index: "364",
    name: "Oz hurle !! Montre-toi, équipage du chapeau de paille",
  },
  {
    index: "365",
    name: "L’ennemi est Luffy !! Le plus puissant zombie vs l’équipage du chapeau de paille",
  },
  {
    index: "366",
    name: "Absalom est battu !! L’attaque électrique de l’amitié de Nami !!",
  },
  {
    index: "367",
    name: "Volons-lui une victoire !! Le mortel amarrage des Chapeau de Paille ?",
  },
  {
    index: "368",
    name: "Une invasion sans bruit de pas !! Le mystérieux visiteur • Kuma le tyran",
  },
  {
    index: "369",
    name: "Oz + Moria La plus terrible fusion de la force et de l’intelligence",
  },
  {
    index: "370",
    name: "La stratégie secrète du retournement de situation — Nightmare Luffy apparaît",
  },
  {
    index: "371",
    name: "Dévastation de l’équipage de chapeau de paille — Les capacités du fruit Kage Kage à pleins gaz",
  },
  { index: "372", name: "Le combat pour déterminer le meilleur commence !" },
  { index: "373", name: "La conclusion approche ! Donner le coup final" },
  {
    index: "374",
    name: "Les corps disparaissent ! Le soleil perce à travers l’île du cauchemar !",
  },
  {
    index: "375",
    name: "L’interminable crise ! L’ordre d’anéantir l’équipage du Chapeau de Paille",
  },
  { index: "376", name: "Le pouvoir Nikyu Nikyu de Kuma de tout repousser" },
  {
    index: "377",
    name: "La douleur de mes amis est ma douleur —Le combat suicidaire de Zoro",
  },
  {
    index: "378",
    name: "La promesse faite un jour lointain —La chanson des pirates et la petite baleine",
  },
  {
    index: "379",
    name: "Le passé de Brook — Les tristes adieux au joyeux compagnons",
  },
  {
    index: "380",
    name: "Le saké de Binks — La chanson qui relie le passé et le présent !",
  },
  { index: "381", name: "Un nouveau compagnon ! Brook le musicien" },
  {
    index: "382",
    name: "La menace du Noro Noro —Le retour de Foxy le renard argenté",
  },
  {
    index: "383",
    name: "Grande compétition de trésor ! Effondrements ! Spa Island!",
  },
  {
    index: "384",
    name: "La dure lutte de Brook : Une voie difficile pour devenir un véritable membre de l’équipage ?",
  },
  { index: "385", name: "Arrivé à la moitié de Grand Line ! Red Line!" },
  {
    index: "386",
    name: "La haine envers l’équipage du Chapeau de Paille ! Apparition de Duval au Masque de Fer",
  },
  {
    index: "387",
    name: "Fatidiques retrouvailles ! Sauver l’homme-poisson des mains de l’ennemi",
  },
  {
    index: "388",
    name: "Tragédie ! La vérité de Duval couverte par un masque",
  },
  {
    index: "389",
    name: "Explosion ! La super arme secrète du Sunny : le canon Gaon",
  },
  {
    index: "390",
    name: "Débarquement pour aller sur l’île des Homme-Poissons : L’archipel Sabaody",
  },
  {
    index: "391",
    name: "Tyrannie ! Les dirigeants de Sabaody, les Tenryubito",
  },
  {
    index: "392",
    name: "Rassemblement de nouveaux rivaux ! Les 11 Supernovas",
  },
  { index: "393", name: "La cible est Camie ! Les kidnappeurs en approche" },
  { index: "394", name: "Sauver Camie ! La sombre histoire de l’Archipel" },
  {
    index: "395",
    name: "Le temps est compté — La vente aux enchères d’humains commence",
  },
  {
    index: "396",
    name: "Le poing dévastateur ! Empêcher la vente aux enchères",
  },
  { index: "397", name: "Énorme panique ! Lutte dans la salle des enchères" },
  {
    index: "398",
    name: "L’amiral Kizaru se déplace ! L’archipel Sabaody dans le chaos",
  },
  {
    index: "399",
    name: "Franchir le barrage ! Marine contre trois capitaines",
  },
  {
    index: "400",
    name: "Roger et Rayleigh — Le roi des pirates et son bras droit",
  },
  {
    index: "401",
    name: "Impossible à éviter ? Le kick à la vitesse de la lumière de l’Amiral Kizaru",
  },
  {
    index: "402",
    name: "Incroyable ! Pacifista, l’arme de combat de la Marine",
  },
  {
    index: "403",
    name: "Un autre puissant ennemi apparaît ! Sentoumaru et sa grande hache",
  },
  {
    index: "404",
    name: "Le féroce Amiral Kizaru attaque —La situation désespérée de l’équipage de Chapeau de paille !",
  },
  {
    index: "405",
    name: "Mes compagnons ont disparu : Le dernier jour de l’équipage du Chapeau de Paille",
  },
  {
    index: "406",
    name: "Arc spécial historique ! Le chef Luffy ré-apparait",
  },
  {
    index: "407",
    name: "Arc spécial historique ! Détruisons-le ! Le piège de la compagnie Thriller",
  },
  {
    index: "408",
    name: "Débarquement ! Amazon Lily, l’île interdite aux hommes",
  },
  {
    index: "409",
    name: "Dépêchez-vous ! Retour à l’équipage — Aventure sur l’île des femmes",
  },
  {
    index: "410",
    name: "Tout le monde l’aime ! L’impératrice pirate Hancock",
  },
  {
    index: "411",
    name: "Le secret caché dans leurs dos — Luffy rencontre la Princesse Serpent",
  },
  {
    index: "412",
    name: "Le jugement sans cœur ! Margaret transformée en pierre !!",
  },
  {
    index: "413",
    name: "Dure épreuve pour Luffy ! Le pouvoir du Haki des sœurs serpents !",
  },
  {
    index: "414",
    name: "Combat à pleine puissance !! Gomu Gomu contre Hebi Hebi",
  },
  { index: "415", name: "L’aveu d’Hancock — Le choquant passé des sœurs" },
  {
    index: "416",
    name: "Sauver Ace ! La nouvelle destination est l’immense prison",
  },
  { index: "417", name: "L’amour est un ouragan ! Hancock est amoureuse" },
  {
    index: "418",
    name: "Retour sur l’équipage ! La météorologie et l’ile de Karakuri",
  },
  {
    index: "419",
    name: "Retour sur l’équipage ! L’ile des oiseaux géants et le paradis rose !",
  },
  {
    index: "420",
    name: "Retour sur l’équipage ! Le pont connectant les îles et la plante carnivore !",
  },
  {
    index: "421",
    name: "Retour sur l’équipage ! La princesse négative et le Roi des Démons !",
  },
  { index: "422", name: "Une vie en danger ! Pénétrer dans Impel Down !" },
  {
    index: "423",
    name: "Réunion en Enfer ! Le puissant utilisateur du fruit de la Fragmentation !",
  },
  {
    index: "424",
    name: "Intrusion dans l’Enfer Pourpre ! Le super plan de Baggy !",
  },

  {
    index: "425",
    name: "L’Homme le plus fort de la Prison ! Arrivée de l’Homme-Poison Magellan !",
  },
  {
    name: "Spécial Strong World : Les ambitions du Lion d’Or sont en marche !",
    index: "426",
  },
  {
    index: "427",
    name: "Spécial Strong World : Little East Blue Est pris pour cible.",
  },
  {
    index: "428",
    name: "Spécial Strong World : Les Pirates Amigo donnent l’assaut.",
  },
  {
    index: "429",
    name: "Spécial Strong World : La bataille décisive : Luffy contre Largo.",
  },
  {
    index: "430",
    name: "Un Capitaine Corsaire en prison ! Jimbei le premier fils de la mer.",
  },
  {
    index: "431",
    name: "Le piège de Saldeath — Niveau 3 : L’enfer de la faim",
  },
  { index: "432", name: "Le cygne en liberté ! Réunion ! Bon Clay" },
  {
    index: "433",
    name: "Le directeur Magellan en mouvement —Le piège pour Luffy est prêt",
  },
  {
    index: "434",
    name: "Préparation pour la guerre ! Une bataille décisive au niveau 4 : L’enfer des flammes",
  },
  { index: "435", name: "La force de Magellan ! Bon Clay prend la fuite" },
  {
    index: "436",
    name: "C’est l’heure de l’épreuve de force ! L’ultime attaque-suicide de Luffy !",
  },
  {
    index: "437",
    name: "Parce qu’il est mon ami —Le sauvetage désespéré de Bon Clay",
  },
  { index: "438", name: "Un paradis en enfer ! Impel Down, Niveau 5 : 5" },
  {
    index: "439",
    name: "Le traitement de Luffy commence ! La miraculeuse faculté d’Ivankov",
  },
  {
    index: "440",
    name: "Croire aux miracles ! Bon Clay souhaite de tout son cœur !",
  },
  {
    index: "441",
    name: "Luffy revient à la vie ! Le plan d’évasion d’Ivankov commence !",
  },
  {
    index: "442",
    name: "Le convoi d’Ace commence ! Les défenses du niveau le plus bas, Niveau 6 !",
  },
  {
    index: "443",
    name: "La meilleure équipe est formée ! — Tremble Impel Down !",
  },
  { index: "444", name: "C’est le chaos ultime ! Barbe Noire débarque !" },
  {
    index: "445",
    name: "Une rencontre dangereuse ! Barbe Noire et Shiryû de la Pluie",
  },
  {
    index: "446",
    name: "Il ne s’enfuira pas ! Hannyabal donne tout ce qu’il a !",
  },
  {
    index: "447",
    name: "Un jet-pistol plein de rage — Luffy contre Barbe Noire",
  },
  {
    index: "448",
    name: "Arrêter Magellan ! Ivan-san libère son attaque secrète",
  },
  { index: "449", name: "Le plan de Magellan ! L’évasion est ralentie" },
  {
    index: "450",
    name: "L’équipe de l’évasion acculée —La technique interdite « Venom Demon »",
  },
  {
    index: "451",
    name: "Le dernier miracle — Passer la porte de la justice !",
  },
  {
    index: "452",
    name: "Direction le QG de la Marine —Le voyage pour sauver Ace !",
  },
  {
    index: "453",
    name: "Retour sur l’équipage ! Les Animaux Androïdes et le rapport de Wheatheria !",
  },
  {
    index: "454",
    name: "Retour sur l’équipage ! Le pays des oiseaux géants et la confrontation rose",
  },
  {
    index: "455",
    name: "Retour sur l’équipage ! L’armée révolutionnaire et le piège de la forêt Gloutonne !",
  },
  {
    index: "456",
    name: "Retour sur l’équipage ! La gigantesque tombe et les culottes de gratitude",
  },
  {
    index: "457",
    name: "Juste avant Marine Ford ! Les souvenirs de Luffy. La promesse des deux frères.",
  },
  {
    index: "458",
    name: "Juste avant Marine Ford ! Les souvenirs de Luffy. Les trois amiraux se rassemblent.",
  },
  {
    index: "459",
    name: "La bataille décisive approche ! La formation de combat la plus forte de la Marine est prête !",
  },
  {
    index: "460",
    name: "Une énorme flotte apparaît —L’invasion des pirates de Barbe Blanche !",
  },
  {
    index: "461",
    name: "Le commencement de la Bataille ! Barbe Blanche et le Passé de Ace !",
  },
  {
    index: "462",
    name: "Le Pouvoir de détruire le monde ! La Capacité du fruit Gura Gura no mi",
  },
  {
    index: "463",
    name: "Réduisez tout en cendres ! La Capacité de l’Amiral Akainu !",
  },
  {
    index: "464",
    name: "Le Descendant du Diable ! L’assaut de Little Oz Junior !",
  },
  {
    index: "465",
    name: "Seule la justice vaincra —La Stratégie de Sengoku est mise en action !",
  },
  {
    index: "466",
    name: "L’équipe de Chapeau de Paille arrive —Le champ de bataille encore plus intense",
  },
  {
    index: "467",
    name: "Je vais te sauver même si j’en meurs — Luffy VS la Marine : la bataille commence",
  },
  {
    index: "468",
    name: "Batailles consécutives ! Une armée d’utilisateurs de fruits du démon contre une armée d’utilisateurs de fruits du démon",
  },
  {
    index: "469",
    name: "Un désastre provoqué par Kuma — L’attaque furieuse d’Iva-san",
  },
  {
    index: "470",
    name: "Le plus grand épéiste du monde Mihawk —L’attaque de l’épée noire s’approche de Luffy",
  },
  {
    index: "471",
    name: "L’opération d’extermination commence — La puissance de l’armée Pacifista",
  },
  { index: "472", name: "La ruse d’Akainu ! Barbe Blanche pris au piège" },
  {
    index: "473",
    name: "L’opération d’encerclement commence ! Situation désespérée des pirates de Barbe Blanche",
  },
  {
    index: "474",
    name: "L’ordre pour effectuer l’exécution est donné — Passez à travers le mur d’encerclement !",
  },
  {
    index: "475",
    name: "Assaut dans la phase finale ! Barbe Blanche Manœuvre pour renverser les marées",
  },
  {
    index: "476",
    name: "Luffy à bout de force ! Bataille générale sur la Place Oris !!",
  },
  {
    index: "477",
    name: "Le pouvoir qui réduit la vie —Le retour des hormones de vigueur",
  },
  { index: "478", name: "Pour une promesse ! Le choc entre Luffy et Coby" },
  {
    index: "479",
    name: "Devant l’échafaud ! Le chemin vers Ace est ouvert !!",
  },
  {
    index: "480",
    name: "Le chemin qu’ils ont choisi chacun — Luffy vs Garp !",
  },
  {
    index: "481",
    name: "Ace libéré ! L’ordre du Capitaine final de Barbe Blanche !",
  },
  {
    index: "482",
    name: "Le Pouvoir qui brûle même le feu —Le geste final d’Akainu",
  },
  {
    index: "483",
    name: "Chercher une réponse – Ace aux Poings Ardents meurt sur le Champ de Bataille",
  },
  {
    index: "484",
    name: "Le Quartier Général de la Marine s’effrite ! La Colère silencieuse de Barbe Blanche",
  },
  {
    index: "485",
    name: "Règlement de compte — Barbe Blanche Vs les pirates Barbe Noire",
  },
  {
    index: "486",
    name: "Le début du spectacle — Le plan de Barbe Noire révélé",
  },
  {
    index: "487",
    name: "La ténacité d’Akainu ! Le poing de Magma attaque Luffy",
  },
  {
    index: "488",
    name: "Un cri éperdu ! Quelques secondes de courage pour changer le destin.",
  },
  {
    index: "489",
    name: "Shanks apparaît ! La guerre au sommet se termine enfin.",
  },
  {
    index: "490",
    name: "De puissants rivaux indépendants ! Le début de la « Nouvelle Ere » !",
  },
  {
    index: "491",
    name: "Arrivée sur l’île des Femmes — Cruelle réalité pour Luffy",
  },
  {
    index: "492",
    name: "Le meilleur des partenariats ! Affrontement, Luffy et Toriko !",
  },
  {
    index: "493",
    name: "Luffy et Ace —L’histoire de la rencontre des frères !",
  },
  {
    index: "494",
    name: "Sabo entre en scène ! Le garçon du Grey Terminal",
  },
  { index: "495", name: "Je ne fuirai pas — L’Opération de sauvetage d’Ace" },
  {
    index: "496",
    name: "Un jour nous prendrons mer ! Les coupes du Serment des trois gamins !",
  },
  {
    index: "497",
    name: "Quitter la famille Dadan ! La base secrète est terminée",
  },
  {
    index: "498",
    name: "Luffy apprenti !? L’homme qui a combattu le Seigneur des pirates !",
  },
  {
    index: "499",
    name: "La bataille contre le gros tigre ! Qui sera le capitaine ?",
  },
  {
    index: "500",
    name: "Liberté volée ! Le piège des Nobles s’approche des trois frères",
  },
  {
    index: "501",
    name: "Les Flammes sont allumées — Crise au Gray Terminal",
  },
  { index: "502", name: "Où est la liberté ? Le triste départ du garçon" },
  { index: "503", name: "Je compte sur vous ! Une lettre d’un frère !" },
  { index: "504", name: "Pour tenir la promesse — Départs séparés !" },
  { index: "505", name: "Je veux les voir ! Le cri larmoyant de Luffy" },
  {
    index: "506",
    name: "L’équipage du Chapeau de Paille choqué ! Les mauvaises nouvelles sont reçues",
  },
  {
    index: "507",
    name: "Réunion avec Rayleigh le Roi des Ténèbres — La décision de Luffy",
  },
  {
    index: "508",
    name: "Retour auprès du Capitaine — L’évasion de l’île céleste et l’incident de l’île hivernale",
  },
  {
    index: "509",
    name: "Contact ! Le grand épéiste Mihawk — La lutte de volonté de Zoro",
  },
  {
    index: "510",
    name: "La souffrance de Sanji — La reine est de retour en son royaume !",
  },
  { index: "511", name: "Un retour incroyable ! Luffy au QG de la Marine !" },
  {
    index: "512",
    name: "Délivrées aux amis —Les grandes nouvelles traversent le monde !",
  },
  {
    index: "513",
    name: "Les pirates sont en mouvement ! Les terres fracassantes du Nouveau Monde !",
  },
  { index: "514", name: "Survivre dans l’Enfer ! Le duel viril de Sanji !" },
  {
    index: "515",
    name: "Devenir encore plus fort ! Le serment de Zoro à son Capitaine !",
  },
  {
    index: "516",
    name: "L’entraînement de Luffy commence —A dans deux ans au lieu de Rendez-vous",
  },
  {
    index: "517",
    name: "Un nouveau chapitre commence ! L’équipage au Chapeau de Paille réuni !",
  },
  {
    index: "518",
    name: "Situation explosive ! Luffy contre le faux Luffy !",
  },
  {
    index: "519",
    name: "Les soldats de la Marine entrent en action. L’équipage du Chapeau de Paille prit pour cible.",
  },
  {
    index: "520",
    name: "Rassemblement général ! La menace des faux Chapeaux de Paille !",
  },
  {
    index: "521",
    name: "Que la bataille commence ! Montre-nous les fruits de ton entraînement !",
  },
  {
    index: "522",
    name: "Tout le monde à bord ! Luffy en route pour le Nouveau Monde !",
  },
  {
    index: "523",
    name: "Une révélation surprenante —L’homme qui a protégé le Sunny",
  },
  {
    index: "524",
    name: "Lutte sous-marine, le démon des profondeurs apparaît !",
  },
  {
    index: "525",
    name: "Catastrophe en profondeur, l’équipage du Chapeau de Paille se perd",
  },
  {
    index: "526",
    name: "Eruption volcanique sous-marine ! Arrivée sur l’île des Hommes-Poissons !",
  },
  {
    index: "527",
    name: "Débarquement sur l’île des Hommes-Poissons, les charmantes sirènes !",
  },
  {
    index: "528",
    name: "Explosion d’excitation ! La vie de Sanji est en danger !",
  },
  {
    index: "529",
    name: "La destruction de l’île des Hommes-Poissons !? La prédiction de Shirley !",
  },
  {
    index: "530",
    name: "Le roi de l’île des Hommes-Poissons, le dieu de la mer Neptune !",
  },
  {
    index: "531",
    name: "Le Palais de Ryugu ! Guidés par le requin qu’ils ont sauvé",
  },
  {
    index: "532",
    name: "La pleurnicheuse froussarde ! La princesse sirène de la tour de coquillages",
  },
  {
    index: "533",
    name: "Situation d’urgence ! Pris au piège au Palais de Ryugu",
  },
  {
    index: "534",
    name: "Secousses au Palais de Ryugu ! Shirahoshi et l’enlèvement",
  },
  { index: "535", name: "L’attaque de Hody ! Le début de la Revanche !" },
  { index: "536", name: "Bataille décisive au Palais Ryugu ! Zoro vs Hody" },
  { index: "537", name: "Protéger Shirahoshi ! La poursuite de Decken" },
  {
    index: "538",
    name: "L’équipage est vaincu !? Hody prend le contrôle du Palais Ryugu",
  },
  {
    index: "539",
    name: "Un destin ravivé ! Nami et les Pirates Hommes-Poissons !",
  },
  { index: "540", name: "Le Sauveur des esclaves — Tiger l’aventurier" },
  { index: "541", name: "Kizaru apparaît ! Un piège destiné à Tiger" },
  { index: "542", name: "Équipe en formation ! Il faut sauver Chopper" },
  {
    index: "543",
    name: "Les derniers instants du héros —La choquante vérité de Tiger",
  },
  { index: "544", name: "La séparation des pirates — Jinbei VS Arlong" },
  {
    index: "545",
    name: "L’île des Hommes-Poissons tremble ! L’atterrissage d’un Tenryûbito",
  },
  {
    index: "546",
    name: "Tragédie soudaine ! La balle d’un assassin qui fait s’effondrer l’avenir",
  },
  { index: "547", name: "Retour dans le présent ! Hody se met en mouvement" },
  { index: "548", name: "Le royaume bouleversé ! Ordre d’exécuter Neptune" },
  { index: "549", name: "Une fissure apparaît ! Luffy contre Jinbei" },
  {
    index: "550",
    name: "Le désastre d’Hody — La véritable puissance maléfique de la drogue !",
  },
  {
    index: "551",
    name: "La bataille décisive commence sur la Place Gyoncorde !",
  },
  {
    index: "552",
    name: "Terrible révélation —La vérité à propos du meurtre d’Otohime",
  },
  { index: "553", name: "Les larmes de Shirahoshi ! Luffy apparaît enfin" },
  {
    index: "554",
    name: "Grande bataille ! L’équipe au Chapeau de Paille contre 100 000 adversaires",
  },
  { index: "555", name: "Mouvement explosif ! Zoro et Sanji, en avant !" },
  {
    index: "556",
    name: "Grande première ! L’arme secrète du Thousand Sunny",
  },
  {
    index: "557",
    name: "Le pirate de fer ! Entrée en scène du général Franky",
  },
  {
    index: "558",
    name: "Noah approche ! Crise engendrée par la destruction de l’île des Hommes-Poissons !",
  },
  {
    index: "559",
    name: "Depêche toi Luffy ! Shirahoshi dans une situation désespérée",
  },
  { index: "560", name: "La bataille commence ! Luffy contre Hody !" },
  {
    index: "561",
    name: "Bataille royale ! L’équipage contre les pirates des nouveaux hommes-poissons !",
  },
  {
    index: "562",
    name: "Défaite de Luffy !? L’heure de la revanche de Hody",
  },
  {
    index: "563",
    name: "La choquante vérité ! La véritable identité de Hody",
  },
  {
    index: "564",
    name: "Repartir à zéro ! Le souhait le plus profond de Luffy !",
  },
  {
    index: "565",
    name: "Luffy attaque de toutes ses forces ! L’explosion du Red Hawk",
  },
  { index: "566", name: "C’est terminé ! Le combat décisif d’Hody" },
  {
    index: "567",
    name: "Stoppe le Noah ! L’éléphant Gatling du désespoir !",
  },
  { index: "568", name: "Pour le futur ! La route vers le soleil !" },
  {
    index: "569",
    name: "Un secret révélé ! La vérité sur les armes antiques",
  },
  {
    index: "570",
    name: "L’équipage est surpris ! Le nouvel Amiral en Chef de la Marine",
  },
  { index: "571", name: "Elle aime les bonbons ! L’empereur Big Mom !" },
  {
    index: "572",
    name: "Les perspectives sombres ! Un piège qui attend dans le Nouveau Monde !",
  },
  {
    index: "573",
    name: "Le départ définitif ! Adieu, l’île des Hommes-Poissons !",
  },
  {
    index: "574",
    name: "Vers le nouveau monde ! Les yeux sur la plus grande mer",
  },
  {
    index: "575",
    name: "L’ambition de Z : Lily la petite géante !",
  },
  {
    index: "576",
    name: "L’ambition de Z : Une armée puissante et mystérieuse !",
  },
  {
    index: "577",
    name: "L’ambition de Z : La grande évasion !",
  },
  {
    index: "578",
    name: "L’ambition de Z : Luffy contre Shuzo !",
  },
  { index: "579", name: "Débarquement ! Punk Hazard, L’île brûlante" },
  {
    index: "580",
    name: "Une bataille brûlante ! Luffy contre le dragon géant !",
  },
  {
    index: "581",
    name: "L’équipage est confus ! Le samouraï choquant décapité apparaît !",
  },
  { index: "582", name: "Le choc ! Le secret de l’île finalement révélé !" },
  { index: "583", name: "Sauver les enfants ! Début d’un combat général" },
  {
    index: "584",
    name: "Un duel à l’épée ! Brook contre le mystérieux torse de samurai",
  },
  { index: "585", name: "Shichibukai ! Trafalgar Law" },
  { index: "586", name: "Moment critique ! Luffy coule dans le lac gelé" },
  { index: "587", name: "Le choc ! Law contre Vice-Amiral Smoker !" },
  { index: "588", name: "Première rencontre en deux ans ! Luffy et Law" },
  {
    index: "589",
    name: "Le pire du monde — César l’effrayant scientifique !",
  },
  {
    index: "590",
    name: "La plus puissante collaboration de l’histoire contre le grand glouton marin",
  },
  {
    index: "591",
    name: "Chopper furieux ! Les expériences tyranniques de Master",
  },
  {
    index: "592",
    name: "L’oblitération de l’équipage ! L’attaque de l’assassin légendaire !)",
  },
  {
    index: "593",
    name: "Sauver Nami ! Le combat de Luffy sur la montagne enneigée",
  },
  { index: "594", name: "Formation ! L’alliance pirate Luffy-Law !" },
  {
    index: "595",
    name: "Capturons Master —L’opération alliance pirate commence !",
  },
  {
    index: "596",
    name: "Crise de destruction — Le monstre de la mort apparaît",
  },
  {
    index: "597",
    name: "Grand combat — César active son véritable pouvoir !",
  },
  {
    index: "598",
    name: "Le Samurai qui tranche le feu ! Kin’emon le renard de feu",
  },
  {
    index: "599",
    name: "Le choc ! L’identité de Vergo, l’homme mystérieux !",
  },
  {
    index: "600",
    name: "Protéger les enfants ! La main diabolique de Master s’approche !",
  },
  {
    index: "601",
    name: "Gros tremblement de terre au nouveau monde — L’expérience cauchemardesque de César",
  },
  {
    index: "602",
    name: "L’arme la plus destructrice de l’Histoire ! Shinokuni",
  },
  {
    index: "603",
    name: "La contrattaque commence ! La grande échappée de Luffy et Law",
  },
  {
    index: "604",
    name: "Viser le bâtiment R ! Le grand assaut de l’alliance pirate",
  },
  {
    index: "605",
    name: "Les larmes de Tashigi — La stratégie de percée suicidaire des G5",
  },
  {
    index: "606",
    name: "La trahison du Vice Amiral ! Vergo le Démon Bambou",
  },
  {
    index: "607",
    name: "L’incandescente bataille acharnée — Luffy vs César",
  },
  { index: "608", name: "Le cerveau dans l’ombre ! Doflamingo bouge !" },
  {
    index: "609",
    name: "Luffy meurt de froid !? La terrifiante femme des neiges Monnet !",
  },
  {
    index: "610",
    name: "Combat de poings ! Les deux vice-amiraux se battent",
  },
  { index: "611", name: "Le petit dragon ! Momonosuke se dévoile" },
  {
    index: "612",
    name: "Le combat géant ! L’équipage Chapeau de Paille contre la Femme-Neige",
  },
  {
    index: "613",
    name: "Explosion secrète ! Le puis puissant style à une épée de Zoro !",
  },
  {
    index: "614",
    name: "Je protégerai mes amis ! L’échappée désespérée de Mocha",
  },
  {
    index: "615",
    name: "L’amertume de Barbe-Marron ! Le coup de colère de Luffy",
  },
  {
    index: "616",
    name: "Conclusion choquante ! Le chasseur blanc vs : Vergo",
  },
  { index: "617", name: "César battu ! Le Grizzly Magnum le plus puissant" },
  { index: "618", name: "Invasion ! L’assassin de Dressrosa" },
  { index: "619", name: "Déchaînement ! L’invincible seigneur Franky" },
  {
    index: "620",
    name: "Situation désespérée ! La grande explosion de Punk Hazard",
  },
  { index: "621", name: "Capturer César — L’explosion du Général Canon" },
  {
    index: "622",
    name: "Retrouvailles pleines d’émotion ! Momonosuke et Kin’emon",
  },
  {
    index: "623",
    name: "L’heure de la séparation — Le départ de Punk Hazard",
  },
  { index: "624", name: "Destruction des G-5 ! L’assaut de Doflamingo !" },
  { index: "625", name: "Tension ! Aokiji contre Doflamingo" },
  { index: "626", name: "César a disparu ! L’alliance pirate attaque !" },
  {
    index: "627",
    name: "Luffy disparu en mer ? La déroute de l’alliance pirate !",
  },

  {
    index: "628",
    name: "Gros revirement de situation ! Le furieux poing explosif de Luffy !",
  },
  {
    index: "629",
    name: "Choc violent ! La grande nouvelle qui chamboule le nouveau monde",
  },
  { index: "630", name: "Aventure ! Dressrosa, pays d’amour et de passion" },
  { index: "631", name: "Enthousiasme tourbillonnant — Colisée Corrida" },
  { index: "632", name: "Amour dangereux — Violette la danseuse" },
  {
    index: "633",
    name: "La plus puissante combattante inconnue ! Lucie apparaît",
  },
  { index: "634", name: "Le prince pirate Cavendish" },
  { index: "635", name: "Rencontre du destin — Bellamy la hyène" },
  { index: "636", name: "Supernova ! Bartolomeo le cannibale" },
  { index: "637", name: "Rivalité des combattants ! Bloc B incandescent !" },
  { index: "638", name: "KO en un coup ! Le King Punch surprenant" },
  {
    index: "639",
    name: "Frappe du poisson combattant ! Percer à travers le pont en acier de la mort",
  },
  { index: "640", name: "Aventure ! L’île des fées, Green Bit" },
  { index: "641", name: "Un monde inconnu — Royaume Tontatta" },
  { index: "642", name: "La stratégie du siècle — Doflamingo bouge" },
  {
    index: "643",
    name: "Le ciel et la terre tremblent ! La véritable puissance de l’amiral Fujitora",
  },
  { index: "644", name: "Un coup de colère ! Le géant contre Lucy" },
  {
    index: "645",
    name: "L’explosion du canon destructeur ! Lucy l’a échappé belle",
  },
  { index: "646", name: "Le pirate légendaire — Chef Chinjao" },
  {
    index: "647",
    name: "Lumière et ombre —Les ténèbres rôdent à Dressrosa !",
  },
  { index: "648", name: "Sortie —Le héros légendaire, Usoland" },
  {
    index: "649",
    name: "La conclusion d’un dur combat — Lucy contre Chinjao",
  },
  { index: "650", name: "Luffy et Rebecca la gladiatrice du destin" },
  {
    index: "651",
    name: "La protéger jusqu’à la fin ! Rebecca et le soldat jouet",
  },
  { index: "652", name: "Le dernier champ de bataille — Combat du bloc D" },
  {
    index: "653",
    name: "Bataille décisive ! Giolla contre l’équipage au chapeau de paille",
  },
  { index: "654", name: "Belle lame ! Cavendish le cheval blanc" },
  { index: "655", name: "Le grand choc ! Sanji contre Doflamingo" },
  {
    index: "656",
    name: "L’épée assassine de Rebecca ! Danse de la lame à l’eau stagnante",
  },
  {
    index: "657",
    name: "Les combattants les plus malchanceux ! Logan contre Rebecca",
  },
  { index: "658", name: "Le choc ! La vraie identité du soldat jouet" },
  { index: "659", name: "L’horrible passé ! Le secret de Dressrosa" },
  { index: "660", name: "Le cauchemar ! La nuit tragique de Dressrosa" },
  {
    index: "661",
    name: "Confrontation de Shichibukai ! Law contre Doflamingo",
  },
  {
    index: "662",
    name: "Les grands rivaux se rencontrent ! Chapeau de paille contre le démon du ciel",
  },
  {
    index: "663",
    name: "Luffy sous le chox —L’homme qui va hériter de la volonté d’Ace",
  },
  { index: "664", name: "Début de l’opération SOP —La charge d’Usoland" },
  { index: "665", name: "Sentiments chauds — Rebecca contre Suleiman" },
  { index: "666", name: "Le choix du gagnant !? La fin du choc du bloc D" },
  {
    index: "667",
    name: "La décision de l’amiral — Fujitora contre Doflamingo",
  },
  { index: "668", name: "Début du round final —Le héros Diamante apparaît" },
  {
    index: "669",
    name: "Le château bouge ! L’officier d’élite Pica débarque",
  },
  {
    index: "670",
    name: "La griffe de dragon éclate ! Le coup menaçant de Lucy !",
  },
  { index: "671", name: "Vaincre Sugar —Les petits soldats attaquent !" },
  { index: "672", name: "La dernière lueur —Le secret de notre capitaine !" },
  { index: "673", name: "L’homme rupture —La grande explosion de Gladius !" },
  { index: "674", name: "Usoland le menteur s’enfuit !" },
  { index: "675", name: "Une rencontre du destin — Kyros et le roi Riku" },
  { index: "676", name: "Échec de l’opération ! Le héros Usoland meurt !?" },
  {
    index: "677",
    name: "La légende est de retour ! L’attaque totale de Kyros !",
  },
  {
    index: "678",
    name: "Explosion du poing de feu ! La puissance du fruit Mera-mera réanimée",
  },
  {
    index: "679",
    name: "Apparition fringuante — Sabo le chef de l’armée révolutionnaire",
  },
  {
    index: "680",
    name: "Le piège du diable —Le plan de destruction totale de Dressrosa",
  },
  { index: "681", name: "Rançon de 500 millions —La cible est Usoland !" },
  {
    index: "682",
    name: "Traversée des lignes ennemies —La contre-attaque de Luffy et Zoro !",
  },
  {
    index: "683",
    name: "La terre tremble — Avènement du dieu géant de la destruction, Pica",
  },
  {
    index: "684",
    name: "Rassemblement en un front puissant ! Luffy et un groupe de combattants brutaux !",
  },
  { index: "685", name: "Progrès constant ! L’armée de Luffy contre Pica !" },
  {
    index: "686",
    name: "Une confession choquante ! Le vœu de Law qui brûle son âme !",
  },
  {
    index: "687",
    name: "Un grand affrontement ! Le chef de l’équipe Sabo contre l’amiral Fujitora",
  },
  { index: "688", name: "Situation désespérée — Luffy pris au piège !" },
  {
    index: "689",
    name: "La grande évasion ! L’éléphant gun miraculeux de Luffy",
  },
  {
    index: "690",
    name: "Un front uni – La percée de Luffy vers la victoire",
  },
  {
    index: "691",
    name: "Le second samurai – Apparition de Kanjuro la douche",
  },
  { index: "692", name: "Lutte avec Pica —Le coup final de Zoro" },
  {
    index: "693",
    name: "La princesse des petits hommes — Mansherry l’emprisonnée",
  },
  {
    index: "694",
    name: "Invulnérable ! La terrifiante armée des poupées entêtantes",
  },
  {
    index: "695",
    name: "Risquer sa vie ! Luffy est l’atout vers la victoire",
  },
  { index: "696", name: "Réunion larmoyante — Rebecca et Kyros" },
  { index: "697", name: "Coup mortel ! L’homme qui sauve Dressrosa" },
  {
    index: "698",
    name: "La colère éclate —Le stratagème ultime de Luffy et Law !",
  },
  {
    index: "699",
    name: "Une famille noble —La véritable identité de Doflamingo !",
  },
  { index: "700", name: "Le pouvoir ultime —Le secret du fruit Ope-Ope !" },
  {
    index: "701",
    name: "Tristes souvenirs — Law l’enfant de la ville blanche !",
  },
  { index: "702", name: "Dragon céleste. Le tumultueux passé de Doffy !" },
  {
    index: "703",
    name: "Le chemin des souffrances. Law et Corazon : un voyage pour la vie !",
  },
  {
    index: "704",
    name: "Le temps est compté. À la recherche du fruit du bistouri !",
  },
  {
    index: "705",
    name: "L’instant crucial. Le sourire d’adieu de Corazon !",
  },
  {
    index: "706",
    name: "Va, Law. Le combat final de l’homme au grand cœur !",
  },
  { index: "707", name: "Vers la liberté. L’Injection Shot de Law !" },
  { index: "708", name: "Un combat brûlant : Law contre Doflamingo" },
  { index: "709", name: "Face au lieutenant. Le fier Hajrudin !" },
  {
    index: "710",
    name: "Le duel de l’amour. Sai le nouveau « Don » contre Baby 5 !",
  },
  {
    index: "711",
    name: "La fierté d’un homme. La dernière charge de Bellamy !",
  },
  {
    index: "712",
    name: "Tornade et raz de marée. L’étalon blanc contre Dellinger !",
  },
  {
    index: "713",
    name: "Le fruit de la barrière. Un hommage coup de poing !",
  },
  {
    index: "714",
    name: "La princesse guérisseuse. Il faut sauver Manshelly !",
  },
  { index: "715", name: "Un duel d’hommes. Requiem pour l’amour de Señor" },
  { index: "716", name: "Mortelle pluie d’étoiles. Diamante se déchaîne !" },
  { index: "717", name: "Trueno Bastardo ! La colère de Kyros s’abat !" },
  {
    index: "718",
    name: "Une sacrée balade. Tactique surprise du géant Pica !",
  },
  {
    index: "719",
    name: "Duel décisif dans les airs. Zoro dévoile son arcane !",
  },
  { index: "720", name: "Adieu. La dernière charge de Bellamy !" },
  { index: "721", name: "Law trépasse. L’attaque enragée de Luffy !" },
  {
    index: "722",
    name: "La lame de la vengeance. La riposte du Gamma Knife",
  },
  { index: "723", name: "Bataille de fluides. Luffy contre Doflamingo !" },
  { index: "724", name: "Invulnérable. L’étonnant secret de Trébol !" },
  { index: "725", name: "Explosion de fureur. Je m’occupe de tout !" },
  { index: "726", name: "Gear Fourth. Le prodigieux Bound Man !" },
  { index: "727", name: "Terrible contre-attaque. L’éveil de Doflamingo" },
  { index: "728", name: "Luffy. Tout miser sur le Leo Bazooka !" },
  {
    index: "729",
    name: "Flamme du dragon impérial. Luffy doit rester en vie",
  },
  { index: "730", name: "Les larmes miraculeuses. Le combat de Manshelly" },
  {
    index: "731",
    name: "Jusqu’à notre dernier soupir. Bloquer la cage mortelle !",
  },
  { index: "732", name: "La vie ou la mort. Épique compte à rebours" },
  { index: "733", name: "Défier le ciel. Le King Kong Gun de la colère !" },
  {
    index: "734",
    name: "Vers la liberté. Dressrosa laisse éclater sa joie !",
  },
  {
    index: "735",
    name: "Du jamais vu. La décision stupéfiante de Fujitora !",
  },
  { index: "736", name: "Onde de choc. La génération terrible en action !" },
  {
    index: "737",
    name: "Naissance d’une légende. Les aventures de Sabo, le révolutionnaire !",
  },
  {
    index: "738",
    name: "Les liens fraternels. L’envers des retrouvailles !",
  },
  {
    index: "739",
    name: "La plus terrible des créatures. Kaido aux cents bêtes !",
  },
  {
    index: "740",
    name: "Fujitora passe à l’action. L’Équipage au Chapeau de paille encerclé !",
  },
  { index: "741", name: "Situation de crise. Rebecca est enlevée !" },
  { index: "742", name: "Un père et sa fille. Kyros et Rebecca !" },
  {
    index: "743",
    name: "La fierté d’un homme. Luffy contre Fujitora, l’affrontement !",
  },
  { index: "744", name: "Pris au piège. L’implacable amiral Fujitora !" },
  {
    index: "745",
    name: "Le coupe des vassaux. L’armada du chapeau de paille !",
  },
  { index: "746", name: "Âpres rivalités. Les prodiges du Nouveau Monde !" },
  {
    index: "747",
    name: "La Forteresse d’argent. Luffy et Barto partent à l’aventure !",
  },
  {
    index: "748",
    name: "Labyrinthe souterrain. Luffy contre l’homme-wagon !",
  },
  {
    index: "749",
    name: "Des lames chauffées à blanc. Law et Zoro à la rescousse !",
  },
  {
    index: "750",
    name: "La situation est désespérée. Un combat brûlant pour Luffy !",
  },
  {
    index: "751",
    name: "Le début d’une nouvelle aventure — Arrivée sur l’île mystérieuse « Zô » !",
  },
  {
    index: "752",
    name: "La légende du nouveau Shichibukai —L’apparition du fils de Barbe blanche",
  },
  {
    index: "753",
    name: "Grimper sur l’éléphant désespéré ! Grande aventure sur le dos de l’éléphant géant !",
  },
  { index: "754", name: "Le combat démarre ! Luffy contre la tribu Mink !" },
  { index: "755", name: "Garchu ! L’équipage Mugiwara réuni" },
  {
    index: "756",
    name: "Début de la contre-attaque ! Gros succès de l’équipage au chapeau tournoyant !",
  },
  {
    index: "757",
    name: "Invasion de la menace ! L’équipage pirates animaux : Jack !",
  },
  { index: "758", name: "Le roi du jour — Arrivée du duc Chien-tempête !" },
  { index: "759", name: "Le roi de la nuit — Apparition du duc Chat-vipère" },
  {
    index: "760",
    name: "Destruction de la capitale — Atterrissage de l’équipage au chapeau tournoyant !",
  },
  {
    index: "761",
    name: "Course contre la montre —Les liens de l’équipage avec la tribu Mink !",
  },
  {
    index: "762",
    name: "Le retour du garnement —L’assassin de l’empereur Big Mom",
  },
  {
    index: "763",
    name: "La vérité sur sa disparition —L’invitation surprise de Sanji",
  },
  { index: "764", name: "À mes amis ! Le message d’adieu de Sanji" },
  { index: "765", name: "Allons à la rencontre de maître Chat-vipère !" },
  {
    index: "766",
    name: "La décision de Luffy ! Sanji au bord de l’abandon !",
  },
  {
    index: "767",
    name: "Situation volatile —Le chien, le chat et le samouraï !",
  },
  {
    index: "768",
    name: "Le troisième ! Le ninja Raizo de la brume apparaît !",
  },
  { index: "769", name: "La pierre rouge ! Un guide vers le One Piece" },
  {
    index: "770",
    name: "Le secret du pays de Wano —Le clan Kozuki et les Ponégliphes",
  },
  { index: "771", name: "Un vœu entre hommes — Luffy et Momonosuke Kozuki" },
  {
    index: "772",
    name: "Le voyage légendaire —Le chien et le chat et le roi des pirates",
  },
  {
    index: "773",
    name: "Le cauchemar recommence ! L’attaque féroce de l’invicible Jack !",
  },
  {
    index: "774",
    name: "Une bataille pour défendre Zou ! Luffy et Zunesha !",
  },
  {
    index: "775",
    name: "Sauver Zunesha ! L’opération de sauvetage des chapeaux de paille !",
  },
  {
    index: "776",
    name: "Les adieux et la descente de l’éléphant — Départ vers la récupération de Sanji !",
  },
  {
    index: "777",
    name: "Vers le Reverie ! Princesse Vivi et Princesse Shirahoshi !",
  },
  {
    index: "778",
    name: "Vers le Reverie ! Rebecca et le royaume des cerisiers !",
  },
  {
    index: "779",
    name: "Le retour de Kaido ! Une menace imminente pour la pire génération !",
  },
  {
    index: "780",
    name: "Opération « J’ai-les-crocs ». Luffy et la relève de la Marine !",
  },
  {
    index: "781",
    name: "Un trio impitoyable. Tous contre les chapeaux de paille !",
  },
  {
    index: "782",
    name: "Poings démoniaques. Luffy contre Grount : l’affrontement !",
  },
  {
    index: "783",
    name: "Retrouvailles avec Sanji —Dans le territoire de Big Mom !",
  },
  { index: "784", name: "Rencontre de 0 et 4 ! Germa 66" },
  { index: "785", name: "Crise du poison mortel — Luffy et Reiju !" },
  { index: "786", name: "Totto Land! Apparition de l’Impératrice Big Mom !" },
  {
    index: "787",
    name: "La fille de l’Impératrice – Pudding la fiancée de Sanji",
  },
  {
    index: "788",
    name: "Attaque massive ! La faim de Mom frappe ! (14 mai 2017)`",
  },
  { index: "789", name: "La capitale s’effondre !? Big Mom et Jinbei" },
  {
    index: "790",
    name: "Le château des quatre Empereurs — Arrivée sur l’île Whole Cake",
  },
  { index: "791", name: "Une étrange forêt ! Luffy contre Luffy" },
  {
    index: "792",
    name: "L’assassin de Mom — Luffy et les bois séduisants !",
  },
  { index: "793", name: "Le pays marin — Judge le roi de Germa" },
  { index: "794", name: "La confrontation père-fils — Judge contre Sanji !" },
  { index: "795", name: "Une ambition géante — Big Mom et César" },
  {
    index: "796",
    name: "Le pays des âmes —La puissance redoutable de Big Mom !",
  },
  {
    index: "797",
    name: "Grand officier ! Apparition du troisième général Cracker",
  },
  {
    index: "798",
    name: "Un ennemi à 800 millions — Luffy contre Cracker aux mille mains",
  },
  {
    index: "799",
    name: "Rencontre à pleine puissance — Gear 4 contre le pouvoir Bisu Bisu",
  },
  { index: "800", name: "Fusion de 1 et 2 ! La famille Vinsmoke" },
  {
    index: "801",
    name: "La vie du bienfaiteur ! Sanji et le propriétaire Zeff !",
  },
  { index: "802", name: "Sanji en colère ! Le secret de Germa 66 !" },
  { index: "803", name: "Le passé qu’il a abandonné : Vinsmoke Sanji !" },
  { index: "804", name: "Vers East Blue – La décision déterminée de Sanji" },
  {
    index: "805",
    name: "Une bataille de limites ! Luffy et les biscuits infinis !",
  },
  {
    index: "806",
    name: "Puissance de la plénitude —Le nouveau Gear 4 Tankman !",
  },
  {
    index: "807",
    name: "Duel douloureux — Luffy contre Sanji",
  },
  {
    index: "808",
    name: "Duel douloureux — Luffy contre Sanji",
  },
  {
    index: "809",
    name: "Une tempête de vengeance ! Une armée enragée vient attaquer !",
  },
  {
    index: "810",
    name: "La fin de l’aventure ! La proposition résolue de Sanji !",
  },
  { index: "811", name: "J’attends ici ! Luffy contre l’armée enragée !" },
  { index: "812", name: "Infiltrez le château ! Le Ponéglyphe Road" },
  { index: "813", name: "Face à face — Luffy et Big Mom" },
  {
    index: "814",
    name: "Cri de l’âme —La stratégie éclair de Brook et Pedro",
  },
  { index: "815", name: "Au revoir —La détermination des larmes de Pudding" },
  {
    index: "816",
    name: "Le destin de l’œil gauche — Pedro contre Baron Tamago",
  },
  {
    index: "817",
    name: "Cigarette mouillée —La nuit avant mariage de Sanji",
  },
  { index: "818", name: "L’âme intrépide ! Brook contre Big Mom !" },
  { index: "819", name: "Le vœu de Sora ! Le ratage de Germa — Sanji !" },
  {
    index: "820",
    name: "Retourner vers Sanji —La grande ruée de la contre-attaque de Luffy",
  },
  {
    index: "821",
    name: "Le château dans la tourmente ! Luffy au rendez-vous !",
  },
  {
    index: "822",
    name: "Déterminé à dire adieu — Sanji et le bento Chapeau de paille",
  },
  {
    index: "823",
    name: "Le retournement de l’empereur — Grande opération de sauvetage de Brook !",
  },
  {
    index: "824",
    name: "Le lieu de la promesse — Luffy en un contre un à sa limite",
  },
  { index: "825", name: "Menteur — Luffy et Sanji" },
  {
    index: "826",
    name: "Sanji revient — Cassage ! La fête du thé de l’enfer",
  },
  {
    index: "827",
    name: "Rencontre secrète ! Luffy contre l’équipage pirate Fire Tank",
  },
  {
    index: "828",
    name: "Le pacte meurtrier —Les forces alliées de Luffy et Bege",
  },
  {
    index: "829",
    name: "Luffy juste avant la représentation ! Les conspirations de la cérémonie de mariage",
  },
  { index: "830", name: "La famille se réunit ! La fête du thé de l’enfer" },
  { index: "831", name: "Couple masqué — Entrée de Sanji ♡ Pudding !" },
  {
    index: "832",
    name: "Baiser mortel — Début de la mission pour assassiner l’impératrice !",
  },
  { index: "833", name: "Le verre retour ! Jinbei le viril paye sa dette" },
  {
    index: "834",
    name: "Échec de la mission !? Contre-attaque de l’équipage Big Mom",
  },
  { index: "835", name: "Cours Sanji — SOS ! Germa 66" },
  {
    index: "836",
    name: "Le secret de Mom —L’île des géants et le petit monstre",
  },
  { index: "837", name: "La naissance de Mom —Le jour où Carmel a disparu" },
  {
    index: "838",
    name: "Explosion des armes ! Le moment de l’assassinat de Big Mom",
  },
  { index: "839", name: "Transformation de l’armée du mal ! Germa 66" },
  { index: "840", name: "Casser la relation père-fils ! Sanji et Judge" },
  { index: "841", name: "Fuir la fête ! Luffy contre Big Mom" },
  {
    index: "842",
    name: "L’exécution commence ! L’alliance de Luffy anéantie !?",
  },
  {
    index: "843",
    name: "Effondrement du château —La grande évasion des Chapeau de paille commence",
  },
  { index: "844", name: "La lance des géants — Assaut ! Big Mom volante" },
  {
    index: "845",
    name: "La détermination de Pudding —Sur une grande flamme active ! Les bois séduisants",
  },
  {
    index: "846",
    name: "L’éclair de contre-attaque — Nami et Zeus le nuage d’orage",
  },
  {
    index: "847",
    name: "Réunion fortuite — Sanji et méchante Pudding amoureuse",
  },
  {
    index: "848",
    name: "Sauver le Sunny Go — Combat de bravoure ! Chopper et Brook",
  },
  { index: "849", name: "Avant l’aube — Pedro, le capitaine des gardiens" },
  {
    index: "850",
    name: "Je reviendrai —Le départ à la vie à la mort de Luffy !",
  },
  {
    index: "851",
    name: "L’homme à un milliard —Le plus fort des généraux Sweet, Katakuri",
  },
  { index: "852", name: "Début du combat — Luffy contre Katakuri" },
  {
    index: "853",
    name: "La chambre de Nami — Jinbei le mousquetaire sans égal",
  },
  {
    index: "854",
    name: "La menace de la taupe —Le combat silencieux de Luffy",
  },
  {
    index: "855",
    name: "La fin du combat à mort !? Le réveil en colère de Katakuri",
  },
  { index: "856", name: "Le secret interdit — La collation de Katakuri" },
  {
    index: "857",
    name: "La contre-attaque de Luffy — Le point faible de l’invincible Katakuri",
  },
  {
    index: "858",
    name: "Nouvelle crise ! Gear 4 contre l’imbattable Donuts",
  },
  {
    index: "859",
    name: "Chiffon la rebelle —Le grand plan de Sanji pour transporter le gâteau",
  },
  {
    index: "860",
    name: "La façon de vivre d’un homme —La détermination des capitaines Bege et Luffy",
  },
  {
    index: "861",
    name: "Le gâteau a coulé ?! Le combat d’échappée de Sanji et Bege !",
  },
  {
    index: "862",
    name: "Suron — La grande transformation mystique de Carrot",
  },
  {
    index: "863",
    name: "Percez à travers — La grande bataille navale de l’équipage au Chapeau de paille !",
  },
  {
    index: "864",
    name: "Enfin le clash — L’impératrice contre l’équipage au Chapeau de paille",
  },
  {
    index: "865",
    name: "Les préceptes directs du roi sombre ! La bataille contre Katakuri prend un tournant !",
  },
  {
    index: "866",
    name: "Finalement, le retour — Sanji, l’homme qui va arrêter l’impératrice",
  },
  {
    index: "867",
    name: "Il se cache dans l’obscurité —L’assassin frappe Luffy !",
  },
  {
    index: "868",
    name: "La détermination d’un homme —Le grand combat de Katakuri au péril de sa vie",
  },
  {
    index: "869",
    name: "Réveille-toi —La couleur d’observation capable de dépasser la meilleure d’entre elles",
  },
  {
    index: "870",
    name: "Un poing de rapidité divine — Activation d’un nouveau Gear 4 !",
  },
  {
    index: "871",
    name: "Enfin la conclusion — L’issue d’un combat féroce avec Katakuri",
  },
  {
    index: "872",
    name: "Situation désespérée ! Luffy dans un piège étanche !",
  },
  {
    index: "873",
    name: "Revenus d’entre les morts — Germa les renforts les plus puissants !",
  },
  { index: "874", name: "Le dernier bastion. L’équipage du Soleil" },
  {
    index: "875",
    name: "Une saveur enivrante. Sanji ou le gâteau du bonheur",
  },
  {
    index: "876",
    name: "L’homme au code d’honneur. Un courant défiant la mor",
  },
  {
    index: "877",
    name: "Le temps des adieux. Le dernier souhait de Pudding",
  },
  {
    index: "878",
    name: "Surprise du monde —L’arrivée du cinquième empereur de la mer !",
  },
  {
    index: "879",
    name: "Rassemblement vers Reverie ! Les membres amis du Chapeau de paille",
  },
  {
    index: "880",
    name: "Sabo bouge — Apparition des capitaines de l’armée révolutionnaire !",
  },
  {
    index: "881",
    name: "Début de mouvement —Le nouvel amiral obsédé Sakazuki",
  },
  {
    index: "882",
    name: "La guerre du sommet —La volonté du roi des pirates a réussi",
  },
  { index: "883", name: "Un pas vers le rêve — Shirahoshi sous le soleil !" },
  {
    index: "884",
    name: "Je veux les voir —Les sentiments de Vivi et Rebecca",
  },
  {
    index: "885",
    name: "Les ténèbres du lieu saint —La mystérieux chapeau de paille géant",
  },
  {
    index: "886",
    name: "Le lieu saint tumultueux —La princesse Shirahoshi est ciblée !",
  },
  { index: "887", name: "Deux empereurs visent Luffy" },
  {
    index: "888",
    name: "Sabo s’énerve — Tragédie de Kuma, officier de l’armée révolutionnaire",
  },
  {
    index: "889",
    name: "Finalement, ça commence ! Reverie pleine de conspirations !",
  },
  { index: "890", name: "Marco. Le gardien du souvenir !" },
  {
    index: "891",
    name: "La remontée de la cascade. À l’assaut de Wano ! (30 juin 2019) ",
  },
  { index: "892", name: "Le pays de Wano. Samouraïs et fleurs de cerisiers" },
  {
    index: "893",
    name: "O-Tama entre en scène. Luffy contre les troupes de Kaido !",
  },
  { index: "894", name: "Je reviendrai. La légende de Ace à Wano !" },
  {
    index: "895",
    name: "Chapitre inédit. Cidre, le terrible chasseur de primes !",
  },
  {
    index: "896",
    name: "Chapitre inédit. Fin du combat : Luffy contre le roi du gaz carbonique !",
  },
  {
    index: "897",
    name: "Il faut sauver O-Tama. Cavalcade à travers les friches !",
  },
  { index: "898", name: "La vedette. Hawkins le magicien abat ses cartes !" },
  {
    index: "899",
    name: "Le spectre de la défaite. Attaque du géant de paille !",
  },
  {
    index: "900",
    name: "Le plus beau jour de sa vie. O-Tama et la soupe de haricot rouge !",
  },
  {
    index: "901",
    name: "Irruption en territoire ennemi. Bakura, la ville des fonctionnaires !",
  },
  {
    index: "902",
    name: "Le combat du yokozuna. L’invincible Urashima contre fleurette à O-Kiku !",
  },
  { index: "903", name: "Combat de sumo. Luffy affronte le yokozuna !" },
  { index: "904", name: "La colère de Luffy. À la rescousse d’O-Tama !" },
  { index: "905", name: "Libérons O-Tama. L’affrontement contre Holdem !" },
  { index: "906", name: "Le duel. Magicien contre chirurgien de la mort !" },
  { index: "907", name: "Épisode spécial 20ème anniversaire. Romance Dawn" },
  {
    index: "908",
    name: "Arrivée du vaisseau trésor — Luffytaro renvoie la faveur !",
  },
  {
    index: "909",
    name: "Mystérieuses pierres tombales. Retrouvailles au château !",
  },
  { index: "910", name: "Samouraï légendaire. L’homme qui éblouit Roger !" },
  {
    index: "911",
    name: "Détrôner l’empereur. Une opération secrète est lancée",
  },
  { index: "912", name: "Le plus fort. Shutenmaru, chef des brigands !" },
  { index: "913", name: "L’équipage décimé. Le souffle ardent de Kaido !" },
  {
    index: "914",
    name: "L’heure du choc est arrivée. Luffy, enragé, contre Kaido !",
  },
  { index: "915", name: "Destruction. Le Grondement du tonnerre divin !" },
  {
    index: "916",
    name: "L’enfer sous terre. Luffy et l’ignominie minière !",
  },
  {
    index: "917",
    name: "Grabuge en Terre Sainte. L’empereur Barbe Noire n’a peur de rien !",
  },
  { index: "918", name: "En avant. Un complot pour renverser Kaido !" },
  { index: "919", name: "Remue-ménage. Les prisonniers, Luffy et Kidd !" },
  {
    index: "920",
    name: "Un succès fou. Les nouilles spéciales à la Sanji ! !",
  },
  {
    index: "921",
    name: "Somptueuse et éblouissante. Komurasaki, courtisane de Wano !",
  },
  {
    index: "922",
    name: "Yakuzas et samouraïs. Le voyage de Zoro et Tonoyasu !",
  },
  { index: "923", name: "Urgence. Big Mom en approche !" },
  {
    index: "924",
    name: "Chahut dans la capitale. Un autre assassin cible Sanji !",
  },
  { index: "925", name: "Grand succès. Justice d’O-Soba Mask!" },
  {
    index: "926",
    name: "Situation désespérée — Menace de foule dans le jardin Orochi",
  },
  {
    index: "927",
    name: "Lieu de combat ! Orochi le général grand serpent redouté",
  },
  {
    index: "928",
    name: "Un pétale s’envole. La grande beauté de Wa s’éteint !",
  },
  {
    index: "929",
    name: "L’Amitié derrière les barreaux. Luffy et le vieux Hyo !",
  },
  { index: "930", name: "Une superstar entre en scène. Queen la Pandémie !" },
  {
    index: "931",
    name: "À l’assaut de la muraille. Luffy tente de s’échapper !",
  },
  { index: "932", name: "La vie ou la mort. Le Sumo Inferno de Queen !" },
  { index: "933", name: "Gyukimaru. Duel sur le pont des détrousseurs !" },
  {
    index: "934",
    name: "Retournement de situation. Le style à trois sabres détournant la mort !",
  },
  {
    index: "935",
    name: "Zoro stupéfait. La vraie identité de la mystérieuse beauté !",
  },
  {
    index: "936",
    name: "Entraînement. Le courant, le fluide du pays des Wa !",
  },
  {
    index: "937",
    name: "Un Yasu boiteux. La coqueluche du village d’Ebisu !",
  },
  {
    index: "938",
    name: "Rencontre facile. L’identité du voleur de minuit !",
  },
  { index: "939", name: "Malédiction. Départ en chanson de Tonoyasu !" },
  { index: "940", name: "Cruauté. La vérité sur les SMILES !" },
  {
    index: "941",
    name: "Les larmes de Toko. Les balles douloureuses d’Orochi !",
  },
  {
    index: "942",
    name: "Intrusion des chapeaux de paille. Bataille sur le lieu d’exécution !",
  },
  { index: "943", name: "La détermination de Luffy. Fin du Sumo Inferno !" },
  {
    index: "944",
    name: "Arrivée d’une tempête. Grande fringale de Big Mom !",
  },
  {
    index: "945",
    name: "Une envie de pâte de haricot rouge. Luffy dans une situation critique !",
  },
  { index: "946", name: "Une plate-forme coupée. Luffy défie O-Lin !" },
  { index: "947", name: "Arrêter l’Impératrice. Le plan de Queen !" },
  {
    index: "948",
    name: "Une arme puissante. Les balles pandémiques menaçent Luffy !",
  },
  { index: "949", name: "Je suis venu pour gagner. Luffy hurle à la mort !" },
  {
    index: "950",
    name: "Le rêve des guerriers ! La conquête d’Udon par Luffy !",
  },
  {
    index: "951",
    name: "Les poursuivants d’Orochi. L’armée ninja attaque Zoro !",
  },
  {
    index: "952",
    name: "Onigashima sous tension. Rencontre entre deux Empereurs ?!",
  },
  {
    index: "953",
    name: "La confession d’Hiyori. Réunion sur le pont des brigands !",
  },
  { index: "954", name: "« Son nom est Enma ! Les grandes épées d’Oden ! »" },
  {
    index: "955",
    name: "« Une nouvelle alliance ? ! L’armée de Kaido se rassemble ! »",
  },
  {
    index: "956",
    name: "« Le compte à rebours avant la grande bataille ! Les Chapeaux de paille passent en mode combat ! »",
  },
  {
    index: "957",
    name: "« Grande nouvelle ! Un incident qui affectera les sept seigneurs de la guerre ! »",
  },
  { index: "958", name: "« Une bataille légendaire ! Garp et Roger ! »" },
  {
    index: "959",
    name: "« Le port de rendez-vous ! L’acte trois du Pays de Wano commence ! »",
  },
  {
    index: "960",
    name: "« Le samouraï numéro un du pays de Wano ! Voici Kozuki Oden ! »",
  },
  {
    index: "961",
    name: "« Jurant l’allégeance avec larmes ! Oden et Kin’emon ! »",
  },
  {
    index: "962",
    name: "« Le destin change ! Les Pirates de Barbe Blanche jetés à terre ! »",
  },
  {
    index: "963",
    name: "« La détermination d’Oden ! L’épreuve de Barbe Blanche ! »",
  },
  {
    index: "964",
    name: "« Le petit frère de Barbe Blanche ! La grande aventure d’Oden ! »",
  },
  { index: "965", name: "« Croiser les épées ! Roger et Barbe Blanche ! »" },
  { index: "966", name: "« Le souhait de Roger ! Un nouveau voyage ! »" },
  { index: "967", name: "« Consacrer sa vie ! L’aventure de Roger ! »" },
  {
    index: "968",
    name: "« La naissance du roi pirate – Arrivée ! La dernière île »",
  },
  {
    index: "969",
    name: "« Au pays de Wano ! Les Pirates de Roger se dissolvent ! »",
  },
  {
    index: "970",
    name: "« Triste nouvelle ! L’ouverture de la Grande Ère Pirate ! »",
  },
  { index: "971", name: "« Raid ! Oden et les Neufs d’Akazaya ! »" },
  { index: "972", name: "« La fin de la bataille ! Oden contre Kaido ! »" },
  {
    index: "973",
    name: "« Bouillie à mort ! La lutte d’une heure d’Oden ! »",
  },
  {
    index: "974",
    name: "Oden ne serait pas Oden s’il n’était pas bouilli !",
  },
  { index: "975", name: "Le château en feu ! Le destin du clan Kozuki !" },
  { index: "976", name: "Retour au présent ! Au-delà de 20 ans" },
  { index: "977", name: "Pirates en mer ! Raid ! En route pour Onigashima" },
  {
    index: "978",
    name: "La pire des générations charge ! La bataille de la mer démontée !",
  },
  { index: "979", name: "De la chance !? Le plan du leader Kin’emon" },
  {
    index: "980",
    name: "La promesse des larmes ! Le kidnapping de Momonosuke",
  },
  {
    index: "981",
    name: "Un nouveau compagnon ! Le Chevalier de la Mer Jinbe !",
  },
  {
    index: "982",
    name: "La carte maîtresse de Kaido – Présentation du Tobi Roppo.",
  },
  {
    index: "983",
    name: "« Le sérieux des samouraïs » ! L’équipage débarque à Onigashima",
  },
  {
    index: "984",
    name: "La rage de Luffy ? ! Infiltration du banquet de Kaido",
  },
  {
    index: "985",
    name: "Sentiments envers Otama – Le coup furieux de Luffy",
  },
  {
    index: "986",
    name: "Musique de combat ! La possibilité d’attaquer Luffy !",
  },
  { index: "987", name: "Son rêve brisé ? ! Le piège qui attire Sanji !" },
  { index: "988", name: "Les renforts arrivent !" },
  {
    index: "989",
    name: "Le serment de l’homme ! La bataille féroce du Brachio-Tank",
  },
  { index: "990", name: "Thunder Bagua ! L’apparition du fils de Kaido" },
  { index: "991", name: "Ennemi ou allié ? Luffy et Yamato !" },
  { index: "992", name: "Le désir d’être Oden ! Le rêve de Yamato !" },
  {
    index: "993",
    name: "Explosif ? ! Les menottes qui entravent la liberté de Yamato !",
  },
  { index: "994", name: "Un contre un – Kikunojo vs Kanjuro" },
  { index: "995", name: "Raid ! Hériter de la volonté d’Oden" },
  {
    index: "996",
    name: "Onigashima en tumulte – La guerre totale de Luffy commence",
  },
  {
    index: "997",
    name: "Berserker de combat au clair de lune – « Lion de la lune »",
  },
  {
    index: "998",
    name: "La rébellion de Zeus ? ! La situation désespérée de Nami !",
  },
  { index: "999", name: "Le destin qui vous protège – Yamato et Momonosuke" },
  {
    index: "1000",
    name: "Une force écrasante ! Les Pirates du Chapeau de Paille se réunissent",
  },
  {
    index: "1001",
    name: "Une invitation dangereuse ! Plan d’éradication de la reine",
  },
  { index: "1002", name: "Une nouvelle querelle ! Nami et Ulti" },
  {
    index: "1003",
    name: "Une lame héroïque ! Akazaya contre Kaido, encore une fois !",
  },

  {
    index: "1004",
    name: "Le secret passe de main. Que s’abatte la lame d’Oden !",
  },
  {
    index: "1005",
    name: "La force des démons de glace. Une nouvelle balle excidémique !",
  },
  { index: "1006", name: "Tu vas payer. La détermination de Chopper !" },
  {
    index: "1007",
    name: "La résolution de Chopper. Une poursuite en solo !",
  },
  { index: "1008", name: "La reddition de Nami ? Ulti Head-Gun !" },
  {
    index: "1009",
    name: "L’attaque de Sasaki. La division blindée affronte Yamato !",
  },
  {
    index: "1010",
    name: "La fin des démons. Chopper et la tactique du feu !",
  },
  { index: "1011", name: "Hors de question. L’araignée qui leurre Sanji !" },
  {
    index: "1012",
    name: "Un revers de fortune. Les flammes de Marco le Phénix !",
  },
  {
    index: "1013",
    name: "Le passé de Yamato. L’homme qui visait la tête d’un Empereur !",
  },
  {
    index: "1014",
    name: "Les larmes de Marco. Les liens de l’équipage de Barbe Blanche !",
  },
  {
    index: "1015",
    name: "Luffy au Chapeau de paille. L’homme qui deviendra le roi des pirates !",
  },
  {
    index: "1016",
    name: "Bataille de monstres. Trois capitaines têtus les uns envers les autres !",
  },
  {
    index: "1017",
    name: "Déluges d’attaques. La génération terrible s’acharne !",
  },
  {
    index: "1018",
    name: "Kaido s’esclaffe. Les Empereurs contre la génération terrible !",
  },
  { index: "1019", name: "Le plan secret de Tama. Opération Kibi Dango !" },
  { index: "1020", name: "Le cri de Sanji. Le SOS qui résonne sur l’île !" },
  { index: "1021", name: "Spank explosif. Sanji et son mal des femmes !" },
  { index: "1022", name: "Pas de regrets. Le lien entre Luffy et le chef !" },
  { index: "1023", name: "Prêts, feu. Chopper Nebulizer !" },
  {
    index: "1024",
    name: "Oden apparaît ! Les cœurs confus des membres de l’Akazaya !",
  },
  {
    index: "1025",
    name: "La fin de la génération terrible. Les Empereurs sortent le grand jeu !",
  },
  {
    index: "1026",
    name: "La contre-attaque des supernovas. Opération séparation des Empereurs !",
  },
  {
    index: "1027",
    name: "Protéger Luffy. Les techniques au sabre de Zoro et Law !",
  },
  {
    index: "1028",
    name: "Au-delà de l’Empereur. La contre-attaque du poing d’acier de Luffy !",
  },
  {
    index: "1029",
    name: "Vagues souvenirs. Luffy et Uta, la fille du Roux !",
  },
  { index: "1030", name: "La promesse d’une nouvelle ère. Luffy et Uta !" },
  {
    index: "1031",
    name: "Les cris de Nami. Course désespérée contre la mort !",
  },
  {
    index: "1032",
    name: "L’aube point sur Wano. De l’huile sur le feu de la guerre totale !",
  },
  {
    index: "1033",
    name: "L’apothéose du combat. Le poing au fluide royal de Luffy !",
  },
  { index: "1034", name: "Luffy défait. Son équipage à la peine !" },
  { index: "1035", name: "Les cent bêtes se déchaînent. La fin de Kozuki !" },
  {
    index: "1036",
    name: "Combat contre la nuit noire. Le commandant en chef du pays des Wa rugit !",
  },
  {
    index: "1037",
    name: "Croire en Luffy. La contre-attaque de l’alliance commence !",
  },
  {
    index: "1038",
    name: "L’attaque spéciale de Nami. L’instant décisif d’O-Tama !",
  },
  {
    index: "1039",
    name: "De nouveaux alliés. Les chapeaux de paille contre-attaquent !",
  },
  { index: "1040", name: "La fierté d’un timonier. La colère de Jinbe !" },
  { index: "1041", name: "Bataille de monstres. Yamato et Franky !" },
  {
    index: "1042",
    name: "Le piège de la prédatrice. La séduction de Black Maria !",
  },
  {
    index: "1043",
    name: "Trancher le cauchemar. L’épée glaciale de Brook !",
  },
  { index: "1044", name: "Clutch. L’incarnation démoniaque de Robin !" },
  { index: "1045", name: "Maudit. La menace imminente sur Kidd et Zoro !" },
  {
    index: "1046",
    name: "Une bataille à gros enjeux. Les deux ailes sur le terrain !",
  },
  { index: "1047", name: "Levée de l’aube. Le dragon rose fait rage !" },
  {
    index: "1048",
    name: "Jusqu’au futur. Yamato et la volonté du grand sabreur !",
  },
  { index: "1049", name: "Luffy s’envole. Vengeance sur les cent bêtes !" },
  {
    index: "1050",
    name: "Deux dragons ensemble. La résolution de Momonosuké !",
  },
  {
    index: "1051",
    name: "Le retour de la légende. Le poing céleste de Luffy !",
  },
  { index: "1052", name: "Levée du vent et nuages. La fin d’Onigashima !" },
  {
    index: "1053",
    name: "La mutation de Sanji. Lumière jaune des deux ailes !",
  },
  {
    index: "1054",
    name: "Sacrifice pour son camarade. Le pari mortel de Killer !",
  },
  {
    index: "1055",
    name: "Le plan secret des ténèbres. Onigashima s’enflamme !",
  },
  {
    index: "1056",
    name: "Contre-attaque. L’alliance de Law et Kidd riposte !",
  },
  { index: "1057", name: "Pour Luffy. Le serment de Sanji et Zoro !" },
  {
    index: "1058",
    name: "Moine enflammé en approche. Le piège d’Orochi se referme !",
  },
  {
    index: "1059",
    name: "Zoro en difficulté. Le monstrueux King l’incendie !",
  },
  { index: "1060", name: "Le secret d’Enma. Le sabre confié à Zoro !" },
  { index: "1061", name: "Un coup démoniaque. Sanji contre Queen !" },
  {
    index: "1062",
    name: "Seigneur des enfers, technique à trois sabres. Zoro contre King !",
  },
  { index: "1063", name: "Luffy accélère. Le tournant de la nouvelle ère !" },
  {
    index: "1064",
    name: "Ivresse du dragon divin. Un dragon anarchique attaque Luffy !",
  },
  {
    index: "1065",
    name: "La fin d’une alliance ? Que s’enflamme la volonté de la nouvelle génération !",
  },
  {
    index: "1066",
    name: "La conclusion approche. L’ultime attaque de l’onde de choc et du magnétisme !",
  },
  {
    index: "1067",
    name: "Vers une nouvelle ère. La victoire des petits diables !",
  },
  {
    index: "1068",
    name: "La princesse de la lune. La situation finale du pays des Wa !",
  },
  {
    index: "1069",
    name: "Il n’y aura qu’un seul vainqueur. Luffy contre Kaido !",
  },
  { index: "1070", name: "Luffy vaincu ? La détermination de l’alliance !" },
  { index: "1071", name: "Luffy à son apogée. Gear Fifth !" },
  {
    index: "1072",
    name: "Un pouvoir extravagant. Le Gear Fifth en pratique !",
  },
  { index: "1073", name: "Nul part où fuir. L’enfer sur Onigashima !" },
  { index: "1074", name: "Croire en Momo. L’attaque finale de Luffy !" },
  {
    index: "1075",
    name: "20 ans de prières. La reconquête du pays des Wa !",
  },
  { index: "1076", name: "Le monde que veut Luffy !" },
  {
    index: "1077",
    name: "Baisser de rideau. Vainqueur, Luffy au chapeau de paille !",
  },
  {
    index: "1078",
    name: "Retour au pays. Le shogun de Wano, Kozuki Momonosuké !",
  },
  {
    index: "1079",
    name: "L’aube est venue. Repos mérité pour Luffy et les siens !",
  },
  { index: "1080", name: "Le banquet du festival. Les nouveaux Empereurs !" },
  {
    index: "1081",
    name: "Le monde s’enflamme. L’attaque de l’amiral de la Marine !",
  },
  {
    index: "1082",
    name: "Une nouvelle ère arrive. La colère de l’Empereur le Roux !",
  },
  {
    index: "1083",
    name: "Le monde change. Cross Guild, la nouvelle organisation !",
  },
  {
    index: "1084",
    name: "Le temps du départ. Le pays des Wa et les chapeaux de paille !",
  },
  { index: "1085", name: "La fin. La voie de Luffy et Momonosuké !" },
  {
    index: "1086",
    name: "Le nouvel empereur. Baggy le clown aux mille pièces !",
  },
  {
    index: "1087",
    name: "Chaos à Amazon Lily. L’incident de Kobby le héros !",
  },
  { index: "1088", name: "Le rêve de Luffy !" },
  {
    index: "1089",
    name: "Un nouveau chapitre. Les chemins de Luffy et Sabo !",
  },
  { index: "1090", name: "Une nouvelle île. L’île futuriste d’Egg Head !" },
  {
    index: "1091",
    name: "Totalement futuriste. Aventure au pays de la science !",
  },
  {
    index: "1092",
    name: "Les larmes de Bonney. L’obscurité de l’île futuriste !",
  },
  {
    index: "1093",
    name: "Le vainqueur rafle la mise. Law contre Barbe Noire ! ",
  },
  {
    index: "1094",
    name: "Le mystère s'épaissit. L'étage du laboratoire d'Egg Head !",
  },
  {
    index: "1095",
    name: "Le cerveau d'un génie. Les six Végapunk !",
  },
  {
    index: "1096",
    name: "L'histoire censurée. La thèse d'un royaume oublié !",
  },
  {
    index: "1097",
    name: "La volonté d'Ohara. Recherches en héritage !",
  },
  {
    index: "1098",
    name: "Un rêve hors du commun. L'avenir idéal vu par un génie !",
  },
  {
    index: "1099",
    name: "Envoyez le comité d'accueil. Rob Lucci attaque !",
  },
  {
    index: "1100",
    name: "La puissance d'une autre dimension. Luffy contre Lucci !",
  },
  {
    index: "1101",
    name: "Au sommet du genre humain. La puissance des Séraphins !",
  },
  {
    index: "1102",
    name: "Des projets sinistres. L'opération pour échapper d'Egg Head !",
  },
   {
    index: "1103",
    name: "Rends-moi mon père ! Le rêve éphémère de Bonney."
   }
];

export default episodes;
