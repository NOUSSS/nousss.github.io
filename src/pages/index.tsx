"use client";

import React, { useCallback, useEffect, useState } from "react";

import SearchBar from "@/app/ui/searchBar";
import Image from "next/image";

import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { ANIMES, groupAnimesByCategory } from "@/animes/constants";
import { toast } from "sonner";
import { formatName } from "@/app/lib/formatName";
import { Historique } from "@/typings/types";
import { removeAnimeFromHistorique } from "@/app/components/Accueil/historiqueManager";
import { getCurrentChapitre } from "@/app/components/Accueil/getCurrentChapitre";
import { getCurrentEpisode } from "@/app/components/Accueil/getCurrentEpisode";
import { getAnime } from "@/app/lib/getAnime";
import { useRouter } from "next/router";

export default function Accueil() {
  const animes = Array.from(
    ANIMES.map(({ anime, category }) => ({ anime, category })),
  );

  const router = useRouter();

  const [historiques, setHistoriques] = useState<Historique[]>([]);

  useEffect(() => {
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
      ({ category }) => category === "Nouveautées",
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
    <main>
      <nav className="mb-16">
        <Title accueil />

        <div className="container--search-bar">
          <SearchBar
            placeholder="Rechercher un anime"
            container="animes-list"
          />
        </div>
      </nav>

      <p>
        Pour connaitre la date de sortie des différents épisodes / scans, je
        vous redirige vers le{" "}
        <a
          className="text-[--mainColor] underline"
          href="https://anime-sama.fr/planning/"
          target="_blank"
        >
          planning
        </a>{" "}
        d'anime-sama
      </p>

      <div className="catalogue">
        {catalogues.map(({ names, category }) => (
          <div className={`${category} mb-3`} key={category}>
            <div
              className={`category ml-3 ${category === "Reprendre" ? "mb-3" : "mb-2"} mt-7 text-left text-3xl font-bold tracking-widest ${category !== "Reprendre" ? "" : "flex items-center"}`}
            >
              {category === "Reprendre" ? (
                <>
                  <p>{category}</p>

                  <span className="m-4 h-8 border-r border-r-neutral-700"></span>

                  <div className="confirm fixed left-2/4 top-2/4 z-50 hidden w-96 -translate-x-2/4 -translate-y-2/4 rounded-sm border border-neutral-700 bg-[#2123259f] shadow-lg backdrop-blur-3xl max-sm:w-full">
                    <div className="p-4 tracking-normal">
                      <div>Confirmez vous ?</div>

                      <p className="mb-12 text-xs opacity-50">
                        Vous êtes sur le point de supprimer tout l'historique
                      </p>
                    </div>

                    <div className="flex w-full justify-end gap-8 border-t border-neutral-700 p-3 text-sm text-white *:w-28 *:rounded-lg *:p-2 *:transition-colors">
                      <button
                        className="bg-green-500 hover:bg-green-600"
                        onClick={() => {
                          setHistoriques([]);

                          for (const key of Object.keys(localStorage)) {
                            if (key !== "color") localStorage.removeItem(key);
                          }

                          toast.success("L'historique a bien été vidé");
                        }}
                      >
                        Oui
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-800"
                        onClick={() => {
                          const confirm = document.querySelector(
                            ".confirm",
                          )! as HTMLElement;

                          const overlay = document.querySelector(
                            ".overlay",
                          )! as HTMLElement;

                          confirm.classList.add("hidden");
                          overlay.classList.add("hidden");
                        }}
                      >
                        Annuler
                      </button>
                    </div>
                  </div>

                  <button
                    className="btn w-52 border leading-none hover:border-red-500 hover:text-red-500 max-sm:w-36 max-sm:p-0"
                    onClick={() => {
                      const confirm = document.querySelector(
                        ".confirm",
                      )! as HTMLElement;

                      const overlay = document.querySelector(
                        ".overlay",
                      )! as HTMLElement;

                      confirm.classList.contains("hidden")
                        ? confirm.classList.remove("hidden")
                        : confirm.classList.add("hidden");

                      overlay.classList.contains("hidden")
                        ? overlay.classList.remove("hidden")
                        : overlay.classList.add("hidden");
                    }}
                  >
                    Supprimer tout l'historique
                  </button>
                </>
              ) : (
                <p>{category}</p>
              )}
            </div>

            <ul
              key={category}
              className="ml-3 flex cursor-pointer overflow-x-auto"
            >
              {names.map((animeName: string, i) => (
                <li
                  className="animes-list ml-4"
                  onClick={() => goToAnime(formatName(animeName), category, i)}
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
                    className={`card relative mb-3 overflow-hidden rounded-xl shadow-md transition-all duration-300 ease-in-out ${category === "Reprendre" ? "h-44 w-40 max-sm:h-[170px]" : "h-40 w-32 max-sm:h-36 max-sm:w-28"} duration-300 ease-out before:absolute before:-top-12 before:left-6 before:z-[-5] before:h-[180%] before:w-6/12 before:rotate-45 before:bg-[--mainColor] before:opacity-0 before:transition-all after:absolute after:inset-[2px] after:z-[-5] after:rounded-xl after:bg-[hsl(240,_10%,_10%)] hover:before:animate-spin hover:before:opacity-100`}
                  >
                    {historiques[i] && category === "Reprendre" ? (
                      <div
                        className="absolute right-0 m-2 flex h-7 items-center rounded-sm border border-[--mainColor] bg-[hsla(240,_10%,_10%,_0.472)] p-1 transition-colors ease-out hover:border-red-500 hover:text-red-500"
                        onClick={(event) => {
                          event.stopPropagation();

                          removeAnimeFromHistorique(
                            formatName(animeName),
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

                    <p className="relative top-2 p-1 text-sm text-[--mainColor] max-sm:text-xs">
                      {formatName(animeName)}
                      {historiques[i] && category === "Reprendre" && (
                        <>
                          {historiques[i]?.chapitre && (
                            <>
                              <br />

                              {getCurrentChapitre(
                                formatName(animeName),
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
                                formatName(animeName),
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
      <Footer />
    </main>
  );
}
