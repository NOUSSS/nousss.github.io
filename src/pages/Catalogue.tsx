import { ANIMES } from "@/animes/constants";
import { getAnime } from "@/app/lib/getAnime";
import { getWallpaper } from "@/app/lib/getWallpaper";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import Image from "next/image";
import Select from "@/app/components/Select";

export default function Catalogue() {
  const router = useRouter();
  const placeholderRef = useRef<HTMLParagraphElement>(null);

  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);

  const categories: string[] = [];
  const animes = ANIMES.map(({ anime, category }) => ({ anime, category }));

  for (const anime of animes) {
    for (const cat of anime.category) {
      if (!categories.includes(cat)) categories.push(cat);
    }
  }

  return (
    <main className="mx-2 md:mx-16 lg:mx-36">
      <div className="mb-12 flex flex-col gap-5">
        <h3 className="text-2xl md:text-4xl">
          Le catalogue (
          {filteredCategories.length === 0
            ? ANIMES.length
            : ANIMES.filter(({ category }) =>
                filteredCategories.every((cat) => category.includes(cat)),
              ).length}{" "}
          trouvés)
        </h3>

        <div className="flex justify-center">
          <Select
            multiple={true}
            placeholder="Filtrer"
            placeholderRef={placeholderRef}
            items={categories.map((cat) => ({ name: cat, value: cat }))}
            onSelect={(items) =>
              setFilteredCategories(items.map(({ value }) => value))
            }
          />
        </div>
      </div>

      <div>
        {ANIMES.filter(({ category }) =>
          filteredCategories.every((cat) => category.includes(cat)),
        ).map(({ anime }) => {
          const fetchedAnime = getAnime(anime);

          const disponibles = [
            fetchedAnime?.options.EPISODES_OPTIONS && "Episodes",
            fetchedAnime?.options.SCANS_OPTIONS && "Scans",
            fetchedAnime?.options.FILM_OPTIONS && "Films",
          ].filter(Boolean);

          const image = getWallpaper(anime);

          return (
            <div
              title={
                fetchedAnime?.synopsis ||
                "Aucun synopsis disponible pour cet anime"
              }
              className="group mr-6 inline-flex w-36 cursor-pointer flex-col rounded-xl max-md:w-32"
              onClick={() =>
                router.push({ pathname: "/Home", query: { anime: anime } })
              }
              key={anime}
            >
              <div className="relative top-1 overflow-hidden rounded-md shadow-xl">
                {image && (
                  <Image
                    className="z-[-1] h-44 min-h-44 rounded-md transition-transform group-hover:scale-105"
                    src={image}
                    alt={`Affiche de l'anime ${anime}`}
                  />
                )}
              </div>

              <p className="my-2 text-center text-base max-md:text-sm">
                {anime} <br />
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
