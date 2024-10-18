import { ANIMES } from "@/animes/constants";
import { FC, useEffect, useState } from "react";
import { cn, getAnime, getWallpaper, relatedCats } from "../lib";

import Link from "next/link";
import Image from "next/image";

interface Props {
  animeName: string;
  categories: string[];
  separation?: boolean;
}

const RelatedAnimes: FC<Props> = ({ animeName, categories, separation }) => {
  const [relatedAnimes, setRelatedAnimes] = useState<string[]>([]);

  useEffect(() => {
    for (const a of ANIMES) {
      if (
        ((categories && relatedCats(a.category, categories)) ||
          a.anime.includes(animeName) ||
          animeName.includes(a.anime)) &&
        animeName !== a.anime &&
        !relatedAnimes.includes(a.anime)
      ) {
        setRelatedAnimes((state) => [...state, a.anime]);
      }
    }
  }, []);

  return relatedAnimes.length > 0 ? (
    <div
      className={cn(
        "my-6 flex w-11/12 flex-col min-[435px]:gap-0 sm:w-11/12 lg:w-[930px] xl:w-[1200px]",
        {
          "border-t border-neutral-700 pt-4": separation,
        },
      )}
    >
      <p className="mb-4 text-left text-2xl font-normal">Oeuvres similaires</p>

      <ul className="flex gap-6 overflow-auto">
        {relatedAnimes.map((animeName) => {
          const fetchedAnime = getAnime(animeName);

          const disponibles = [
            fetchedAnime?.options.EPISODES_OPTIONS && "Episodes",
            fetchedAnime?.options.SCANS_OPTIONS && "Scans",
            fetchedAnime?.options.FILM_OPTIONS && "Films",
          ].filter(Boolean);

          return (
            <Link
              href={{
                pathname: "/Home",
                query: { anime: animeName },
              }}
              id={
                animeName +
                `${
                  typeof fetchedAnime?.aliases === "undefined"
                    ? ""
                    : fetchedAnime?.aliases
                }`
              }
              key={animeName}
            >
              <div
                title={
                  fetchedAnime?.synopsis ?? "Aucun synopsis pour cette anime"
                }
                className="w-40 transition-all hover:scale-[.97] max-md:mr-1 md:w-44"
              >
                <div className="overflow-hidden shadow-xl">
                  <Image
                    className="aspect-[2/3] w-40 transition-transform md:w-44"
                    src={getWallpaper(animeName)!}
                    alt="affiche d'un anime"
                  />
                </div>

                <p className="my-2 text-left text-base max-md:text-sm">
                  {animeName} <br />{" "}
                  <span className="text-sm max-md:text-xs">
                    {disponibles.join(", ")}
                  </span>
                </p>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  ) : (
    ""
  );
};

export default RelatedAnimes;
