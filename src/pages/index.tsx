"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ColorPicker from "@/app/ui/colorPicker";

import { Footer } from "@/app/ui/Footer";
import { ANIMES, AnimesType, groupAnimesByCategory } from "@/animes/constants";
import { toast } from "sonner";
import { formatName } from "@/app/lib/formatName";
import { Historique } from "@/typings/types";
import { removeAnimeFromHistorique } from "@/app/utils/Accueil/historiqueManager";
import { getCurrentChapitre } from "@/app/utils/Accueil/getCurrentChapitre";
import { getCurrentEpisode } from "@/app/utils/Accueil/getCurrentEpisode";
import { getAnime } from "@/app/lib/getAnime";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Accueil() {
  const animes = Array.from(
    ANIMES.map(({ anime, category }) => ({ anime, category })),
  );

  const router = useRouter();

  const [historiques, setHistoriques] = useState<Historique[]>([]);
  const [randomAnimes, setRandomAnimes] = useState<AnimesType[]>();

  const [currentIndex, setCurrentIndex] = useState(0);

  const confirmRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const animesRef = useRef<HTMLUListElement[] | null>([]);

  useEffect(() => {
    let options = [...ANIMES];
    const animes = [];

    for (let i = 0; i < 6; i++) {
      if (options.length > 0) {
        const index = Math.floor(Math.random() * options.length);

        animes.push(options[index]);
        options.splice(index, 1);
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
      ({ category }) => category === "Nouveautés",
    );

    if (momentIndex !== -1) {
      const [momentItem] = updatedCatalogues.splice(momentIndex, 1);

      updatedCatalogues.splice(1, 0, momentItem);
    }

    if (historiques.length > 0) {
      updatedCatalogues.unshift({
        category: "Reprendre",
        names: historiques.map(({ name }) => name),
      });
    }

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
        {randomAnimes?.map((anime, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className="flex max-h-[525px] min-h-[525px] justify-between bg-[hsla(231,14%,10%,0.5)] max-lg:max-h-none max-lg:min-h-0 max-lg:flex-col-reverse"
            >
              <div className="flex flex-col justify-between p-8 max-md:p-4 md:min-w-[300px]">
                <div className="my-4">
                  <h1 className="text-5xl max-xl:text-4xl max-md:text-xl">
                    {anime.anime.length > 25
                      ? anime.anime.substring(0, 25) + "..."
                      : anime.anime}
                  </h1>

                  <p className="m-4 text-left text-sm text-zinc-400 max-xl:hidden">
                    {anime.synopsis.length > 600
                      ? `${anime.synopsis.substring(0, 600)}...`
                      : anime.synopsis}
                  </p>
                </div>

                <button
                  className="btn"
                  onClick={() => {
                    const histo = historiques.find(
                      (e) => e.name === anime.anime,
                    );

                    const pathname = histo ? "Episodes" : "Home";
                    const query = histo
                      ? { anime: anime.anime, saison: histo.saison }
                      : { anime: anime.anime };

                    router.push({ pathname, query });
                  }}
                >
                  {historiques.find((e) => e.name === anime.anime)?.saison
                    ? `Reprendre ${getCurrentEpisode(anime.anime, 0, historiques)}`
                    : "Regarder"}
                </button>
              </div>

              <Image
                className="aspect-video min-w-[900px] max-w-[900px] max-lg:min-w-full max-lg:max-w-full"
                alt="affiche d'un anime aléatoire"
                src={anime.options.affiche!}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {randomAnimes && randomAnimes.length > 0 ? (
        <Image
          className="absolute left-0 top-0 -z-50 h-[600px] w-full blur-3xl"
          alt="affiche d'un anime aléatoire"
          src={randomAnimes![currentIndex].options.affiche!}
        />
      ) : null}

      <ColorPicker />

      <div className="relative z-10">
        {catalogues.map(({ names, category }, index) => (
          <div className="mb-3" key={category}>
            <div
              className={`ml-3 ${category === "Reprendre" ? "mb-3" : "mb-2"} mt-7 text-left text-3xl tracking-widest ${category !== "Reprendre" ? "" : "flex items-center"}`}
            >
              {category === "Reprendre" ? (
                <>
                  <p className="font-normal drop-shadow-2xl">{category}</p>

                  <span className="m-4 h-8 border-r border-r-neutral-700"></span>

                  <div
                    ref={confirmRef}
                    className="fixed left-1/2 top-1/2 z-50 hidden w-96 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-neutral-700 shadow-lg max-sm:w-full"
                  >
                    <div className="absolute inset-0 rounded-sm bg-[#2123259f] backdrop-blur-3xl"></div>

                    <div className="relative z-10 p-4 tracking-normal">
                      <div>Confirmez vous ?</div>

                      <p className="mb-12 text-sm opacity-50">
                        Vous êtes sur le point de supprimer tout l'historique
                      </p>
                    </div>

                    <div className="relative z-10 flex w-full justify-end gap-8 border-t border-neutral-700 p-3 text-sm text-white *:w-28 *:rounded-lg *:p-2 *:transition-colors">
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

            <ul
              ref={(el) => (animesRef.current![index] = el!)}
              key={category}
              className="flex cursor-pointer overflow-x-auto"
            >
              {names.map((animeName: string, i) => (
                <li
                  className="ml-4"
                  onClick={() => goToAnime(formatName(animeName)!, category, i)}
                  id={
                    formatName(animeName) +
                    `${
                      typeof getAnime(animeName)?.aliases === "undefined"
                        ? ""
                        : getAnime(animeName)?.aliases
                    }`
                  }
                  key={
                    historiques[i]?.redirect
                      ? animeName + historiques[i]?.redirect
                      : animeName + historiques[i]?.name
                  }
                >
                  <div
                    title={
                      getAnime(animeName)?.synopsis ??
                      "Aucun synopsis pour cette anime"
                    }
                    className={`relative mb-3 overflow-hidden rounded-xl shadow-md transition-all duration-300 ease-in-out ${category === "Reprendre" ? "h-44 w-40 max-sm:h-[170px]" : "h-40 w-32 max-sm:h-36 max-sm:w-28"} duration-300 ease-out before:absolute before:-top-12 before:left-6 before:z-[-5] before:h-[180%] before:w-6/12 before:rotate-45 before:bg-main before:opacity-0 before:transition-all after:absolute after:inset-[2px] after:z-[-5] after:rounded-xl after:bg-[hsl(240,_10%,_10%)] hover:before:animate-spin hover:before:opacity-100`}
                  >
                    {historiques[i] && category === "Reprendre" ? (
                      <div
                        className="absolute right-0 m-2 flex h-7 items-center rounded-sm border border-main bg-[hsla(240,_10%,_10%,_0.472)] p-1 transition-colors ease-out hover:border-red-500 hover:text-red-500"
                        onClick={(event) => {
                          event.stopPropagation();

                          removeAnimeFromHistorique(
                            formatName(animeName)!,
                            historiques[i]!.redirect,
                            historiques,
                            setHistoriques,
                          );
                        }}
                      >
                        X
                      </div>
                    ) : null}

                    <Image
                      className={`relative top-1 z-[-1] ${category === "Reprendre" ? "h-[90px]" : "h-[70px]"} ${category === "Reprendre" ? "w-[160px]" : "w-[130px]"} ${category === "Reprendre" ? "max-sm:h-[85px]" : "max-sm:h-[65px]"} scale-90 rounded-t-xl`}
                      src={getAnime(animeName)?.options.affiche!}
                      alt="affiche d'un anime"
                    />

                    <p className="relative top-2 p-1 text-sm text-main max-sm:text-xs">
                      {formatName(animeName)}
                      {historiques[i] && category === "Reprendre" && (
                        <>
                          {historiques[i]?.chapitre && (
                            <>
                              <br />

                              {getCurrentChapitre(
                                formatName(animeName)!,
                                i,
                                historiques,
                              )}
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
                              Saison {historiques[i]?.saison}
                              {", "}
                              {getCurrentEpisode(
                                formatName(animeName)!,
                                i,
                                historiques,
                              )}
                            </>
                          )}
                        </>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Footer style={true} />
    </main>
  );
}
