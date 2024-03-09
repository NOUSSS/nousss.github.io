"use client";

import "./Episodes.scss";
import "./responsive.scss";

import React, { useEffect, useRef, useState } from "react";

import { formatName } from "@/app/lib/formatName";
import { clickEvents } from "@/app/components/Episodes/eventHandlers";
import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { LecteurReturnType, SeasonAndFilm } from "@/typings/types";
import { getLecteur } from "@/app/lib/getLecteur";
import { isMobile } from "@/app/lib/isMobile";
import { useRouter } from "next/router";
import { getAnime } from "@/app/lib/getAnime";
import { Anime } from "@/app/class/anime";
import { changeSaison } from "@/app/components/Saisons/changeSaison";

import { toast } from "sonner";
import { useScript } from "usehooks-ts";

import Switch from "@mui/material/Switch";
import Plyr from "plyr";

import DownloadComponent from "@/app/ui/download-component";
import SearchBar from "@/app/ui/searchBar";
import Select from "@/app/ui/Select";

import Head from "next/head";

let LecteurEpisodes: string[] = [];
let Lecteurs: LecteurReturnType;

const Episodes = () => {
  const router = useRouter();

  const [AnimeInfo, setAnimeInfo] = useState<null | {
    anime: string;

    saison: string;

    lang: string;
  }>(null);

  const [isClient, setIsClient] = useState(false);

  const [loadingToast, setLoadingToast] = useState<null | string | number>(
    null
  );

  const options = (isClient && getAnime(AnimeInfo?.anime!)?.options) as Anime;

  const { allIndex, horsSeries, SCRIPT_URL, names, oav } =
    (isClient && options?.EPISODES_OPTIONS) || {};

  const disclamerMessage = useRef("");

  let scriptIndex = (isClient && AnimeInfo?.saison) as string | undefined;

  useEffect(() => {
    setIsClient(true);

    const currentAnime = getCurrentAnime({
      wSaison: true,
    });

    const animeFetched = getAnime(currentAnime);

    if (
      !currentAnime ||
      !animeFetched?.options.EPISODES_OPTIONS ||
      !Object.keys(animeFetched.options?.saisons!).includes(
        localStorage.getItem(`${formatName(currentAnime)}--saison`)!
      )
    ) {
      router.push({
        pathname: "/",
      });
    } else {
      setLoadingToast(
        toast.loading("Les épisodes sont en cours de chargement")
      );

      const currentSaison =
        localStorage.getItem(`${formatName(currentAnime)}--saison`) ?? "1";

      let lang = localStorage.getItem(
        `${formatName(currentAnime)}--${currentSaison}--lang`
      );

      if (!lang) {
        setLang("vostfr");

        lang = "vostfr";
      } else setLang(lang);

      setAnimeInfo({
        anime: currentAnime!,
        saison: currentSaison,

        lang,
      });
    }
  }, []);

  if (isClient && AnimeInfo?.anime == "L'attaque des titans") {
    if (
      Number(localStorage.getItem(`${formatName(AnimeInfo!.anime!)}--saison`)) >
      4
    ) {
      scriptIndex = `4-${
        Number(
          localStorage.getItem(`${formatName(AnimeInfo!.anime!)}--saison`)
        ) - 3
      }`;
    }
  }

  if (isClient && AnimeInfo?.anime! == "Bleach") {
    if (
      Number(localStorage.getItem(`${formatName(AnimeInfo!.anime!)}--saison`)) >
      2
    ) {
      scriptIndex = `2-${
        Number(
          localStorage.getItem(`${formatName(AnimeInfo!.anime!)}--saison`)
        ) - 1
      }`;
    }
  }

  const [saisonTitle, setSaisonTitle] = useState<React.ReactNode>();
  const [episodeTitle, setEpisodeTitle] = useState<React.ReactNode>();
  const [episodes, setEpisodes] = useState<React.ReactNode[]>([]);
  const [video, setVideo] = useState<string>("");

  const [currentLecteur, setCurrentLecteur] = useState<{
    lecteur: string;
    change?: boolean;
  } | null>(null);

  const [lang, setLang] = useState<string | null>(null);

  const saisonsEntries = (isClient &&
    AnimeInfo &&
    Object.keys(options?.saisons!)) as string[];
  const saisonsValues = (isClient &&
    AnimeInfo &&
    Object.values(options?.saisons!)) as SeasonAndFilm[];

  const oavIndex = (isClient &&
    AnimeInfo &&
    saisonsValues.findIndex(({ name }) => name === "OAV")) as number;

  const isOAV =
    isClient &&
    oavIndex &&
    AnimeInfo?.saison === saisonsEntries[oavIndex] &&
    oav;

  const [url_script, setUrlScript] = useState<string>();

  useEffect(() => {
    if (lang && AnimeInfo?.anime) {
      localStorage.setItem(
        `${formatName(AnimeInfo.anime)}--${AnimeInfo.saison}--lang`,
        lang
      );
    }

    setUrlScript(
      (isClient &&
        (AnimeInfo?.anime === "one piece"
          ? SCRIPT_URL!({
              index: scriptIndex!,
              lang: AnimeInfo?.lang!,
              maxEpisode: names![names!.length - 1]!.index,
            })
          : oav
          ? isOAV
            ? SCRIPT_URL!({
                index: scriptIndex!,
                lang: AnimeInfo?.lang!,
              }).replace(/saison\d+(-\d+)?/g, "oav")
            : SCRIPT_URL!({ index: scriptIndex!, lang: AnimeInfo?.lang! })
          : SCRIPT_URL!({
              index: scriptIndex!,
              lang: AnimeInfo?.lang!,
            }))) as string
    );
  }, [lang, AnimeInfo, SCRIPT_URL, isClient, isOAV, names, oav, scriptIndex]);

  const status = useScript(url_script as string, {
    removeOnUnmount: true,
  });

  useEffect(() => {
    if (status === "error") {
      if (loadingToast) {
        toast.error("Erreur dans le chargement des épisodes.", {
          id: loadingToast,
        });
      }

      if (AnimeInfo && AnimeInfo.saison) {
        setLang("vostfr");
        setAnimeInfo({
          ...AnimeInfo!,
          lang: "vostfr",
        });
      }
    }

    if (status === "ready") {
      if (loadingToast) {
        toast.success("Les épisodes ont bien été chargés", {
          id: loadingToast,
        });
      }

      const NextSaisonSelector =
        document.querySelector<HTMLElement>(".NextSaison")!;

      const PrevSaisonSelector =
        document.querySelector<HTMLElement>(".PrevSaison")!;

      const lastSaison = Object.keys(allIndex!)[
        Object.keys(allIndex!).length - 1
      ];

      const firstSaison = Object.keys(allIndex!)[0];

      if (AnimeInfo?.saison === firstSaison)
        PrevSaisonSelector.classList.add("invisible");
      else PrevSaisonSelector.classList.remove("invisible");

      if (AnimeInfo?.saison === lastSaison)
        NextSaisonSelector.classList.add("invisible");
      else NextSaisonSelector.classList.remove("invisible");

      if (AnimeInfo!.saison > saisonsEntries[oavIndex]) {
        const newIndexSaison = String(Number(AnimeInfo?.saison) - 1);

        localStorage.setItem(
          `${formatName(AnimeInfo!.anime!)}--saison`,
          newIndexSaison
        );
        AnimeInfo!.saison = newIndexSaison;
      }

      Lecteurs = getLecteur();

      if (currentLecteur?.lecteur) {
        LecteurEpisodes =
          Lecteurs[currentLecteur.lecteur as "epsAS" | "eps1" | "eps2"]!;
      } else {
        if (Lecteurs.epsAS) {
          setCurrentLecteur({ lecteur: "epsAS" });
          LecteurEpisodes = Lecteurs.epsAS;
        } else {
          const lecteur = Object.keys(Lecteurs)[0] as "eps1" | "eps2" | "epsAS";

          setCurrentLecteur({ lecteur });

          LecteurEpisodes = Lecteurs[lecteur]!;
        }
      }

      const episodeIndex = allIndex![AnimeInfo?.saison ?? 0];

      let episode = localStorage.getItem(
        `${formatName(AnimeInfo!.anime!)}--episode`
      );

      if (!episode) {
        localStorage.setItem(`${formatName(AnimeInfo!.anime!)}--episode`, "1");

        episode = "1";
      }

      const e_sp = localStorage.getItem(
        `${formatName(AnimeInfo!.anime!)}--e-sp`
      );
      const listEpisodes: React.ReactNode[] = [];

      let retard = 0;

      for (
        let indexEpisode = 1;
        indexEpisode < LecteurEpisodes.length + 1;
        indexEpisode++
      ) {
        const isHorsSerie = horsSeries?.find(
          ({ saison }) =>
            saison ===
            localStorage.getItem(`${formatName(AnimeInfo!.anime!)}--saison`)
        );

        if (isHorsSerie) {
          if (isHorsSerie.hs.includes(indexEpisode - 1)) {
            retard++;

            const title = `E-SP${retard}`;

            listEpisodes.push(
              <li
                className="list-episodes"
                data-id={indexEpisode}
                id={title}
                key={title}
              >
                <span className="episodeNumber">{title}</span>
              </li>
            );
          } else {
            const episodeNumber = episodeIndex + indexEpisode - retard;
            const episodeTitle =
              names?.find(
                ({ index }: { index: string }) =>
                  index === String(episodeNumber)
              )?.name || "";

            const id = `${episodeNumber} ${episodeTitle}`;

            listEpisodes.push(
              <li
                className="list-episodes"
                data-id={indexEpisode}
                id={id}
                key={id}
              >
                <span className="episodeNumber">
                  {episodeNumber}{" "}
                  {AnimeInfo?.saison === "1"
                    ? ""
                    : `(${indexEpisode - retard})`}
                </span>{" "}
                : <span className="episodeName">{episodeTitle}</span>
              </li>
            );
          }
        } else {
          const episodeNumber = episodeIndex + indexEpisode;
          const episodeTitle =
            names?.find(({ index }) => index === String(episodeNumber))?.name ??
            "";

          const id = `${episodeNumber} ${episodeTitle}`;

          listEpisodes.push(
            <li
              className="list-episodes"
              data-id={indexEpisode}
              id={id}
              key={id}
            >
              <span className="episodeNumber">
                {episodeNumber}{" "}
                {AnimeInfo?.saison === "1" ? "" : `(${indexEpisode})`}
              </span>{" "}
              : <span className="episodeName">{episodeTitle}</span>
            </li>
          );
        }
      }

      setEpisodes(listEpisodes);

      if (episode !== "1" && !e_sp) {
        (async () => {
          await new Promise((res) => setTimeout(res, 100, true));

          const URL_EPISODE = LecteurEpisodes[Number(episode) - 1];

          let retard = 0;

          document.querySelectorAll(".list-episodes").forEach((e, i) => {
            if (i + 1 < Number(episode)) {
              if (e.id.includes("E-SP")) retard++;
            }
          });

          const title =
            names?.find(
              ({ index }) =>
                index === String(episodeIndex + Number(episode) - retard)
            )?.name || "";

          setVideo(URL_EPISODE);

          setEpisodeTitle(
            <>
              <span className="episodeNumber">
                {Number(episodeIndex) + Number(episode) - retard}{" "}
                {AnimeInfo?.saison === "1"
                  ? ""
                  : `(${Number(episode) - retard})`}
              </span>{" "}
              : <span className="episodeName">{title}</span>
            </>
          );
        })();
      }

      if (episode !== "1" && e_sp) {
        const URL_EPISODE = LecteurEpisodes[Number(episode) - 1];

        setVideo(URL_EPISODE);
        setEpisodeTitle(<span className="episodeNumber">{e_sp}</span>);
      }

      if (episode === "1") {
        const [firstEpisode] = LecteurEpisodes;

        const title =
          names?.find(({ index }) => index === String(Number(episodeIndex) + 1))
            ?.name || "";

        setVideo(firstEpisode);

        setEpisodeTitle(
          <>
            <span className="episodeNumber">
              {Number(episodeIndex) + 1}{" "}
              {AnimeInfo?.saison === "1" ? "" : `(1)`}
            </span>{" "}
            : <span className="episodeName">{title}</span>
          </>
        );
      }

      setTimeout(() => {
        clickEvents(
          LecteurEpisodes,
          setVideo,
          setEpisodeTitle,
          AnimeInfo!.anime!
        );

        const saisonName = getAnime(AnimeInfo?.anime!)?.options?.saisons?.[
          localStorage.getItem(`${formatName(AnimeInfo?.anime!)}--saison`)!
        ].name;

        setSaisonTitle(
          <>
            <span>
              {saisonName} ({LecteurEpisodes.length})
            </span>{" "}
            {"["}
            <span style={{ color: "white" }}>
              {AnimeInfo?.lang?.toUpperCase() || "VOSTFR"}
            </span>
            {"]"}
          </>
        );
      }, 100);

      if (options?.note) {
        if (typeof options.note === "string") {
          disclamerMessage.current = options?.note;
        } else {
          if (options?.note.find((obj) => obj.saison === AnimeInfo?.saison)) {
            disclamerMessage.current =
              options?.note.find((obj) => obj.saison === AnimeInfo?.saison)
                ?.message || "";
          } else {
            disclamerMessage!.current = "";
          }
        }
      }
    }
  }, [
    currentLecteur?.change,
    AnimeInfo,
    scriptIndex,
    status,
    url_script,
    allIndex,
    horsSeries,
    names,
    oavIndex,
    options?.note,
  ]);

  useEffect(() => {
    if (AnimeInfo?.anime) {
      new Plyr(".vid video");

      const episode =
        localStorage.getItem(`${formatName(AnimeInfo!.anime!)}--episode`) ??
        "1";

      const NextEpisodeSelector =
        document.querySelector<HTMLElement>(".nextButton")!;

      const PrevEpisodeSelector =
        document.querySelector<HTMLElement>(".prevButton")!;

      if (!episode || episode === "1")
        PrevEpisodeSelector.classList.add("invisible");
      else PrevEpisodeSelector.classList.remove("invisible");

      if (Number(episode) === LecteurEpisodes.length)
        NextEpisodeSelector.classList.add("invisible");
      else NextEpisodeSelector.classList.remove("invisible");
    }
  }, [video, AnimeInfo]);

  return (
    <>
      <Head>
        {AnimeInfo?.anime ? (
          <title>
            {formatName(AnimeInfo.anime)} - Episodes - Mugiwara-no Streaming
          </title>
        ) : null}
      </Head>

      <div className="container--episodes">
        <Title
          link={{
            pathname: "/Saisons",
            query: { anime: AnimeInfo?.anime! },
          }}
        />

        <p className="titleSaison">{saisonTitle}</p>

        {disclamerMessage.current ? (
          <p
            className="disclamer"
            dangerouslySetInnerHTML={{ __html: disclamerMessage.current }}
          ></p>
        ) : null}

        <p className="episodeTitle">{episodeTitle}</p>

        <div className="selects">
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
                  name: `Lecteur ${i + 1}`,
                  value: l,
                  disabled: currentLecteur?.lecteur === l ? true : false,
                }))}
              />
            ) : null
          ) : null}
        </div>

        <div className="videoContainer">
          {currentLecteur?.lecteur === "epsAS" ? (
            <>
              <link
                rel="stylesheet"
                href="https://cdn.plyr.io/3.7.8/plyr.css"
              />

              <div className="vid">
                <video controls src={video} />
              </div>

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

        <div className="container--buttons">
          <div className="buttons">
            <button className="prevButton">Épisode précedent</button>
            <button className="nextButton">Épisode suivant</button>
          </div>
        </div>

        {currentLecteur?.lecteur ? (
          <DownloadComponent
            video={video}
            lecteur={currentLecteur.lecteur}
            className="download"
          />
        ) : null}

        <SearchBar
          placeholder="Rechercher un épisode"
          container="list-episodes"
        />

        {isMobile() ? null : (
          <label className="hideEpisodesNames">
            <p>Cacher le nom des épisodes</p>

            <Switch
              onChange={({ target }) => {
                if (target.checked) {
                  for (const episode of Array.from(
                    document.querySelectorAll(".episodeName")
                  )) {
                    (episode as HTMLElement).classList.add("blurEffect");
                  }
                } else {
                  for (const episode of Array.from(
                    document.querySelectorAll(".episodeName")
                  )) {
                    (episode as HTMLElement).classList.remove("blurEffect");
                  }
                }
              }}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "var(--mainColor)",
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "var(--mainColor)",
                },
                "& .MuiSwitch-switchBase + .MuiSwitch-track": {
                  backgroundColor: "hsla(231, 14%, 10%, 1)",
                },
              }}
            />
          </label>
        )}

        <div className="container--list">
          <ul className="list">{episodes}</ul>
        </div>

        <div className="buttons--saisons">
          <button
            onClick={() => {
              const prevSaison =
                Number(
                  localStorage.getItem(
                    `${formatName(AnimeInfo!.anime!)}--saison`
                  )
                ) - 1;

              changeSaison(
                String(prevSaison),
                formatName(AnimeInfo!.anime!),
                router
              );

              router.reload();
            }}
            className="PrevSaison"
          >
            Saison précédente
          </button>

          <button
            onClick={() => {
              const newSaison =
                Number(
                  localStorage.getItem(
                    `${formatName(AnimeInfo!.anime!)}--saison`
                  )
                ) + 1;

              changeSaison(
                String(newSaison),
                formatName(AnimeInfo!.anime!),
                router
              );

              router.reload();
            }}
            className="NextSaison"
          >
            Saison suivante
          </button>
        </div>

        <Footer media />
      </div>
    </>
  );
};

export default Episodes;
