const wait = (m) => new Promise((r) => setTimeout(r, m));

function search(input, div) {
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
          }
        }, 50);
      }, 50);
    }
  });
}

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

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 35) {
      document.querySelector(".logo").style.opacity = "0";
    } else {
      document.querySelector(".logo").style = "";
    }
  });

  if (!isIOS()) {
    document.querySelector(".searchImg").setAttribute("src", "src/Assets/SearchIcon.svg");
  }

  appearVideo(`${getURLFilm(1)} 1`);

  if (isIOS()) {
    document.querySelector(".tips").innerHTML =
      "Sur <span>iPhone</span>, pour télécharger la vidéo vous devez cliquer sur le bouton <span>télécharger</span> ci-dessous avec <span>SAFARI</span> puis cliquez sur le bouton partager juste en bas au milieu puis '<span>Enregistrer dans fichiers</span>'.";
  }

  document.querySelector(".image").addEventListener("click", () => download());
  document
    .querySelector(".downloadButton")
    .getElementsByTagName("p")[0]
    .getElementsByTagName("span")[0]
    .addEventListener("click", () => download());

  getFilms();
  search(document.querySelector("input"), document.getElementsByClassName("divFilm"));

  setTimeout(() => {
    window.scrollTo({ top: 580, behavior: "smooth" });
  }, 1000);
};

function download() {
  openDownloader(
    document.querySelector("video").getElementsByTagName("source")[0].src,
    document
      .getElementsByClassName("downloadButton")[0]
      .getElementsByTagName("p")[0]
      .getElementsByTagName("span")[0]
  );
}

function openDownloader(url, text) {
  let { inner, color } = { inner: text.innerHTML, color: text.style.color };

  window.open(url, "_blank");

  text.style.color = "green";
  text.innerHTML = "Lien ouvert !";

  setTimeout(() => {
    text.innerHTML = inner;
    text.style.color = color;
  }, 3000);
}

function getFilms() {
  const divVideos = document.getElementsByClassName("films")[0];
  const length = 15;

  for (let i = 1; i < length; i++) {
    const url = getURLFilm(i);
    divVideos.innerHTML += `<div id="${obj[i].name}|${obj[i].aliases?.join(
      ", "
    )}" class="divFilm" ><img class="poster" id="${url} ${i}" onclick="appearVideo(id)"src="src/Assets/Films/${i}.jpg" /><p class="filmText" ><br/><br/><br/><br/><br/>${
      obj[i].name
    }</p></div>`;
  }
}

function appearVideo(id) {
  window.scrollTo({
    top: 230,
    behavior: "smooth",
  });

  const [url, index] = id.split(" ");

  const findText = document.querySelector(".findText");

  document.querySelector("title").textContent = `${obj[index].name} - Mugiwara-no Streaming`;
  findText.innerHTML = `<span>${obj[index].name}</span>`;

  const video = document.getElementsByClassName("video")[0];

  let autoplay;

  if (video.getElementsByTagName("source")[0]) autoplay = "autoplay";
  else autoplay = "";

  video.innerHTML = `<video ${autoplay} id="filmVideo" preload="metadata" controls="controls" width="800" height="auto"><source src="${url}" type="video/mp4"></video>`;

  return url;
}

function getURLFilm(index) {
  let res;

  index <= 11
    ? (res = `https://14.mugiwara.xyz/op/films/hd/one-piece-film${index}.mp4`)
    : (res = `https://14.mugiwara.xyz/op/films/one-piece-film${index}.mp4`);

  return res;
}

const obj = {
  1: { name: "Le film", aliases: ["1"] },
  2: { name: "L'Aventure de l'Île de l'Horloge", aliases: ["ile", "2"] },
  3: {
    name: "Le Royaume de Chopper, l'Étrange Île des Animaux",
    aliases: ["ile", "3"],
  },
  4: { name: "L'Aventure sans Issue", aliases: ["4"] },
  5: { name: "La Malédiction de l'Épée Sacrée", aliases: ["epee sacre", "5"] },
  6: { name: "Le Baron Omatsuri et l'Île aux Secrets", aliases: ["ile", "6"] },
  7: { name: "Le Mecha Géant du Château Karakuri", aliases: ["chateau", "7"] },
  8: {
    name: "Les Pirates et la Princesse du Désert",
    aliases: ["desert", "8"],
  },
  9: { name: "Le Miracle des Cerisiers en Hiver", aliases: ["9"] },
  10: { name: "Strong World", aliases: ["10"] },
  11: { name: "3D - À la poursuite du chapeau de paille", aliases: ["11"] },
  12: { name: "Z", aliases: ["zed", "12"] },
  13: { name: "Gold", aliases: ["or", "13"] },
  14: {
    name: "Stampede",
    aliases: [
      "14",
      "boa",
      "roger",
      "fugitora",
      "mihawk",
      "bullet",
      "barbe noire",
      "buster call",
      "kizaru",
      "Laugh Tale",
    ],
  },
};
