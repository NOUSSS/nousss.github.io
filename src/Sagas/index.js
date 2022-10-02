let exportObj = {};

window.onload = function () {
  console.log(`Bonjour, pourrais-je savoir ce que tu essaies de faire là ?`);

  getSagas();

  const input = document.querySelector("input");
  input.addEventListener("keypress", ({ key }) => {
    if (key === "Enter" && !input.value) {
      const sagas = document.getElementsByClassName("divSagas");

      for (const s of sagas) s.style.display = "";

      const text = document.getElementsByClassName("findText")[0];
      text.innerHTML = "";
    }

    if (key === "Enter" && input.value) {
      const sagas = document.getElementsByClassName("divSagas");

      for (const s of sagas) s.style.display = "";

      let i = 0;

      for (const s of sagas) {
        if (!s.id.toLowerCase().includes(input.value.toLowerCase())) s.style.display = "none";
        else i++;
      }

      const text = document.getElementsByClassName("findText")[0];
      console.log(i);
      text.innerHTML =
        i > 1 ? `<span>${i}</span> Sagas trouvés.` : `<span>${i}</span> Saga trouvé.`;
    }
  });
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
  10: "Pays des WA",
};
