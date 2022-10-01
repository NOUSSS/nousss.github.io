window.onload = apply;

function apply({ index, name }, start, end) {
  document.querySelector("title").textContent = saga;

  const text = document.getElementsByClassName("findText")[0];
  text.innerHTML = `Saga : <span>${name}</span>`;
}
