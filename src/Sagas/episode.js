let paramIndex;

window.onload = async function () {
  paramIndex = getParam("id");

  setInterval(() => {
    console.clear();
  }, 0);

  let PageTitle = document.querySelector("title").textContent;
  const title = getParam("title");

  PageTitle = `${title} - Mugiwara-no Streaming`;

  const text = document.getElementsByClassName("firstText")[0];
  text.innerHTML = `<a href="Saga.html">${title} - VostFR</a>`;

  const loading = document.querySelector(".loading");
  loading.innerHTML = "Épisodes en cours de chargement...";

  const divEp = document.querySelector(".episodes");
  const list = document.querySelector(".list");
  const buttons = document.querySelector(".buttons");
  const secondText = document.querySelector(".secondText");

  addScript(paramIndex).then(() => {
    setTimeout(async () => {
      if (Number(paramIndex) === 10) {
        document.querySelector(
          ".warning"
        ).innerHTML = `Si vous êtes aux épisodes <span>1005</span> et plus, sachez qu'il y a quelque problemes de
    syncronisation au niveau des <span>URLs</span> des épisodes.`;
      }

      search(
        document.querySelector("input"),
        document.getElementsByClassName("epClick"),
        document.getElementsByClassName("container")[0]
      );

      const lecteur = getLecteur("sibnet", [eps2, eps1]);

      loading.innerHTML = "";
      secondText.innerHTML = `<p><span>${lecteur.length}</span> épisodes trouvés.</p>`;
      buttons.innerHTML = `<button class="prevButton" style="display: none" onclick="Prev();">Épisode précedent</button><button onclick="Next()">Épisode suivant</button>`;

      let i = allIndex[paramIndex];

      const tempURL = lecteur[0];
      const tempTitle = (await getEpisode(i + 1))?.title;

      divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${tempURL}></iframe>`;

      document.querySelector(".bigText").innerHTML = `<span class="numberEp">${
        i + 1
      }</span> - ${tempTitle}</p>`;

      let cachedIndex = 0;

      for (let url of lecteur) {
        cachedIndex++;
        i++;

        let epTitle = (await getEpisode(i))?.title;

        if (!epTitle) epTitle = "";

        if (Number(document.querySelector(".bigText").innerText.split(" - ")[0]) !== Number(i))
          list.innerHTML += `<p class="epClick" id="${url}<<<${epTitle}<<<${i}<<<${cachedIndex}" onclick="Change(id)" ><span class="numberEp">${i}</span> - ${epTitle}</p>`;
        else
          list.innerHTML += `<p style="display:none" class="epClick" id="${url}<<<${epTitle}<<<${i}<<<${cachedIndex}" onclick="Change(id)" ><span class="numberEp">${i}</span> - ${epTitle}</p>`;
      }
    }, 1000);
  });
};

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
      top: 0,
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

function LecteurChange() {
  const select = document.querySelector("select");

  alert(select.value);
}

const addScript = function (index) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.setAttribute("src", `https://anime-sama.fr/anime/one-piece/saga${index}/episodes.js`);

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

function search(input, div, container) {
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
            if (
              !s.id
                .split("<<<")
                .some((e_) =>
                  e_.split(" ").some((e) => e.toLowerCase().includes(input.value.toLowerCase()))
                )
            )
              s.style.display = "none";
            else {
              i++;
            }
          }

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
            let i = 0;

            for (const s of div) {
              s.style.display = "";
              if (
                !s.id
                  .split("<<<")
                  .some((e_) =>
                    e_.split(" ").some((e) => e.toLowerCase().includes(input.value.toLowerCase()))
                  )
              )
                s.style.display = "none";
              else {
                i++;
              }
            }

            container.style.marginTop = "45px";
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
