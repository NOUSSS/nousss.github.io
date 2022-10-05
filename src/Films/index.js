const wait = (m) => new Promise((r) => setTimeout(r, m));

function search(input, div, container) {
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

              return;
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

        return;
      }

      let cacheIndex = i;

      setTimeout(() => {
        if (cacheIndex === i) {
          const textFind = document.getElementsByClassName("findText")[0];

          let i = 0;

          for (const f of div) {
            f.style.display = "";

            if (
              !f.id.split("|")[0].toLowerCase().includes(input.value.toLowerCase()) &&
              !f.id
                .split("|")[1]
                .split(", ")
                .some((e) => e.includes(input.value.toLowerCase()))
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

          container.style.marginTop = "45px";
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
                !f.id.split("|")[0].toLowerCase().includes(input.value.toLowerCase()) &&
                !f.id
                  .split("|")[1]
                  .split(", ")
                  .some((e) => e.includes(input.value.toLowerCase()))
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

            container.style.marginTop = "45px";
          }
        }, 50);
      }, 50);
    }
  });
}

window.onload = function () {
  console.log(`Bonjour, pourrais-je savoir ce que tu essaies de faire là ?`);

  appearVideo(`${getURLVideo(1)} 1`);
  getFilms();
  search(
    document.querySelector("input"),
    document.getElementsByClassName("divFilm"),
    document.getElementsByClassName("container")[0]
  );

  setTimeout(() => {
    window.scrollTo({ top: 580, behavior: "smooth" });
  }, 1000);
};

function getFilms() {
  const divVideos = document.getElementsByClassName("films")[0];
  const length = 14;

  for (let i = 1; i < length; i++) {
    const url = getURLVideo(i);
    divVideos.innerHTML += `<div id="${obj[i].name}|${obj[i].aliases?.join(
      ", "
    )}" class="divFilm" ><img id="${url} ${i}" onclick="appearVideo(id)"src="src/Assets/Films/${i}.jpg" /><p class="filmText" ><br/><br/><br/><br/><br/>${
      obj[i].name
    }</p></div>`;
  }
}

function appearVideo(id) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const [url, index] = id.split(" ");
  const findText = document.querySelector(".findText");

  findText.innerHTML = `<span>${obj[index].name}</span>`;

  const video = document.getElementsByClassName("video")[0];
  video.innerHTML = `<video id="filmVideo" preload="metadata" controls="controls" width="800" height="auto"><source src="${url}" type="video/mp4"></video>`;
}

function getURLVideo(index) {
  let res;

  index <= 11
    ? (res = `https://14.mugiwara.xyz/op/films/hd/one-piece-film${index}.mp4`)
    : (res = `https://14.mugiwara.xyz/op/films/one-piece-film${index}.mp4`);

  return res;
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
