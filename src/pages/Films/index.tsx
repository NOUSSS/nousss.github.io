"use client";

import React, { useEffect, useRef, useState } from "react";

import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { AnimesType } from "@/animes/constants";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { EPS, FilmOptions, LecteurReturnType } from "@/typings/types";
import { appearVideo } from "@/app/utils/Films/appearVideo";
import { getFilms } from "@/app/utils/Films/getFilms";
import { getLecteur } from "@/app/lib/getLecteur";
import { formatName } from "@/app/lib/formatName";
import { getAnime } from "@/app/lib/getAnime";

import { toast } from "sonner";
import { useScript } from "usehooks-ts";
import { useRouter } from "next/router";

import SearchBar from "@/app/ui/searchBar";
import Select from "@/app/ui/Select";
import getHostname from "@/app/lib/getHostname";

import Head from "next/head";

let LecteursFilms: string[] = [];
let Lecteurs: LecteurReturnType;

const Films = () => {
  const [anime, setAnime] = useState<AnimesType | null>(null);
  const [isClient, setIsClient] = useState(false);

  const currentAnime = (isClient && anime?.anime) as string;
  const options = (isClient && anime?.options.FILM_OPTIONS) as FilmOptions;

  const { SCRIPT_URL } = options || {};

  const [films, setFilmsFront] = useState<React.ReactNode[]>();
  const [title, setTitle] = useState<React.ReactNode>();

  const [video, setVideo] = useState<string>("");
  const [lang, setLang] = useState<string | null>(null);
  const [currentLecteur, setCurrentLecteur] = useState<{
    lecteur: string;
    change?: boolean;
  } | null>(null);

  const lecteurString = useRef<EPS | "">("");

  const [loadingToast, setLoadingToast] = useState<string | number | null>(
    null,
  );

  const status = useScript(
    (isClient && lang && typeof SCRIPT_URL === "function"
      ? SCRIPT_URL(lang)
      : false) as string,
    {
      removeOnUnmount: true,
    },
  );

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    const currentAnime = getAnime(
      getCurrentAnime({
        wSaison: false,
      }),
    );

    if (!currentAnime || !currentAnime.options.FILM_OPTIONS) {
      router.push({
        pathname: "/",
      });
    } else {
      const lang =
        localStorage.getItem(`${formatName(currentAnime.anime)}--lang`) ??
        "vostfr";

      setLoadingToast(toast.loading("Les films sont en cours de chargement"));
      setLang(lang);

      setAnime({
        anime: formatName(currentAnime!.anime),
        options: currentAnime.options,
        category: currentAnime.category,
        synopsis: currentAnime.synopsis,
      });

      const placeholder = document.querySelector(".placeholder") as HTMLElement;

      const langObj = {
        vostfr: "VostFR",
        vf: "VF",
      };

      if (placeholder) {
        placeholder.innerText = langObj[lang as "vostfr" | "vf"];
      }
    }
  }, []);

  useEffect(() => {
    if (anime && lang) localStorage.setItem(`${currentAnime}--lang`, lang);
  }, [lang, anime]);

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

      if (lang === "vf") setLang("vostfr");
    }
  }, [status, lang, loadingToast]);

  useEffect(() => {
    if (status === "ready") {
      const lastFilm = localStorage.getItem(
        `${formatName(currentAnime)}--currentFilm`,
      );

      Lecteurs = getLecteur();

      if (currentLecteur?.lecteur) {
        LecteursFilms = Lecteurs[currentLecteur.lecteur as EPS]!;
      } else {
        if (Lecteurs.epsAS) {
          setCurrentLecteur({ lecteur: "epsAS" });

          LecteursFilms = Lecteurs.epsAS;
        } else {
          const lecteur = Object.keys(Lecteurs)[0] as EPS;

          setCurrentLecteur({ lecteur: lecteur });

          LecteursFilms = Lecteurs[lecteur]!;
        }
      }

      lecteurString.current = "eps1";

      const films_url = Lecteurs[lecteurString.current]!;

      if (options?.BLACKLIST_URL) {
        for (const BLACKLIST of options.BLACKLIST_URL) {
          if (films_url.includes(BLACKLIST))
            films_url.splice(films_url.indexOf(BLACKLIST), 1);
        }
      }

      appearVideo(
        lastFilm
          ? `${LecteursFilms[Number(lastFilm)]} ${Number(lastFilm)}`
          : `${LecteursFilms[0]} ${
              localStorage.getItem(
                `${formatName(currentAnime)}--currentFilm`,
              ) ?? "0"
            }`,

        setVideo,
        setTitle,

        formatName(currentAnime),
      );

      getFilms(
        setFilmsFront,
        setCurrentLecteur,
        setTitle,
        setVideo,

        currentLecteur!,
        currentAnime,
      );
    }
  }, [
    currentLecteur?.change,
    lang,
    status,
    currentAnime,
    options.BLACKLIST_URL,
  ]);

  return (
    <main className="flex flex-col items-center">
      <Head>
        {currentAnime ? (
          <title>
            {formatName(currentAnime)} - Films - Mugiwara-no Streaming
          </title>
        ) : null}
      </Head>

      <Title link={{ pathname: "/Home", query: { anime: currentAnime } }} />

      <div className="m-4 mb-12 text-4xl">{title}</div>

      <div className="flex gap-11 max-md:flex-col max-md:gap-2">
        <Select
          placeholder="Changer de langue"
          items={[
            {
              name: "VostFR",
              value: "vostfr",
              disabled: lang === "vostfr" ? true : false,
            },
            {
              name: "VF",
              value: "vf",
              disabled: lang === "vostfr" ? false : true,
            },
          ]}
          onSelect={({ value }) => {
            setLang(value);

            router.reload();
          }}
        />

        {Lecteurs ? (
          Object.keys(Lecteurs).length > 1 ? (
            <Select
              placeholder="Changer de lecteur"
              onSelect={({ value }) => {
                setCurrentLecteur({
                  lecteur: value,
                  change: !currentLecteur?.change,
                });
              }}
              items={Object.keys(Lecteurs).map((l, i) => ({
                name: getHostname(Object.values(Lecteurs)[i][0]),
                value: l,
                disabled: currentLecteur?.lecteur === l ? true : false,
              }))}
            />
          ) : null
        ) : null}
      </div>

      <div className="container">
        {currentLecteur?.lecteur === "epsAS" ? (
          <>
            <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />

            <video controls src={video} />

            <div className="video">
              <video src={video} />
            </div>
          </>
        ) : (
          <>
            <iframe className="video" src={video} allowFullScreen></iframe>
            <iframe className="ambiance" src={video}></iframe>
          </>
        )}
      </div>

      <SearchBar
        placeholder="Rechercher un film"
        container="list-poster"
        query="id"
      />

      <div className="overflow-x-auto">{films}</div>

      <Footer style={true} media />
    </main>
  );
};

export default Films;
