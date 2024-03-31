"use client";

import { getSaisons } from "@/app/utils/Saisons/getSaisons";
import { AnimesType } from "@/animes/constants";
import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { changeSaison } from "@/app/utils/Saisons/changeSaison";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { formatName } from "@/app/lib/formatName";
import { getAnime } from "@/app/lib/getAnime";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Head from "next/head";
import SearchBar from "@/app/ui/searchBar";
import ColorPicker from "@/app/ui/colorPicker";

const Saisons = () => {
  const router = useRouter();
  const [anime, setAnime] = useState<AnimesType | null>(null);
  const [saison, setSaison] = useState<null | string>(null);
  const [saisons, setSaisons] = useState<
    null | { id: string; element: React.ReactNode }[]
  >(null);

  const saisonsRef = useRef<HTMLUListElement[]>([]);

  useEffect(() => {
    const currentAnime = getAnime(getCurrentAnime({ wSaison: false }));
    if (!currentAnime || !currentAnime.options.saisons) {
      router.push("/");
    } else {
      setAnime(currentAnime);
      setSaisons(getSaisons());
      setSaison(
        localStorage.getItem(`${formatName(currentAnime?.anime!)}--saison`),
      );
    }
  }, [router]);

  return (
    <main>
      <Head>
        {anime?.anime && (
          <title>
            {formatName(anime.anime)} - Saisons - Mugiwara-no Streaming
          </title>
        )}
      </Head>

      <ColorPicker />

      <Title
        link={{
          pathname: "/Home",
          query: { anime: anime?.anime! },
        }}
      />

      <p className="m-4 text-5xl">
        Les <span>saisons</span> disponibles.
      </p>

      <p>
        {saison && (
          <>
            Historique Saison :{" "}
            <span
              onClick={() => {
                router.push({
                  pathname: `/Episodes`,
                  query: { anime: formatName(anime?.anime!), saison: saison },
                });

                changeSaison(saison, formatName(anime?.anime!)!);
              }}
              className="cursor-pointer underline"
            >
              {Object.values(anime?.options.saisons!)[Number(saison) - 1]?.name}
            </span>
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
        {saisons?.map(({ element, id }, index) => (
          <div
            key={id}
            id={id}
            className="group m-8 inline-flex w-20 cursor-pointer flex-col gap-2.5"
            onClick={() => {
              router.push({
                pathname: `/Episodes`,
                query: {
                  anime: formatName(anime?.anime!),
                  saison: (index + 1).toString(),
                },
              });

              changeSaison((index + 1).toString(), formatName(anime?.anime!)!);
            }}
          >
            {element}
          </div>
        ))}
      </ul>

      <Footer />
    </main>
  );
};

export default Saisons;
