"use client";

import React, { RefObject } from "react";

import { ANIMES } from "@/animes/constants";
import { formatName } from "@/app/lib/formatName";
import { useRouter } from "next/router";

import Image from "next/image";

interface FastSearchBarProps {
  setOutput: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

  searchContainerRef: RefObject<HTMLDivElement>;
  isVisible: boolean;

  inputRef: RefObject<HTMLInputElement>;
  className?: string;
}

const FastSearchBar: React.FC<FastSearchBarProps> = ({
  setOutput,
  setIsVisible,

  searchContainerRef,
  isVisible,

  inputRef,
  className,
}) => {
  const router = useRouter();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      )
        setIsVisible(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      } else if (event.ctrlKey && event.key === "k") {
        event.preventDefault();

        setIsVisible(!isVisible);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, searchContainerRef, setIsVisible]);

  return (
    <input
      className={`${className ?? ""}`}
      ref={inputRef}
      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        const filteredAnimes = ANIMES.filter(({ anime, aliases }) => {
          const value = inputValue.toLowerCase();

          return (
            formatName(anime).toLowerCase().includes(value) ||
            (aliases &&
              aliases.some((alias) => alias.toLowerCase().includes(value)))
          );
        });

        if (filteredAnimes.length === 0) {
          setOutput(<p>Aucun résultat trouvé.</p>);
        } else if (filteredAnimes.length > 0) {
          setOutput(
            <ul>
              {filteredAnimes.map(({ options, anime, synopsis }) => (
                <li
                  className="hover:bg-[rgb(33 35 37) 70] flex cursor-pointer border border-transparent py-2 text-left opacity-60 transition-all duration-200 ease-out hover:border-[--grey] hover:opacity-100"
                  key={anime}
                  onClick={() => {
                    setIsVisible(!isVisible);

                    router?.push({
                      pathname: "/Home",
                      query: { anime: formatName(anime) },
                    });
                  }}
                >
                  <div>
                    <Image
                      src={options.affiche!}
                      alt={anime}
                      className="min-w-40 max-w-40"
                    />
                  </div>

                  <div>
                    <h1 className="mx-3 text-2xl">
                      {formatName(anime).length > 30
                        ? `${formatName(anime).substring(0, 30)}...`
                        : formatName(anime)}
                    </h1>

                    <p className="mx-4 text-xs opacity-75">{synopsis}</p>
                  </div>
                </li>
              ))}
            </ul>,
          );
        }
      }}
      type="text"
      placeholder="Recherche rapide..."
    />
  );
};

export default FastSearchBar;
