import { icons } from "lucide-react";
import { initSearchBar } from "@/app/lib/initSearchBar";

interface SearchBarProps {
  container: string;
  placeholder: string;
  className?: string;
}

export default function SearchBar({
  container,
  placeholder,
  className,
}: SearchBarProps) {
  const SearchIcon = icons["Search"];

  return (
    <label
      className={`label--search-bar flex h-11 cursor-pointer items-center gap-4 rounded-md border border-neutral-700 p-2.5 ${className}`}
      title="Système de recherche super cool"
    >
      <SearchIcon size="25" />

      <input
        type="text"
        placeholder={placeholder}
        className="h-7 w-full rounded-md bg-transparent placeholder-white"
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
