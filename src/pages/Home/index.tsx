import Link from "next/link";
import Head from "next/head";
import NavMotion from "@/app/lib/navMotion";
import ColorPicker from "@/app/ui/colorPicker";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { AnimesType } from "@/animes/constants";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { getAnime } from "@/app/lib/getAnime";

const Home = () => {
  const [anime, setAnime] = useState<AnimesType | null>(null);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const query = router.query;

  const choicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);

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
    <main className="mx-auto w-3/4 rounded-lg bg-[#17171c7a] p-4 shadow-lg shadow-black/10 max-md:w-full max-md:bg-transparent max-md:shadow-none">
      <Head>
        {anime?.anime && (
          <title>{anime.anime} - Accueil - Mugiwara-no Streaming</title>
        )}
      </Head>

      <ColorPicker />
      <Title link={{ pathname: "/" }} />

      <div className="m-12 text-left text-lg">{anime?.synopsis}</div>

      <div ref={choicesRef} className="flex justify-center text-left">
        <ul>
          {isClient && anime?.options.FILM_OPTIONS && (
            <li className="text-4xl text-sky-500 transition-colors hover:text-main">
              <Link
                href={{ pathname: "/Films", query: { anime: anime?.anime } }}
              >
                Films
              </Link>
            </li>
          )}
          {isClient && anime?.options.EPISODES_OPTIONS && (
            <li className="text-4xl text-sky-500 transition-colors hover:text-main">
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

          {isClient && anime?.options.SCANS_OPTIONS && (
            <li className="text-4xl text-sky-500 transition-colors hover:text-main">
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
