import { ANIMES } from "@/animes/constants";
import { getAnime, getWallpaper } from "@/app/lib/";
import { useRef, useState } from "react";
import { Select, Pagination, Footer } from "@/app/components/";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Catalogue() {
  const placeholderRef = useRef<HTMLParagraphElement>(null);
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);

  const categories: string[] = [];
  const animes = ANIMES.map(({ anime, category }) => ({ anime, category }));

  for (const anime of animes) {
    for (const cat of anime.category) {
      if (!categories.includes(cat)) categories.push(cat);
    }
  }

  const finded =
    filteredCategories.length === 0
      ? ANIMES.length
      : ANIMES.filter(({ category }) =>
          filteredCategories.every((cat) => category.includes(cat)),
        ).length;

  return (
    <>
      <Head>
        <title>Catalogue | Mugiwara-no Streaming</title>

        <meta
          property="og:description"
          content="Voici le catalogue de Mugiwara-no Streaming"
        />
      </Head>

      <main className="mx-2 md:mx-16 lg:mx-36">
        <div>
          <script
            dangerouslySetInnerHTML={{
              __html: `aclib.runBanner({
            zoneId: '8748782',
        });`,
            }}
            type="text/javascript"
            async
          ></script>
        </div>

        <div className="max-lg:hidden">
          <script
            dangerouslySetInnerHTML={{
              __html: `aclib.runBanner({
            zoneId: '8765122',
        });`,
            }}
            type="text/javascript"
            async
          ></script>
        </div>

        <div className="mb-12 flex flex-col gap-5">
          <h3 className="text-2xl md:text-4xl">
            {finded} trouvé{finded > 1 ? "s" : ""}
          </h3>

          <span className="inline-block">
            <Link className="text-main hover:underline" href="#search">
              Rechercher un anime ?
            </Link>
          </span>

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
          <Pagination
            items={ANIMES.filter(({ category }) =>
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
                <Link
                  title={
                    fetchedAnime?.synopsis ||
                    "Aucun synopsis disponible pour cet anime"
                  }
                  className="mb-2 mr-4 flex w-36 cursor-pointer flex-col rounded-xl transition-all hover:scale-[.97] md:mr-6 md:w-40"
                  href={{
                    pathname: "/Home",
                    query: { anime: anime },
                  }}
                  key={anime}
                >
                  <div className="relative top-1 w-36 overflow-hidden shadow-xl md:w-40">
                    {image && (
                      <Image
                        className="z-[-1] aspect-[2/3] w-40 transition-transform md:w-44"
                        src={image}
                        alt={`Affiche de l'anime ${anime}`}
                      />
                    )}
                  </div>

                  <p className="my-2 text-left text-base max-md:text-sm">
                    {anime} <br />
                    <span className="text-sm max-md:text-xs">
                      {disponibles.join(", ")}
                    </span>
                  </p>
                </Link>
              );
            })}
            itemsPerPage={36}
          />
        </div>
      </main>

      <div>
        <script
          dangerouslySetInnerHTML={{
            __html: `aclib.runBanner({
            zoneId: '8748782',
        });`,
          }}
          type="text/javascript"
          async
        ></script>
      </div>

      <div className="mt-24">
        <Footer style={true} />
      </div>
    </>
  );
}
