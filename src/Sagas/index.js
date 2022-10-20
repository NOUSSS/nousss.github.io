let exportObj = {};

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
        for (const s of div) s.style.display = "";

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

          for (const s of div) {
            s.style.display = "";
            if (
              !s.id.split("|")[0].toLowerCase().includes(input.value.toLowerCase()) &&
              !s.id
                .split("|")[1]
                .split(", ")
                .some((e) => e.includes(input.value.toLowerCase()))
            )
              s.style.display = "none";
            else {
              i++;

              const firstText = document.getElementsByClassName("firstText")[0];
              firstText.style.display = "none";
            }
          }

          textFind.style.display = "";
          textFind.innerHTML =
            i > 1 ? `<span>${i}</span> Sagas trouvés.` : `<span>${i}</span> Saga trouvé.`;

          container.style.marginTop = "109px";
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

            for (const s of div) {
              s.style.display = "";
              if (
                !s.id.split("|")[0].toLowerCase().includes(input.value.toLowerCase()) &&
                !s.id
                  .split("|")[1]
                  .split(", ")
                  .some((e) => e.includes(input.value.toLowerCase()))
              )
                s.style.display = "none";
              else {
                i++;

                const firstText = document.getElementsByClassName("firstText")[0];
                firstText.style.display = "none";
              }
            }

            textFind.style.display = "";
            textFind.innerHTML =
              i > 1 ? `<span>${i}</span> Sagas trouvés.` : `<span>${i}</span> Saga trouvé.`;

            container.style.marginTop = "109px";
          }
        }, 50);
      }, 50);
    }
  });
}

window.onload = function () {
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

  console.log(`Bonjour, pourrais-je savoir ce que tu essaies de faire là ?`);

  getSagas();
  search(
    document.querySelector("input"),
    document.getElementsByClassName("divSagas"),
    document.getElementsByClassName("container")[0]
  );
};

function isIOS() {
  if (typeof window === `undefined` || typeof navigator === `undefined`) return false;

  return /iPhone|iPad|iPod/i.test(
    navigator.userAgent ||
      navigator.vendor ||
      (window.opera && opera.toString() === `[object Opera]`)
  );
}

function getSagas() {
  const divSagas = document.getElementsByClassName("sagas")[0];
  const length = 11;

  for (let i = 1; i < length; i++) {
    divSagas.innerHTML += `<div id="${obj[i].name}|${obj[i].aliases?.join(
      ", "
    )}" class="divSagas" ><a href="SagaEpisode.html?id=${i}&title=${
      obj[i].name
    }"><img class="poster" id="${i}" src="src/Assets/Saga/Saga${i}.jpeg" /></a><p class="filmText" ><br/><br/><br/><br/><br/>${
      obj[i].name
    }</p></div>`;
  }
}

const obj = {
  1: {
    name: "East Blue",
    aliases: ["shanks", "debut", "début", "start", "luffy", "log town", "roger", "baggy", "1"],
  },
  2: { name: "Alabasta", aliases: ["crocodile", "2"] },
  3: { name: "Les Îles célestes", aliases: ["ile", "poneglyphe", "3"] },
  4: { name: "Water Seven", aliases: ["robin", "cp9", "4"] },
  5: { name: "Thriller Bark", aliases: ["moria", "5"] },
  6: { name: "Guerre au sommet (❤️)", aliases: ["marinford", "sabaody", "boa hancok", "6"] },
  7: { name: "Île des hommes poissons", aliases: ["ile", "7"] },
  8: { name: "Dressrosa", aliases: ["doflamingo", "vegapunk", "quatre", "4 empereurs", "8"] },
  9: {
    name: "Whole Cake Island",
    aliases: ["tougato", "big mom", "sanji", "vinsmoke", "judge", "quatre", "4 empereurs", "9"],
  },
  10: {
    name: "Pays de Wano",
    aliases: ["kaido", "wanocuni", "zoro", "ashura", "quatre", "4 empereurs", "10"],
  },
};
