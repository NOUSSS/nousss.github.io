"use client";

import React, { useEffect, useRef, useState } from "react";

import { clickEvents } from "@/app/utils/Episodes/eventHandlers";
import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import {
  AnimeEpisodesProps,
  EPS,
  LecteurReturnType,
  SeasonAndFilm,
} from "@/typings/types";
import { getLecteur } from "@/app/lib/getLecteur";
import { useRouter } from "next/router";
import { getAnime } from "@/app/lib/getAnime";
import { Anime } from "@/app/class/anime";
import { changeSaison } from "@/app/utils/Saisons/changeSaison";
import { toast } from "sonner";
import { useScript } from "usehooks-ts";
import { useSearchParams } from "next/navigation";
import { NextEpisode, PrevEpisode } from "@/app/utils/Episodes/episodeManager";

import SearchBar from "@/app/ui/searchBar";
import Select from "@/app/ui/Select";
import Head from "next/head";
import ClearCache from "@/app/cache/ClearCache";

import random from "@/app/lib/random";
import getHostname from "@/app/lib/getHostname";

import Switch from "@/app/ui/Switch";
import ColorPicker from "@/app/ui/colorPicker";
import getScriptIndex from "@/app/utils/Episodes/getScriptIndex";

let LecteurEpisodes: string[] = [];
let Lecteurs: LecteurReturnType;

const langObj = {
  vostfr: "VostFR",
  vf: "VF",
};

