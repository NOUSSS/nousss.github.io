import { icons } from "lucide-react";
import { initSearchBar } from "@/app/lib/initSearchBar";
import { RefObject, useRef } from "react";

type QueryType = "id" | "innerText";

interface SearchBarProps {
  containerRef: RefObject<HTMLUListElement[] | null>;
  placeholder: string;
  className?: string;
  query: QueryType;
}

export default function SearchBar({
  containerRef,
  placeholder,
  className,
  query,
}: SearchBarProps) {
  const SearchIcon = icons["Search"];

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <label
      className={`flex h-11 cursor-pointer items-center gap-4 rounded-md border border-neutral-700 bg-[rgba(22,23,29,0.5)] p-2.5 shadow-xl ${className}`}
      title="Système de recherche super cool"
    >
      <SearchIcon size="25" />

      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className="h-7 w-full rounded-md bg-transparent"
        onInput={() => initSearchBar(inputRef, containerRef, query)}
      />
    </label>
  );
}
