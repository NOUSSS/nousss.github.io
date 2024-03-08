import { icons } from "lucide-react";
import { initSearchBar } from "@/app/lib/initSearchBar";

interface SearchBarProps {
  container: string;
  placeholder: string;
}

export default function SearchBar({ container, placeholder }: SearchBarProps) {
  const SearchIcon = icons["Search"];

  return (
    <label
      className={`label--search-bar`}
      title="Systeme de recherche super cool"
    >
      <SearchIcon size="25px" />

      <input
        type="text"
        placeholder={placeholder}
        onInput={() =>
          initSearchBar(
            document.querySelector(
              ".label--search-bar input"
            ) as HTMLInputElement,
            document.getElementsByClassName(
              container
            ) as HTMLCollectionOf<HTMLElement>
          )
        }
      />
    </label>
  );
}
