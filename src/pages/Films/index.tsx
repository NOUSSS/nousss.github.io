"use client";

import React, { useEffect, useRef, useState } from "react";

import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { AnimeFilmsProps, FilmOptions, LecteursProps } from "@/typings/types";
import { appearVideo } from "@/app/utils/Films/appearVideo";
import { getFilms } from "@/app/utils/Films/getFilms";
import { getLecteur } from "@/app/lib/getLecteur";
import { getAnime } from "@/app/lib/getAnime";
import { formatLang, langType } from "@/app/lib/formatLang";

import { toast } from "sonner";
import { useScript } from "usehooks-ts";
import { useRouter } from "next/router";

import SearchBar from "@/app/ui/searchBar";
import Select from "@/app/ui/Select";
import getHostname from "@/app/lib/getHostname";

import Head from "next/head";
import ColorPicker from "@/app/ui/colorPicker";
import useAnime from "@/app/lib/components/useAnime";

const Films = () => {
  const [anime, updateAnime] = useAnime<AnimeFilmsProps>({});
  const [isClient, setIsClient] = useState(false);
  const [lecteurs, setLecteurs] = useState<LecteursProps>();

  const options = (isClient &&
    anime?.anime?.options.FILM_OPTIONS) as FilmOptions;

  const { SCRIPT_URL } = options || {};

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [loadingToast, setLoadingToast] = useState<string | number | null>(
    null,
  );

  const status = useScript(
    (isClient && anime?.lang && typeof SCRIPT_URL === "function"
      ? SCRIPT_URL(anime?.lang)
      : false) as string,
    {
      removeOnUnmount: true,
    },
  );

  const router = useRouter();

  const filmsRef = useRef<HTMLUListElement[]>([]);

  const placeholderLangRef = useRef<HTMLParagraphElement | null>(null);
  const placeholderLecteurRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    setIsClient(true);

    const currentAnime = getCurrentAnime({
      wSaison: false,
    });

    const fetchedAnime = getAnime(currentAnime);

    if (!currentAnime || !fetchedAnime?.options.FILM_OPTIONS) {
      router.push({
        pathname: "/",
      });
    } else {
      const lang = (localStorage.getItem(`${currentAnime}--lang`) ??
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
    if (anime && anime?.lang)
      localStorage.setItem(`${anime?.anime?.anime}--lang`, anime?.lang);
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

      if (anime?.lang === "vf")
        updateAnime((currentState) => ({ ...currentState, lang: "vostfr" }));
    }
  }, [status, anime?.lang, loadingToast]);

  useEffect(() => {
    if (status === "ready") {
      const lastFilm = localStorage.getItem(
        `${anime?.anime?.anime}--currentFilm`,
      );

      const fetchedLecteurs = getLecteur();

      setLecteurs({
        lecteurs: fetchedLecteurs,
      });

      if (anime?.lecteur) {
        setLecteurs((currentState) => ({
          ...currentState,
          currentLecteur: fetchedLecteurs[anime.lecteur!],
        }));
      } else {
        const lecteur = Object.keys(fetchedLecteurs)[0];

        updateAnime((currentState) => ({ ...currentState, lecteur }));
        setLecteurs((currentState) => ({
          ...currentState,
          currentLecteur: fetchedLecteurs[lecteur]!,
        }));
      }

      if (options?.BLACKLIST_URL) {
        for (const BLACKLIST of options.BLACKLIST_URL) {
          if (lecteurs?.currentLecteur?.includes(BLACKLIST))
            lecteurs?.currentLecteur?.splice(
              lecteurs?.currentLecteur?.indexOf(BLACKLIST),
              1,
            );
        }
      }

      appearVideo(
        lastFilm
          ? `${lecteurs?.currentLecteur?.[Number(lastFilm)]} ${Number(lastFilm)}`
          : `${lecteurs?.currentLecteur?.[0]} ${
              localStorage.getItem(`${anime?.anime?.anime}--currentFilm`) ?? "0"
            }`,

        anime!,
        updateAnime,

        containerRef,
      );

      getFilms(anime!, updateAnime, containerRef);
    }
  }, [status, lecteurs?.currentLecteur]);

  return (
    <main className="flex flex-col items-center">
      <Head>
        {anime?.anime?.anime ? (
          <title>{anime?.anime?.anime} - Films - Mugiwara-no Streaming</title>
        ) : null}
      </Head>

      <ColorPicker />
      <Title
        link={{ pathname: "/Home", query: { anime: anime?.anime?.anime! } }}
      />

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
          onSelect={({ value }) => {
            updateAnime((currentState) => ({ ...currentState, lang: value }));

            router.reload();
          }}
        />

        {lecteurs?.lecteurs ? (
          Object.keys(lecteurs.lecteurs).length > 1 ? (
            <Select
              placeholder="Changer de lecteur"
              placeholderRef={placeholderLecteurRef}
              onSelect={({ value }) =>
                updateAnime((currentState) => ({
                  ...currentState,
                  lang: value,
                }))
              }
              items={Object.keys(lecteurs.lecteurs).map((l, i) => ({
                name: getHostname(Object.values(lecteurs.lecteurs!)[i][0]),
                value: l,
                disabled: anime?.lecteur === l ? true : false,
              }))}
            />
          ) : null
        ) : null}
      </div>

      <div ref={containerRef} className="container">
        <iframe className="video" src={anime?.video} allowFullScreen></iframe>
        <iframe className="ambiance" src={anime?.video}></iframe>
      </div>

      <SearchBar
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
