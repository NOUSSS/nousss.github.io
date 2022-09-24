const sObj = {
  1: { name: "East Blue", ep: "1 à 61", note: "9,7/10 - C'est le commencement." },
  2: {
    name: "Alabasta",
    ep: "62 à 143",
    note: "9,4/10 - Luffy contre un Grand Corsair (Crocodile).",
  },
  3: {
    name: "Île céleste",
    ep: "144 à 206",
    note: "7/10 - Luffy contre Ener sur une île céleste.",
  },
  4: { name: "Water Seven", ep: "207 à 325", note: "10/10 - Les mugiwara contre le CP9." },
  5: {
    name: "Thriller Bark",
    ep: "326 à 389",
    note: "8/10 - Luffy contre un grand corsair (Moria).",
  },
  6: {
    name: "Guerre au Sommet",
    ep: "390 à 516",
    note: "10/10 - Indescriptible, juste incroyable.",
  },
  7: {
    name: "Île des Hommes-Poissons",
    ep: "517 à 574",
    note: "7/10 - Hommes poissons vs Humain.",
  },
  8: { name: "Dressrosa", ep: "575 à 746", note: "9.5/10 - Luffy contre Doflamingo." },
  9: { name: "Whale Cake Island", ep: "747 à 889", note: "7/10 - " },
  10: { name: "Pays des Wa", ep: "890 à ?", note: "10/10 - Luffy vs Kaido." },
};

const call = async function () {
  const card = document.getElementsByClassName("saga");

  let i = 10;

  for (const e of card) {
    e.innerHTML = `<a href="../Pages/blank.html"><img id="${i}" title="${sObj[i].note}" onmouseout="disapear()" onmouseover="appear(id);" src="../Assets/Saga/Saga${i}.jpeg" /></a>`;
    i--;
  }
};

function appear(id) {
  const div = document.getElementsByClassName("selectText")[0];
  div.innerHTML = `Sélection : <br/><span style="color: orange;">${sObj[id].name}</span> (${sObj[id].ep})`;
}

function disapear() {
  const div = document.getElementsByClassName("selectText")[0];
  div.innerHTML = `Sélection : <br/><span style="color: orange;">Aucun</span>`;
}

window.onload = call;
