"use client";

import "./Saisons.scss";

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
  const [_, setIsClient] = useState(false);

  const [saison, setSaison] = useState<null | string>(null);
  const [saisons, setSaisons] = useState<
    null | { id: string; element: React.ReactNode }[]
  >(null);

  useEffect(() => {
    setIsClient(true);

    const currentAnime = getAnime(
      getCurrentAnime({
        wSaison: false,
      })
    );

    if (!currentAnime || !currentAnime.options.saisons) {
      router.push({
        pathname: "/",
      });
    } else {
      setAnime(currentAnime);
      setSaisons(getSaisons());
      setSaison(
        localStorage.getItem(`${formatName(currentAnime?.anime!)}--saison`)
      );
    }
  }, [router]);

  return (
    <>
      <Head>
        {anime?.anime ? (
          <title>
            {formatName(anime.anime)} - Saisons - Mugiwara-no Streaming
          </title>
        ) : null}
      </Head>

      <Title
        link={{
          pathname: "/Home",
          query: { anime: anime?.anime! },
        }}
      />

      <p
        style={{
          position: "relative",
          top: "35px",
          color: "white",
          fontSize: "50px",
        }}
      >
        Les <span>saisons</span> disponibles.
      </p>

      <p className="lastSaison">
        {saison ? (
          <>
            Historique Saison :{" "}
            <span
              onClick={() =>
                changeSaison(saison, formatName(anime?.anime!), router)
              }
              style={{ cursor: "pointer" }}
            >
              <a id={saison} className="historiqueSaison">
                {anime?.options.saisons?.[saison].name}
              </a>
            </span>
          </>
        ) : null}
      </p>

      <SearchBar
        placeholder="Rechercher une saison"
        container="list-poster-saison"
      />

      <div className="saisons">
        {saisons?.map(({ element, id }, index) => (
          <div
            style={{ cursor: "pointer" }}
            key={id}
            id={id}
            className="list-poster-saison"
            onClick={() =>
              changeSaison(
                (index + 1).toString(),
                formatName(anime?.anime!),
                router
              )
            }
          >
            {element}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Saisons;
