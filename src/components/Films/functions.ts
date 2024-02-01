import { getURLFilm } from "../../functions/main";
import { films } from "./filmsObj";
import { getImage } from "./images";

export function addScript(url: string) {
  return new Promise(async (resolve) => {
    const script = document.createElement("script");

    script.className = "script";
    script.setAttribute("src", url);

    script.onload = () => {
      resolve(true);
    };

    document.head.appendChild(script);
  });
}

export async function appearVideo(id: string, refresh: boolean) {
  const lang = window.localStorage.getItem("lang");

  window.scrollTo({
    top: 185,
    behavior: "smooth",
  });

  const [url, index] = id.split(" ");

  if (refresh) window.localStorage.setItem("videoId", index);

  const output = document.querySelector(".film");

  document.querySelector(
    "title"
  )!.textContent = `${films[index].name} - Mugiwara-no Streaming`;

  if (lang === "vostfr") {
    output!.innerHTML = `<span>${films[index].name}</span> [<span id="vf" class="langage">VOSTFR</span>]`;
  } else if (lang === "vf") {
    output!.innerHTML = `<span>${films[index].name}</span> [<span id="vostfr" class="langage">VF</span>]`;
  }

  const video = document.getElementsByClassName("video--films")[0];

  video.innerHTML = `<iframe class="iframeFilm" width=640 height=360 src=${url} allowfullscreen></iframe>`;

  const langButton = document.querySelectorAll(".langage");

  for (let i = 0; i < langButton.length; i++) {
    langButton[i].addEventListener("click", () => {
      changeLangage(langButton[i].id);
    });
  }

  return url;
}

export function changeLangage(lang: string): void {
  window.localStorage.setItem("lang", lang);
  window.location.reload();
}

export function getFilms() {
  const div = document.getElementsByClassName("films")[0];

  for (let i = 0; i < Object.keys(films).length; i++) {
    const url = getURLFilm(i);

    div.innerHTML += `<div id="${films[i].name}|${films[i].aliases?.join(
      ", "
    )}" class="container--poster" ><img class="poster" src="${getImage(
      i as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    )}" id="${url} ${i}" /><p class="text--films" ><br/><br/><br/><br/><br/>${
      films[i].name
    }</p></div>`;
  }
}
