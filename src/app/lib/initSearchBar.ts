import { RefObject } from "react";

type QueryType = "id" | "innerText";

export function initSearchBar(
  input: RefObject<HTMLInputElement>,
  containerRef: RefObject<HTMLUListElement[] | null>,
  query: QueryType,
): void {
  const visible: Set<string> = new Set();

  const getSearchQuery = (element: HTMLElement): string =>
    query === "id" ? element.id : element.innerText;

  if (containerRef.current && input.current) {
    containerRef.current.forEach((e) =>
      e.childNodes.forEach((el) => {
        const element = el as HTMLElement;

        const elementQuery = getSearchQuery(element)
          .toLowerCase()
          .replaceAll("é", "e");

        if (
          input.current?.value.length === 0 ||
          (elementQuery
            .trim()
            .includes(
              input.current!.value.toLowerCase().replaceAll("é", "e").trim(),
            ) &&
            !visible.has(elementQuery))
        ) {
          element.classList.remove("hidden");
          visible.add(elementQuery);
        } else {
          element.classList.add("hidden");
        }
      }),
    );
  }

  if (window.location.hash === "" && containerRef.current) {
    containerRef.current.forEach((category) => {
      const isAllHidden = Array.from(category.childNodes).every((item) =>
        (item as HTMLElement).classList.contains("hidden"),
      );

      isAllHidden
        ? (category.parentNode as HTMLElement).classList.add("hidden")
        : (category.parentNode as HTMLElement).classList.remove("hidden");
    });
  }
}
