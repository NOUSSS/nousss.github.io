const wait = (m) => new Promise((r) => setTimeout(r, m));

function search(input, div, container) {
  let cache = container.style.marginTop;
  let i = 0;

  input.addEventListener("keypress", () => {
    i++;

    setTimeout(() => {
      if (input.value.length === 1) {
        setTimeout(() => {
          input.addEventListener("keydown", ({ code }) => {
            if (code === "Backspace" && input.value.length === 1) {
              for (const f of div) f.style.display = "";

              const firstText = document.getElementsByClassName("firstText")[0];
              const findText = document.getElementsByClassName("findText")[0];

              firstText.style.display = "";
              findText.style.display = "none";

              return (container.style.marginTop = cache);
            }
          });
        }, 100);
      }
      if (!input.value) {
        for (const f of div) f.style.display = "";

        const firstText = document.getElementsByClassName("firstText")[0];
        const findText = document.getElementsByClassName("findText")[0];

        firstText.style.display = "";
        findText.style.display = "none";
        return (container.style.marginTop = cache);
      }

      let cacheIndex = i;

      setTimeout(() => {
        if (cacheIndex === i) {
          const textFind = document.getElementsByClassName("findText")[0];

          let i = 0;

          for (const f of div) {
            f.style.display = "";

            if (
              !f.id.split("|")[0].includes(input.value.toLowerCase()) &&
              !f.id.split("|")[1].includes(input.value.toLowerCase())
            )
              f.style.display = "none";
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
      }, 50);
    }, 50);
  });

  input.addEventListener("keydown", () => {
    if (input.value.length > 1) {
      i++;

      setTimeout(() => {
        let cacheIndex = i;

        setTimeout(() => {
          if (cacheIndex === i) {
            const textFind = document.getElementsByClassName("findText")[0];

            let i = 0;

            for (const f of div) {
              f.style.display = "";
              if (
                !f.id.split("|")[0].toLowerCase().includes(input.value.toLowerCase()) ||
                !f.id.split("|")[1].includes(input.value.toLowerCase())
              )
                f.style.display = "none";
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
        }, 50);
      }, 50);
    }
  });
}

window.onload = function () {
  console.log(`Bonjour, pourrais-je savoir ce que tu essaies de faire là ?`);

  getFilms();
  search(
    document.querySelector("input"),
    document.getElementsByClassName("divFilm"),
    document.getElementsByClassName("container")[0]
  );
};

function getFilms() {
  const divVideos = document.getElementsByClassName("films")[0];
  const length = 14;

  for (let i = 1; i < length; i++) {
    let url;

    i <= 11
      ? (url = `https://14.mugiwara.xyz/op/films/hd/one-piece-film${i}.mp4`)
      : (url = `https://14.mugiwara.xyz/op/films/one-piece-film${i}.mp4`);

    divVideos.innerHTML += `<div id="${obj[i].name}|${obj[i].aliases?.join(
      ", "
    )}" class="divFilm" ><img id="${url} ${i}" onclick="appearVideo(id)"src="src/Assets/Films/${i}.jpg" /><p class="filmText" ><br/><br/><br/><br/><br/>${
      obj[i].name
    }</p></div>`;
  }
}

const obj = {
  1: { name: "Le film" },
  2: { name: "L'Aventure de l'Île de l'Horloge", aliases: ["ile"] },
  3: { name: "Le Royaume de Chopper, l'Étrange Île des Animaux", aliases: ["ile"] },
  4: { name: "L'Aventure sans Issue" },
  5: { name: "La Malédiction de l'Épée Sacrée", aliases: ["epee sacre"] },
  6: { name: "Le Baron Omatsuri et l'Île aux Secrets", aliases: ["ile"] },
  7: { name: "Le Mecha Géant du Château Karakuri", aliases: ["chateau"] },
  8: { name: "Les Pirates et la Princesse du Désert", aliases: ["desert"] },
  9: { name: "Le Miracle des Cerisiers en Hiver" },
  10: { name: "Strong World" },
  11: { name: "3D - À la poursuite du chapeau de paille" },
  12: { name: "Z" },
  13: { name: "Gold", aliases: ["or"] },
  14: { name: "Stampede" },
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
  firstText.innerHTML = `Film : <span>${obj[i].name}</span>`;

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
