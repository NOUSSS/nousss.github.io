import { icons } from "lucide-react";
import { cn, initSearchBar } from "@/app/lib/";
import { FC, RefObject, useRef } from "react";

type QueryType = "id" | "innerText";

interface SearchBarProps {
  containerRef: RefObject<HTMLUListElement[]>;
  placeholder: string;
  className?: string;
  query: QueryType;
}

const SearchBar: FC<SearchBarProps> = ({
  containerRef,
  placeholder,
  className,
  query,
}) => {
  const SearchIcon = icons["Search"];
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      className={cn(
        "flex h-11 cursor-pointer items-center gap-4 rounded-md border border-neutral-700 bg-zinc-900 bg-opacity-50 p-2.5 shadow-xl",
        className,
      )}
      title="Système de recherche super cool"
    >
      <SearchIcon size="20" />

      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className="h-7 w-full rounded-md bg-transparent"
        onInput={() => initSearchBar(inputRef, containerRef, query)}
      />
    </label>
  );
};

export default SearchBar;
