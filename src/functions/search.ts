import { clear, toUpper } from "./main.ts";

export function initSearchBar(
  input: HTMLInputElement,
  div: HTMLCollectionOf<any>,
  component: string
): void {
  let i = 0;
  let cacheText = document.querySelector(`output--${component}`)?.innerHTML;

  const output = document.getElementsByClassName(
    `output--${component}`
  )[0] as HTMLElement;

  function updateResults(): void {
    let count = 0;

    for (let i2 = 0; i2 < div.length; i2++) {
      div[i2].style.display = "";

      if (!div[i2].id.toLowerCase().includes(input.value.toLowerCase())) {
        div[i2].style.display = "none";
      } else {
        count++;
      }
    }

    output.style.display = "";
    output.innerHTML =
      count > 1
        ? `<span>${count}</span> ${toUpper(component)} trouvés.`
        : `<span>${count}</span> ${toUpper(component)} trouvé.`;
  }

  i++;

  if (input.value.length === 1) {
    input.addEventListener("keydown", ({ code }) => {
      if (code === "Backspace" && input.value.length === 1) {
        clear(div);

        output.innerHTML = cacheText || "";

        return;
      }

      if (code === "Backspace" && input.value.length > 1) {
        updateResults();
      }
    });
  }

  if (!input.value) {
    clear(div);

    output.style.display = "none";

    return;
  }

  let cacheIndex = i;

  if (cacheIndex === i) {
    updateResults();
  }
}
