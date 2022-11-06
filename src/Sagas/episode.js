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

let paramIndex;
let title;

// let consoleInterval = setInterval(() => console.clear(), 10);

window.onload = async function () {
  if (!isIOS()) {
    document.querySelector(".recommandation").innerHTML =
      "Extension recommandé pour le visionnage : <span><a class='betterSibnetLink' target='_blank' href='https://chrome.google.com/webstore/detail/sibnet-betterplayer/dlpiocjogoilggigpijnoamnjjolfhdm'>Better Sibnet</a></span>";
  }

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

  let dataIndex = getParam("cachedIndex");

  if (paramIndex === "10") {
    document.querySelector(".nextSaga").style.display = "none";
    document.querySelector(".prevSaga").style = "margin-top: 64px";
  }

  if (paramIndex === "1") document.querySelector(".prevSaga").style.display = "none";

  title = getParam("title");

  if (!title || !paramIndex) return (window.location.href = "/");
  document.querySelector("title").textContent = `${title} - Mugiwara-no Streaming`;

  const text = document.getElementsByClassName("firstText")[0];
  text.innerHTML = `<a href="Saga"><span>${title}</span> - VostFR</a>`;

  const loading = document.querySelector(".loading");
  loading.innerHTML = `Si les épisodes ne se chargent pas, cliquez <span style="text-decoration: underline" onclick="window.location.reload();">ici</span>`;

  const divEp = document.querySelector(".episodes");
  const list = document.querySelector(".list");
  const buttons = document.querySelector(".buttons");
  const secondText = document.querySelector(".secondText");



  addScript(paramIndex, "https://anime-sama.fr/anime/one-piece/{saga}{index}/episodes.js").then(
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
        let episodeIndex = dataIndex ? i + 1 + Number(dataIndex) - 1 : i + 1;

        if (paramIndex === "10") {
          lecteur.splice(127, 1);
          lecteur.splice(138, 1);
          lecteur.splice(145, 1);
          lecteur.splice(153, 1);
          lecteur.splice(158, 1);
        }

        if (paramIndex === "5") {
          lecteur.splice(1 - 1, 10);

          let indexEpisode = dataIndex ? i + 1 + 11 + Number(dataIndex) - 1 : i + 1 + 11;

          const tempURL = lecteur[0];
          let tempTitle = (await getEpisode(indexEpisode))?.title;

          if (tempTitle) tempTitle = `- ${tempTitle}`;
          if (!tempTitle) tempTitle = "";

          divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${tempURL} allowfullscreen></iframe>`;
          document.querySelector(
            ".bigText"
          ).innerHTML = `<span class="numberEp">${indexEpisode}</span> ${tempTitle}</p>`;
        } else {
          const tempURL = dataIndex ? lecteur[Number(dataIndex) - 1] : lecteur[0];
          let tempTitle = (await getEpisode(episodeIndex))?.title;

          if (tempTitle) tempTitle = `- ${tempTitle}`;
          if (!tempTitle) tempTitle = "";

          divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${tempURL} allowfullscreen></iframe>`;
          document.querySelector(
            ".bigText"
          ).innerHTML = `<span class="numberEp">${episodeIndex}</span> ${tempTitle}</p>`;
        }

        let cachedIndex = 0;
        let cacheData = false;

        for (let url of lecteur) {
          cachedIndex++;
          i++;

          if (paramIndex === "5" && !cacheData) {
            cacheData = true;
            i = i + 11;
          }

          let epTitle = (await getEpisode(i))?.title;
          if (epTitle) epTitle = `- ${epTitle}`;

          if (!epTitle && i === 1036)
            epTitle = `- Resistez dans la nuit noire. Le cri du généralissme de Wano !`;

          if (!epTitle && i === 1037)
            epTitle = `- Croyez en Luffy. La contre-attaque de l'alliance !`;

          if (!epTitle && i === 1038)
            epTitle = `- Coup fatal de Nami. O-Tama tente le tout pour le tout !`;

          if (!epTitle && i === 1039)
            epTitle = `- Augmentation drastique des alliés ! L'équipage au chapeau de paille contre-attaque !`;

          if (!epTitle && i === 1040) epTitle = `- La fierté du timonier - Jinbe en colère !`;

          if (!epTitle) epTitle = "";

          list.innerHTML += `<p class="epClick" id="${url}<<<${
            epTitle === "" || !epTitle ? "none" : epTitle
          }<<<${i}<<<${cachedIndex}" onclick="Change(id)" ><span class="numberEp">${i}</span> ${epTitle}</p>`;
        }
      }, 1000);
    }
  );
};

