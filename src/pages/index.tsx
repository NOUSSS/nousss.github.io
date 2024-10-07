"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import getScriptIndex from "@/app/utils/Episodes/getScriptIndex";
import Link from "next/link";

import { Footer, RemoveHistorique } from "@/app/components/";
import {
  ANIMES,
  AnimesType,
  GroupedAnimes,
  groupAnimesByCategory,
} from "@/animes/constants";
import { toast } from "sonner";
import { Data, DatasArr, Historique } from "@/typings/types";
import { getCurrentChapitre } from "@/app/utils/Accueil/getCurrentChapitre";
import { getCurrentEpisode } from "@/app/utils/Accueil/getCurrentEpisode";
import { getAnime, shuffle, getWallpaper, cn } from "@/app/lib/";
import { useRouter } from "next/router";
import { icons } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Head from "next/head";

interface AmbiancePros {
  image?: StaticImageData | null;
  opacity: number;
}

interface Query {
  [key: string]: string;
}
export default function Accueil() {
  const router = useRouter();

  const Trash = icons["Trash2"];
  const Play = icons["Play"];
  const Book = icons["BookOpen"];

  const ArrowUpRight = icons["ArrowUpRight"];

  const [historiques, setHistoriques] = useState<Historique[]>([]);
  const [randomAnimes, setRandomAnimes] = useState<AnimesType[]>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [catalogues, setCatalogues] = useState<GroupedAnimes[]>();
  const [ambiance, setAmbiance] = useState<AmbiancePros>();

  useEffect(() => {
    if (randomAnimes && randomAnimes[currentIndex]) {
      setAmbiance({
        opacity: 0,
        image: ambiance?.image,
      });

      setTimeout(() => {
        setAmbiance({
          image: randomAnimes[currentIndex].options.affiche,
          opacity: 1,
        });
      }, 300);
    }
  }, [currentIndex, randomAnimes]);

  useEffect(() => {
    let shuffledAnimes = [...shuffle(ANIMES)];
    setRandomAnimes(shuffledAnimes.slice(0, 6));

    const loadedHistoriques: Historique[] = [];

    ["episodes", "scans", "films"].forEach((type) => {
      const items = JSON.parse(localStorage.getItem(type) || "[]") as DatasArr;

      items.forEach((item) => {
        loadedHistoriques.push({
          name: item.name,
          redirect: type.charAt(0).toUpperCase() + type.slice(1),
          detail: item,
        });
      });
    });

    setHistoriques(loadedHistoriques);

    const updatedCatalogues = groupAnimesByCategory(
      ANIMES.map(({ anime, category }) => ({ anime, category })),
      true,
    ).sort((a, b) => b.names.length - a.names.length);

    const momentIndex = updatedCatalogues.findIndex(
      ({ category }) => category === "Nouvelles saisons",
    );

    let momentItem;

    if (momentIndex !== -1)
      [momentItem] = updatedCatalogues.splice(momentIndex, 1);

    if (momentItem) updatedCatalogues.unshift(momentItem);

    setCatalogues(updatedCatalogues);
  }, []);

  useEffect(() => {
    if (historiques && catalogues) {
      const updatedCatalogues = [...catalogues];

      if (historiques.length > 0) {
        updatedCatalogues.splice(1, 1, {
          category: "Reprendre",
          names: historiques.map(({ name }) => name),
        });
      } else {
        updatedCatalogues.splice(1, 1);
      }

      setCatalogues(updatedCatalogues);
    }
  }, [historiques]);

  const goToAnime = useCallback(
    (
      animeName: string,
      i: number,
    ): {
      pathname: string;
      query: Query;
    } => {
      const redirect = historiques[i]?.redirect;
      const detail = historiques[i]?.detail;

      if (redirect === "Episodes") {
        return {
          pathname: "/Episodes",
          query: {
            anime: animeName,
            saison: (detail as Data.EpisodesData).saison,
          },
        };
      } else if (redirect === "Scans" || redirect === "Films") {
        return {
          pathname: "/" + redirect,
          query: { anime: animeName },
        };
      }

      return {
        pathname: "/Home",
        query: { anime: animeName },
      };
    },
    [historiques, router],
  );

  const removeFromHistorique = (animeName: string, index: number) => {
    const historique = historiques[index];
    const type = historique.redirect.toLowerCase();

    const storedItems = JSON.parse(
      localStorage.getItem(type) || "[]",
    ) as DatasArr;

    const updatedItems = storedItems.filter((item) =>
      type === "episodes"
        ? !((item as Data.EpisodesData).saison && animeName === item.name)
        : type === "films"
          ? !((item as Data.FilmsData).film && animeName === item.name)
          : !((item as Data.ScansData).chapitre && animeName === item.name),
    );

    localStorage.setItem(type, JSON.stringify(updatedItems));

    setHistoriques((current) => current.filter((_, idx) => idx !== index));

    toast.success(
      `Les ${historique.redirect} de ${animeName} ont bien été retirés de l'historique !`,
    );
  };

  return (
    <>
      <Head>
        <title>Mugiwara-no Streaming</title>

        <meta
          property="og:description"
          content="La page d'accueil de Mugiwara-no Streaming"
        />
      </Head>

      <main className="top-16">
        {ambiance?.image && (
          <div className="fixed left-0 top-0 -z-50 h-full w-full blur-2xl after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-zinc-950 after:bg-opacity-90">
            <Image
              alt="ambiance"
              src={ambiance.image}
              className="h-full w-full scale-110 transition-opacity"
              style={{ opacity: ambiance.opacity }}
            />
          </div>
        )}

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          onSlideChange={({ realIndex }) => setCurrentIndex(realIndex)}
          pagination={{ type: "progressbar" }}
        >
          {randomAnimes?.map((anime, index) => {
            const historiquesFiltered = historiques.filter(({ name }) =>
              randomAnimes.find(({ anime }) => anime === name),
            );

            const historiqueIndex = historiquesFiltered.findIndex(
              ({ name }) => name === anime.anime,
            );

            return (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="flex h-[525px] min-h-[525px] justify-between border-b border-b-neutral-700 bg-zinc-900 bg-opacity-50 max-lg:h-auto max-lg:min-h-full max-lg:flex-col-reverse"
                >
                  <div className="flex flex-col justify-between p-8 max-md:p-4 md:min-w-[300px]">
                    <div className="my-4">
                      <h1 className="text-5xl max-xl:text-3xl">
                        {anime.anime.length > 25
                          ? anime.anime.substring(0, 25) + "..."
                          : anime.anime}
                      </h1>

                      <p className="m-4 text-left text-xs max-xl:hidden max-lg:block md:text-lg">
                        {anime.synopsis.length > 300
                          ? `${anime.synopsis.substring(0, 300)}...`
                          : anime.synopsis}
                      </p>

                      <Link
                        href={{
                          pathname: "/Home",
                          query: { anime: anime.anime },
                        }}
                        className="mt-8 flex gap-2 *:rounded-full *:border *:border-orange-500 *:bg-orange-500 *:bg-opacity-20 *:px-4 *:py-2"
                      >
                        {Array.from(
                          {
                            length:
                              anime.category.length > 2
                                ? 2
                                : anime.category.length,
                          },
                          (_, i) => (
                            <div key={i}>{anime.category[i]}</div>
                          ),
                        )}

                        {anime.category.length > 2 && (
                          <div>+{anime.category.length - 2}</div>
                        )}
                      </Link>
                    </div>

                    <button
                      className="btn"
                      onClick={() => {
                        const query: Query = { anime: anime.anime };

                        if (
                          historiquesFiltered[historiqueIndex]?.redirect &&
                          historiquesFiltered[historiqueIndex]?.redirect ===
                            "Episodes"
                        )
                          query.saison = (
                            historiquesFiltered[historiqueIndex]
                              .detail as unknown as Data.EpisodesData
                          ).saison;

                        if (historiquesFiltered[historiqueIndex]?.redirect)
                          router.push({
                            pathname:
                              historiquesFiltered[historiqueIndex].redirect,
                            query: { ...query },
                          });
                        else
                          router.push({
                            pathname: "/Home",
                            query: { anime: anime.anime },
                          });
                      }}
                    >
                      <Play />

                      {historiquesFiltered.find((e) => e.name === anime.anime)
                        ? "Reprendre " +
                          `${
                            (
                              historiquesFiltered[historiqueIndex]
                                .detail as unknown as Data.EpisodesData
                            ).episode
                              ? `Saison ${getScriptIndex({
                                  currentSaison: (
                                    historiquesFiltered[historiqueIndex]
                                      .detail as unknown as Data.EpisodesData
                                  ).saison,
                                  parts:
                                    randomAnimes[historiqueIndex].options
                                      .EPISODES_OPTIONS?.parts,
                                })}, ${
                                  getCurrentEpisode(
                                    randomAnimes[historiqueIndex].anime,
                                    historiqueIndex,
                                    historiquesFiltered,
                                  ) ?? "Épisode 1"
                                }`
                              : (
                                    historiquesFiltered[historiqueIndex]
                                      .detail as unknown as Data.FilmsData
                                  ).film
                                ? `Film ${Number((historiquesFiltered[historiqueIndex].detail as unknown as Data.FilmsData).film) + 1}`
                                : (
                                      historiquesFiltered[historiqueIndex]
                                        .detail as unknown as Data.ScansData
                                    ).chapitre
                                  ? `
                      ${
                        getCurrentChapitre(
                          randomAnimes[historiqueIndex].anime,
                          historiqueIndex,
                          historiquesFiltered,
                        ) ?? "Chapitre 1"
                      }`
                                  : ""
                          }`
                        : "REGARDER"}
                    </button>
                  </div>

                  <Link
                    href={{ pathname: "/Home", query: { anime: anime.anime } }}
                  >
                    <div className="relative top-2 rounded-lg">
                      <Image
                        className="aspect-video h-full w-[900px] min-w-[900px] scale-90 rounded-lg border border-white max-lg:min-w-full max-lg:max-w-full"
                        alt="affiche d'un anime aléatoire"
                        src={anime.options.affiche!}
                      />
                    </div>

                    <Image
                      className="absolute top-0 -z-10 aspect-video h-full w-[900px] min-w-[900px] blur-md max-lg:min-w-full max-lg:max-w-full"
                      alt="affiche d'un anime aléatoire"
                      src={anime.options.affiche!}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="relative mx-4 overflow-hidden lg:mx-28">
          {catalogues
            ?.filter(
              ({ names, category }) =>
                category === "Nouvelles saisons" ||
                category === "Reprendre" ||
                names.length === 10,
            )

            .map(({ names, category }) => (
              <div key={category}>
                <div
                  className={cn("mb-3 mt-7 text-left text-2xl", {
                    "flex items-center": category === "Reprendre",
                  })}
                >
                  {category === "Reprendre" ? (
                    <>
                      <p className="text-2xl font-normal drop-shadow-2xl md:text-3xl">
                        {category}
                      </p>
                      <span className="m-4 h-8 border-r border-r-neutral-700"></span>

                      <RemoveHistorique setHistoriques={setHistoriques} />
                    </>
                  ) : (
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-2xl font-normal drop-shadow-2xl md:text-3xl">
                        {category}
                      </p>

                      <div className="flex items-center gap-2 text-lg text-zinc-400">
                        <ArrowUpRight />

                        <Link
                          href={{
                            pathname: `/Catalogue`,
                          }}
                          className="hover:underline"
                        >
                          Voir tout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <ul className="flex gap-6 overflow-auto">
                  {names.map((animeName: string, i) => {
                    const fetchedAnime = getAnime(animeName);

                    const disponibles = [
                      fetchedAnime?.options.EPISODES_OPTIONS && "Episodes",
                      fetchedAnime?.options.SCANS_OPTIONS && "Scans",
                      fetchedAnime?.options.FILM_OPTIONS && "Films",
                    ].filter(Boolean);

                    return (
                      <Link
                        href={
                          category === "Reprendre"
                            ? goToAnime(animeName, i)
                            : {
                                pathname: "/Home",
                                query: { anime: animeName },
                              }
                        }
                        id={
                          animeName +
                          `${
                            typeof fetchedAnime?.aliases === "undefined"
                              ? ""
                              : fetchedAnime?.aliases
                          }`
                        }
                        key={
                          historiques[i]?.redirect
                            ? animeName + historiques[i]?.redirect
                            : animeName + historiques[i]?.name
                        }
                      >
                        {category === "Reprendre" ? (
                          <div
                            className="w-72 transition-all hover:scale-[.97]"
                            title={
                              fetchedAnime?.synopsis ??
                              "Aucun synopsis pour cette anime"
                            }
                          >
                            {fetchedAnime?.options.affiche && (
                              <div className="relative overflow-hidden">
                                <div className="absolute left-2/4 top-2/4 z-10 -translate-x-2/4 -translate-y-2/4 rounded-full bg-zinc-900 bg-opacity-75 p-4">
                                  {(
                                    historiques[i]
                                      ?.detail as unknown as Data.ScansData
                                  )?.chapitre ? (
                                    <Book />
                                  ) : (
                                    <Play />
                                  )}
                                </div>

                                <Image
                                  className="-z-10 aspect-video w-72 brightness-75 transition-transform"
                                  src={fetchedAnime.options.affiche}
                                  alt="affiche d'un anime"
                                />
                              </div>
                            )}

                            <div className="my-2 flex justify-between text-left">
                              <div>
                                <Link
                                  href={{
                                    pathname: "/Home",
                                    query: { anime: animeName },
                                  }}
                                  className="text-xs text-zinc-400 hover:text-zinc-300 hover:underline"
                                >
                                  {animeName}
                                </Link>

                                <p className="text-lg text-main">
                                  {(
                                    historiques[i]
                                      ?.detail as unknown as Data.ScansData
                                  )?.chapitre && (
                                    <>
                                      {getCurrentChapitre(
                                        animeName!,
                                        i,
                                        historiques,
                                      )}
                                    </>
                                  )}
                                  {(
                                    historiques[i]
                                      ?.detail as unknown as Data.FilmsData
                                  )?.film && (
                                    <>
                                      Film{" "}
                                      {Number(
                                        (
                                          historiques[i]
                                            ?.detail as unknown as Data.FilmsData
                                        )?.film,
                                      ) + 1}
                                    </>
                                  )}
                                  {(
                                    historiques[i]
                                      ?.detail as unknown as Data.EpisodesData
                                  )?.episode && (
                                    <>
                                      Saison{" "}
                                      {getScriptIndex({
                                        currentSaison: (
                                          historiques[i]
                                            ?.detail as unknown as Data.EpisodesData
                                        ).saison,
                                        parts:
                                          fetchedAnime?.options.EPISODES_OPTIONS
                                            ?.parts,
                                      })}
                                      {", "}
                                      {getCurrentEpisode(
                                        animeName!,
                                        i,
                                        historiques,
                                      )}
                                    </>
                                  )}
                                </p>
                              </div>

                              <div
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();

                                  removeFromHistorique(animeName, i);
                                }}
                                title={`Supprimer ${animeName} de l'historique`}
                              >
                                <div className="rounded-md p-1 ring-0 transition-all hover:bg-gray-600 hover:bg-opacity-20 active:ring-2 active:ring-white">
                                  <Trash size={20} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            title={
                              fetchedAnime?.synopsis ??
                              "Aucun synopsis pour cette anime"
                            }
                            className="w-48 transition-all hover:scale-[.97] max-md:mr-1 md:w-56"
                          >
                            <div className="overflow-hidden shadow-xl">
                              <Image
                                className="aspect-[2/3] w-48 transition-transform md:w-56"
                                src={getWallpaper(animeName)!}
                                alt="affiche d'un anime"
                              />
                            </div>

                            <p className="my-2 text-left text-base max-md:text-sm">
                              {animeName} <br />{" "}
                              <span className="text-sm max-md:text-xs">
                                {disponibles.join(", ")}
                              </span>
                            </p>
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            ))}
        </div>

        <Footer style={true} />
      </main>
    </>
  );
}
