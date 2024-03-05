"use client";

import "./Accueil/accueil.scss";
import "./Accueil/responsive.scss";

import React, { useCallback, useEffect, useState } from "react";

import SearchBar from "@/app/ui/searchBar";
import Image from "next/image";

import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { ANIMES, groupAnimesByCategory } from "../animes/constants";
import { toast } from "sonner";
import { formatName } from "@/app/lib/formatName";
import { Historique } from "../typings/types";
import { removeAnimeFromHistorique } from "../app/components/Accueil/historiqueManager";
import { getCurrentChapitre } from "../app/components/Accueil/getCurrentChapitre";
import { getCurrentEpisode } from "../app/components/Accueil/getCurrentEpisode";
import { getAnime } from "@/app/lib/getAnime";
import { useRouter } from "next/router";

export default function Accueil() {
  const animes = Array.from(
    ANIMES.map(({ anime, category }) => ({ anime, category }))
  );

  const router = useRouter();

  const [historiques, setHistoriques] = useState<Historique[]>([]);
  const [mainColor, setMainColor] = useState("#ff7300");

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

    const color =
      getComputedStyle(document.body).getPropertyValue("--mainColor").trim() ||
      "#ff7300";

    setMainColor(color);

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
      (a, b) => b.names.length - a.names.length
    )
  );

  useEffect(() => {
    const updatedCatalogues = groupAnimesByCategory(
      ANIMES.map(({ anime, category }) => ({ anime, category }))
    ).sort((a, b) => b.names.length - a.names.length);

    const momentIndex = updatedCatalogues.findIndex(
      ({ category }) => category === "En ce moment"
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
    [historiques, router]
  );

  return (
    <div className="container--anime">
      <nav>
        <Title accueil />

        <div className="container--search-bar">
          <SearchBar container="animes-list" />
        </div>
      </nav>

      <p style={{ textAlign: "left" }}>
        Pour connaitre la date de sortie des différents épisodes / scans, je
        vous redirige vers le{" "}
        <a
          style={{ color: "var(--mainColor)", textDecoration: "underline" }}
          href="https://anime-sama.fr/planning/"
          target="_blank"
        >
          planning
        </a>{" "}
        d&apos;anime-sama
      </p>

      {historiques.length > 0 ? (
        <button
          className="removeAllHistorique"
          onClick={() => {
            setHistoriques([]);

            for (const key of Object.keys(localStorage)) {
              if (key !== "color") localStorage.removeItem(key);
            }

            toast.success("L'historique a bien été vidé");
          }}
        >
          Supprimer tout l&apos;historique
        </button>
      ) : null}

      <div className="color-picker invisible">
        <input
          value={mainColor}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            document.documentElement.style.setProperty(
              "--mainColor",
              event.target.value
            );
            localStorage.setItem("color", event.target.value);

            setMainColor(event.target.value);
          }}
          type="color"
        />
        <button
          onClick={() => {
            document.documentElement.style.setProperty(
              "--mainColor",
              "#ff7300"
            );

            localStorage.removeItem("color");
          }}
        >
          Réinisialiser
        </button>
      </div>

      <div className="catalogue">
        {catalogues.map(({ names, category }) => (
          <div className={category} key={category}>
            <p className="category">{category}</p>

            <ul key={category}>
              {names.map((animeName: string, i) => (
                <li
                  className="animes-list"
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
                    className="card"
                  >
                    {historiques[i] && category === "Reprendre" ? (
                      <div
                        className="historiqueRemove"
                        onClick={(event) => {
                          event.stopPropagation();

                          removeAnimeFromHistorique(
                            formatName(animeName),
                            historiques[i]!.redirect,
                            historiques,
                            setHistoriques
                          );
                        }}
                      >
                        X
                      </div>
                    ) : null}
                    <Image
                      className="affiche"
                      src={getAnime(animeName)?.options.affiche!}
                      alt="affiche d'un anime"
                    />

                    <p>
                      {formatName(animeName)}
                      {historiques[i] && category === "Reprendre" && (
                        <>
                          {historiques[i]?.chapitre && (
                            <>
                              <br />
                              {getCurrentChapitre(
                                formatName(animeName),
                                i,
                                historiques
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
                                historiques
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
    </div>
  );
}
