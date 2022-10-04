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
            if (!s.id.toLowerCase().includes(input.value.toLowerCase())) s.style.display = "none";
            else {
              i++;

              const firstText = document.getElementsByClassName("firstText")[0];
              firstText.style.display = "none";
            }
          }

          textFind.style.display = "";
          textFind.innerHTML =
            i > 1 ? `<span>${i}</span> Sagas trouvés.` : `<span>${i}</span> Saga trouvé.`;

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

            for (const s of div) {
              s.style.display = "";
              if (!s.id.toLowerCase().includes(input.value.toLowerCase())) s.style.display = "none";
              else {
                i++;

                const firstText = document.getElementsByClassName("firstText")[0];
                firstText.style.display = "none";
              }
            }

            textFind.style.display = "";
            textFind.innerHTML =
              i > 1 ? `<span>${i}</span> Sagas trouvés.` : `<span>${i}</span> Saga trouvé.`;

            container.style.marginTop = "8px";
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
    divSagas.innerHTML += `<div id="${obj[i]}" class="divSagas" ><a href="SagaEpisode.html"><img id="${i}" src="src/Assets/Saga/Saga${i}.jpeg" /></a><p class="filmText" ><br/><br/><br/><br/><br/>${obj[i]}</p></div>`;
  }
}

const obj = {
  1: "East Blue",
  2: "Alabasta",
  3: "Les Îles célestes",
  4: "Water Seven",
  5: "Thriller Bark",
  6: "Guerre au sommet (❤️)",
  7: "Île des hommes poissons",
  8: "Dressrosa",
  9: "Whole Cake Island",
  10: "Pays de Wano",
};
