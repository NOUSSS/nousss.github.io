"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { navMotion, getAnime, getCurrentAnime } from "@/app/lib/";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/app/components/";
import { AnimesType } from "@/animes/constants";

const Home = () => {
  const [anime, setAnime] = useState<AnimesType | null>(null);

  const router = useRouter();
  const query = router.query;

  const choicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentAnime = getAnime(getCurrentAnime({ wSaison: false }));

    if (currentAnime) {
      setAnime(currentAnime);

      navMotion({
        container: choicesRef,
        direction: "vertical",
        size: 2,
      });
    } else {
      router.push("/");
    }
  }, [query.anime]);

  return (
    <>
      <Head>
        {anime?.anime && (
          <title>{anime.anime} - Accueil | Mugiwara-no Streaming</title>
        )}

        <meta
          property="og:description"
          content="L'accueil. Là où vous pouvez choisir entre : Films, Scans ou Episodes"
        />
      </Head>

      <main className="top-24 mx-12 max-sm:mx-0">
        <div className="relative mb-12 flex h-auto flex-col rounded-md border border-neutral-700 bg-zinc-900 bg-opacity-50 text-left max-sm:rounded-none xl:flex-row">
          {anime?.options.affiche && (
            <>
              <div className="relative flex justify-center rounded-lg xl:-left-2">
                <Image
                  alt={`affiche de ${anime.anime}`}
                  src={anime.options.affiche!}
                  className="w-full scale-90 rounded-lg border border-white md:h-full md:w-[654px] md:max-w-[654px]"
                />
              </div>

              <Image
                alt={`affiche de ${anime.anime}`}
                src={anime.options.affiche!}
                className="absolute left-0 -z-10 h-full w-full blur-lg md:h-full xl:w-auto"
              />
            </>
          )}

          <div className="m-5 text-lg">
            {anime?.anime && (
              <h1 className="animate-title text-center text-4xl">
                {anime.anime}
              </h1>
            )}

            {anime?.aliases && anime.aliases.length > 0 && (
              <div>
                Aliases
                <p className="ml-1 text-sm text-zinc-300">
                  {anime.aliases.join(", ")}
                </p>
              </div>
            )}

            <div>
              Catégories
              <p className="ml-1 text-sm text-zinc-300">
                {anime?.category.join(", ")}
              </p>
            </div>

            <div className="mt-4">
              Synopsis
              <p className="ml-1 text-sm text-zinc-300">{anime?.synopsis}</p>
            </div>
          </div>
        </div>

        <div ref={choicesRef} className="flex justify-center text-left">
          <ul>
            {anime?.options.FILM_OPTIONS && (
              <li className="text-4xl">
                <Link
                  className="transition-colors hover:text-main"
                  href={{ pathname: "/Films", query: { anime: anime?.anime } }}
                >
                  Films
                </Link>
              </li>
            )}
            {anime?.options.EPISODES_OPTIONS && anime.options.saisons && (
              <li className="text-4xl">
                <Link
                  className="transition-colors hover:text-main"
                  href={{
                    pathname:
                      Object.keys(anime.options.saisons).length > 1
                        ? "/Saisons"
                        : `/Episodes`,
                    query: { anime: anime.anime },
                  }}
                >
                  Saisons
                </Link>
              </li>
            )}

            {anime?.options.SCANS_OPTIONS && (
              <li className="text-4xl">
                <Link
                  className="transition-colors hover:text-main"
                  href={{ pathname: "/Scans", query: { anime: anime.anime } }}
                >
                  {anime.category.includes("Webtoon") ? "Webtoon" : "Scans"}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
