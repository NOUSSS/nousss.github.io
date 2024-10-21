"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import getScriptIndex from "@/app/utils/Episodes/getScriptIndex";
import Link from "next/link";
import Head from "next/head";

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
import { getAnime, shuffle, getWallpaper, cn, formatName } from "@/app/lib/";
import { useRouter } from "next/router";
import { icons } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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

  const ArrowRight = icons["ArrowRight"];

  const [historiques, setHistoriques] = useState<Historique[]>([]);
  const [randomAnimes, setRandomAnimes] = useState<AnimesType[]>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [catalogues, setCatalogues] = useState<GroupedAnimes[]>();
  const [ambiance, setAmbiance] = useState<AmbiancePros>();

  const copyAnimes = useRef<AnimesType[]>([]);

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
    if (copyAnimes.current.length === 0) {
      copyAnimes.current = [...ANIMES];
    }

    const shuffledAnimes = shuffle([...copyAnimes.current]);
    setRandomAnimes(shuffledAnimes.slice(0, 6));

    const loadedHistoriques: Historique[] = [];

    ["episodes", "scans", "films"].forEach((type) => {
      const items = JSON.parse(localStorage.getItem(type) || "[]") as DatasArr;

      items.forEach((item) => {
        const animeName = formatName(item.name);
        const redirectAnime = type.charAt(0).toUpperCase() + type.slice(1);

        if (
          animeName &&
          !loadedHistoriques.find(
            ({ name, redirect }) =>
              name === animeName && redirect === redirectAnime,
          )
        ) {
          loadedHistoriques.push({
            name: animeName,
            redirect: redirectAnime,
            detail: item,
          });
        } else {
          localStorage.setItem(
            type,
            JSON.stringify(items.filter(({ name }) => name === animeName)),
          );
        }
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

    const recents = copyAnimes.current
      .slice(Math.max(copyAnimes.current.length - 10, 0))
      .map(({ anime }) => anime)
      .reverse();

    updatedCatalogues.splice(2, 1, {
      category: "Ajout récent",
      names: recents,
    });

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

      <main className="max-lg:top-0">
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
          autoHeight={true}
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
                  className="flex h-[525px] min-h-[525px] justify-between border-b-neutral-700 bg-opacity-50 max-lg:h-auto max-lg:flex-col-reverse lg:border-b lg:bg-zinc-900"
                >
                  <div className="relative max-lg:-top-24">
                    <div className="flex h-full flex-col justify-between p-8 max-md:p-4">
                      <div className="my-4">
                        <h1 className="text-5xl font-normal max-xl:text-3xl">
                          {anime.anime.length > 25
                            ? anime.anime.substring(0, 25) + "..."
                            : anime.anime}
                        </h1>

                        <p className="m-4 text-left text-xs max-xl:hidden max-lg:block md:text-lg">
                          {anime.synopsis.length > 150
                            ? `${anime.synopsis.substring(0, 150)}...`
                            : anime.synopsis}
                        </p>
                      </div>

                      <button
                        className="btn font-medium"
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
                                ? `S${getScriptIndex({
                                    currentSaison: (
                                      historiquesFiltered[historiqueIndex]
                                        .detail as unknown as Data.EpisodesData
                                    ).saison,
                                    parts:
                                      randomAnimes[historiqueIndex].options
                                        .EPISODES_OPTIONS?.parts,
                                  })} ${
                                    getCurrentEpisode(
                                      randomAnimes[historiqueIndex].anime,
                                      historiqueIndex,
                                      historiquesFiltered,
                                    ) ?? ""
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
                        ) ?? "Chapitre"
                      }`
                                    : ""
                            }`
                          : "REGARDER"}
                      </button>
                    </div>
                  </div>

                  <Link
                    href={{ pathname: "/Home", query: { anime: anime.anime } }}
                  >
                    <Image
                      className="mask-image-fade-left aspect-video max-[460px]:hidden lg:h-full lg:max-w-[850px]"
                      alt="affiche d'un anime aléatoire"
                      src={anime.options.affiche!}
                    />

                    {getWallpaper(anime.anime) && (
                      <div className="relative">
                        <Image
                          alt={`saison de ${anime.anime}`}
                          src={getWallpaper(anime.anime)!}
                          className="mask-image-fade aspect-[9/13] w-full min-[460px]:hidden"
                        />
                      </div>
                    )}
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="relative z-50 mx-4 overflow-hidden max-lg:-top-24 lg:mx-28">
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
                      <p className="text-xl font-normal drop-shadow-2xl md:text-2xl">
                        {category}
                      </p>

                      <span className="m-4 h-8 border-r border-r-neutral-700"></span>

                      <RemoveHistorique setHistoriques={setHistoriques} />
                    </>
                  ) : (
                    <Link
                      href="/Catalogue"
                      className="flex items-center gap-2 text-xl font-normal drop-shadow-2xl hover:underline md:text-2xl"
                    >
                      {category} <ArrowRight />
                    </Link>
                  )}
                </div>

                <ul className="flex gap-2 overflow-auto sm:gap-6">
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
                            className="w-40 transition-all hover:scale-[.97] max-md:mr-1 sm:w-48 md:w-56"
                          >
                            <div className="overflow-hidden shadow-xl">
                              <Image
                                className="aspect-[2/3] w-40 transition-transform sm:w-48 md:w-56"
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
      </main>

      <Footer />
    </>
  );
}
