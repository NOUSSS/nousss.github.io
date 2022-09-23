const call = async function () {
  const sObj = {
    Saga1: "East Blue",
    Saga2: "Alabasta",
    Saga3: "Skypiea",
    Saga4: "Water Seven",
    Saga5: "Thriller Bark",
    Saga6: "MarinFord (❤)",
    Saga7: "Île des hommes poissons",
    Saga8: "DressRosa",
    Saga9: "Quatres Empereurs",
  };

  const card = document.getElementsByClassName("saga");

  let i = 9;

  for (const e of card) {
    console.log(`Saga: ${i} - ${sObj[`Saga${i}`]}`);

    e.innerHTML = `<a href="../Pages/blank.html"><img src="../Assets/Saga/Saga${i}.jpeg" /></a>`;
    i--;
  }
};

window.onload = call;
