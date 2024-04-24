"use client";

import React, { RefObject } from "react";

import { ANIMES } from "@/animes/constants";
import { useRouter } from "next/router";

import Image from "next/image";
import normalizeString from "../lib/normalizeString";

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
    if (inputRef.current) {
      inputRef.current.value = "";
    }

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
  }, [isVisible]);

  return (
    <input
      className={`bg-transparent ${className ?? ""}`}
      ref={inputRef}
      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = normalizeString(e.target.value);

        const filteredAnimes = ANIMES.filter(
          ({ anime, aliases }) =>
            normalizeString(anime).includes(inputValue) ||
            (aliases &&
              aliases.some((alias) =>
                normalizeString(alias).includes(inputValue),
              )),
        );

        if (filteredAnimes.length === 0) {
          setOutput(<p>Aucun résultat trouvé.</p>);
        } else if (filteredAnimes.length > 0) {
          setOutput(
            <ul>
              {filteredAnimes.map(({ options, anime, synopsis }) => (
                <li
                  className="flex cursor-pointer border border-transparent py-2 text-left opacity-60 transition-all hover:border-neutral-700 hover:bg-zinc-900 hover:bg-opacity-50 hover:opacity-100"
                  key={anime}
                  onClick={() => {
                    setIsVisible(!isVisible);

                    router?.push({
                      pathname: "/Home",
                      query: { anime: anime },
                    });
                  }}
                >
                  <div>
                    <Image
                      src={options.affiche!}
                      alt={anime}
                      className="w-40 min-w-40"
                    />
                  </div>

                  <div>
                    <h1 className="mx-3 text-2xl">
                      {anime.length > 30
                        ? `${anime?.substring(0, 30)}...`
                        : anime}
                    </h1>

                    <p className="mx-4 text-xs opacity-75">
                      {synopsis.length > 300
                        ? synopsis.substring(0, 300) + "..."
                        : synopsis}
                    </p>
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