function prevSaga() {
  const identifiant = getParam("id");
  const current = obj[identifiant - 2];

  return (window.location.href = `Episodes?id=${Number(identifiant) - 1}&title=${encodeURI(
    current
  )}`);
}

function nextSaga() {
  const identifiant = getParam("id");
  const current = obj[identifiant];

  return (window.location.href = `Episodes?id=${Number(identifiant) + 1}&title=${encodeURI(
    current
  )}`);
}

function resetScript() {
  const script = document.querySelector(".script");

  return new Promise((resolve) => resolve(script.parentNode.removeChild(script)));
}

let database = null;

const Change = function (params, doNotDetect, doNotScroll) {
  let [url, title, index, cache] = params.split("<<<");

  window.history.pushState(
    {
      cachedIndex: cache,
    },
    null,
    `Episodes?id=${paramIndex}&title=${encodeURI(
      obj[paramIndex - 1]
    )}&cachedIndex=${cache}&currentEpisode=${index}`
  );

  const allEpisodesLength = document.querySelectorAll(".list p").length;
  const currentLength = document.querySelector(".numberEp").dataset?.cache;

  if (
    Number(allEpisodesLength) - 1 === Number(currentLength) ||
    Number(allEpisodesLength) === Number(cache)
  ) {
    document.querySelector(".nextButton").style.display = "none";
  }

  document.getElementsByClassName("epClick")[0].style.display = "";

  if (!doNotDetect) {
    if (!database) {
      document.querySelector(".prevButton").style.display = "";

      database = 1;
    }
  }

  let PageTitle = document.querySelector("title");

  if (!doNotScroll) {
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  }

  if (title === "none") title = "";

  document.querySelector(
    ".bigText"
  ).innerHTML = `<span data-cache="${cache}" class="numberEp">${index}</span> ${title}</p>`;

  document.querySelector(
    ".episodes"
  ).innerHTML = `<iframe width=640 height=360 src=${url} allowfullscreen></iframe>`;

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
      const saga = {
          10: "s",
          9: "s",
          6: "s",
      };

      const script = document.createElement("script");

      script.className = "script";
      script.setAttribute("src", url.replace("{index}", index).replace("{saga}", saga[index] ?? "saga"));

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

let cachePrevData = false;

const Prev = async function () {
  if (!cachePrevData) {
    cachePrevData = true;

    document.querySelector(".listContainer").scrollTo({
      top: document.querySelector(".listContainer").scrollTop - 80,
      behavior: "smooth",
    });
  } else {
    cacheData = false;

    document.querySelector(".listContainer").scrollTo({
      top: document.querySelector(".listContainer").scrollTop - 46,
      behavior: "smooth",
    });
  }

  document.querySelector(".nextButton").style = "";

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

      let title = await getEpisode(index - 1);

      if (!title?.title) title = "";

      Change(
        `${url}<<<${title?.title === "none" || !title?.title ? "none" : `- ${title.title}`}<<<${
          index - 1
        }<<<${cacheIndex - 1}`,
        true,
        true
      );
    }
  }
};

let cacheData = false;

const Next = async function () {
  if (!cacheData) {
    cacheData = true;

    document.querySelector(".listContainer").scrollTo({
      top: document.querySelector(".listContainer").scrollTop + 80,
      behavior: "smooth",
    });
  } else {
    document.querySelector(".listContainer").scrollTo({
      top: document.querySelector(".listContainer").scrollTop + 46,
      behavior: "smooth",
    });
  }

  document.getElementsByClassName("epClick")[0].style.display = "";

  const lecteur = getLecteur("sibnet", [eps2, eps1]);

  const allEpisodesLength = document.querySelectorAll(".list p").length;
  const currentLength = document.querySelector(".numberEp").dataset.cache;

  if (Number(allEpisodesLength) - 1 === Number(currentLength)) {
    document.querySelector(".nextButton").style.display = "none";
  }

  if (document.querySelector(".bigText").innerText) {
    const indexEpisode = document.querySelector(".bigText").innerText.split(" - ")[0];

    for (const text of document.getElementsByClassName("epClick")) {
      if (text.id.split("<<<")[2] === indexEpisode) {
        const [_, __, index, cacheIndex] = text.id.split("<<<");
        const url = lecteur[Number(cacheIndex)];

        let title = await getEpisode(Number(index) + 1);

        if (!title?.title) title = "";

        Change(
          `${url}<<<${title?.title === "" || !title?.title ? "none" : `- ${title?.title}`}<<<${
            Number(index) + 1
          }<<<${Number(cacheIndex) + 1}`,
          null,
          true
        );
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
