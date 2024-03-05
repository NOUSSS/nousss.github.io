"use client";

import React, { useEffect, useRef, useState } from "react";

import "./Films.scss";
import "./responsive.scss";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { AnimesType } from "../../animes/constants";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { FilmOptions, LecteurReturnType } from "../../typings/types";
import { appearVideo } from "../../app/components/Films/appearVideo";
import { getFilms } from "../../app/components/Films/getFilms";
import { getLecteur } from "@/app/lib/getLecteur";
import { formatName } from "@/app/lib/formatName";
import { getAnime } from "@/app/lib/getAnime";
import { toast } from "sonner";
import { useScript } from "usehooks-ts";
import { useRouter } from "next/router";

import DownloadComponent from "@/app/ui/download-component";
import SearchBar from "@/app/ui/searchBar";
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

  const lecteurString = useRef<"" | "eps1" | "eps2">("");

  const [loadingToast, setLoadingToast] = useState<string | number | null>(
    null
  );

  const status = useScript(
    (isClient && lang && typeof SCRIPT_URL === "function"
      ? SCRIPT_URL(lang)
      : false) as string,
    {
      removeOnUnmount: true,
    }
  );

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    const currentAnime = getAnime(
      getCurrentAnime({
        wSaison: false,
      })
    );

    if (!currentAnime || !currentAnime.options.FILM_OPTIONS) {
      router.push({
        pathname: "/",
      });
    } else {
      setLoadingToast(toast.loading("Les films sont en cours de chargement"));
      setLang(
        localStorage.getItem(`${formatName(currentAnime.anime)}--lang`) ??
          "vostfr"
      );

      setAnime(currentAnime);
    }
  }, []);

  useEffect(() => {
    if (anime && lang)
      localStorage.setItem(`${formatName(anime.anime)}--lang`, lang);
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
    }
  }, [status, lang, loadingToast]);

  useEffect(() => {
    if (status === "ready") {
      const lastFilm = localStorage.getItem(
        `${formatName(currentAnime)}--currentFilm`
      );

      Lecteurs = getLecteur();

      if (currentLecteur?.lecteur) {
        LecteursFilms =
          Lecteurs[currentLecteur.lecteur as "epsAS" | "eps1" | "eps2"]!;
      } else {
        if (Lecteurs.epsAS) {
          setCurrentLecteur({ lecteur: "epsAS" });

          LecteursFilms = Lecteurs.epsAS;
        } else {
          const lecteur = Object.keys(Lecteurs)[0] as "eps1" | "eps2" | "epsAS";

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
                `${formatName(currentAnime)}--currentFilm`
              ) ?? "0"
            }`,

        setVideo,
        setTitle,

        formatName(currentAnime)
      );

      getFilms(
        setFilmsFront,
        setCurrentLecteur,
        setTitle,
        setVideo,

        currentLecteur!,
        currentAnime
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
    <>
      <Head>
        {currentAnime ? (
          <title>
            {formatName(currentAnime)} - Films - Mugiwara-no Streaming
          </title>
        ) : null}
      </Head>

      <div className="container--films">
        <Title link={{ pathname: "/Home", query: { anime: currentAnime } }} />

        <div className="film">{title}</div>

        <Menu
          menuButton={<MenuButton>Changer de langue</MenuButton>}
          transition
        >
          <MenuItem
            onClick={() => {
              setLang("vostfr");

              router.reload();
            }}
            disabled={lang === "vostfr" ? true : false}
          >
            VOSTFR
          </MenuItem>

          <MenuItem
            onClick={() => {
              setLang("vf");

              router.reload();
            }}
            disabled={lang === "vostfr" ? false : true}
          >
            VF
          </MenuItem>
        </Menu>

        {Lecteurs ? (
          Object.keys(Lecteurs).length > 1 ? (
            <select
              onChange={({ target: { value } }) =>
                setCurrentLecteur({
                  lecteur: value,
                  change: !currentLecteur?.change,
                })
              }
            >
              {Object.keys(Lecteurs).map((l, i) => (
                <option value={l} key={i}>
                  Lecteur {i + 1}
                </option>
              ))}
            </select>
          ) : null
        ) : null}

        <div className="video--films">
          {currentLecteur?.lecteur === "epsAS" ? (
            <>
              <link
                rel="stylesheet"
                href="https://cdn.plyr.io/3.7.8/plyr.css"
              />

              <video controls src={video} />

              <div className="ambiance">
                <video src={video} />
              </div>
            </>
          ) : (
            <>
              <iframe
                width="640"
                height="360"
                src={video}
                allowFullScreen
              ></iframe>

              <iframe className="ambiance" height="360" src={video}></iframe>
            </>
          )}
        </div>

        <SearchBar container="list-poster" />

        {currentLecteur?.lecteur ? (
          <DownloadComponent
            lecteur={currentLecteur.lecteur}
            video={video}
            className="tips--films"
          />
        ) : null}

        <div className="films">{films}</div>

        <Footer media />
      </div>
    </>
  );
};

export default Films;
