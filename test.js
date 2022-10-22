var select = document.getElementById("selectEps");
var selectLect = document.getElementById("selectLecteurs");
var optLect,
  opt,
  nbLect = 0;
var lectOuPas;
//créer liste épisodes
for (var i = 878; i <= 1004; i++) {
  opt = document.createElement("option");
  opt.text = "Episode " + i;
  select.appendChild(opt);
}
opt = document.createElement("option");
opt.text = "Episode Wano Kuni SP";
select.appendChild(opt);
for (var i = 1005; i <= 1015; i++) {
  opt = document.createElement("option");
  opt.text = "Episode " + i;
  select.appendChild(opt);
}
opt = document.createElement("option");
opt.text = "Episode Wano Kuni SP 2";
select.appendChild(opt);
for (var i = 1016; i <= 1022; i++) {
  opt = document.createElement("option");
  opt.text = "Episode " + i;
  select.appendChild(opt);
}
opt = document.createElement("option");
opt.text = "Episode Wano Kuni SP 3";
select.appendChild(opt);
for (var i = 1023; i <= 1030; i++) {
  opt = document.createElement("option");
  opt.text = "Episode " + i;
  select.appendChild(opt);
}
opt = document.createElement("option");
opt.text = "Episode Wano Kuni SP 4";
select.appendChild(opt);
for (var i = 1031; i <= 1035; i++) {
  opt = document.createElement("option");
  opt.text = "Episode " + i;
  select.appendChild(opt);
}
opt = document.createElement("option");
opt.text = "Episode Wano Kuni SP 5";
select.appendChild(opt);
for (var i = 1036; i <= eps1.length + 872; i++) {
  opt = document.createElement("option");
  opt.text = "Episode " + i;
  select.appendChild(opt);
}

//créer liste lecteurs
for (var k = 1; k <= nbLect; k++) {
  optLect = document.createElement("option");
  optLect.text = "Lecteur " + k;
  selectLect.appendChild(optLect);
}

var epCurrMemory = "episodeCurrent" + blazeUrl;

var elt = document.querySelector("select, .episodes");
var epTemp = localStorage.getItem(epCurrMemory);

function epCurrent() {
  localStorage.setItem(epCurrMemory, elt.options[elt.selectedIndex].value);
  epTemp = localStorage.getItem(epCurrMemory);
}

function epCurrentNext() {
  localStorage.setItem(epCurrMemory, elt.options[elt.selectedIndex + 1].value);
  epTemp = localStorage.getItem(epCurrMemory);
}

function epCurrentPrev() {
  localStorage.setItem(epCurrMemory, elt.options[elt.selectedIndex - 1].value);
  epTemp = localStorage.getItem(epCurrMemory);
}

function epCurrentLast() {
  localStorage.setItem(epCurrMemory, elt.options[nbChaps].value);
  epTemp = localStorage.getItem(epCurrMemory);
}

// empêcher d'afficher la valeur "null" mais un blanc à la place
if (epTemp === null) {
  epTemp = " ";
}
