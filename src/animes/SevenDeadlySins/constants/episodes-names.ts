const names = [
  { index: "1", name: "Les 7 péchés capitaux" },
  { index: "2", name: "L’épée du Chevalier Sacré" },
  { index: "3", name: "La forêt des rêves blancs" },
  { index: "4", name: "Un rêve de petite fille" },
  { index: "5", name: "Même si tu devais mourir" },
  { index: "6", name: "Le poème des origines" },
  { index: "7", name: "Des retrouvailles émouvantes" },
  { index: "8", name: "Une chasseresse de feu" },
  { index: "9", name: "Une pulsation obscure" },
  { index: "10", name: "Le tournoi de lutte de Vaizel" },
  { index: "11", name: "Des sentiments refoulés" },
  { index: "12", name: "Un canon à te glacer le sang" },
  { index: "13", name: "L’ange de la destruction" },
  { index: "14", name: "Le lecteur" },
  { index: "15", name: "Le Chevalier impie" },
  { index: "16", name: "Les légendes dans la tourmente" },
  { index: "17", name: "Le premier sacrifice" },
  { index: "18", name: "Même si cela doit me coûter la vie" },
  { index: "19", name: "Le roi des fées attend en vain" },
  { index: "20", name: "Le sortilège du courage" },
  { index: "21", name: "La menace est imminente" },
  { index: "22", name: "Je ferais tout pour toi" },
  { index: "23", name: "Lorsque survient le désespoir" },
  { index: "24", name: "Les Héros" },
  { index: "25", name: "Signs of Holy War – Le rêve noir débute" },
  {
    index: "26",
    name: "Signs of Holy War – Notre foire du combat à tous les deux !",
  },
  {
    index: "27",
    name: "Signs of Holy War – À la recherche du premier amour !",
  },
  { index: "28", name: "Signs of Holy War – Les formes de l’amour" },
  { index: "29", name: "Le retour du clan des démons" },
  { index: "30", name: "Existence et preuve" },
  { index: "31", name: "Trésor sacré : Lostvayne" },
  { index: "32", name: "Les Dix Commandements en mouvement" },
  { index: "33", name: "Violence Absolue" },
  { index: "34", name: "Le Grand Chevalier Sacré repenti" },
  { index: "35", name: "Là où les souvenirs s’éveillent" },
  { index: "36", name: "La Terre Sainte des Druides" },
  { index: "37", name: "La Promesse Faite à Celle Que J’aime" },
  { index: "38", name: "Ce qu’il nous manquent" },
  { index: "39", name: "Père et fils" },
  { index: "40", name: "Là, où se trouve l’amour" },
  { index: "41", name: "Adieu, bandit de mon cœur" },
  { index: "42", name: "Le maître du Soleil" },
  { index: "43", name: "Le frisson de la déclaration" },
  { index: "44", name: "Le Labyrinthe du Piège Mortel" },
  { index: "45", name: "Ceux de la légende" },
  { index: "46", name: "Cette lumière pour le bien d’un autre" },
  { index: "47", name: "Meliodas vs Les Dix Commandements" },
  { index: "48", name: "À la recherche de l’espoir" },
  { index: "49", name: "Une chaleur certaine" },
  { index: "50", name: "Le retour du péché" },
  { index: "51", name: "Héros, debout !" },
  { index: "52", name: "Tant que tu es là" },
  { index: "53", name: "La lumière qui chasse les ténèbres" },
  { index: "54", name: "Les souvenirs de la Guerre Sainte" },
  { index: "55", name: "Que la lumière soit" },
  { index: "56", name: "Hurlement des bêtes sauvages" },
  { index: "57", name: "Maelstrom de sentiments" },
  { index: "58", name: "C’est ce qu’on appelle l’amour" },
  { index: "59", name: "La Réunion des Sept Pêchés Capitaux" },
  { index: "60", name: "La poupée recherche l’amour" },
  { index: "61", name: "Les amants maudits" },
  { index: "62", name: "C’est notre mode de vie" },
  { index: "63", name: "L’odieux ne peut se reposer" },
  { index: "64", name: "Les jeunes filles puisent leur force dans l’amour" },
  { index: "65", name: "Le tout-puissant contre le mal absolu" },
  { index: "66", name: "Une nouvelle menace" },
  { index: "67", name: "Pour notre capitaine" },
  { index: "68", name: "La dissolution des Sept Péchés Capitaux" },
  { index: "69", name: "Notre choix" },
  { index: "70", name: "La marche des saints" },
  { index: "71", name: "Le traité de la Guerre sainte" },
  { index: "72", name: "L’enfant de l’espoir" },
  { index: "73", name: "La colère impériale des dieux" },
  { index: "74", name: "Britannia en guerre" },
  { index: "75", name: "Se tordre dans les ténèbres" },
  { index: "76", name: "Amour effréné" },
  { index: "77", name: "Au purgatoire" },
  { index: "78", name: "Rencontre avec l’inconnu" },
  { index: "79", name: "Une seule pensée" },
  { index: "80", name: "Rencontre impromptue" },
  { index: "81", name: "Le coup tragique" },
  { index: "82", name: "Confronter le désespoir" },
  { index: "83", name: "Espoir, discorde et désespoir" },
  { index: "84", name: "Une porte vers l’espoir" },
  { index: "85", name: "Le grand rassemblement" },
  { index: "86", name: "Le Salut du Soleil" },
  { index: "87", name: "Ceux qui s’opposent à un Dieu" },
  { index: "88", name: "Nous serons ta force" },
  { index: "89", name: "La fin d’un long voyage" },
  { index: "90", name: "Adieu, les Seven Deadly Sins" },
  { index: "91", name: "Les frères du destin" },
  { index: "92", name: "La dernière guerre" },
  { index: "93", name: "La voix qui t’appelle" },
  { index: "94", name: "Le Roi chante seul" },
  { index: "95", name: "La lutte" },
  { index: "96", name: "Ennemis mortels" },
  { index: "97", name: "Les véritables intentions de la sorcière" },
  { index: "98", name: "Le fragment du chaos" },
  { index: "99", name: "Un royaume éternel" },
  { index: "100", name: "Les héritiers" },
];

export default names;