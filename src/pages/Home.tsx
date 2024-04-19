"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import NavMotion from "@/app/lib/navMotion";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/app/components/Footer";
import { AnimesType } from "@/animes/constants";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { getAnime } from "@/app/lib/getAnime";

const Home = () => {
  const [anime, setAnime] = useState<AnimesType | null>(null);

  const router = useRouter();
  const query = router.query;

  const choicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentAnime = getAnime(getCurrentAnime({ wSaison: false }));

    if (currentAnime) {
      setAnime(currentAnime);

      NavMotion({
        container: choicesRef,
        direction: "vertical",
        size: 2,
      });
    } else {
      router.push("/");
    }
  }, [query.anime]);

  return (
    <main className="top-24 mx-12 max-sm:mx-0">
      <Head>
        {anime?.anime && (
          <title>{anime.anime} - Accueil - Mugiwara-no Streaming</title>
        )}
      </Head>

      <div className="relative mb-12 flex h-auto rounded-md bg-zinc-900 bg-opacity-50 text-left max-xl:flex-col max-sm:rounded-none">
        {anime?.options.affiche && (
          <div>
            <Image
              alt={`affiche de ${anime.anime}`}
              src={anime.options.affiche!}
              className="rounded-l-md max-xl:rounded-l-none max-xl:rounded-t-md max-sm:rounded-none md:h-full md:w-[654px] md:max-w-[654px]"
            />

            <Image
              alt={`ambiance de ${anime.anime}`}
              src={anime.options.affiche!}
              className="absolute left-0 top-0 -z-50 h-full w-full blur-3xl"
            />
          </div>
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
              {anime?.category && anime.category.join(", ")}
            </p>
          </div>

          <div className="mt-4">
            Synopsis
            <p className="ml-1 text-sm text-zinc-300">
              {anime?.synopsis && anime.synopsis}
            </p>
          </div>
        </div>
      </div>

      <div
        ref={choicesRef}
        className="flex justify-center text-left text-orange-400"
      >
        <ul>
          {anime?.options.FILM_OPTIONS && (
            <li className="text-4xl transition-colors hover:text-main">
              <Link
                href={{ pathname: "/Films", query: { anime: anime?.anime } }}
              >
                Films
              </Link>
            </li>
          )}
          {anime?.options.EPISODES_OPTIONS && (
            <li className="text-4xl transition-colors hover:text-main">
              <Link
                href={{
                  pathname: "/Saisons",
                  query: { anime: anime?.anime },
                }}
              >
                Saisons
              </Link>
            </li>
          )}

          {anime?.options.SCANS_OPTIONS && (
            <li className="text-4xl transition-colors hover:text-main">
              <Link
                href={{ pathname: "/Scans", query: { anime: anime?.anime } }}
              >
                {anime.category.includes("Webtoon") ? "Webtoon" : "Scans"}
              </Link>
            </li>
          )}
        </ul>
      </div>

      <Footer style={false} />
    </main>
  );
};

export default Home;
