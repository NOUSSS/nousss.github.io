import { RefObject } from "react";
import normalizeString from "./normalizeString";

type QueryType = "id" | "innerText";

export default function initSearchBar(
  input: RefObject<HTMLInputElement>,
  containerRef: RefObject<(HTMLUListElement | HTMLDivElement)[]>,
  query: QueryType,
  notFirst?: boolean,
): void {
  const visible: Set<string> = new Set();

  const getSearchQuery = (element: HTMLElement): string =>
    query === "id" ? element.id : element.innerText;

  if (containerRef.current && input.current) {
    containerRef.current.forEach((e) => {
      const items = notFirst ? Array.from(e.childNodes).slice(1) : e.childNodes;

      items.forEach((el) => {
        const element = el as HTMLElement;

        const elementQuery = normalizeString(getSearchQuery(element));
        const elementToSearch = normalizeString(input.current!.value);

        if (
          input.current?.value.length === 0 ||
          (elementQuery.includes(elementToSearch) && !visible.has(elementQuery))
        ) {
          element.classList.remove("hidden");
          visible.add(elementQuery);
        } else {
          element.classList.add("hidden");
        }
      });
    });
  }
}
