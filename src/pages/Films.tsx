"use client";

import React, { useEffect, useRef, useState } from "react";

import { Footer } from "@/app/components/Footer";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { Anime } from "@/typings/types";
import { appearVideo } from "@/app/utils/Films/appearVideo";
import { getFilms } from "@/app/utils/Films/getFilms";
import { getLecteur } from "@/app/lib/getLecteur";
import { getAnime } from "@/app/lib/getAnime";
import { formatLang, langType } from "@/app/lib/formatLang";

import { toast } from "sonner";
import { useScript } from "@/app/lib/hooks/useScript";
import { useRouter } from "next/router";

import SearchBar from "@/app/components/SearchBar";
import Select from "@/app/components/Select";
import getHostname from "@/app/lib/getHostname";

import Head from "next/head";
import useAnime from "@/app/lib/hooks/useAnime";
import clearCache from "@/app/cache/ClearCache";
import Link from "next/link";

const Films = () => {
  const [anime, updateAnime] = useAnime<Anime.AnimeFilmsProps>({});
  const [loadingToast, setLoadingToast] = useState<string | number | null>(
    null,
  );
  const [script, setScript] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);
  const filmsRef = useRef<HTMLUListElement[]>([]);
  const placeholderLangRef = useRef<HTMLParagraphElement>(null);
  const placeholderLecteurRef = useRef<HTMLParagraphElement>(null);

  const status = useScript(script, {
    removeOnUnmount: true,
  });

  const router = useRouter();

  useEffect(() => {
    const currentAnime = getCurrentAnime({
      wSaison: false,
    });

    const fetchedAnime = getAnime(currentAnime);

    if (!currentAnime || !fetchedAnime?.options.FILM_OPTIONS) {
      router.push({
        pathname: "/",
      });
    } else {
      const lang = (localStorage.getItem(`${currentAnime}--film--lang`) ??
        "vostfr") as langType;

      setLoadingToast(toast.loading("Les films sont en cours de chargement"));

      updateAnime({
        anime: getAnime(currentAnime),
        lang,
      });

      if (placeholderLangRef.current) {
        placeholderLangRef.current.innerText = formatLang(lang);
      }
    }
  }, []);

  useEffect(() => {
    if (anime && anime?.lang) {
      const options = anime?.anime?.options.FILM_OPTIONS;

      if (options) {
        localStorage.setItem(`${anime?.anime?.anime}--film--lang`, anime?.lang);
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
        const lastFilm = localStorage.getItem(
          `${anime?.anime?.anime}--currentFilm`,
        );

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
            : `${anime.currentLecteur?.[0]} ${
                localStorage.getItem(`${anime?.anime?.anime}--currentFilm`) ??
                "0"
              }`,

          anime!,
          updateAnime,

          containerRef,
        );

        getFilms(anime!, updateAnime, containerRef);
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

      {anime?.anime && (
        <h1 className="animate-title text-5xl">
          <Link
            className="font-normal"
            href={{
              pathname: "/Home",
              query: { anime: anime!.anime.anime },
            }}
          >
            {anime.anime.anime}
          </Link>
        </h1>
      )}

      <div className="m-4 mb-12 text-4xl">{anime?.filmTitle}</div>

      <div className="flex gap-11 max-md:flex-col max-md:gap-2">
        <Select
          placeholder="Changer de langue"
          placeholderRef={placeholderLangRef}
          items={[
            {
              name: "VostFR",
              value: "vostfr",
              disabled: anime?.lang === "vostfr" ? true : false,
            },
            {
              name: "VF",
              value: "vf",
              disabled: anime?.lang === "vostfr" ? false : true,
            },
          ]}
          onSelect={(items) => {
            clearCache();

            updateAnime((currentState) => ({
              ...currentState,
              lang: items[0].value,
            }));
          }}
        />

        {anime.lecteurs ? (
          Object.keys(anime.lecteurs).length > 1 ? (
            <Select
              placeholder="Changer de lecteur"
              placeholderRef={placeholderLecteurRef}
              onSelect={(items) => {
                updateAnime((currentState) => ({
                  ...currentState,
                  lecteur: items[0].value,
                  currentLecteur: anime?.lecteurs?.[items[0].value],
                }));
              }}
              items={Object.keys(anime.lecteurs).map((l, i) => ({
                name: getHostname(Object.values(anime.lecteurs!)[i][0]),
                value: l,
                disabled: anime?.lecteur === l ? true : false,
              }))}
            />
          ) : null
        ) : null}
      </div>

      {anime.video ? (
        <div ref={containerRef} className="container">
          <iframe className="video" src={anime.video} allowFullScreen></iframe>
          <iframe className="ambiance" src={anime.video}></iframe>
        </div>
      ) : null}

      <SearchBar
        className="mt-6"
        placeholder="Rechercher un film"
        containerRef={filmsRef}
        query="id"
      />

      <ul ref={(el) => (filmsRef.current[0] = el!)}>{anime?.films}</ul>

      <Footer style={true} media />
    </main>
  );
};

export default Films;
