"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { getAnime, getCurrentAnime, getWallpaper, cn } from "@/app/lib/";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Footer, RelatedAnimes, SearchBar } from "@/app/components/";
import { AnimesType } from "@/animes/constants";
import { useAnime } from "@/app/lib/hooks";
import { Anime } from "@/typings/types";
import { getSaisons } from "@/app/utils/Saisons/getSaisons";
import { changeSaison } from "@/app/utils/Saisons/changeSaison";
import { getFilms } from "@/app/utils/Films/getFilms";
import { icons } from "lucide-react";

import EpisodeData from "@/app/class/episodeData";
import FilmData from "@/app/class/filmData";

const synopsisLimit = 300;

const Home = () => {
  const [allSynopsis, setAllSynopsis] = useState<boolean>(false);
  const [synopsisAnime, setSynopsis] = useState<ReactNode>();

  const [anime, setAnime] = useState<AnimesType | null>(null);
  const [hidden, setHidden] = useState(true);

  const [animeSeason, updateAnimeSeason] = useAnime<Anime.AnimeSaisonsProps>(
    {},
  );

  const [animeFilms, updateAnimeFilms] = useAnime<Anime.AnimeFilmsProps>({});

  const router = useRouter();
  const query = router.query;

  const seasonPart = useRef<HTMLDivElement>(null);
  const filmPart = useRef<HTMLDivElement>(null);

  const filmsRef = useRef<HTMLUListElement[]>([]);
  const saisonsRef = useRef<HTMLUListElement[]>([]);

  const catsRef = useRef<HTMLDivElement[]>([]);

  const ChevronDown = icons["ChevronDown"];
  const ArrowUpRight = icons["ArrowUpRight"];

  const ChevronDownSeasonRef = useRef<SVGSVGElement>(null);
  const ChevronDownFilmsRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const currentAnime = getAnime(getCurrentAnime({ wSaison: false }));

    if (currentAnime) {
      setAllSynopsis(false);
      setHidden(true);

      setAnime(currentAnime);

      const episodeData = new EpisodeData(currentAnime.anime);

      updateAnimeSeason({
        anime: currentAnime,
        saisons: getSaisons(),
        saison: episodeData.get()?.saison,
      });

      updateAnimeFilms({
        anime: currentAnime,
      });

      getFilms(animeFilms!, updateAnimeFilms, false);
    } else {
      router.push("/");
    }
  }, [query.anime, anime?.anime]);

  useEffect(() => {
    if (anime?.synopsis) {
      if (allSynopsis) {
        setSynopsis(anime.synopsis);
      } else {
        setSynopsis(
          <>
            {anime.synopsis.slice(0, synopsisLimit)}...{" "}
            <p className="inline text-main hover:underline">Voir plus</p>
          </>,
        );
      }
    }
  }, [allSynopsis, anime]);

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

      <main className="top-0 flex flex-col gap-12 border-b border-neutral-700 bg-zinc-900 bg-opacity-50 text-left min-[460px]:top-16 min-[460px]:border min-[460px]:bg-opacity-70">
        <div className="relative flex h-auto flex-col">
          {anime?.options.affiche && (
            <div className="relative hidden justify-center overflow-hidden min-[460px]:flex lg:h-[calc(100vh-28.75rem)]">
              <Image
                alt={`affiche de ${anime.anime}`}
                src={anime.options.affiche!}
                className="h-full w-auto max-lg:w-5/6"
              />

              <Image
                alt={`affiche de ${anime.anime}`}
                src={anime.options.affiche!}
                className="absolute left-0 top-0 -z-10 h-full w-full object-cover blur-[.5375rem] brightness-90"
              />
            </div>
          )}

          {anime?.anime && getWallpaper(anime.anime) && (
            <div className="relative">
              <Image
                alt={`saison de ${anime.anime}`}
                src={getWallpaper(anime.anime)!}
                className="mask-image-fade aspect-[9/13] w-full min-[460px]:hidden"
              />
            </div>
          )}

          <div className="relative p-4 max-[460px]:-top-24 md:mx-24 lg:p-8">
            {anime?.anime && (
              <h1
                title={anime.aliases?.join(", ")}
                className="my-4 text-center text-5xl font-normal max-xl:text-3xl"
              >
                {anime.anime}
              </h1>
            )}

            {anime?.synopsis && anime.synopsis.length > synopsisLimit ? (
              <button
                onClick={() => {
                  setAllSynopsis(!allSynopsis);
                }}
                className="mb-4 text-left text-sm text-zinc-300 md:text-base"
              >
                {synopsisAnime}
              </button>
            ) : (
              <p className="mb-4 text-sm text-zinc-300 md:text-base">
                {anime?.synopsis}
              </p>
            )}

            {anime?.category && (
              <button
                onClick={() => {
                  if (hidden) {
                    catsRef.current.forEach((e) =>
                      e.classList.remove("hidden"),
                    );
                  } else {
                    catsRef.current.forEach((e, i) => {
                      if (i > 2) {
                        e.classList.add("hidden");
                      }
                    });
                  }

                  setHidden(!hidden);
                }}
                className="mb-4 flex flex-wrap gap-3"
              >
                {anime.category.map((category, i) => (
                  <div
                    ref={(e) => {
                      if (e && catsRef.current) {
                        catsRef.current[i] = e;
                      }
                    }}
                    className={cn(
                      "relative inline-flex rounded border border-main p-2 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-main before:opacity-75",
                      { hidden: hidden && i > 2 },
                    )}
                    key={i}
                  >
                    {category}
                  </div>
                ))}

                {anime.category.length > 3 && (
                  <div className="relative cursor-pointer rounded border border-main p-2 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-main before:opacity-75">
                    {hidden ? `+${anime.category.length - 3}` : "-"}
                  </div>
                )}
              </button>
            )}

            <div className="mt-4 flex flex-col gap-2">
              {anime?.options.EPISODES_OPTIONS && (
                <div>
                  <div className="inline-block">
                    <p
                      onClick={() => {
                        const classList =
                          ChevronDownSeasonRef.current?.classList;

                        if (classList?.contains("rotate-180")) {
                          classList.remove("rotate-180");
                          seasonPart.current?.classList.remove("hidden");
                        } else {
                          classList?.add("rotate-180");
                          seasonPart.current?.classList.add("hidden");
                        }
                      }}
                      className="mb-4 flex cursor-pointer items-center gap-1 text-2xl font-normal hover:text-main"
                    >
                      <ChevronDown ref={ChevronDownSeasonRef} /> Saisons
                    </p>
                  </div>

                  <div ref={seasonPart}>
                    {animeSeason.saisons && animeSeason.saisons.length > 1 && (
                      <SearchBar
                        placeholder="Rechercher une saison"
                        className="mb-4"
                        containerRef={saisonsRef}
                        query="id"
                      />
                    )}

                    <ul
                      className="flex flex-wrap gap-3 md:gap-6"
                      ref={(el) => {
                        if (el) {
                          saisonsRef.current[0] = el;
                        }
                      }}
                    >
                      {animeSeason?.saisons?.map(({ element, id }, index) => (
                        <li
                          key={id}
                          id={id}
                          className="group mb-4 inline-flex w-28 cursor-pointer flex-col items-center gap-2.5 text-center md:w-36"
                          onClick={() => {
                            changeSaison((index + 1).toString(), anime?.anime!);
                          }}
                        >
                          <Link
                            href={{
                              pathname: "/Episodes",
                              query: {
                                anime: anime?.anime,
                                saison: (index + 1).toString(),
                              },
                            }}
                          >
                            {element}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {anime?.options.FILM_OPTIONS && (
                <div>
                  <div className="inline-block">
                    <p
                      onClick={() => {
                        const classList =
                          ChevronDownFilmsRef.current?.classList;

                        if (classList?.contains("rotate-180")) {
                          classList.remove("rotate-180");
                          filmPart.current?.classList.remove("hidden");
                        } else {
                          classList?.add("rotate-180");
                          filmPart.current?.classList.add("hidden");
                        }
                      }}
                      className="mb-4 flex cursor-pointer items-center gap-1 text-2xl font-normal hover:text-main"
                    >
                      <ChevronDown ref={ChevronDownFilmsRef} /> Films
                    </p>
                  </div>

                  <div ref={filmPart}>
                    {animeFilms?.films && animeFilms.films.length > 1 && (
                      <SearchBar
                        className="mb-4"
                        placeholder="Rechercher un film"
                        containerRef={filmsRef}
                        query="id"
                      />
                    )}

                    <ul
                      className="flex flex-wrap gap-3 md:gap-6"
                      ref={(el) => {
                        if (el) {
                          filmsRef.current[0] = el;
                        }
                      }}
                    >
                      {animeFilms.films?.map(({ id, element }, index) => (
                        <li
                          key={id}
                          id={id}
                          className="group mb-4 inline-flex w-28 cursor-pointer flex-col items-center gap-2.5 text-center md:w-36"
                        >
                          <Link
                            href={{
                              pathname: "/Films",
                              query: { anime: anime?.anime },
                            }}
                            onClick={() => {
                              const filmData = new FilmData(
                                animeFilms.anime?.anime,
                              );

                              const filmDataGet = filmData.get();

                              filmData.setFilm(index.toString());
                              filmData.setLang(
                                filmDataGet?.lang
                                  ? filmDataGet?.lang
                                  : "vostfr",
                              );
                            }}
                          >
                            {element}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {anime?.options.SCANS_OPTIONS && (
                <Link
                  className="flex items-center gap-2 text-2xl font-normal transition-colors hover:text-main"
                  href={{ pathname: "/Scans", query: { anime: anime.anime } }}
                >
                  <ArrowUpRight />
                  {anime.category.includes("Webtoon") ? "Webtoon" : "Scans"}
                </Link>
              )}
            </div>

            {anime && <RelatedAnimes anime={anime} separation />}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
