"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ColorPicker from "@/app/components/ColorPicker";
import getScriptIndex from "@/app/utils/Episodes/getScriptIndex";

import { Footer } from "@/app/components/Footer";
import { ANIMES, AnimesType, groupAnimesByCategory } from "@/animes/constants";
import { toast } from "sonner";
import { Historique } from "@/typings/types";
import { removeAnimeFromHistorique } from "@/app/utils/Accueil/historiqueManager";
import { getCurrentChapitre } from "@/app/utils/Accueil/getCurrentChapitre";
import { getCurrentEpisode } from "@/app/utils/Accueil/getCurrentEpisode";
import { getAnime } from "@/app/lib/getAnime";
import { shuffle } from "@/app/lib/shuffle";
import { useRouter } from "next/router";
import { icons } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Accueil() {
  const animes = Array.from(
    ANIMES.map(({ anime, category }) => ({ anime, category })),
  );

  const router = useRouter();
  const Trash = icons["Trash2"];

  const [historiques, setHistoriques] = useState<Historique[]>([]);
  const [randomAnimes, setRandomAnimes] = useState<AnimesType[]>();

  const [currentIndex, setCurrentIndex] = useState(0);

  const confirmRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const getWallpaper = (animeName: string) => {
    const anime = getAnime(animeName);

    if (anime?.options.saisons) {
      const saisons = Object.values(anime.options.saisons);

      return saisons[saisons.length - 1].image();
    } else if (anime?.options.FILM_OPTIONS) {
      const films = Object.values(anime.options.FILM_OPTIONS.names);

      return films[films.length - 1].image();
    }
  };

  useEffect(() => {
    let animesCopy = [...shuffle(ANIMES)];
    const animes = [];

    for (let i = 0; i < 6; i++) {
      if (animesCopy.length > 0) {
        const index = Math.floor(Math.random() * animesCopy.length);

        animes.push(animesCopy[index]);
        animesCopy.splice(index, 1);
      }
    }

    setRandomAnimes(animes);

    const keys = Object.keys(localStorage);
    const lowercaseKeys = keys.map((key) => key.toLowerCase());
    const duplicates: string[] = [];

    keys.forEach((key) => {
      if (
        lowercaseKeys.indexOf(key.toLowerCase()) !==
          lowercaseKeys.lastIndexOf(key.toLowerCase()) &&
        key === key.toLowerCase()
      ) {
        duplicates.push(key);
      }
    });

    duplicates.forEach((duplicate) => {
      localStorage.removeItem(duplicate);
    });

    const loadHistoriques = () => {
      const loadedHistoriques: Historique[] = [];

      if (typeof window !== "undefined") {
        for (const key of Object.keys(localStorage)) {
          if (key.includes("--episode")) {
            const name = key.replace("--episode", "");
            const episode = localStorage.getItem(key)!;
            const saison = localStorage.getItem(`${name}--saison`) ?? "1";

            loadedHistoriques.push({
              name,
              redirect: "Episodes",
              episode,
              saison,
            });
          }

          if (key.includes("--chapitre")) {
            const name = key.replace("--chapitre", "");
            const chapitre = localStorage.getItem(key)!;

            loadedHistoriques.push({ name, redirect: "Scans", chapitre });
          }

          if (key.includes("--currentFilm")) {
            const name = key.replace("--currentFilm", "");
            const film = localStorage.getItem(key)!;

            loadedHistoriques.push({ name, redirect: "Films", film });
          }
        }
      }

      return loadedHistoriques;
    };

    setHistoriques(loadHistoriques());
  }, []);

  const [catalogues, setCatalogues] = useState(() =>
    groupAnimesByCategory(animes).sort(
      (a, b) => b.names.length - a.names.length,
    ),
  );

  useEffect(() => {
    const updatedCatalogues = groupAnimesByCategory(
      ANIMES.map(({ anime, category }) => ({ anime, category })),
    ).sort((a, b) => b.names.length - a.names.length);

    const momentIndex = updatedCatalogues.findIndex(
      ({ category }) => category === "Nouvelles saisons",
    );

    let momentItem;
    let resumeItem;

    if (momentIndex !== -1)
      [momentItem] = updatedCatalogues.splice(momentIndex, 1);

    if (historiques.length > 0) {
      resumeItem = {
        category: "Reprendre",
        names: historiques.map(({ name }) => name),
      };
    }

    if (momentItem) updatedCatalogues.unshift(momentItem);
    if (resumeItem) updatedCatalogues.splice(1, 0, resumeItem);

    setCatalogues(updatedCatalogues);
  }, [historiques]);

  const goToAnime = useCallback(
    (animeName: string, category: string, index: number) => {
      if (historiques[index] && category === "Reprendre") {
        const historique = historiques[index];

        localStorage.setItem("anime", animeName);

        if (historique?.redirect === "Episodes") {
          router?.push({
            pathname: historique?.redirect,
            query: { anime: animeName, saison: historique.saison },
          });
        }

        if (
          historique?.redirect === "Scans" ||
          historique?.redirect === "Films"
        ) {
          router?.push({
            pathname: historique.redirect,
            query: { anime: animeName },
          });
        }
      } else {
        localStorage.setItem("anime", animeName);

        router?.push({
          pathname: "/Home",
          query: { anime: animeName },
        });
      }
    },
    [historiques, router],
  );

  return (
    <main className="top-20">
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden h-full w-full bg-black bg-opacity-20"
      ></div>

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

          const historique = historiquesFiltered.find(
            ({ name }) => name === anime.anime,
          );

          return (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="flex h-[525px] min-h-[525px] justify-between bg-zinc-900 bg-opacity-50 max-lg:h-auto max-lg:min-h-full max-lg:flex-col-reverse"
              >
                <div className="flex flex-col justify-between p-8 max-md:p-4 md:min-w-[300px]">
                  <div className="my-4">
                    <h1 className="text-5xl max-xl:text-3xl">
                      {anime.anime.length > 25
                        ? anime.anime.substring(0, 25) + "..."
                        : anime.anime}
                    </h1>

                    <p className="m-4 text-left text-base max-xl:hidden max-lg:block max-md:text-xs">
                      {anime.synopsis.length > 300
                        ? `${anime.synopsis.substring(0, 300)}...`
                        : anime.synopsis}
                    </p>
                  </div>

                  <button
                    className="btn"
                    onClick={() => {
                      const query: {
                        anime: string;
                        saison?: string;
                      } = { anime: anime.anime };

                      if (
                        historique?.redirect &&
                        historique?.redirect === "Episodes"
                      )
                        query.saison = historique.saison;

                      if (historique?.redirect)
                        router.push({
                          pathname: historique.redirect,
                          query,
                        });
                      else
                        router.push({
                          pathname: "Home",
                          query: { anime: anime.anime },
                        });
                    }}
                  >
                    {historiquesFiltered.find((e) => e.name === anime.anime)
                      ? "Reprendre " +
                        `${
                          historiquesFiltered[historiqueIndex]?.episode
                            ? `Saison ${getScriptIndex({
                                currentSaison:
                                  historiquesFiltered[historiqueIndex]?.saison,
                                parts:
                                  randomAnimes[historiqueIndex].options
                                    .EPISODES_OPTIONS?.parts,
                              })} ${getCurrentEpisode(
                                randomAnimes[historiqueIndex].anime,
                                historiqueIndex,
                                historiquesFiltered,
                              )}`
                            : historiquesFiltered[historiqueIndex]?.film
                              ? `Film ${Number(historiquesFiltered[historiqueIndex]?.film) + 1}`
                              : historiquesFiltered[historiqueIndex]?.chapitre
                                ? `
                      ${getCurrentChapitre(
                        randomAnimes[historiqueIndex].anime,
                        historiqueIndex,
                        historiquesFiltered,
                      )}`
                                : ""
                        }`
                      : "Regarder"}
                  </button>
                </div>

                <Image
                  className="aspect-video w-[900px] min-w-[900px] after:absolute max-lg:min-w-full max-lg:max-w-full"
                  alt="affiche d'un anime aléatoire"
                  src={anime.options.affiche!}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {randomAnimes && randomAnimes.length > 0 ? (
        <Image
          className="absolute left-0 top-0 -z-50 h-[600px] w-full blur-3xl"
          alt="affiche d'un anime aléatoire"
          src={randomAnimes![currentIndex].options.affiche!}
        />
      ) : null}

      <ColorPicker />

      <div className="relative ml-4">
        {catalogues.map(({ names, category }) => (
          <div key={category}>
            <div
              className={`${category === "Reprendre" ? "mb-3" : "mb-2"} mt-7 text-left text-3xl ${category !== "Reprendre" ? "" : "flex items-center"}`}
            >
              {category === "Reprendre" ? (
                <>
                  <p className="font-normal drop-shadow-2xl">{category}</p>

                  <span className="m-4 h-8 border-r border-r-neutral-700"></span>

                  <div
                    ref={confirmRef}
                    className="fixed left-1/2 top-1/2 z-50 hidden w-96 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-neutral-700 shadow-lg max-sm:w-full"
                  >
                    <div className="absolute inset-0 -z-10 rounded-sm bg-zinc-900 bg-opacity-50 backdrop-blur-3xl"></div>

                    <div className="relative p-4 tracking-normal">
                      <div>Confirmez vous ?</div>

                      <p className="mb-12 text-sm opacity-50">
                        Vous êtes sur le point de supprimer tout l'historique
                      </p>
                    </div>

                    <div className="relative flex w-full justify-end gap-8 border-t border-neutral-700 p-3 text-sm text-white *:w-28 *:rounded-lg *:p-2 *:transition-colors">
                      <button
                        className="bg-green-500 hover:bg-green-600"
                        onClick={() => {
                          setHistoriques([]);

                          for (const key of Object.keys(localStorage)) {
                            if (key !== "color") localStorage.removeItem(key);
                          }

                          toast.success("L'historique a bien été vidé");

                          confirmRef.current?.classList.add("hidden");
                          overlayRef?.current?.classList.add("hidden");
                        }}
                      >
                        Oui
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-800"
                        onClick={() => {
                          confirmRef.current?.classList.add("hidden");
                          overlayRef?.current?.classList.add("hidden");
                        }}
                      >
                        Annuler
                      </button>
                    </div>
                  </div>

                  <button
                    className="btn w-52 border leading-none hover:border-red-500 hover:text-red-500 max-sm:w-36 max-sm:p-0"
                    onClick={() => {
                      confirmRef.current?.classList.contains("hidden")
                        ? confirmRef.current?.classList.remove("hidden")
                        : confirmRef.current?.classList.add("hidden");

                      overlayRef?.current?.classList.contains("hidden")
                        ? overlayRef?.current?.classList.remove("hidden")
                        : overlayRef?.current?.classList.add("hidden");
                    }}
                  >
                    Supprimer tout l'historique
                  </button>
                </>
              ) : (
                <p className="font-normal">{category}</p>
              )}
            </div>

            <ul className="flex overflow-auto">
              {names.map((animeName: string, i) => {
                const fetchedAnime = getAnime(animeName);
                const disponibles = [];

                if (fetchedAnime && fetchedAnime.options.EPISODES_OPTIONS)
                  disponibles.push("Episodes");
                if (fetchedAnime && fetchedAnime.options.SCANS_OPTIONS)
                  disponibles.push("Scans");
                if (fetchedAnime && fetchedAnime.options.FILM_OPTIONS)
                  disponibles.push("Films");

                return (
                  <li
                    className="mr-4 cursor-pointer"
                    onClick={() => goToAnime(animeName!, category, i)}
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
                        title={
                          fetchedAnime?.synopsis ??
                          "Aucun synopsis pour cette anime"
                        }
                        className="relative mb-3 h-44 w-40 overflow-hidden rounded-xl shadow-md transition-all duration-300 ease-out before:absolute before:-top-12 before:left-6 before:z-[-5] before:h-[180%] before:w-6/12 before:rotate-45 before:bg-main before:opacity-0 before:transition-all after:absolute after:inset-[2px] after:z-[-5] after:rounded-xl after:bg-zinc-900 hover:before:animate-spin hover:before:opacity-100 max-sm:h-[170px]"
                      >
                        <div
                          className="absolute right-0 m-2 flex h-7 items-center rounded-sm border border-main bg-zinc-900 bg-opacity-50 p-1 transition-colors ease-out hover:border-red-500 hover:text-red-500"
                          onClick={(event) => {
                            event.stopPropagation();

                            removeAnimeFromHistorique(
                              animeName!,
                              historiques[i]!.redirect,
                              setHistoriques,
                            );
                          }}
                        >
                          <Trash size={15} />
                        </div>

                        {getWallpaper(animeName) ? (
                          <Image
                            className="relative top-1 z-[-1] aspect-video w-40 scale-90 rounded-t-xl max-sm:h-[85px]"
                            src={fetchedAnime!.options.affiche!}
                            alt="affiche d'un anime"
                          />
                        ) : null}

                        <div className="relative top-2 p-1 text-sm">
                          <p className="text-white">
                            {animeName.length > 16
                              ? animeName.substring(0, 16) + "..."
                              : animeName}
                          </p>

                          <p className="text-main">
                            {historiques[i]?.chapitre && (
                              <>
                                <br />

                                {getCurrentChapitre(animeName!, i, historiques)}
                              </>
                            )}
                            {historiques[i]?.film && (
                              <>
                                <br />
                                Film {Number(historiques[i]?.film) + 1}
                              </>
                            )}
                            {historiques[i]?.episode && (
                              <>
                                <br />
                                Saison{" "}
                                {getScriptIndex({
                                  currentSaison: historiques[i]?.saison,
                                  parts:
                                    fetchedAnime?.options.EPISODES_OPTIONS
                                      ?.parts,
                                })}
                                {", "}
                                {getCurrentEpisode(animeName!, i, historiques)}
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        title={
                          fetchedAnime?.synopsis ??
                          "Aucun synopsis pour cette anime"
                        }
                        className="group w-36 rounded-xl max-md:mr-1 max-md:w-32"
                      >
                        <div className="min-h-48 overflow-hidden rounded-md shadow-xl">
                          <Image
                            className="relative top-1 z-[-1] h-48 min-h-48 rounded-md transition-transform group-hover:scale-110"
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
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <Footer style={true} />
    </main>
  );
}
