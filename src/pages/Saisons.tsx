"use client";

import { getSaisons } from "@/app/utils/Saisons/getSaisons";
import { Footer, SearchBar } from "@/app/components/";
import { changeSaison } from "@/app/utils/Saisons/changeSaison";
import { getCurrentAnime, getAnime } from "@/app/lib/";
import { Anime } from "@/typings/types";

import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useAnime } from "@/app/lib/hooks/";

import Head from "next/head";
import Link from "next/link";
import EpisodeData from "@/app/class/episodeData";

const Saisons = () => {
  const router = useRouter();

  const [anime, updateAnime] = useAnime<Anime.AnimeSaisonsProps>({});

  const saisonsRef = useRef<HTMLUListElement[]>([]);

  useEffect(() => {
    const currentAnime = getAnime(getCurrentAnime({ wSaison: false }));
    if (!currentAnime || !currentAnime.options.saisons) {
      router.push("/");
    } else {
      const episodeData = new EpisodeData(currentAnime.anime);

      updateAnime({
        anime: currentAnime,
        saisons: getSaisons(),
        saison: episodeData.get()?.saison,
      });
    }
  }, [router]);

  return (
    <>
      <Head>
        {anime?.anime && (
          <title>{anime.anime.anime} - Saisons | Mugiwara-no Streaming</title>
        )}

        <meta
          property="og:description"
          content="Les saisons disponible de l'anime que vous souhaitez"
        />
      </Head>

      <main>
        {anime?.anime && (
          <h1 className="animate-title text-5xl">
            <Link
              className="font-normal"
              href={{
                pathname: "/Home",
                query: { anime: anime!.anime.anime },
              }}
            >
              {anime.anime.anime}
            </Link>
          </h1>
        )}

        <p className="m-4 text-5xl">
          Les <span>saisons</span> disponibles.
        </p>

        <p>
          {anime.saison && anime.anime?.anime && (
            <>
              Historique Saison :{" "}
              <Link
                onClick={() => {
                  changeSaison(
                    anime.saison as string,
                    anime.anime?.anime as string,
                  );
                }}
                href={{
                  pathname: "/Episodes",
                  query: { anime: anime.anime.anime, saison: anime.saison },
                }}
                className="cursor-pointer underline"
              >
                {
                  Object.values(anime?.anime?.options.saisons!)[
                    Number(anime?.saison) - 1
                  ]?.name
                }
              </Link>
            </>
          )}
        </p>

        <SearchBar
          placeholder="Rechercher une saison"
          className="m-8"
          containerRef={saisonsRef}
          query="id"
        />

        <ul
          className="overflow-x-auto"
          ref={(el) => (saisonsRef.current[0] = el!)}
        >
          {anime?.saisons?.map(({ element, id }, index) => (
            <li
              key={id}
              id={id}
              className="group m-4 inline-flex w-28 cursor-pointer flex-col items-center gap-2.5 md:w-36"
              onClick={() => {
                changeSaison((index + 1).toString(), anime?.anime?.anime!);
              }}
            >
              <Link
                href={{
                  pathname: "/Episodes",
                  query: {
                    anime: anime.anime?.anime,
                    saison: (index + 1).toString(),
                  },
                }}
              >
                {element}
              </Link>
            </li>
          ))}
        </ul>

        <Footer />
      </main>
    </>
  );
};

export default Saisons;
