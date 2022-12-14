const citation = [
  "L’avenir ne peut exister que si on met sa vie en jeu ! - <span>Monkey D. Luffy</span>",
  "À quoi te sert ton ambition si tu ne peux pas protéger ton capitaine ? - <span>Roronoa Zoro</span>",
  "Les gens ne cesseront jamais d’avoir des rêves ! - <span>Barbe Noire</span>",
  "Il y a des batailles qu’on ne gagne pas avec les poings ! - <span>Barbe Noire</span>",
  "Un pirate doit être fier de son nom. Tâchez de vous souvenir du mien - <span>Monkey D. Luffy</span>",
  "Haïssez votre propre destinée, qui m’a conduit sur votre bateau tel un fléau de la mort. - <span>Roronoa Zoro</span>",
  "Si je meurs ici, c’est que je n’aurais pas pu aller au-delà - <span>Roronoa Zoro</span>",
  "La force en elle-même ne m’intéresse pas. Sauf si c’est pour défendre ceux qui me sont chers ! - <span>Monkey D. Luffy</span>",
  "Continue ta route, observe le monde de tes propres yeux et alors, peut être qu’à la fin de ton voyage tu parviendras à une conclusion différente de la nôtre - <span>Silvers Rayleigh</span>",
  "Quoi qu’il arrive, ne perdez jamais espoir face aux adversités du monde qui vous entoure ! Soyez assez forts pour pouvoir rire de tout, ne vous préoccupez pas du regard des autres. - <span>Belmer</span>",
  "Ne pas voir la pourriture de ce monde, est un plaisir uniquement connu des aveugles. - <span>Fujitora</span>",
  "La passion et les rêves sont comme le temps, rien ne peut les arrêter, et il en sera ainsi tant qu’il y aura des hommes prêts à donner un sens au mot « LIBERTE » - <span>Gol D. Roger</span>",
  "La justice crée par l’humanité ne périra jamais - <span>Sengoku</span>",
  "Justice vaincra ? Je ne vois pas comment il pourrait en être autrement ! La justice est toujours du côté des vainqueurs ! - <span>Doflamingo</span>",
  "Je ne suis pas né homme pour céder devant la force. - <span>Portgas D. Ace</span>",
  "Un homme meurt quand il tombe dans l'oubli. - <span>Hiluluk</span>",
  "Je ne ferai rien que je puisse regretter un jour. - <span>Portgas D. Ace</span>",
  "Quand on a faim, on mange ! - <span>Monkey D. Luffy</span>",
  "J'ai fait équipe avec vous uniquement parce que nous avions des intérêts communs. - <span>Nami</span>",
  "A-t-on déjà vu un cuisinier qui ait peur du feu. - <span>Sanji</span>",
  "Les gradés ne commentent jamais d'erreur. - <span>Morgan</span>",
  "Sous aucun prétexte je ne pardonnerai à ceux qui s'en prennent à mes amis. - <span>Shanks le roux</span>",
  "Si vous les avez au bout du fil, dites leur que je ne reçois aucun ordre de personne. - <span>Smoker</span>",
  "Je vous pardonne, savez-vous pourquoi? Tout simplement parce que je n'ai jamais fait confiance à personne. - <span>Crocodile</span>",
];

let interval;

window.onload = function () {
  setInterval(() => {
    const whiteText = document.querySelector(".title h1");
    const orangeText = document.querySelector(".title h1 span");

    whiteText.style.color = "orange";
    orangeText.style.color = "white";

    setTimeout(() => {
      whiteText.style.color = "white";
      orangeText.style.color = "orange";
    }, 1000);
  }, 2000);

  document.querySelector(".title img").classList.add("hover");

  setTimeout(() => {
    document.querySelector(".title img").classList.remove("hover");
  }, 2000);
  console.log(`Bonjour, pourrais-je savoir ce que tu essaies de faire là ?`);

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 37) {
      document.querySelector(".logo").style.opacity = "0";
    } else {
      document.querySelector(".logo").style = "";
    }
  });

  setText(citation[Math.floor(Math.random() * citation.length)]);

  interval = setInterval(() => {
    let res = citation[Math.floor(Math.random() * citation.length)];
    setText(res);
  }, 10000);
};

const titleContainer = document.getElementsByClassName("citation")[0];

function fadeIn(element) {
  titleContainer.appendChild(element);
  requestAnimationFrame(() => {
    element.classList.add("visible");
  });
}

function fadeOut(element) {
  element.classList.remove("visible");
  element.addEventListener(
    "transitionend",
    () => {
      element.remove();
    },
    { once: true }
  );
}

function setText(text) {
  Array.from(titleContainer.children).forEach((e) => {
    fadeOut(e);
  });

  const texte = document.createElement("p");
  texte.innerHTML = text;

  texte.addEventListener("click", () => {
    clearInterval(interval);
    Change();

    interval = setInterval(Change, 10000);
  });

  fadeIn(texte);
}

function Change() {
  const text = citation[Math.floor(Math.random() * citation.length)];
  setText(text);
}
