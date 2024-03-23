type QueryType = "id" | "innerText";

export function initSearchBar(
  input: HTMLInputElement,
  container: HTMLCollectionOf<HTMLElement>,
  query: QueryType,
): void {
  const visible: string[] = [];
  const searchQuery =
    query === "id"
      ? (q: HTMLElement): string => q.id
      : (q: HTMLElement): string => q.innerText;

  Array.from(container).forEach((element, index) => {
    if (
      input.value.length === 0 ||
      (searchQuery(element)
        .toLowerCase()
        .replaceAll("é", "e")
        .includes(input.value.toLowerCase().replaceAll("é", "e")) &&
        !visible.includes(searchQuery(element)))
    ) {
      container[index].classList.remove("hidden");
      visible.push(searchQuery(element));
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