const Episodes = () => {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    router.events.on("routeChangeStart", ClearCache);

    return () => {
      router.events.off("routeChangeStart", ClearCache);
    };
  }, [router.events]);

  const [AnimeInfo, setAnimeInfo] = useState<AnimeEpisodesProps | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [loadingToast, setLoadingToast] = useState<null | string | number>(
    null,
  );

  const episodesRef = useRef<HTMLUListElement[]>([]);
  const episodeTitleRef = useRef<HTMLParagraphElement | null>(null);

  const placeholderLangRef = useRef<HTMLParagraphElement | null>(null);
  const placeholderLecteurRef = useRef<HTMLParagraphElement | null>(null);

  const options = (isClient &&
    AnimeInfo?.anime &&
    AnimeInfo!.anime?.options) as Anime;

  const { allIndex, horsSeries, SCRIPT_URL, names } =
    (isClient && options?.EPISODES_OPTIONS) || {};

  const disclamerMessage = useRef("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const namesRef = useRef<HTMLSpanElement[]>([]);

  const saisonsEntries = (isClient &&
    AnimeInfo &&
    Object.keys(options?.saisons!)) as string[];

  const saisonsValues = (isClient &&
    AnimeInfo &&
    Object.values(options?.saisons!)) as SeasonAndFilm[];

  const oavIndex = (isClient &&
    AnimeInfo &&
    saisonsEntries.findIndex((e) => e === "oav")) as number;

  const [url_script, setUrlScript] = useState<string>();
  const [filever, setFilever] = useState<number>();

  useEffect(() => {
    setIsClient(true);

    const currentAnime = getCurrentAnime({
      wSaison: true,
    });

    const animeFetched = getAnime(currentAnime);

    if (!currentAnime || !animeFetched?.options.EPISODES_OPTIONS) {
      router.push({
        pathname: "/",
      });
    } else {
      setLoadingToast(
        toast.loading("Les épisodes sont en cours de chargement"),
      );

      const currentSaison =
        params?.get("saison") ??
        localStorage.getItem(`${currentAnime}--saison`) ??
        "1";

      let lang = localStorage.getItem(
        `${currentAnime}--${currentSaison}--lang`,
      ) as "vostfr" | "vf";

      if (!lang) {
        lang = "vostfr";
        setAnimeInfo((currentState) => ({ ...currentState, lang }));

        if (placeholderLangRef.current)
          placeholderLangRef.current.innerText = "VostFR";
      } else {
        setAnimeInfo((currentState) => ({ ...currentState, lang }));

        if (placeholderLangRef.current)
          placeholderLangRef.current.innerText = langObj[lang];
      }

      setAnimeInfo((currentState) => ({
        ...currentState,
        anime: getAnime(currentAnime),
        saison: currentSaison,
      }));
    }
  }, []);

  useEffect(() => {
    if (AnimeInfo?.lang && AnimeInfo?.anime && AnimeInfo?.lang) {
      const parts = isClient ? options?.EPISODES_OPTIONS?.parts : undefined;

      let scriptIndex = getScriptIndex({
        currentSaison: AnimeInfo!.saison,
        parts,
      });

      let retard = 0;

      localStorage.setItem(
        `${AnimeInfo.anime.anime}--${AnimeInfo.saison}--lang`,
        AnimeInfo.lang,
      );

      const hsIndex = saisonsValues.findIndex(({ hs }) => hs === true);

      if (hsIndex !== -1 && Number(scriptIndex) - 1 >= hsIndex) retard++;

      setUrlScript(
        (isClient &&
          (oavIndex !== -1 && oavIndex + 1 === Number(AnimeInfo?.saison)
            ? SCRIPT_URL!({
                index: 1,
                lang: AnimeInfo.lang!,
              }).replace(/saison\d+(-\d+)?/g, "oav")
            : SCRIPT_URL!({
                index: Number(scriptIndex)
                  ? Number(scriptIndex) - retard
                  : scriptIndex!,
                lang: AnimeInfo.lang!,
                hs: saisonsValues[Number(scriptIndex) - 1]?.hs,
              }))) as string,
      );

      setFilever(random());
    }
  }, [AnimeInfo]);

  const status = useScript((url_script as string) + `?filever=${filever}`, {
    removeOnUnmount: true,
  });

  useEffect(() => {
    if (status === "error") {
      if (loadingToast) {
        toast.error("Erreur dans le chargement des épisodes.", {
          id: loadingToast,
        });
      }
    }

    if (status === "ready") {
      if (loadingToast) {
        toast.success("Les épisodes ont bien été chargés", {
          id: loadingToast,
        });
      }

      if (AnimeInfo?.saison && AnimeInfo.saison > saisonsEntries[oavIndex]) {
        const newIndexSaison = (Number(AnimeInfo?.saison) - 1).toString();

        localStorage.setItem(
          `${AnimeInfo?.anime?.anime}--saison`,
          newIndexSaison,
        );
        AnimeInfo!.saison = newIndexSaison;
      }

      Lecteurs = getLecteur();

      if (AnimeInfo?.lecteur) {
        LecteurEpisodes = Lecteurs[AnimeInfo.lecteur as EPS]!;
      } else {
        const lecteur = Object.keys(Lecteurs)[0] as EPS;

        setAnimeInfo((currentState) => ({ ...currentState, lecteur }));

        LecteurEpisodes = Lecteurs[lecteur]!;
      }

      const episodeIndex = allIndex![AnimeInfo?.saison ?? 0];
      let episode = localStorage.getItem(`${AnimeInfo?.anime?.anime}--episode`);

      if (!episode) {
        localStorage.setItem(`${AnimeInfo?.anime?.anime}--episode`, "1");

        episode = "1";
      }

      const e_sp = localStorage.getItem(`${AnimeInfo?.anime?.anime}--e-sp`);
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
            localStorage.getItem(`${AnimeInfo?.anime?.anime}--saison`),
        );

        if (isHorsSerie && isHorsSerie?.hs?.includes(indexEpisode - 1)) {
          retard++;

          const title = `E-SP${retard}`;

          listEpisodes.push(
            <li
              className="group cursor-pointer border-b border-neutral-700 p-1.5 text-left last:border-0"
              data-id={indexEpisode}
              key={title}
            >
              <span className="transition-all duration-200 ease-out group-hover:text-white">
                {title}
              </span>
              <span
                ref={(el) => (namesRef.current[indexEpisode - 1] = el!)}
              ></span>
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
              className="group cursor-pointer border-b border-neutral-700 p-1.5 text-left last:border-0"
              data-id={indexEpisode}
              key={id}
            >
              <span className="transition-all duration-200 ease-out group-hover:text-white">
                {episodeNumber} {indexId}
              </span>{" "}
              :{" "}
              <span
                ref={(el) => (namesRef.current[indexEpisode - 1] = el!)}
                className="text-white transition-all duration-200 ease-out hover:text-main group-hover:text-main"
              >
                {episodeTitle}
              </span>
            </li>,
          );
        }
      }

      setAnimeInfo((currentState) => ({
        ...currentState,
        episodes: listEpisodes,
      }));

      if (episode !== "1" && !e_sp) {
        (async () => {
          await new Promise((res) => setTimeout(res, 100, true));

          const URL_EPISODE = LecteurEpisodes[Number(episode) - 1];

          let retard = 0;

          episodesRef.current?.[0].childNodes.forEach((e, i) => {
            if (i + 1 < Number(episode)) {
              if ((e as HTMLElement).innerText.includes("E-SP")) retard++;
            }
          });

          const title =
            names?.find(
              ({ index }) =>
                index === (episodeIndex + Number(episode) - retard).toString(),
            )?.name || "";

          setAnimeInfo((currentState) => ({
            ...currentState,
            video: URL_EPISODE,
            episodeTitle: (
              <>
                <span>
                  {Number(episodeIndex) + Number(episode) - retard}{" "}
                  {AnimeInfo?.saison === "1"
                    ? ""
                    : `(${Number(episode) - retard})`}
                </span>{" "}
                :{" "}
                <span ref={episodeTitleRef} className="text-white">
                  {title}
                </span>
              </>
            ),
          }));
        })();
      }

      if (episode !== "1" && e_sp) {
        const URL_EPISODE = LecteurEpisodes[Number(episode) - 1];

        setAnimeInfo((currentState) => ({
          ...currentState,
          video: URL_EPISODE,
          episodeTitle: <span>{e_sp}</span>,
        }));
      }

      if (episode === "1") {
        const [firstEpisode] = LecteurEpisodes;

        const title =
          names?.find(({ index }) => index === (episodeIndex + 1).toString())
            ?.name || "";

        setAnimeInfo((currentState) => ({
          ...currentState,
          video: firstEpisode,
          episodeTitle: (
            <>
              <span>
                {episodeIndex + 1} {AnimeInfo?.saison === "1" ? "" : `(1)`}
              </span>{" "}
              :{" "}
              <span ref={episodeTitleRef} className="text-white">
                {title}
              </span>
            </>
          ),
        }));
      }

      setTimeout(() => {
        clickEvents(
          LecteurEpisodes,
          setAnimeInfo,
          AnimeInfo!,
          episodesRef,
          containerRef,
          episodeTitleRef,
        );

        const saisonName =
          AnimeInfo?.anime &&
          Object.values(AnimeInfo.anime?.options?.saisons!)[
            Number(localStorage.getItem(`${AnimeInfo?.anime?.anime}--saison`)) -
              1
          ]?.name;

        setAnimeInfo((currentState) => ({
          ...currentState,
          saisonTitle: (
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
          ),
        }));
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
  }, [AnimeInfo?.lecteur, status]);

  return (
    <main className="flex flex-col items-center">
      <Head>
        {AnimeInfo?.anime ? (
          <title>
            {AnimeInfo.anime.anime} - Episodes - Mugiwara-no Streaming
          </title>
        ) : null}
      </Head>

      <ColorPicker />

      {isClient && AnimeInfo?.anime && (
        <Title
          link={{
            pathname: "/Saisons",
            query: { anime: AnimeInfo!.anime.anime },
          }}
        />
      )}

      <p className="m-4 text-4xl">{AnimeInfo?.saisonTitle}</p>

      {disclamerMessage.current ? (
        <p
          className="mt-12 text-xl text-red-500"
          dangerouslySetInnerHTML={{ __html: disclamerMessage.current }}
        ></p>
      ) : null}

      <p className="m-7 mt-12 text-3xl">{AnimeInfo?.episodeTitle}</p>

      <div className="flex gap-11 max-md:flex-col max-md:gap-2">
        <Select
          placeholder="Changer de langue"
          placeholderRef={placeholderLangRef}
          items={[
            {
              name: "VostFR",
              value: "vostfr",
              disabled: AnimeInfo?.lang === "vostfr" ? true : false,
            },
            {
              name: "VF",
              value: "vf",
              disabled: AnimeInfo?.lang === "vostfr" ? false : true,
            },
          ]}
          onSelect={({ value }) => {
            setAnimeInfo((currentState) => ({ ...currentState, lang: value }));

            router.reload();
          }}
        />

        {Lecteurs ? (
          Object.keys(Lecteurs).length > 1 ? (
            <Select
              placeholder="Changer de lecteur"
              placeholderRef={placeholderLecteurRef}
              onSelect={({ value }) => {
                setAnimeInfo((currentState) => ({
                  ...currentState,
                  lecteur: value,
                }));
              }}
              items={Object.keys(Lecteurs).map((l, i) => ({
                name: getHostname(Object.values(Lecteurs)[i][0]),
                value: l,
                disabled: AnimeInfo?.lecteur === l ? true : false,
              }))}
            />
          ) : null
        ) : null}
      </div>

      <div ref={containerRef} className="container">
        <iframe
          className="video"
          src={AnimeInfo?.video}
          allowFullScreen
        ></iframe>
        <iframe className="ambiance" src={AnimeInfo?.video}></iframe>
      </div>

      <div className="relative mb-8 flex gap-5 after:absolute after:-bottom-6 after:h-[1px] after:w-full after:bg-neutral-700">
        {isClient &&
        localStorage.getItem(`${AnimeInfo?.anime?.anime}--episode`) !== "1" ? (
          <button
            className="btn back"
            onClick={() =>
              PrevEpisode(
                LecteurEpisodes,
                setAnimeInfo,
                AnimeInfo!,
                episodesRef,
                containerRef,
                episodeTitleRef,
              )
            }
          >
            Épisode précedent
          </button>
        ) : null}

        {isClient &&
        localStorage.getItem(`${AnimeInfo?.anime?.anime}--episode`) !==
          LecteurEpisodes.length.toString() ? (
          <button
            className="btn next"
            onClick={() =>
              NextEpisode(
                LecteurEpisodes,
                setAnimeInfo,
                AnimeInfo!,
                episodesRef,
                containerRef,
                episodeTitleRef,
              )
            }
          >
            Épisode suivant
          </button>
        ) : null}
      </div>

      <SearchBar
        className="m-8"
        placeholder="Rechercher un épisode"
        containerRef={episodesRef}
        query="innerText"
      />

      <Switch
        placeholder="Cacher le nom des épisodes"
        onChange={(event) => {
          if (event.target.checked) {
            episodeTitleRef.current?.classList.add("blur");

            for (const episode of namesRef.current) {
              episode.classList.add("blur");
            }
          } else {
            episodeTitleRef.current?.classList.remove("blur");

            for (const episode of namesRef.current) {
              episode.classList.remove("blur");
            }
          }
        }}
      />

      <div className="m-5 max-h-96 min-w-24 overflow-y-auto">
        <ul ref={(el) => (episodesRef.current[0] = el!)}>
          {AnimeInfo?.episodes}
        </ul>
      </div>

      <div className="m-8 flex gap-5">
        {isClient && AnimeInfo?.saison !== "1" ? (
          <button
            onClick={() => {
              const prevSaison =
                Number(
                  localStorage.getItem(`${AnimeInfo?.anime?.anime}--saison`),
                ) - 1;

              router.push({
                pathname: `/Episodes`,
                query: {
                  anime: AnimeInfo?.anime!.anime,
                  saison: prevSaison,
                },
              });

              changeSaison(prevSaison.toString(), AnimeInfo?.anime?.anime!);

              router.reload();
            }}
            className="btn back"
          >
            Saison précédente
          </button>
        ) : null}

        {isClient && AnimeInfo?.saison !== saisonsEntries?.length.toString() ? (
          <button
            onClick={() => {
              const newSaison =
                Number(
                  localStorage.getItem(`${AnimeInfo?.anime?.anime}--saison`),
                ) + 1;

              router.push({
                pathname: `/Episodes`,
                query: {
                  anime: AnimeInfo?.anime?.anime!,
                  saison: newSaison,
                },
              });

              changeSaison(newSaison.toString(), AnimeInfo?.anime?.anime!);

              router.reload();
            }}
            className="btn next"
          >
            Saison suivante
          </button>
        ) : null}
      </div>

      <Footer style={true} media />
    </main>
  );
};

export default Episodes;
