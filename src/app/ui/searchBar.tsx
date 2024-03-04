import { icons } from "lucide-react";
import { initSearchBar } from "../lib/initSearchBar";

export default function SearchBar({ container }: { container: string }) {
  const SearchIcon = icons["Search"];

  return (
    <label
      className={`label--search-bar`}
      title="Systeme de recherche super cool"
    >
      <SearchIcon size="25px" />

      <input
        type="text"
        placeholder="Votre recherche..."
        onInput={() =>
          initSearchBar(
            document.querySelectorAll("input")[1]!,
            document.getElementsByClassName(
              container
            ) as HTMLCollectionOf<HTMLElement>
          )
        }
        onFocus={({ target }) => {
          target.parentElement?.classList.add("focus");
        }}
        onBlur={({ target }) => {
          target.parentElement?.classList.remove("focus");
        }}
      />
    </label>
  );
}
