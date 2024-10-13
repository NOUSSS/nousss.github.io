"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { navMotion, getAnime, getCurrentAnime } from "@/app/lib/";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Footer, SearchBar } from "@/app/components/";
import { AnimesType } from "@/animes/constants";
import { useAnime } from "@/app/lib/hooks";
import { Anime } from "@/typings/types";
import { getSaisons } from "@/app/utils/Saisons/getSaisons";
import { changeSaison } from "@/app/utils/Saisons/changeSaison";
import { getFilms } from "@/app/utils/Films/getFilms";
import { icons } from "lucide-react";

import EpisodeData from "@/app/class/episodeData";
import FilmData from "@/app/class/filmData";

const Home = () => {
  const [anime, setAnime] = useState<AnimesType | null>(null);
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

  const ChevronDown = icons["ChevronDown"];
  const ArrowUpRight = icons["ArrowUpRight"];

  const ChevronDownSeasonRef = useRef<SVGSVGElement>(null);
  const ChevronDownFilmsRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const currentAnime = getAnime(getCurrentAnime({ wSaison: false }));

    if (currentAnime) {
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
  }, [query.anime, router, anime?.anime]);

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

      <main className="top-24 mx-12 flex flex-col gap-12 border border-neutral-700 bg-zinc-900 bg-opacity-50 text-left max-sm:mx-0">
        <div className="relative flex h-auto flex-col">
          {anime?.options.affiche && (
            <div className="relative flex justify-center overflow-hidden md:h-[400px]">
              <Image
                alt={`affiche de ${anime.anime}`}
                src={anime.options.affiche!}
                className="md:w-[650px] md:max-w-[650px]"
              />

              <Image
                alt={`affiche de ${anime.anime}`}
                src={anime.options.affiche!}
                className="absolute left-0 top-0 -z-10 w-full scale-110 blur-[.5375rem] brightness-90"
              />
            </div>
          )}

          <div className="p-4 lg:p-8">
            <div className="text-lg font-normal">
              {anime?.anime && (
                <h1 className="my-4 animate-title text-center text-4xl md:my-0">
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

              <div className="my-4">
                Synopsis
                <p className="ml-1 text-sm text-zinc-300">{anime?.synopsis}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
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
                      className="flex cursor-pointer items-center gap-1 text-2xl hover:text-main"
                    >
                      <ChevronDown ref={ChevronDownSeasonRef} /> Saisons{" "}
                    </p>
                  </div>

                  <div ref={seasonPart}>
                    {animeSeason.saisons && animeSeason.saisons.length > 1 && (
                      <SearchBar
                        placeholder="Rechercher une saison"
                        className="my-4"
                        containerRef={saisonsRef}
                        query="id"
                      />
                    )}

                    <ul
                      className="overflow-x-auto"
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
                          className="group m-4 inline-flex w-28 cursor-pointer flex-col items-center gap-2.5 text-center md:w-36"
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
                      className="flex cursor-pointer items-center gap-1 text-2xl hover:text-main"
                    >
                      <ChevronDown ref={ChevronDownFilmsRef} /> Films
                    </p>
                  </div>

                  <div ref={filmPart}>
                    {animeFilms?.films && animeFilms.films.length > 1 && (
                      <SearchBar
                        className="my-4"
                        placeholder="Rechercher un film"
                        containerRef={filmsRef}
                        query="id"
                      />
                    )}

                    <ul
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
                          className="group m-4 inline-flex w-28 cursor-pointer flex-col items-center gap-2.5 text-center md:w-36"
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
                  className="flex items-center gap-2 text-2xl transition-colors hover:text-main"
                  href={{ pathname: "/Scans", query: { anime: anime.anime } }}
                >
                  <ArrowUpRight />
                  {anime.category.includes("Webtoon")
                    ? "Webtoon"
                    : "Scans"}{" "}
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
