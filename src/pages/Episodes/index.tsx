"use client";

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

import Plyr from "plyr";
import SearchBar from "@/app/ui/searchBar";
import Select from "@/app/ui/Select";
import Head from "next/head";

let LecteurEpisodes: string[] = [];
let Lecteurs: LecteurReturnType;

const Episodes = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      let index = 1;

      if (typeof window.epsAS !== "undefined") {
        (window.epsAS as string[] | undefined) = undefined;
      }

      while (true) {
        if (typeof window[`eps${index}`] !== "undefined") {
          (window[`eps${index}`] as string[] | undefined) = undefined;
        } else {
          break;
        }

        index++;
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const [AnimeInfo, setAnimeInfo] = useState<null | {
    anime: string;
    saison: string;
    lang: string;
  }>(null);

  const [isClient, setIsClient] = useState(false);

  const [loadingToast, setLoadingToast] = useState<null | string | number>(
    null,
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
        localStorage.getItem(`${formatName(currentAnime)}--saison`)!,
      )
    ) {
      router.push({
        pathname: "/",
      });
    } else {
      setLoadingToast(
        toast.loading("Les épisodes sont en cours de chargement"),
      );

      const currentSaison =
        localStorage.getItem(`${formatName(currentAnime)}--saison`) ?? "1";

      let lang = localStorage.getItem(
        `${formatName(currentAnime)}--${currentSaison}--lang`,
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

  const parts = (isClient && options.EPISODES_OPTIONS?.fromParts) as number;

  if (parts) {
    if (
      Number(localStorage.getItem(`${formatName(AnimeInfo!.anime!)}--saison`)) >
      parts
    ) {
      scriptIndex = `${parts}-${
        Number(
          localStorage.getItem(`${formatName(AnimeInfo!.anime!)}--saison`),
        ) -
        (parts - 1)
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
        lang,
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
              }))) as string,
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
        PrevSaisonSelector.classList.add("hidden");
      else PrevSaisonSelector.classList.remove("hidden");

      if (AnimeInfo?.saison === lastSaison)
        NextSaisonSelector.classList.add("hidden");
      else NextSaisonSelector.classList.remove("hidden");

      if (AnimeInfo!.saison > saisonsEntries[oavIndex]) {
        const newIndexSaison = (Number(AnimeInfo?.saison) - 1).toString();

        localStorage.setItem(
          `${formatName(AnimeInfo!.anime!)}--saison`,
          newIndexSaison,
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
        `${formatName(AnimeInfo!.anime!)}--episode`,
      );

      if (!episode) {
        localStorage.setItem(`${formatName(AnimeInfo!.anime!)}--episode`, "1");

        episode = "1";
      }

      const e_sp = localStorage.getItem(
        `${formatName(AnimeInfo!.anime!)}--e-sp`,
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
            localStorage.getItem(`${formatName(AnimeInfo!.anime!)}--saison`),
        );

        if (isHorsSerie && isHorsSerie?.hs?.includes(indexEpisode - 1)) {
          retard++;

          const title = `E-SP${retard}`;

          listEpisodes.push(
            <li
              className="list-episodes group cursor-pointer border-b border-neutral-700 p-1.5 text-left last:border-0"
              data-id={indexEpisode}
              id={title}
              key={title}
            >
              <span className="transition-all duration-200 ease-out group-hover:text-white">
                {title}
              </span>
            </li>,
          );
        } else {
          const episodeNumber = episodeIndex + indexEpisode - retard;
          const episodeTitle =
            names?.find(
              ({ index }: { index: string }) =>
                index === episodeNumber.toString(),
            )?.name || "";

          const indexId =
            AnimeInfo?.saison === "1" ? "" : `(${indexEpisode - retard})`;

          const id = `${episodeNumber} ${indexId} ${episodeTitle}`;

          listEpisodes.push(
            <li
              className="list-episodes group cursor-pointer border-b border-neutral-700 p-1.5 text-left last:border-0"
              data-id={indexEpisode}
              id={id}
              key={id}
            >
              <span className="transition-all duration-200 ease-out group-hover:text-white">
                {episodeNumber} {indexId}
              </span>{" "}
              :{" "}
              <span className="episodeName text-white transition-all duration-200 ease-out hover:text-[--mainColor] group-hover:text-[--mainColor]">
                {episodeTitle}
              </span>
            </li>,
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
                index === (episodeIndex + Number(episode) - retard).toString(),
            )?.name || "";

          setVideo(URL_EPISODE);

          setEpisodeTitle(
            <>
              <span className="transition-all duration-200 ease-out">
                {Number(episodeIndex) + Number(episode) - retard}{" "}
                {AnimeInfo?.saison === "1"
                  ? ""
                  : `(${Number(episode) - retard})`}
              </span>{" "}
              :{" "}
              <span className="episodeName text-white transition-all duration-200 ease-out hover:text-[--mainColor]">
                {title}
              </span>
            </>,
          );
        })();
      }

      if (episode !== "1" && e_sp) {
        const URL_EPISODE = LecteurEpisodes[Number(episode) - 1];

        setVideo(URL_EPISODE);
        setEpisodeTitle(
          <span className="transition-all duration-200 ease-out">{e_sp}</span>,
        );
      }

      if (episode === "1") {
        const [firstEpisode] = LecteurEpisodes;

        const title =
          names?.find(
            ({ index }) => index === (Number(episodeIndex) + 1).toString(),
          )?.name || "";

        setVideo(firstEpisode);

        setEpisodeTitle(
          <>
            <span className="transition-all duration-200 ease-out">
              {Number(episodeIndex) + 1}{" "}
              {AnimeInfo?.saison === "1" ? "" : `(1)`}
            </span>{" "}
            :{" "}
            <span className="episodeName text-white transition-all duration-200 ease-out hover:text-[--mainColor]">
              {title}
            </span>
          </>,
        );
      }

      setTimeout(() => {
        clickEvents(
          LecteurEpisodes,
          setVideo,
          setEpisodeTitle,
          AnimeInfo!.anime!,
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
          </>,
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
        PrevEpisodeSelector.classList.add("hidden");
      else PrevEpisodeSelector.classList.remove("hidden");

      if (Number(episode) === LecteurEpisodes.length)
        NextEpisodeSelector.classList.add("hidden");
      else NextEpisodeSelector.classList.remove("hidden");
    }
  }, [video, AnimeInfo]);

  return (
    <main className="flex flex-col items-center">
      <Head>
        {AnimeInfo?.anime ? (
          <title>
            {formatName(AnimeInfo.anime)} - Episodes - Mugiwara-no Streaming
          </title>
        ) : null}
      </Head>

      <Title
        link={{
          pathname: "/Saisons",
          query: { anime: AnimeInfo?.anime! },
        }}
      />

      <p className="m-12 text-4xl">{saisonTitle}</p>

      {disclamerMessage.current ? (
        <p
          className="mt-12 text-xl text-red-500"
          dangerouslySetInnerHTML={{ __html: disclamerMessage.current }}
        ></p>
      ) : null}

      <p className="m-7 mt-12 text-3xl">{episodeTitle}</p>

      <div className="mb-8 flex gap-11 max-md:flex-col max-md:gap-2">
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

      <div className="container">
        {currentLecteur?.lecteur === "epsAS" ? (
          <>
            <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />

            <div className="video">
              <video controls src={video} />
            </div>

            <div className="ambiance">
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

      <div className="relative mb-8 flex gap-5 after:absolute after:-bottom-6 after:h-[1px] after:w-full after:bg-neutral-700">
        <button className="btn back prevButton">Épisode précedent</button>
        <button className="btn next nextButton">Épisode suivant</button>
      </div>

      <SearchBar
        placeholder="Rechercher un épisode"
        container="list-episodes"
      />

      {isMobile() ? null : (
        <label className="hideEpisodesNames relative -left-5 flex cursor-pointer transition-all duration-300 ease-out before:absolute before:-right-12 before:bottom-2 before:h-[10px] before:w-10 before:rounded-full before:bg-[#3c3c3c] before:transition-all before:duration-200">
          <p>Cacher le nom des épisodes</p>

          <span className="Toggle relative left-6 h-6 w-6 rounded-full bg-[--mainColor] transition-all duration-200"></span>
          <input
            type="checkbox"
            className="appearance-none"
            onChange={({ target }) => {
              const label = document.querySelector(
                ".hideEpisodesNames",
              ) as HTMLElement;

              const toggleSpan = document.querySelector(
                ".Toggle",
              ) as HTMLElement;

              const names = Array.from(
                document.querySelectorAll(".episodeName"),
              );

              if (target.checked) {
                toggleSpan.classList.add("left-[52px]");

                label.classList.add("before:bg-[--mainColor]");
                label.classList.add("before:brightness-[.55]");

                for (const episode of names) {
                  (episode as HTMLElement).classList.add("blur");
                }
              } else {
                toggleSpan.classList.remove("left-[52px]");

                label.classList.remove("before:bg-[--mainColor]");
                label.classList.remove("before:brightness-[.55]");

                for (const episode of names) {
                  (episode as HTMLElement).classList.remove("blur");
                }
              }
            }}
          />
        </label>
      )}

      <div className="m-5 max-h-96 overflow-y-auto">
        <ul>{episodes}</ul>
      </div>

      <div className="relative top-12 flex gap-5">
        <button
          onClick={() => {
            const prevSaison =
              Number(
                localStorage.getItem(
                  `${formatName(AnimeInfo!.anime!)}--saison`,
                ),
              ) - 1;

            changeSaison(
              prevSaison.toString(),
              formatName(AnimeInfo!.anime!),
              router,
            );

            router.reload();
          }}
          className="btn back PrevSaison"
        >
          Saison précédente
        </button>

        <button
          onClick={() => {
            const newSaison =
              Number(
                localStorage.getItem(
                  `${formatName(AnimeInfo!.anime!)}--saison`,
                ),
              ) + 1;

            changeSaison(
              newSaison.toString(),
              formatName(AnimeInfo!.anime!),
              router,
            );

            router.reload();
          }}
          className="btn next NextSaison"
        >
          Saison suivante
        </button>
      </div>

      <Footer media />
    </main>
  );
};

export default Episodes;
