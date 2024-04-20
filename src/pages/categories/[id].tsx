"use client";

import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  ANIMES,
  GroupedAnimes,
  groupAnimesByCategory,
} from "@/animes/constants";

import { getAnime } from "@/app/lib/getAnime";
import { getWallpaper } from "@/app/lib/getWallpaper";

export default function Category() {
  const router = useRouter();

  const [currentCategory, setCurrentCategory] = useState<string>();
  const [animes, setAnimes] = useState<GroupedAnimes | null>(null);

  useEffect(() => {
    const category = router.query.id as string;

    if (category) {
      setCurrentCategory(category);

      if (!ANIMES.some(({ category: catList }) => catList.includes(category))) {
        router.push("/");
      }
    }
  }, [router.query.id]);

  useEffect(() => {
    if (currentCategory) {
      const filteredAnimes = ANIMES.filter(({ category }) =>
        category.includes(currentCategory),
      );

      const groupedAnimes = groupAnimesByCategory(filteredAnimes, false);
      const foundAnimes = groupedAnimes.find(
        (e) => e.category === currentCategory,
      );

      setAnimes(foundAnimes ?? null);
    }
  }, [currentCategory]);

  function pluriel(count: number, singular: string, plural: string): string {
    return count > 1 ? plural : singular;
  }

  return (
    <main>
      <h1 className="text-3xl">{currentCategory}</h1>

      {animes?.names ? (
        <p className="text-zinc-400">
          {animes.names.length}{" "}
          {pluriel(animes.names.length, "anime", "animes")} trouvé
          {pluriel(animes.names.length, "", "s")}
        </p>
      ) : null}

      <div className="mx-2 mt-16 sm:mx-12">
        {animes?.names.map((name) => {
          const image = getWallpaper(name);
          const fetchedAnime = getAnime(name);

          const disponibles = [
            fetchedAnime?.options.EPISODES_OPTIONS && "Episodes",
            fetchedAnime?.options.SCANS_OPTIONS && "Scans",
            fetchedAnime?.options.FILM_OPTIONS && "Films",
          ].filter(Boolean);

          return (
            <div
              title={
                fetchedAnime?.synopsis ||
                "Aucun synopsis disponible pour cet anime"
              }
              className="group mr-6 inline-flex w-36 cursor-pointer flex-col rounded-xl max-md:w-32"
              onClick={() =>
                router.push({ pathname: "Home", query: { anime: name } })
              }
              key={name}
            >
              <div className="relative top-1 overflow-hidden rounded-md shadow-xl">
                {image && (
                  <Image
                    className="z-[-1] h-48 min-h-48 rounded-md transition-transform group-hover:scale-105"
                    src={image}
                    alt={`Affiche de l'anime ${name}`}
                  />
                )}
              </div>

              <p className="my-2 text-center text-base max-md:text-sm">
                {name} <br />
                <span className="text-sm max-md:text-xs">
                  {disponibles.join(", ")}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
