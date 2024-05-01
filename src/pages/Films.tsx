"use client";

import React, { useEffect, useRef, useState } from "react";

import { Footer, SearchBar, Watcher } from "@/app/components/";
import { getCurrentAnime, getLecteur, getAnime } from "@/app/lib/";
import { Anime } from "@/typings/types";
import { appearVideo } from "@/app/utils/Films/appearVideo";
import { getFilms } from "@/app/utils/Films/getFilms";

import { toast } from "sonner";
import { useScript, useAnime } from "@/app/lib/hooks/";
import { useRouter } from "next/router";

import Head from "next/head";
import FilmData from "@/app/class/filmData";

type langType = "vostfr" | "vf";

const Films = () => {
  const [anime, updateAnime] = useAnime<Anime.AnimeFilmsProps>({});
  const [loadingToast, setLoadingToast] = useState<string | number | null>(
    null,
  );
  const [script, setScript] = useState<string>("");
  const [filmData, setFilmData] = useState<FilmData>();

  const containerRef = useRef<HTMLDivElement>(null);
  const filmsRef = useRef<HTMLUListElement[]>([]);

  const status = useScript(script, {
    removeOnUnmount: true,
  });

  const router = useRouter();

  useEffect(() => {
    const currentAnime = getCurrentAnime({
      wSaison: false,
    });

    const StorageFilms = new FilmData(currentAnime);
    const FilmsData = StorageFilms.get();

    setFilmData(StorageFilms);

    const fetchedAnime = getAnime(currentAnime);

    if (!currentAnime || !fetchedAnime?.options.FILM_OPTIONS) {
      router.push({
        pathname: "/",
      });
    } else {
      const lang = (FilmsData?.lang ?? "vostfr") as langType;

      setLoadingToast(toast.loading("Les films sont en cours de chargement"));

      updateAnime({
        anime: getAnime(currentAnime),
        lang,
      });
    }
  }, []);

  useEffect(() => {
    if (anime && anime?.lang) {
      const options = anime?.anime?.options.FILM_OPTIONS;

      if (options) {
        filmData?.setLang(anime?.lang);
        setScript(options?.SCRIPT_URL(anime.lang));
      }
    }
  }, [anime?.lang]);

  useEffect(() => {
    if (status === "ready") {
      toast.success("Les films ont bien été chargés.", {
        id: loadingToast!,
      });
    }

    if (status === "error") {
      toast.error("Erreur dans le chargement des films.", {
        id: loadingToast!,
      });
    }
  }, [status]);

  useEffect(() => {
    if (status === "ready") {
      setTimeout(() => {
        const lastFilm = filmData?.get()?.film;

        const options = anime?.anime?.options.FILM_OPTIONS;
        const fetchedLecteurs = getLecteur();

        updateAnime((currentState) => ({
          ...currentState,
          lecteurs: fetchedLecteurs,
        }));

        if (anime?.lecteur) {
          updateAnime((currentState) => ({
            ...currentState,
            currentLecteur: fetchedLecteurs[anime.lecteur!],
          }));
        } else {
          const lecteur = Object.keys(fetchedLecteurs)[0];

          updateAnime((currentState) => ({
            ...currentState,
            lecteur,
            currentLecteur: fetchedLecteurs[lecteur]!,
          }));
        }

        if (options?.BLACKLIST_URL) {
          for (const BLACKLIST of options.BLACKLIST_URL) {
            if (anime.currentLecteur?.includes(BLACKLIST))
              anime.currentLecteur?.splice(
                anime.currentLecteur?.indexOf(BLACKLIST),
                1,
              );
          }
        }

        appearVideo(
          lastFilm
            ? `${anime.currentLecteur?.[Number(lastFilm)]} ${Number(lastFilm)}`
            : `${anime.currentLecteur?.[0]} 0`,

          anime!,
          updateAnime,

          containerRef,
        );

        getFilms(anime!, updateAnime);
      }, 400);
    }
  }, [status, anime?.currentLecteur, anime?.lang]);

  return (
    <main className="flex flex-col items-center">
      <Head>
        {anime?.anime?.anime ? (
          <title>{anime?.anime?.anime} - Films | Mugiwara-no Streaming</title>
        ) : null}
      </Head>

      {anime.lang && (
        <Watcher
          prefix={false}
          video={anime.video}
          context="Films"
          anime={anime.anime?.anime}
          lang={anime.lang}
          name={true}
          lecteur={anime.lecteur}
          lecteurs={anime.lecteurs}
          episode={anime.filmTitle as string}
          containerRef={containerRef}
          updateAnime={updateAnime}
        />
      )}

      <SearchBar
        className="my-6"
        placeholder="Rechercher un film"
        containerRef={filmsRef}
        query="id"
      />

      <ul ref={(el) => (filmsRef.current[0] = el!)}>
        {anime.films?.map(({ url, id, element }, index) => (
          <li
            key={id}
            id={id}
            className="group m-4 inline-flex w-28 cursor-pointer flex-col items-center gap-2.5 md:w-36"
            onClick={() => {
              appearVideo(`${url} ${index}`, anime, updateAnime, containerRef);
            }}
          >
            {element}
          </li>
        ))}
      </ul>

      <Footer style={true} media />
    </main>
  );
};

export default Films;
