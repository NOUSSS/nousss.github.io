const names = [
    { name: "The First Step", index: "1" },
    { name: "Le fruit des efforts", index: "2" },
    { name: "Les larmes de plaisir", index: "3" },
    { name: "Shadow Boxing", index: "4" },
    { name: "3 mois pour contrer le contre", index: "5" },
    { name: "L'Heure de la Revanche", index: "6" },
    { name: "Le Centimètre Dévastateur", index: "7" },
    { name: "Promesses de Retrouvailles", index: "8" },
    { name: "Licence de Catégorie C", index: "9" },
    { name: "Premier Match", index: "10" },
    { name: "Obsession de Victoire", index: "11" },
    { name: "Une Brusque Déclaration d'Amitié", index: "12" },
    { name: "Lever de Rideau sur le Tournoi National Espoir Conférence EST", index: "13" },
    { name: "Bras Surpuissant ! Crochet VS Uppercut !", index: "14" },
    { name: "Concours d'Endurance", index: "15" },
    { name: "Pressentiment d'un Combat Intense !", index: "16" },
    { name: "Ippo à la Plage", index: "17" },
    { name: "Accrochage", index: "18" },
    { name: "Rêve de K.O.", index: "19" },
    { name: "La Menace du Shotgun", index: "20" },
    { name: "Le Moyen de Vaincre un Génie", index: "21" },
    { name: "En Avant ! En Avant !!", index: "22" },
    { name: "L'Autre Demi-Finale", index: "23" },
    { name: "A l'Endroit de la Promesse", index: "24" },
    { name: "Les Sentiments de Chacun", index: "25" },
    { name: "Combat pour la Distance", index: "26" },
    { name: "Combat à Mort", index: "27" },
    { name: "Victoire ou Défaite", index: "28" },
    { name: "Le Rocky de Naniwa", index: "29" },
    { name: "En Territoire Ennemi", index: "30" },
    { name: "Sur les Traces des Combats Intenses", index: "31" },
    { name: "Frappe avec ta Droite !", index: "32" },
    { name: "La Menace du Smash", index: "33" },
    { name: "Le Champion des Espoirs", index: "34" },
    { name: "Un Autre Départ", index: "35" },
    { name: "Confrontation avec le Roi", index: "36" },
    { name: "Un Objectif Ambitieux", index: "37" },
    { name: "Les Deux Espoirs", index: "38" },
    { name: "Défi En Terre Étrangère", index: "39" },
    { name: "Un Contre qui Surpasse un Contre", index: "40" },
    { name: "Le Combat De Geromichi", index: "41" },
    { name: "Des Rêves en Commun", index: "42" },
    { name: "Speed Star", index: "43" },
    { name: "Un angle mort sur le ring", index: "44" },
    { name: "Les Crocs Blancs du Loup", index: "45" },
    { name: "Deviens une Gazelle !", index: "46" },
    { name: "Esprit Combatif", index: "47" },
    { name: "Le Loup Rouge", index: "48" },
    { name: "Le Courage d'y Croire", index: "49" },
    { name: "Un Message à Transmettre", index: "50" },
    { name: "Une Sortie en Groupe", index: "51" },
    { name: "Challenger", index: "52" },
    { name: "Pour redevenir moi-même", index: "53" },
    { name: "Le Poing du Roi", index: "54" },
    { name: "Match pour le titre national catégorie poids plume", index: "55" },
    { name: "La Puissance face à un mur", index: "56" },
    { name: "Épreuve de Force", index: "57" },
    { name: "Un Cœur Brisé", index: "58" },
    { name: "Une Volonté de Fer", index: "59" },
    { name: "Rivaux", index: "60" },
    { name: "L'anxiété du Retour", index: "61" },
    { name: "Le Chemin du Retour", index: "62" },
    { name: "Jeunesse Ardente", index: "63" },
    { name: "La belle époque", index: "64" },
    { name: "Le Camp d'été de la Troupe Kamogawa", index: "65" },
    { name: "Les Larmes de Takamura", index: "66" },
    { name: "Le Club Kamogawa sur le Pied de Guerre", index: "67" },
    { name: "La Crise du Coach", index: "68" },
    { name: "Le Piège du Gaucher", index: "69" },
    { name: "Un Petit Voyou", index: "70" },
    { name: "L'Heure du Combat", index: "71" },
    { name: "LALLAPALLOOZA", index: "72" },
    { name: "Surpasser le Passé", index: "73" },
    { name: "Amalgame", index: "74" },
    { name: "En route pour la prochaine étape", index: "75" },
    { name: "Le Poing du Boxeur", index: "76" },
    { name: "Un nouveau départ", index: "77" },
    { name: "Bloody Cross", index: "78" },
    { name: "Vers le lieu promis", index: "79" },
    { name: "La découverte du niveau mondial", index: "80" },
    { name: "Niveau mondial", index: "81" },
    { name: "Le talonner coûte que coûte", index: "82" },
    { name: "La venue du démon", index: "83" },
    { name: "Le coup de toute une vie", index: "84" },
    { name: "Les qualités requises du successeur", index: "85" },
    { name: "Parti pour perdre", index: "86" },
    { name: "Ippo vs Hammer Nao", index: "87" },
    { name: "Les qualités requises pour être professionnel", index: "88" },
    { name: "Ippo on the beach (Ippo à la plage) 2", index: "89" },
    { name: "Deux matchs d'entraînement", index: "90" },
    { name: "Premier match pour Itagaki", index: "91" },
    { name: "Les deux aigles", index: "92" },
    { name: "Fougueuse jeunesse", index: "93" },
    { name: "Régime", index: "94" },
    { name: "Situation critique", index: "95" },
    { name: "Match pour le titre W.B.C. catégorie super mi-moyens", index: "96" },
    { name: "Battle of Hawk !", index: "97" },
    { name: "Bagarre de rue", index: "98" },
    { name: "Encouragements", index: "99" },
    { name: "Le roi", index: "100" },
    { name: "Une statue pour la gloire", index: "101" },
    { name: "New Challenger", index: "102" },
    { name: "Le Meilleur Challenger", index: "103" },
    { name: "Le Dempsey Roll vaincu", index: "104" },
    { name: "Le Combat d'une Femme", index: "105" },
    { name: "La Déesse de la Victoire", index: "106" },
    { name: "100 % Pur Bluff", index: "107" },
    { name: "La Distance Entre la Gloire et Moi", index: "108" },
    { name: "Le Champion En Mousse", index: "109" },
    { name: "Le Chien Fou Et Le Loup Rouge", index: "110" },
    { name: "Un Scénario Démoniaque", index: "111" },
    { name: "Le Visage De La Détermination", index: "112" },
    { name: "Un Challenger sans peur", index: "113" },
    { name: "L'Anti-Dempsey Perfectionné", index: "114" },
    { name: "Un Poing Qui Te Touche", index: "115" },
    { name: "Mots de Pouvoir", index: "116" },
    { name: "Une Tempête S'Abat Sur Le Bateau De Pêche Makunouchi", index: "117" },
    { name: "L'Aigle d'Or", index: "118" },
    { name: "Le Choc d'Eleki et la Noix de Papaya", index: "119" },
    { name: "Le Nouveau Contre Inachevé", index: "120" },
    { name: "Le Faucon contre l'Aigle", index: "121" },
    { name: "Une Leçon Jamais Oubliée", index: "122" },
    { name: "La Fin d'un Combat À Mort", index: "123" },
    { name: "Une Fleur d'Espoir", index: "124" },
    { name: "Le Courage De Vivre", index: "125" },
    { name: "Un Poing De Fer", index: "126" },
    { name: "Un Vœu", index: "127" }
]


export default names