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

            container.style.marginTop = "45px";
          }
        }, 50);
      }, 50);
    }
  });
}

window.onload = function () {
  console.log(`Bonjour, pourrais-je savoir ce que tu essaies de faire là ?`);

  getSagas();
  search(
    document.querySelector("input"),
    document.getElementsByClassName("divSagas"),
    document.getElementsByClassName("container")[0]
  );
};

function getSagas() {
  const divSagas = document.getElementsByClassName("sagas")[0];
  const length = 11;

  for (let i = 1; i < length; i++) {
    divSagas.innerHTML += `<div id="${obj[i].name}|${obj[i].aliases?.join(
      ", "
    )}" class="divSagas" ><a href="SagaEpisode.html"><img id="${i}" src="src/Assets/Saga/Saga${i}.jpeg" /></a><p class="filmText" ><br/><br/><br/><br/><br/>${
      obj[i].name
    }</p></div>`;
  }
}

const obj = {
  1: {
    name: "East Blue",
    aliases: ["shanks", "debut", "début", "start", "luffy", "log town", "roger", "baggy"],
  },
  2: { name: "Alabasta", aliases: ["crocodile"] },
  3: { name: "Les Îles célestes", aliases: ["ile", "poneglyphe"] },
  4: { name: "Water Seven", aliases: ["robin", "cp9"] },
  5: { name: "Thriller Bark", aliases: ["moria"] },
  6: { name: "Guerre au sommet (❤️)", aliases: ["marinford", "sabaody", "boa hancok"] },
  7: { name: "Île des hommes poissons", aliases: ["ile"] },
  8: { name: "Dressrosa", aliases: ["doflamingo", "vegapunk", "quatre", "4 empereurs"] },
  9: {
    name: "Whole Cake Island",
    aliases: ["tougato", "big mom", "sanji", "vinsmoke", "judge", "quatre", "4 empereurs"],
  },
  10: {
    name: "Pays de Wano",
    aliases: ["kaido", "wanocuni", "zoro", "ashura", "quatre", "4 empereurs"],
  },
};
