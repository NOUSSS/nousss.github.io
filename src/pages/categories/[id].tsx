"use client";

import {
  ANIMES,
  GroupedAnimes,
  groupAnimesByCategory,
} from "@/animes/constants";
import { getAnime } from "@/app/lib/getAnime";
import { getWallpaper } from "@/app/lib/getWallpaper";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Category() {
  const router = useRouter();

  const [currentCategory, setCurrentCategory] = useState<string>();
  const [animes, setAnimes] = useState<GroupedAnimes>();

  useEffect(() => {
    if (router.query) {
      const category = router.query.id as string;
      const categories: string[] = [];

      setCurrentCategory(category);

      const animes = ANIMES.map(({ anime, category }) => ({ anime, category }));

      for (const anime of animes) {
        for (const cat of anime.category) {
          if (!categories.includes(cat)) categories.push(cat);
        }
      }

      if (category && !categories.includes(category)) router.push("/");
    }
  }, [router]);

  useEffect(() => {
    if (currentCategory) {
      const groupedAnimes = groupAnimesByCategory(
        ANIMES.map(({ anime, category }) => ({ anime, category })),
        false,
        true,
      ).sort((a, b) => b.names.length - a.names.length);

      setAnimes(groupedAnimes.find((e) => e.category === currentCategory));
    }
  }, [currentCategory]);

  return (
    <main>
      <h1 className="text-3xl">{currentCategory}</h1>

      <div className="mx-2 mt-16 sm:mx-12">
        {animes?.names.map((name) => {
          const image = getWallpaper(name);
          const fetchedAnime = getAnime(name);

          const disponibles = [];

          if (fetchedAnime && fetchedAnime.options.EPISODES_OPTIONS)
            disponibles.push("Episodes");
          if (fetchedAnime && fetchedAnime.options.SCANS_OPTIONS)
            disponibles.push("Scans");
          if (fetchedAnime && fetchedAnime.options.FILM_OPTIONS)
            disponibles.push("Films");

          return (
            <div
              title={
                fetchedAnime?.synopsis ?? "Aucun synopsis pour cette anime"
              }
              className="group mr-6 inline-flex w-36 cursor-pointer flex-col rounded-xl max-md:max-md:w-32"
              onClick={() => {
                router.push({
                  pathname: "/Home",
                  query: { anime: name },
                });
              }}
              key={name}
            >
              <div className="min-h-48 overflow-hidden rounded-md shadow-xl">
                {image && (
                  <Image
                    className="relative top-1 z-[-1] h-48 min-h-48 rounded-md transition-transform group-hover:scale-110"
                    src={image}
                    alt="affiche d'un anime"
                  />
                )}
              </div>

              <p className="my-2 text-center text-base max-md:text-sm">
                {name} <br />{" "}
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
