const obj = {
  true: "activé.",
  false: "désactivé.",
};

let value = false;

const call = function () {
  if (!window.google_jobrunner) value = true;

  const footer = document.getElementsByClassName("adblock");
  footer[0].innerHTML = `AdBlock est ${obj[value]}`;
};

window.onload = call;
