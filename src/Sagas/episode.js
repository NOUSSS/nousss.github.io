window.onload = async function () {
  let PageTitle = document.querySelector("title").textContent;

  const index = getParam("id");
  const title = getParam("title");

  PageTitle = `${title} - Mugiwara-no Streaming`;

  const text = document.getElementsByClassName("firstText")[0];
  text.innerHTML = `<a href="Saga.html">${title}</a>`;

  const loading = document.querySelector(".loading");
  loading.innerHTML = "Épisodes en cours de chargement...";

  const divEp = document.querySelector(".episodes");
  const list = document.querySelector(".list");

  const secondText = document.querySelector(".secondText");

  addScript(index).then(() => {
    setTimeout(async () => {
      loading.innerHTML = "";
      secondText.innerHTML = `<span>${eps2.length}</span> épisodes trouvés.`;

      let i = allIndex[index];

      const tempURL = eps2[0];

      divEp.innerHTML = `<iframe class="vid" width=640 height=360 src=${tempURL}></iframe>`;
      for (const url of eps2) {
        i++;

        const epTitle = (await getEpisode(i)).title;

        list.innerHTML += `<p class="epClick" id="${url}<<<${epTitle}<<<${i}" onclick="Change(id)" ><span class="numberEp">${i}</span> - ${epTitle}</p>`;
      }
    }, 1000);
  });
};

const Change = function (params) {
  let PageTitle = document.querySelector("title").textContent;
  const [url, title, index] = params.split("<<<");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  document.querySelector(
    ".episodes"
  ).innerHTML = `<p class="bigText" ><span class="numberEp">${index}</span> - ${title}</p><iframe width=640 height=360 src=${url}></iframe>`;

  PageTitle = `${index} - Mugiwara-no Streaming`;
};

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
  10: 889,
};
