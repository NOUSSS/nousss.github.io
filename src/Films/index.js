window.onload = function () {
  console.log(`Bonjour, pourrais-je savoir ce que tu essaies de faire là ?`);

  const container = document.getElementsByClassName("container")[0];
  let cache = container.style.marginTop;

  getFilms();

  const input = document.querySelector("input");
  const films = document.getElementsByClassName("divFilm");

  let i = 0;

  input.addEventListener("keypress", () => {
    i++;

    setTimeout(() => {
      if (!input.value) {
        for (const f of films) f.style.display = "";

        const firstText = document.getElementsByClassName("firstText")[0];
        const findText = document.getElementsByClassName("findText")[0];

        firstText.style.display = "";
        container.style.marginTop = cache;
        return (findText.style.display = "none");
      }

      let cacheIndex = i;

      setTimeout(() => {
        if (cacheIndex === i) {
          const textFind = document.getElementsByClassName("findText")[0];

          let i = 0;

          for (const f of films) {
            f.style.display = "";
            if (!f.id.toLowerCase().includes(input.value.toLowerCase())) f.style.display = "none";
            else {
              i++;

              const firstText = document.getElementsByClassName("firstText")[0];
              firstText.style.display = "none";
            }
          }

          textFind.style.display = "";
          textFind.innerHTML =
            i > 1 ? `<span>${i}</span> Films trouvés.` : `<span>${i}</span> Film trouvé.`;

          container.style.marginTop = "8px";
        }
      }, 500);
    }, 500);
  });
};

function getFilms() {
  const divVideos = document.getElementsByClassName("films")[0];
  const length = 14;

  for (let i = 1; i < length; i++) {
    let url;

    i <= 11
      ? (url = `https://14.mugiwara.xyz/op/films/hd/one-piece-film${i}.mp4`)
      : (url = `https://14.mugiwara.xyz/op/films/one-piece-film${i}.mp4`);

    divVideos.innerHTML += `<div id="${obj[i]}" class="divFilm" ><img id="${url} ${i}" onclick="appearVideo(id)"src="src/Assets/Films/${i}.jpg" /><p class="filmText" ><br/><br/><br/><br/><br/>${obj[i]}</p></div>`;
  }
}

const obj = {
  1: "Le film",
  2: "L'Aventure de l'Île de l'Horloge",
  3: "Le Royaume de Chopper, l'Étrange Île des Animaux",
  4: "L'Aventure sans Issue",
  5: "La Malédiction de l'Épée Sacrée",
  6: "Le Baron Omatsuri et l'Île aux Secrets",
  7: "Le Mecha Géant du Château Karakuri",
  8: "Les Pirates et la Princesse du Désert",
  9: "Le Miracle des Cerisiers en Hiver",
  10: "Strong World.",
  11: "3D - À la poursuite du chapeau de paille",
  12: "Z",
  13: "Gold",
  14: "Stampede",
};

function appearVideo(first) {
  const [url, i] = first.split(" ");
  const video = document.getElementsByClassName("video")[0];

  const input = document.querySelector("input");
  input.style.display = "none";

  const findText = document.getElementsByClassName("findText")[0];
  findText.style.display = "none";

  video.style.display = "";
  video.innerHTML += `<video class="filmVideo" controls="controls" autoplay width="800" height="auto"><source src="${url}" type="video/mp4"></video>`;

  const films = document.getElementsByClassName("films")[0];
  films.style.display = "none";

  const container = document.getElementsByClassName("container")[0];
  container.style.marginTop = "5px;";

  const firstText = document.getElementsByClassName("firstText")[0];

  firstText.style.display = "";
  firstText.innerHTML = `Film : <span>${obj[i]}</span>`;

  const all = document.getElementsByClassName("visible")[0];
  all.style.display = "none";

  const arrow = document.getElementsByClassName("arrow")[0];
  arrow.style.display = "flex";
}

function Reset() {
  const input = document.querySelector("input");
  input.style.display = "";

  const firstText = document.getElementsByClassName("firstText")[0];
  firstText.innerHTML = "Les films disponibles.";

  const video = document.getElementsByClassName("video")[0];

  video.innerHTML = `<img class="arrow" onclick="Reset();" src="src/Assets/Arrow.png" alt="" />`;
  video.style.display = "none";

  const films = document.getElementsByClassName("films")[0];
  films.style.display = "";

  const all = document.getElementsByClassName("visible")[0];
  all.style.display = "";

  const arrow = document.getElementsByClassName("arrow")[0];
  arrow.style.display = "none";

  const container = document.getElementsByClassName("container")[0];
  container.style.marginTop = "32px;";

  const divFilms = document.getElementsByClassName("divFilm");

  for (const f of divFilms) f.style.display = "";

  const findText = document.getElementsByClassName("findText")[0];
  firstText.style.display = "";
  return (findText.style.display = "none");
}
