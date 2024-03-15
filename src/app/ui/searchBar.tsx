import { icons } from "lucide-react";
import { initSearchBar } from "@/app/lib/initSearchBar";

interface SearchBarProps {
  container: string;
  placeholder: string;
}

export default function SearchBar({ container, placeholder }: SearchBarProps) {
  const SearchIcon = icons["Search"];
  <div className="border-2 border-red-500">Test Border</div>;

  return (
    <label
      className="label--search-bar m-8 flex h-11 cursor-pointer items-center gap-4 rounded-md border border-neutral-700 p-2.5"
      title="Système de recherche super cool"
    >
      <SearchIcon size="25" />

      <input
        type="text"
        placeholder={placeholder}
        className="h-7 w-full rounded-md placeholder-white"
        onInput={() =>
          initSearchBar(
            document.querySelector(
              ".label--search-bar input",
            ) as HTMLInputElement,
            document.getElementsByClassName(
              container,
            ) as HTMLCollectionOf<HTMLElement>,
          )
        }
      />
    </label>
  );
}
