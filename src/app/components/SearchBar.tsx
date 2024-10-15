import { icons } from "lucide-react";
import { cn, initSearchBar } from "@/app/lib/";
import { FC, RefObject, useEffect, useRef } from "react";

type QueryType = "id" | "innerText";

interface SearchBarProps {
  containerRef: RefObject<(HTMLUListElement | HTMLDivElement)[]>;
  placeholder: string;
  className?: string;
  query: QueryType;
  iconColor?: string;
  notFirst?: boolean;
  dontClickOutside?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({
  containerRef,
  placeholder,
  className,
  query,
  iconColor = "white",
  notFirst,
  dontClickOutside,
}) => {
  const SearchIcon = icons["Search"];

  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dontClickOutside) {
        setTimeout(() => {
          if (
            inputRef.current &&
            labelRef.current &&
            !labelRef.current.contains(event.target as Node)
          ) {
            inputRef.current.value = "";
            initSearchBar(inputRef, containerRef, query, notFirst);
          }
        }, 300);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <label
      className={cn(
        "flex h-11 cursor-pointer items-center gap-4 rounded-md border border-neutral-700 bg-zinc-900 bg-opacity-50 p-2.5 shadow-xl",
        className,
      )}
      ref={labelRef}
      title="Système de recherche super cool"
    >
      <SearchIcon color={iconColor} size="20" />

      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className={cn("h-7 w-full rounded-md bg-transparent", {
          "text-black placeholder-black": iconColor === "black",
        })}
        onInput={() => initSearchBar(inputRef, containerRef, query, notFirst)}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Spacebar") {
            e.stopPropagation();
            e.preventDefault();

            if (inputRef.current) inputRef.current.value += " ";
          }
        }}
      />
    </label>
  );
};

export default SearchBar;
