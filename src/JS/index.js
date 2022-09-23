const call = function () {
  const card = document.getElementsByClassName("saga");

  let i = 9;

  for (const e of card) {
    e.innerHTML = `<a href="../Pages/blank.html"><img src="../Assets/Saga/Saga${i}.jpeg" /></a>`;
    i--;
  }
};

window.onload = call;
