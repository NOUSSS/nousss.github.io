export function initSearchBar(
  input: HTMLInputElement,
  container: HTMLCollectionOf<HTMLElement>,
): void {
  const colorpicker = document.querySelector(".color-picker") as HTMLDivElement;

  if (
    input.value.toLowerCase() === "nouss prime" ||
    input.value.toLowerCase() === "noussprime" ||
    input.value.toLowerCase() === "nouss prime " ||
    input.value.toLowerCase() === " nouss prime"
  ) {
    if (colorpicker) {
      colorpicker.classList.remove("hidden");
    }
  } else {
    if (colorpicker) {
      colorpicker.classList.add("hidden");
    }
  }

  const visible: string[] = [];

  Array.from(container).forEach((element, index) => {
    if (
      input.value.length === 0 ||
      (element.id
        .toLowerCase()
        .replaceAll("é", "e")
        .includes(input.value.toLowerCase().replaceAll("é", "e")) &&
        !visible.includes(element.id))
    ) {
      container[index].classList.remove("hidden");
      visible.push(element.id);
    } else {
      container[index].classList.add("hidden");
    }
  });

  Array.from(container).forEach((e) => {
    if (!e.classList.contains("hidden")) {
    }
  });

  if (window.location.hash === "") {
    const categories = document.querySelectorAll(".catalogue > div");

    categories.forEach((category) => {
      const items = category.querySelectorAll("li");

      const isAllHidden = Array.from(items).every((item) =>
        item.classList.contains("hidden"),
      );

      isAllHidden
        ? category.classList.add("hidden")
        : category.classList.remove("hidden");
    });
  }
}
