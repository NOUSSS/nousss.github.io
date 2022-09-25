const sObj = {
  1: { name: "East Blue", ep: "1 à 61", note: "9,7/10 - C'est le commencement.", arcs: 6 },
  2: {
    name: "Alabasta",
    ep: "62 à 143",
    note: "9,4/10 - Luffy contre un Grand Corsair (Crocodile).",
    arcs: 5,
  },
  3: {
    name: "Île céleste",
    ep: "144 à 206",
    note: "7/10 - Luffy contre Ener sur une île céleste.",
    arcs: 2,
  },
  4: { name: "Water Seven", ep: "207 à 325", note: "10/10 - Les mugiwara contre le CP9.", arcs: 4 },
  5: {
    name: "Thriller Bark",
    ep: "326 à 389",
    note: "8/10 - Luffy contre un grand corsair (Moria).",
    arcs: 1,
  },
  6: {
    name: "Guerre au Sommet",
    ep: "390 à 516",
    note: "10/10 - Indescriptible, juste incroyable.",
    arcs: 4,
  },
  7: {
    name: "Île des Hommes-Poissons",
    ep: "517 à 574",
    note: "7/10 - Hommes poissons vs Humain.",
    arcs: 2,
  },
  8: { name: "Dressrosa", ep: "575 à 746", note: "9.5/10 - Luffy contre Doflamingo.", arcs: 2 },
  9: { name: "Whale Cake Island", ep: "747 à 889", note: "7/10 - ", arcs: 3 },
  10: { name: "Pays des Wa", ep: "890 à ?", note: "10/10 - Luffy vs Kaido.", arcs: 1 },
};

const call = async function () {
  const card = document.getElementsByClassName("image");

  let i = 10;

  for (const e of card) {
    e.innerHTML = `<img style="opacity: 50%;" id="${i}" title="${sObj[i].note}" onclick="change(id);" onmouseout="disapear(id);" onmouseover="appear(id);" src="./src/Assets/Saga/Saga${i}.jpeg" />`;
    i--;
  }
};

function appear(id) {
  const div = document.getElementsByClassName("selectText")[0];
  const img = document.getElementById(id);

  img.style.opacity = "1";
  div.innerHTML = `Sélection : <br/><span style="color: orange;">${sObj[id].name}</span> (${sObj[id].ep})`;
}

function disapear(id) {
  const div = document.getElementsByClassName("selectText")[0];
  const img = document.getElementById(id);

  img.style.opacity = "0.5";
  div.innerHTML = `Sélection : <br/><span style="color: orange;">Aucun</span>`;
}

async function change(id) {
  const sagaTitle = sObj[id].name;

  const title = document.getElementsByClassName("title")[0];
  title.innerHTML = '<h1><a onclick="restart();"> One Piece <span>Streaming</span></a></h1>';

  const firstText = document.getElementsByClassName("epText")[0];
  firstText.innerHTML = "Les <span>Arcs</span>";

  const image = document.getElementsByClassName("image");
  for (const img of image) img.style.display = "none";

  document.querySelector("title").textContent = sagaTitle;

  const cards = document.getElementsByClassName("card")[1];
  cards.style.display = "";

  console.log(sagaTitle);

  for (let i = 0; i < sObj[id].arcs; i++) {
    const file = `./src/Assets/Arcs/${sagaTitle}/${i + 1}.jpeg`;
    cards.innerHTML = `<div><img style="opacity: 50%;" onmouseout="disapear(i + 1);" onmouseover="appear(i + 1);" src="${file}" /></div>`;
  }
}

function restart() {
  const title = document.getElementsByClassName("title")[0];
  title.innerHTML = "<h1>One Piece <span>Streaming</span></h1>";

  const firstText = document.getElementsByClassName("epText")[0];
  firstText.innerHTML = "Les <span>Sagas</span>";

  const image = document.getElementsByClassName("image");
  for (const img of image) img.style.display = "";

  const cards = document.getElementsByClassName("card")[1];
  cards.style.display = "none";

  document.querySelector("title").textContent = "OPS";
}

window.onload = call;
