"use client";

import React, { RefObject } from "react";

import { ANIMES } from "@/animes/constants";
import { cn, normalizeString } from "../lib/";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

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

  React.useEffect(() => {
    setIsVisible(window.location.hash === "#search");
  }, [setIsVisible]);

  React.useEffect(() => {
    if (isVisible) {
      router.push("#search", undefined, { shallow: true }).catch(() => 0);
    } else {
      const newUrl = window.location.pathname + window.location.search;
      router.push(newUrl, undefined, { shallow: true }).catch(() => 0);
    }
  }, [isVisible]);

  return (
    <input
      className={cn("bg-transparent", className)}
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
            <ul className="p-1">
              {filteredAnimes.map(({ options, anime, synopsis }) => (
                <Link
                  href={{ pathname: "/Home", query: { anime: anime } }}
                  className="flex cursor-pointer rounded bg-opacity-50 p-3 text-left transition-colors hover:bg-indigo-600"
                  key={anime}
                  onClick={() => {
                    setIsVisible(!isVisible);
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
                      {synopsis.length > 200
                        ? synopsis.substring(0, 200) + "..."
                        : synopsis}
                    </p>
                  </div>
                </Link>
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
