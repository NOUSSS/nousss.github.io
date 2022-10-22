let paramIndex;
let clearConsoleInterval;

window.onload = async function () {
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

  document.querySelector(".nextSaga").addEventListener("click", nextSaga);
  document.querySelector(".prevSaga").addEventListener("click", prevSaga);

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 37) {
      document.querySelector(".logo").style.opacity = "0";
    } else {
      document.querySelector(".logo").style = "";
    }
  });

  if (!isIOS()) {
    document.querySelector(".searchImg").setAttribute("src", "src/Assets/SearchIcon.svg");
  }

  setTimeout(() => {
    if (window.scrollY < 50) {
      window.scrollTo({
        top: 120,
        behavior: "smooth",
      });
    }
  }, 4000);

  paramIndex = getParam("id");

  if (paramIndex === "10") {
    document.querySelector(".nextSaga").style.display = "none";
    document.querySelector(".prevSaga").style = "margin-top: 64px";
  }

  if (paramIndex === "1") document.querySelector(".prevSaga").style.display = "none";

  // clearConsoleInterval = setInterval(() => {
  //   console.clear();
  // }, 200);

  const title = getParam("title");

  if (!title || !paramIndex) return (window.location.href = "/");
  document.querySelector("title").textContent = `${title} - Mugiwara-no Streaming`;

  const text = document.getElementsByClassName("firstText")[0];
  text.innerHTML = `<a href="Saga">${title} - VostFR</a>`;

  const loading = document.querySelector(".loading");
  loading.innerHTML = `Si les épisodes ne se chargent pas, cliquez <span style="text-decoration: underline" onclick="window.location.reload();">ici</span>`;

  const divEp = document.querySelector(".episodes");
  const list = document.querySelector(".list");
  const buttons = document.querySelector(".buttons");
  const secondText = document.querySelector(".secondText");

  addScript(paramIndex, "https://anime-sama.fr/anime/one-piece/saga{index}/episodes.js").then(
    () => {
      // document.querySelector(".langage-choices").addEventListener("click", () => {
      //   text.innerText = text.innerText.replace("VostFR", "VF");

      //   return resetScript().then(() => {
      //     setTimeout(() => {
      //       addScript(
      //         paramIndex,
      //         `https://anime-sama.fr/anime/one-piece/saga{index}vf/episodes.js?filever=9014`
      //       ).then(() => {
      //         setTimeout(() => {}, 1000);
      //       });
      //     }, 1000);
      //   });
      // });

      setTimeout(async () => {
        search(document.querySelector("input"), document.getElementsByClassName("epClick"));

        const lecteur = getLecteur("sibnet", [eps2, eps1]);

        loading.innerHTML = "";
        secondText.innerHTML = `<p><span>${lecteur.length}</span> épisodes trouvés.</p>`;
        buttons.innerHTML = `<button class="prevButton" style="display: none" onclick="Prev();">Épisode précedent</button><button class="nextButton" onclick="Next()">Épisode suivant</button>`;

        let i = allIndex[paramIndex];

        const tempURL = lecteur[0];
        const tempTitle = (await getEpisode(i + 1))?.title;

        divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${tempURL}></iframe>`;
        document.querySelector(".bigText").innerHTML = `<span class="numberEp">${
          i + 1
        }</span> - ${tempTitle}</p>`;

        if (paramIndex === "10") {
          lecteur.splice(127, 1);
          lecteur.splice(138, 1);
          lecteur.splice(145, 1);
          lecteur.splice(153, 1);
          lecteur.splice(158, 1);
        }
        let cachedIndex = 0;

        for (let url of lecteur) {
          cachedIndex++;
          i++;

          let epTitle = (await getEpisode(i))?.title;

          if (!epTitle && i === 1036)
            epTitle = `Resistez dans la nuit noire. Le cri du généralissme de Wano !`;
          if (!epTitle) epTitle = "Impossible de retrouver le nom de l'épisode.";

          list.innerHTML += `<p class="epClick" id="${url}<<<${epTitle}<<<${i}<<<${cachedIndex}" onclick="Change(id)" ><span class="numberEp">${i}</span> - ${epTitle}</p>`;
        }
      }, 1000);
    }
  );
};

function prevSaga() {
  const obj = [
    "East Blue",
    "Alabasta",
    "Les Îles célestes",
    "Water Seven",
    "Thriller Bark",
    "Guerre au sommet (❤️)",
    "Île des hommes poissons",
    "Dressrosa",
    "Whole Cake Island",
    "Pays de Wano",
  ];

  const identifiant = getParam("id");
  const current = obj[identifiant - 2];

  return (window.location.href = `SagaEpisode?id=${Number(identifiant) - 1}&title=${encodeURI(
    current
  )}`);
}

function nextSaga() {
  const obj = [
    "East Blue",
    "Alabasta",
    "Les Îles célestes",
    "Water Seven",
    "Thriller Bark",
    "Guerre au sommet (❤️)",
    "Île des hommes poissons",
    "Dressrosa",
    "Whole Cake Island",
    "Pays de Wano",
  ];

  const identifiant = getParam("id");
  const current = obj[identifiant];

  return (window.location.href = `SagaEpisode?id=${Number(identifiant) + 1}&title=${encodeURI(
    current
  )}`);
}

function resetScript() {
  const script = document.querySelector(".script");

  return new Promise((resolve) => resolve(script.parentNode.removeChild(script)));
}

let database = null;

const Change = function (params, doNotDetect, doNotScroll) {
  document.getElementsByClassName("epClick")[0].style.display = "";

  if (!doNotDetect) {
    if (!database) {
      document.querySelector(".prevButton").style.display = "";

      database = 1;
    }
  }

  let PageTitle = document.querySelector("title");
  const [url, title, index] = params.split("<<<");

  if (!doNotScroll) {
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  }

  document.querySelector(
    ".bigText"
  ).innerHTML = `<span class="numberEp">${index}</span> - ${title}</p>`;

  document.querySelector(
    ".episodes"
  ).innerHTML = `<iframe width=640 height=360 src=${url}></iframe>`;

  PageTitle.textContent = `${index} - Mugiwara-no Streaming`;
};

function isIOS() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;

  return /iPhone|iPad|iPod/i.test(
    navigator.userAgent ||
      navigator.vendor ||
      (window.opera && opera.toString() === "[object Opera]")
  );
}

function LecteurChange() {
  const select = document.querySelector("select");

  alert(select.value);
}

const addScript = function (index, url) {
  return new Promise((resolve) => {
    const script = document.createElement("script");

    script.className = "script";
    script.setAttribute("src", url.replace("{index}", index));

    resolve(document.head.appendChild(script));
  });
};

function getParam(query) {
  const regex = new RegExp("[?&]" + query + "=([^&]+).*$");
  const urlMatch = window.location.search.match(regex);

  return urlMatch === null ? "" : decodeURI(urlMatch[1]);
}

const getEpisode = function (index) {
  return new Promise((resolve) => {
    const api = `https://api.api-onepiece.com/episodes/${index}`;

    fetch(api).then((result) => {
      resolve(result.json());
    });
  });
};

const Prev = async function () {
  const lecteur = getLecteur("sibnet", [eps2, eps1]);

  const indexEpisode = document.querySelector(".bigText").innerText.split(" - ")[0];

  if (Number(indexEpisode) - 2 === Number(allIndex[paramIndex])) {
    document.querySelector(".prevButton").style.display = "none";
    database = null;
  }

  for (const text of document.getElementsByClassName("epClick")) {
    if (text.id.split("<<<")[2] === indexEpisode) {
      const [_, __, index, cacheIndex] = text.id.split("<<<");
      const url = lecteur[cacheIndex - 2];
      const title = (await getEpisode(index - 1)).title;

      Change(`${url}<<<${title}<<<${index - 1}<<<${cacheIndex - 1}`, true, true);
    }
  }
};

const Next = async function () {
  document.getElementsByClassName("epClick")[0].style.display = "";

  const lecteur = getLecteur("sibnet", [eps2, eps1]);

  if (document.querySelector(".bigText").innerText) {
    const indexEpisode = document.querySelector(".bigText").innerText.split(" - ")[0];

    for (const text of document.getElementsByClassName("epClick")) {
      if (text.id.split("<<<")[2] === indexEpisode) {
        const [_, __, index, cacheIndex] = text.id.split("<<<");
        const url = lecteur[Number(cacheIndex)];
        const title = (await getEpisode(Number(index) + 1)).title;

        Change(`${url}<<<${title}<<<${Number(index) + 1}<<<${Number(cacheIndex) + 1}`, null, true);
      }
    }
  }
};

const allIndex = {
  1: 0,
  2: 61,
  3: 143,
  4: 206,
  5: 325,
  6: 389,
  7: 516,
  8: 574,
  9: 746,
  10: 877,
};

function search(input, div) {
  let i = 0;

  input.addEventListener("keypress", () => {
    i++;

    setTimeout(() => {
      if (input.value.length === 1) {
        setTimeout(() => {
          input.addEventListener("keydown", ({ code }) => {
            if (code === "Backspace" && input.value.length === 1) {
              for (const s of div) s.style.display = "";
              return;
            }
          });
        }, 100);
      }
      if (!input.value) {
        for (const s of div) s.style.display = "";
        return;
      }

      let cacheIndex = i;

      setTimeout(() => {
        if (cacheIndex === i) {
          let i = 0;

          for (const s of div) {
            s.style.display = "";
            if (!s.id.split("<<<").some((e) => e.includes(input.value.toLowerCase())))
              s.style.display = "none";
            else {
              i++;
            }
          }
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
            let i = 0;

            for (const s of div) {
              s.style.display = "";
              if (
                !s.id.split("<<<").some((e) => e.toLowerCase().includes(input.value.toLowerCase()))
              )
                s.style.display = "none";
              else {
                i++;
              }
            }
          }
        }, 50);
      }, 50);
    }
  });
}

function getLecteur(query, choices) {
  for (const lecteur of choices) {
    if (lecteur[0].includes(query)) return lecteur;
  }
}
