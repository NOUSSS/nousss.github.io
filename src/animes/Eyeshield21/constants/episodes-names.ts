const episodes = [
  { name: "L'homme aux jambes rapides comme la lumière", index: "1" },
  { name: "Jouons au football américain !", index: "2" },
  { name: "Écrase le terrain !", index: "3" },
  { name: "Ce qu'on peut attraper de la main", index: "4" },
  { name: "Gardes du corps durant une demi-seconde", index: "5" },
  { name: "Le Spear Tackle fait des ravages", index: "6" },
  { name: "Se battre pour la victoire", index: "7" },
  { name: "Je n'abandonnerai pas !", index: "8" },
  { name: "Le spécialiste de la réception", index: "9" },
  { name: "L'étoffe du héros", index: "10" },
  { name: "Le serment du crépuscule", index: "11" },
  { name: "Réception maxi !", index: "12" },
  { name: "Les terribles caméléons", index: "13" },
  { name: "La tour infernale", index: "14" },
  { name: "Cherchez Eyeshield !", index: "15" },
  { name: "Adieu, Kurita !?", index: "16" },
  { name: "Kid et le cheval de fer", index: "17" },
  { name: "La fierté des vauriens", index: "18" },
  { name: "La bourgeoisie se gausse du challenger", index: "19" },
  { name: "L’arme secrète des sphinx", index: "20" },
  { name: "Vole, Devil Bat !", index: "21" },
  { name: "L'apparition d'une mystérieuse fille", index: "22" },
  { name: "L'homme qui échappe à la gravité", index: "23" },
  { name: "La finale Japon/États-Unis éclair", index: "24" },
  { name: "La panthère noire dans sa cage", index: "25" },
  { name: "Un réel instinct sauvage", index: "26" },
  { name: "Il faut récupérer Cerberos !", index: "27" },
  { name: "Football américain en ville", index: "28" },
  { name: "Naissance des Devil Gunmen", index: "29" },
  { name: "La frontière de l'enfer", index: "30" },
  { name: "La décision de chacun", index: "31" },
  { name: "Y a-t-il des losers ?", index: "32" },
  { name: "Hé ! Ma sœur !", index: "33" },
  { name: "Apparition du Ghost", index: "34" },
  { name: "Solitude dans la marche de la mort", index: "35" },
  { name: "La dernière épreuve", index: "36" },
  { name: "Un si haut sommet", index: "37" },
  { name: "Annonce de l'équipe titulaire", index: "38" },
  { name: "En route pour le Christmas Bowl", index: "39" },
  { name: "La veille du match", index: "40" },
  { name: "Disparition du champion", index: "41" },
  { name: "Le Devil Bat Ghost", index: "42" },
  { name: "Le légendaire Magnum de 60 yards", index: "43" },
  { name: "Ahaha ! Je fais mes débuts !", index: "44" },
  { name: "Le Ghost est interdit", index: "45" },
  { name: "Ghost contre Spear", index: "46" },
  { name: "Ils sont chauds, les Guts !", index: "47" },
  { name: "Effort, cran, et match à pleine puissance !", index: "48" },
  { name: "L'esprit d'honneur de la ligne", index: "49" },
  { name: "Le courage de ne pas fuir !", index: "50" },
  { name: "Les violents Caméléons sont en danger", index: "51" },
  { name: "Le choc ! Les Caméléons contre les Poséidon !", index: "52" },
  { name: "Le terrifiant Scorpion venimeux", index: "53" },
  { name: "La tour de contrôle a disparu", index: "54" },
  { name: "Le mur de la différence de taille", index: "55" },
  { name: "Pousse, Komusubizeki !", index: "56" },
  { name: "Celui qui connaît le numéro 21", index: "57" },
  { name: "Le démon contre le dieu de la mer", index: "58" },
  { name: "La vedette cachée", index: "59" },
  { name: "La promesse du terrain", index: "60" },
  { name: "L'obsession de la victoire", index: "61" },
  { name: "L'effroyable Moby Dick Anchor !", index: "62" },
  { name: "Offensive et défensive sur 30 centimètres", index: "63" },
  { name: "L'apparition d'un homme rapide comme la lumière", index: "64" },
  { name: "C'est la fête du sport au lycée Deimon !", index: "65" },
  { name: "Hiruma se prépare pour la revanche", index: "66" },
  { name: "Le jeune prodige", index: "67" },
  { name: "L'affrontement de la vitesse suprême", index: "68" },
  { name: "Le choc des titans", index: "69" },
  { name: "La stratégie du diable", index: "70" },
  { name: "Combat entre géants", index: "71" },
  { name: "La victoire au bout des doigts", index: "72" },
  { name: "L'entrée des Deimon Devil Bats", index: "73" },
  { name: "Le pouvoir des Titans", index: "74" },
  { name: "Course vers la ligne de but", index: "75" },
  { name: "Le piège du diable", index: "76" },
  { name: "Un rival inattendu", index: "77" },
  { name: "Stratégie de l'ombre", index: "78" },
  { name: "Retour en force", index: "79" },
  { name: "La bataille des nerfs", index: "80" },
  { name: "Les cartes cachées", index: "81" },
  { name: "Les adieux du champion", index: "82" },
  { name: "Le souffle du diable", index: "83" },
  { name: "Le choc des géants", index: "84" },
  { name: "Le fantôme de la victoire", index: "85" },
  { name: "Le duel des prodiges", index: "86" },
  { name: "La force brute", index: "87" },
  { name: "La course de l'espoir", index: "88" },
  { name: "L'art de la guerre", index: "89" },
  { name: "Les chaînes du destin", index: "90" },
  { name: "Le retour des héros", index: "91" },
  { name: "Le rugissement du diable", index: "92" },
  { name: "La revanche des Titans", index: "93" },
  { name: "Le fantôme du passé", index: "94" },
  { name: "Le dernier assaut", index: "95" },
  { name: "L'éveil du champion", index: "96" },
  { name: "Le rêve du Christmas Bowl", index: "97" },
  { name: "Le destin en jeu", index: "98" },
  { name: "Le courage de l'équipe", index: "99" },
  { name: "Le choix du diable", index: "100" },
  { name: "Le dernier espoir", index: "101" },
  { name: "L'ultime affrontement", index: "102" },
  { name: "Les larmes de la victoire", index: "103" },
  { name: "Le couronnement des champions", index: "104" },
  { name: "La route vers le Christmas Bowl", index: "105" },
  { name: "Le retour des légendes", index: "106" },
  { name: "Le choc des empires", index: "107" },
  { name: "Le dernier pas vers la gloire", index: "108" },
  { name: "Le champion de demain", index: "109" },
  { name: "La légende renaît", index: "110" },
  { name: "Le match des légendes", index: "111" },
  { name: "Le retour du prodige", index: "112" },
  { name: "Le défi final", index: "113" },
  { name: "La dernière ligne droite", index: "114" },
  { name: "Le choc des esprits", index: "115" },
  { name: "Le dernier coup de sifflet", index: "116" },
  { name: "Les héros du Christmas Bowl", index: "117" },
  { name: "Le retour des Devil Bats", index: "118" },
  { name: "La renaissance de l'équipe", index: "119" },
  { name: "La route vers le sommet", index: "120" },
  { name: "Le défi des champions", index: "121" },
  { name: "Le dernier obstacle", index: "122" },
  { name: "La revanche des héros", index: "123" },
  { name: "La marche des légendes", index: "124" },
  { name: "Le match de tous les défis", index: "125" },
  { name: "L'heure de la vérité", index: "126" },
  { name: "Le dernier combat", index: "127" },
  { name: "Le triomphe des Devil Bats", index: "128" },
  { name: "L'ultime victoire", index: "129" },
  { name: "Le rêve accompli", index: "130" },
  { name: "Le retour des légendes", index: "131" },
  { name: "L'heure de la gloire", index: "132" },
  { name: "Le rugissement final", index: "133" },
  { name: "Le couronnement des champions", index: "134" },
  { name: "Le retour des héros", index: "135" },
  { name: "Le choc des empires", index: "136" },
  { name: "Le dernier pas vers la gloire", index: "137" },
  { name: "Le champion de demain", index: "138" },
  { name: "La légende renaît", index: "139" },
  { name: "Le match des légendes", index: "140" },
  { name: "Le retour du prodige", index: "141" },
  { name: "Le défi final", index: "142" },
  { name: "La dernière ligne droite", index: "143" },
  { name: "Le choc des esprits", index: "144" },
  { name: "Le dernier coup de sifflet", index: "145" },
];

export default episodes;
