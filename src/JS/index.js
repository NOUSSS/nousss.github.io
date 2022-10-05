function change(id) {
  const sagaTitle = sObj[id].name;

  const title = document.getElementsByClassName("title")[0];
  title.innerHTML = '<h1><a onclick="restart();"> Mugiwara-no <span>Streaming</span></a></h1>';

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
  title.innerHTML = "<h1>Mugiwara-no <span>Streaming</span></h1>";

  const firstText = document.getElementsByClassName("epText")[0];
  firstText.innerHTML = "Les <span>Sagas</span>";

  const image = document.getElementsByClassName("image");
  for (const img of image) img.style.display = "";

  const cards = document.getElementsByClassName("card")[1];
  cards.style.display = "none";

  document.querySelector("title").textContent = "OPS";
}

window.onload = call;
