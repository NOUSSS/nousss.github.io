const sagas = {
  "East Blue": 1,
  Crocodile: 2,
  Ener: 3,
};

const prev = function (Objet, prop) {
  const Array = Object.keys(Objet);
  const index = Array.indexOf(prop);

  return Array[index - 1];
};

console.log(prev(sagas, "Ener"));
