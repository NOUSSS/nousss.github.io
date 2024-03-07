"use client";

import Link from "next/link";
import Head from "next/head";

import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";

import "./responsive.scss";
import "./Home.scss";

import { AnimesType } from "../../animes/constants";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { useEffect, useState } from "react";
import { getAnime } from "@/app/lib/getAnime";
import { formatName } from "@/app/lib/formatName";
import { useRouter } from "next/router";

import NavMotion from "@/app/lib/navMotion";

const Home = () => {
  const [anime, setAnime] = useState<AnimesType | null>(null);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    setIsClient(true);

    const currentAnime = getAnime(
      getCurrentAnime({
        wSaison: false,
      })
    );

    if (currentAnime) {
      setAnime(currentAnime);

      NavMotion({
        container: document.querySelector(".choices") as HTMLElement,
        direction: "vertical",
        size: 2,
      });
    } else {
      router.push({
        pathname: "/",
      });
    }
  }, [query.anime]);

  return (
    <>
      <Head>
        {anime?.anime ? (
          <title>
            {formatName(anime.anime)} - Accueil - Mugiwara-no Streaming
          </title>
        ) : null}
      </Head>

      <div className="container--home">
        <div className="card">
          <Title
            link={{
              pathname: "/",
            }}
          />

          <div className="synopsis">{anime?.synopsis}</div>

          <div className="choices">
            <ul>
              {isClient && anime?.options.FILM_OPTIONS ? (
                <li>
                  <Link
                    href={{
                      pathname: "/Films",
                      query: { anime: anime?.anime },
                    }}
                  >
                    Films
                  </Link>
                </li>
              ) : null}
              {isClient && anime?.options.EPISODES_OPTIONS ? (
                <li>
                  <Link
                    href={{
                      pathname: "/Saisons",
                      query: { anime: anime?.anime },
                    }}
                  >
                    Saisons
                  </Link>
                </li>
              ) : null}
              {isClient && anime?.options.SCANS_OPTIONS ? (
                <li>
                  <Link
                    href={{
                      pathname: "/Scans",
                      query: { anime: anime?.anime },
                    }}
                  >
                    Scans
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
