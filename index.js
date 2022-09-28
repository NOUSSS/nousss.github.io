const citation = [
  "L’avenir ne peut exister que si on met sa vie en jeu ! - Monkey D. Luffy",
  "À quoi te sert ton ambition si tu ne peux pas protéger ton capitaine ? – Roronoa Zoro",
  "Vivre n’est pas un crime – Franky",
  "Les gens ne cesseront jamais d’avoir des rêves ! – Barbe Noire",
  "Il y a des batailles qu’on ne gagne pas avec les poings ! - Barbe Noire",
  "Un pirate doit être fier de son nom. Tâchez de vous souvenir du mien – Monkey D. Luffy",
  "Haïssez votre propre destinée, qui m’a conduit sur votre bateau tel un fléau de la mort. – Roronoa Zoro",
  "Si je meurs ici, c’est que je n’aurais pas pu aller au-delà – Roronoa Zoro",
  "La force en elle-même ne m’intéresse pas. Sauf si c’est pour défendre ceux qui me sont chers ! – Monkey D. Luffy",
  "Continue ta route, observe le monde de tes propres yeux et alors, peut être qu’à la fin de ton voyage tu parviendras à une conclusion différente de la nôtre – Silvers Rayleigh",
  "Quoi qu’il arrive, ne perdez jamais espoir face aux adversités du monde qui vous entoure ! Soyez assez forts pour pouvoir rire de tout, ne vous préoccupez pas du regard des autres. – Belmer",
  "Ne pas voir la pourriture de ce monde, est un plaisir uniquement connu des aveugles. – Fujitora",
  "La passion et les rêves sont comme le temps, rien ne peut les arrêter, et il en sera ainsi tant qu’il y aura des hommes prêts à donner un sens au mot « LIBERTE » – Gol D. Roger",
  "La justice créée par l’humanité ne périra jamais – Sengoku",
  "La cuisine est un don de dieu, les épices un don du diable… je crois que c’était un peu trop épicé pour toi – Sanji",
  "Justice vaincra ? Je ne vois pas comment il pourrait en être autrement ! La justice est toujours du côté des vainqueurs ! - Doflamingo",
  "Je ne suis pas né homme pour céder devant la force. - Portgas D. Ace",
  "Un homme meurt quand il tombe dans l'oubli. - Hiluluk",
  "Je ne ferai rien que je puisse regretter un jour. - Portgas D. Ace",
  "Quand on a faim, on mange ! - Monkey D. Luffy",
];

const call = function () {
  const citationTexte = document.getElementsByClassName("citation")[0];

  citationTexte.innerHTML = citation[Math.floor(Math.random() * citation.length)];

  setInterval(() => {
    citationTexte.innerHTML = citation[Math.floor(Math.random() * citation.length)];
  }, 10000);
};

window.onload = call;
