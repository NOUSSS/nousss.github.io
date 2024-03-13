"use client";

import { getSaisons } from "@/app/components/Saisons/getSaisons";
import { AnimesType } from "@/animes/constants";
import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { changeSaison } from "@/app/components/Saisons/changeSaison";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { formatName } from "@/app/lib/formatName";
import { getAnime } from "@/app/lib/getAnime";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "next/head";
import SearchBar from "@/app/ui/searchBar";

const Saisons = () => {
  const router = useRouter();
  const [anime, setAnime] = useState<AnimesType | null>(null);
  const [saison, setSaison] = useState<null | string>(null);
  const [saisons, setSaisons] = useState<
    null | { id: string; element: React.ReactNode }[]
  >(null);

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

      <Title
        link={{
          pathname: "/Home",
          query: { anime: anime?.anime! },
        }}
      />

      <p className="m-4 text-5xl">
        Les <span>saisons</span> disponibles.
      </p>

      <p className="my-12">
        {saison && (
          <>
            Historique Saison :{" "}
            <span
              onClick={() =>
                changeSaison(saison, formatName(anime?.anime!), router)
              }
              className="cursor-pointer underline"
            >
              {anime?.options.saisons?.[saison].name}
            </span>
          </>
        )}
      </p>

      <SearchBar
        placeholder="Rechercher une saison"
        container="list-poster-saison"
      />

      <div className="overflow-x-auto">
        {saisons?.map(({ element, id }, index) => (
          <div
            key={id}
            id={id}
            className="list-poster-saison m-8 inline-flex w-20 cursor-pointer flex-col gap-2.5"
            onClick={() =>
              changeSaison(
                (index + 1).toString(),
                formatName(anime?.anime!),
                router,
              )
            }
          >
            {element}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Saisons;
