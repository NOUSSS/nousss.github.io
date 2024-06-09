"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { Footer, SearchBar, Watcher, Switch } from "@/app/components/";
import { getCurrentAnime, getLecteur, getAnime } from "@/app/lib/";
import { Anime as AnimeType } from "@/typings/types";
import { useRouter } from "next/router";
import { changeSaison } from "@/app/utils/Saisons/changeSaison";
import { toast } from "sonner";
import { useScript, useAnime } from "@/app/lib/hooks/";
import { NextEpisode, PrevEpisode } from "@/app/utils/Episodes/episode-manager";
import { icons } from "lucide-react";

import getScriptIndex from "@/app/utils/Episodes/getScriptIndex";
import getNote from "@/app/utils/Episodes/getNote";

import Head from "next/head";
import ClearCache from "@/app/cache/ClearCache";
import EpisodeComponent from "@/app/utils/Episodes/episode-component";
import Link from "next/link";
import EpisodeData from "@/app/class/episodeData";

type langType = "vostfr" | "vf";

const Episodes = () => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", ClearCache);

    return () => {
      router.events.off("routeChangeStart", ClearCache);
    };
  }, [router.events]);

  const [anime, updateAnime] = useAnime<AnimeType.AnimeEpisodesProps>({});
  const [loadingToast, setLoadingToast] = useState<null | string | number>(
    null,
  );

  const episodeTitleRef = useRef<HTMLParagraphElement>(null);
  const episodesListRef = useRef<HTMLUListElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<HTMLSpanElement[]>([]);
  const disclamerMessage = useRef("");
  const moreRef = useRef<HTMLDivElement>(null);
  const triRef = useRef<HTMLDivElement>(null);

  const [url_script, setUrlScript] = useState<string>();
  const [filever, setFilever] = useState<string>();
  const [episodeData, setEpisodeData] = useState<EpisodeData>();

  const Next = icons["ChevronLast"];
  const Prev = icons["ChevronFirst"];
  const More = icons["Ellipsis"];
  const Tri = icons["Signal"];

  useEffect(() => {
    if (loadingToast) toast.dismiss(loadingToast);

    toast.info(
      "Les lecteurs ne nous appartiennent pas, donc si des pubs y sont présentes ignorez-les.",
      {
        duration: 10000,
      },
    );

    const currentAnimeName = getCurrentAnime({
      wSaison: true,
    });

    const episodeData = new EpisodeData(currentAnimeName);
    const currentAnimeData = episodeData.get();

    setEpisodeData(episodeData);

    if (!currentAnimeName || !currentAnimeData) {
      router.push("/");
    } else {
      setLoadingToast(
        toast.loading("Les épisodes sont en cours de chargement"),
      );

      const currentSaison = currentAnimeData.saison || "1";
      const lang = (currentAnimeData.lang as langType) || "vostfr";

      updateAnime((currentState) => ({
        ...currentState,
        anime: getAnime(currentAnimeName),
        saison: currentSaison,
        lang,
      }));
    }
  }, []);

  useEffect(() => {
    if (
      anime.lang &&
      anime.anime &&
      anime.saison &&
      anime.anime.options.EPISODES_OPTIONS
    ) {
      const options = anime.anime.options;

      const { saisons } = options!;
      const { SCRIPT_URL } = options.EPISODES_OPTIONS!;

      const saisonsKeys = Object.keys(saisons!);
      const saisonsValues = Object.values(saisons!);

      const oavIndex = saisonsKeys.findIndex((e) => e === "oav");

      const parts = options?.EPISODES_OPTIONS?.parts;

      let scriptIndex = getScriptIndex({
        currentSaison: anime.saison,
        parts,
      });

      let retard = 0;
      let url = "";

      episodeData?.setLang(anime.lang);

      const hsIndex = saisonsValues.findIndex(({ hs }) => hs === true);

      if (hsIndex !== -1 && Number(scriptIndex) - 1 >= hsIndex) retard++;

      if (oavIndex !== -1 && oavIndex + 1 === Number(anime?.saison)) {
        url = SCRIPT_URL({
          index: 1,
          lang: anime.lang!,
        }).replace(/saison\d+(-\d+)?/g, "oav");
      } else {
        if (saisonsValues[Number(scriptIndex) - 1]?.hs) {
          url = SCRIPT_URL!({
            index: Number(scriptIndex)
              ? Number(scriptIndex) - retard
              : scriptIndex!,
            lang: anime.lang!,
          }).replace(/saison\d+(-\d+)?/g, "saison1hs");
        } else {
          url = SCRIPT_URL({
            index: Number(scriptIndex)
              ? Number(scriptIndex) - retard
              : scriptIndex!,
            lang: anime.lang!,
          });
        }
      }

      const filever = localStorage.getItem("filever");

      setUrlScript(url);
      if (filever) setFilever(filever);
    }
  }, [anime.saison, anime.lang]);

  const status = useScript(url_script + `?filever=${filever}`, {
    removeOnUnmount: true,
  });

  useEffect(() => {
    if (status === "error" && loadingToast) {
      toast.error("Erreur dans le chargement des épisodes.", {
        id: loadingToast,
      });
    }

    if (status === "ready" && loadingToast) {
      toast.success("Les épisodes ont bien été chargés", {
        id: loadingToast,
      });
    }
  }, [status]);

  useEffect(() => {
    if (status === "ready") {
      setTimeout(() => {
        const options = anime!.anime?.options;

        const { allIndex, horsSeries, names, noc } = options?.EPISODES_OPTIONS!;

        const saisonsKeys = Object.keys(options?.saisons!);
        const oavIndex = saisonsKeys.findIndex((e) => e === "oav");

        if (anime?.saison && anime.saison > saisonsKeys[oavIndex]) {
          const newIndexSaison = (Number(anime?.saison) - 1).toString();

          episodeData?.setSaison(newIndexSaison);
          anime!.saison = newIndexSaison;
        }

        const fetchedLecteurs = getLecteur();

        updateAnime((currentState) => ({
          ...currentState,
          lecteurs: fetchedLecteurs,
        }));

        if (anime?.currentLecteur) {
          updateAnime((currentState) => ({
            ...currentState,
            currentLecteur: fetchedLecteurs[anime.lecteur!],
          }));
        } else {
          const lecteur = Object.keys(fetchedLecteurs)[0];
          const lastLecteur = episodeData?.get()?.lecteur;

          if (lastLecteur) {
            updateAnime((currentState) => ({
              ...currentState,
              lecteur: lastLecteur,
              currentLecteur: fetchedLecteurs[lastLecteur],
            }));
          } else {
            updateAnime((currentState) => ({
              ...currentState,
              lecteur,
              currentLecteur: fetchedLecteurs[lecteur]!,
            }));
          }
        }

        const episodeIndex = noc ? 0 : allIndex![anime?.saison ?? 0];
        let episode = episodeData?.get()?.episode;

        if (!episode) {
          episodeData?.setEpisode("1");
          episode = "1";
        }

        const listEpisodes: React.ReactNode[] = [];
        let retard = 0;

        if (!anime.currentLecteur) return;

        for (
          let indexEpisode = 1;
          indexEpisode < anime.currentLecteur.length + 1;
          indexEpisode++
        ) {
          const saisonStorage = episodeData?.get()?.saison;

          const isHorsSerie =
            anime.lang === "vostfr" &&
            horsSeries?.find(({ saison }) => saison === saisonStorage);

          if (isHorsSerie && isHorsSerie?.hs?.includes(indexEpisode - 1)) {
            retard++;

            const title = `E-SP${retard}`;

            listEpisodes.push(
              <EpisodeComponent
                key={indexEpisode + title}
                episodeIndex={indexEpisode - retard}
                id={indexEpisode.toString()}
                episodeNumber={title}
                episodeSpecial={true}
                namesRef={namesRef}
                containerRef={containerRef}
                episodeTitleRef={episodeTitleRef}
                AnimeInfo={anime}
                updateAnime={updateAnime}
                lecteur={anime.currentLecteur!}
                episodesListRef={episodesListRef}
              />,
            );
          } else {
            const episodeNumber = episodeIndex + indexEpisode - retard;
            const episodeNumberName = noc
              ? allIndex![anime?.saison ?? 0] + episodeNumber
              : episodeNumber;

            const episodeTitle =
              names?.find(({ index }, i) =>
                index
                  ? Number(index) === episodeNumberName
                  : i + 1 === episodeNumberName,
              )?.name || "";

            listEpisodes.push(
              <EpisodeComponent
                key={indexEpisode + episodeNumber}
                episodeIndex={indexEpisode - retard}
                id={indexEpisode.toString()}
                episodeTitle={episodeTitle}
                episodeNumber={episodeNumber}
                namesRef={namesRef}
                episodeSpecial={false}
                containerRef={containerRef}
                episodeTitleRef={episodeTitleRef}
                AnimeInfo={anime}
                updateAnime={updateAnime}
                lecteur={anime.currentLecteur!}
                episodesListRef={episodesListRef}
              />,
            );
          }
        }

        updateAnime((currentState) => ({
          ...currentState,
          episodes: listEpisodes,
        }));

        setTimeout(() => {
          let retardEsp = 0;

          episodesListRef.current?.[0]?.childNodes.forEach((e, i) => {
            if (i + 1 < Number(episode)) {
              if ((e as HTMLElement).innerText.includes("E-SP")) retardEsp++;
            }
          });

          const episodeSpecial = horsSeries
            ?.find(({ saison }) => saison === anime.saison)
            ?.hs.includes(Number(episode) - 1);

          if (!episodeSpecial) {
            const URL_EPISODE = anime.currentLecteur?.[Number(episode) - 1];

            const episodeNumber = episodeIndex + Number(episode) - retardEsp;
            const episodeNumberName = noc
              ? allIndex![anime?.saison ?? 0] + episodeNumber
              : episodeNumber;

            const title =
              names?.find(({ index }, i) =>
                index
                  ? Number(index) === episodeNumberName
                  : i + 1 === episodeNumberName,
              )?.name || "";

            updateAnime((currentState) => ({
              ...currentState,
              video: URL_EPISODE,
              episodeTitle: (
                <>
                  E
                  <span className="font-normal text-white">
                    {Number(episodeIndex) + Number(episode) - retardEsp}{" "}
                    {anime?.saison === "1" || noc
                      ? ""
                      : `(${Number(episode) - retardEsp})`}
                  </span>
                  {title ? " - " : ""}
                  <span
                    ref={episodeTitleRef}
                    className="font-normal text-white"
                  >
                    {title}
                  </span>
                </>
              ),
            }));
          } else {
            const URL_EPISODE = anime.currentLecteur?.[Number(episode) - 1];

            updateAnime((currentState) => ({
              ...currentState,
              video: URL_EPISODE,
              episodeTitle: <>E-SP{retardEsp + 1}</>,
            }));
          }

          const saisonStorage = episodeData?.get()?.saison;

          const saisonName =
            anime?.anime &&
            Object.values(anime.anime?.options?.saisons!)[
              Number(saisonStorage) - 1
            ]?.name;

          updateAnime((currentState) => ({
            ...currentState,
            saisonTitle: `${saisonName} (${anime.currentLecteur?.length})`,
          }));
        }, 100);

        if (options) disclamerMessage.current = getNote(options.note, anime);
      }, 300);
    }
  }, [anime.currentLecteur, anime.lang, anime.saison, status]);

  const blurEpisodes = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        episodeTitleRef.current?.classList.add("blur");

        for (const episode of namesRef.current) episode.classList.add("blur");
      } else {
        episodeTitleRef.current?.classList.remove("blur");

        for (const episode of namesRef.current)
          episode.classList.remove("blur");
      }
    },
    [],
  );

  const PrevSaison = useCallback(() => {
    ClearCache();

    const prevSaison = Number(episodeData?.get()?.saison) - 1;

    router.push({
      pathname: `/Episodes`,
      query: {
        anime: anime?.anime!.anime,
        saison: prevSaison,
      },
    });

    episodeData?.setLecteur("");
    changeSaison(prevSaison.toString(), anime?.anime?.anime!);

    updateAnime((currentState) => ({
      ...currentState,
      saison: prevSaison.toString(),
    }));
  }, [anime.anime?.anime]);

  const NextSaison = useCallback(() => {
    ClearCache();

    const newSaison = Number(episodeData?.get()?.saison) + 1;

    router.push({
      pathname: `/Episodes`,
      query: {
        anime: anime?.anime?.anime!,
        saison: newSaison,
      },
    });

    episodeData?.setLecteur("");
    changeSaison(newSaison.toString(), anime?.anime?.anime!);

    updateAnime((currentState) => ({
      ...currentState,
      saison: newSaison.toString(),
    }));
  }, [anime.anime?.anime]);

  return (
    <>
      <Head>
        {anime?.anime && (
          <title>{anime.anime.anime} - Episodes | Mugiwara-no Streaming</title>
        )}

        <meta
          property="og:description"
          content="Les episodes de l'anime que vous souhaitez"
        />
      </Head>

      <main className="flex flex-col items-center">
        {disclamerMessage.current && (
          <p
            className="disclamer mt-12 text-xl text-red-500"
            dangerouslySetInnerHTML={{ __html: disclamerMessage.current }}
          ></p>
        )}

        {anime.lang && (
          <Watcher
            video={anime.video}
            lecteurs={anime.lecteurs}
            anime={anime.anime?.anime}
            lang={anime.lang}
            lecteur={anime.lecteur}
            containerRef={containerRef}
            updateAnime={updateAnime}
            context={anime.saison}
          />
        )}

        <div className="flex w-11/12 flex-col justify-between *:flex *:flex-col *:items-center lg:w-[930px] lg:flex-row xl:w-[1200px]">
          <div className="mb-5 w-full">
            <div className="flex w-full flex-col text-left sm:gap-2">
              {anime?.anime && anime.saisonTitle && (
                <span className="inline-block">
                  <Link
                    className="text-sm font-normal text-main hover:underline sm:text-base"
                    href={{
                      pathname: "/Saisons",
                      query: { anime: anime!.anime.anime },
                    }}
                  >
                    {anime.anime.anime} | {anime.saisonTitle}
                  </Link>
                </span>
              )}

              <div className="text-lg font-normal sm:text-[22px]">
                {anime?.episodeTitle}
              </div>
            </div>

            <div className="my-8 flex w-full flex-col justify-between gap-5 min-[450px]:flex-row lg:justify-between">
              <button
                disabled={episodeData?.get()?.episode === "1"}
                className="glassBtn"
                onClick={() =>
                  PrevEpisode(
                    anime.currentLecteur!,
                    updateAnime,
                    anime!,
                    containerRef,
                    episodeTitleRef,
                    episodesListRef,
                  )
                }
              >
                <Prev />
                Épisode précedent
              </button>

              <button
                disabled={
                  episodeData?.get()?.episode ===
                  anime.currentLecteur?.length.toString()
                }
                className="glassBtn sm:mr-8"
                onClick={() =>
                  NextEpisode(
                    anime?.currentLecteur!,
                    updateAnime,
                    anime!,
                    containerRef,
                    episodeTitleRef,
                    episodesListRef,
                  )
                }
              >
                Épisode suivant
                <Next />
              </button>
            </div>
          </div>

          <div className="w-full lg:max-w-[450px]">
            <div>
              <div className="mb-4 flex w-full justify-between *:rounded-md *:p-2 *:ring-0">
                <div
                  ref={triRef}
                  title={
                    triRef.current
                      ? triRef.current.classList.contains("rotate-90")
                        ? "Croissant"
                        : "Décroissant"
                      : ""
                  }
                  className="rotate-90 bg-gray-600 bg-opacity-20 transition-all active:ring-2 active:ring-white"
                  onClick={() => {
                    if (triRef.current) {
                      if (triRef.current.classList.contains("rotate-90")) {
                        triRef.current.classList.add("rotate-[270deg]");
                        triRef.current.classList.remove("rotate-90");
                      } else {
                        triRef.current.classList.remove("rotate-[270deg]");
                        triRef.current.classList.add("rotate-90");
                      }
                    }

                    if (anime.episodes)
                      updateAnime((currentState) => ({
                        ...currentState,
                        episodes: [...anime.episodes!.reverse()],
                      }));
                  }}
                >
                  <Tri size={25} />
                </div>

                <div
                  className="bg-gray-600 bg-opacity-20 transition-all active:ring-2 active:ring-white"
                  title="Plus d'options"
                  onClick={() => {
                    if (moreRef.current) {
                      if (moreRef.current.classList.contains("h-auto")) {
                        moreRef.current.classList.add("h-0");

                        moreRef.current.classList.remove("h-auto");
                        moreRef.current.classList.remove("p-4");
                      } else {
                        moreRef.current.classList.remove("h-0");

                        moreRef.current.classList.add("h-auto");
                        moreRef.current.classList.add("p-4");
                      }
                    }
                  }}
                >
                  <More size={25} />
                </div>
              </div>

              <div
                className="mb-4 h-0 w-full justify-center overflow-hidden rounded-md bg-gray-600 bg-opacity-20 transition-all"
                ref={moreRef}
              >
                <SearchBar
                  placeholder="Rechercher un épisode"
                  containerRef={episodesListRef}
                  query="innerText"
                />

                {anime.anime?.options.EPISODES_OPTIONS?.names && (
                  <div className="my-4 text-lg">
                    <Switch
                      placeholder="Cacher le nom des épisodes"
                      onChange={blurEpisodes}
                    />
                  </div>
                )}
              </div>

              <ul
                className="max-h-96 min-w-24 overflow-auto"
                ref={(el) => (episodesListRef.current[0] = el!)}
              >
                {anime?.episodes}
              </ul>
            </div>
          </div>
        </div>

        <div className="my-6 flex w-11/12 flex-col justify-between gap-5 min-[435px]:flex-row min-[435px]:gap-0 sm:w-11/12 lg:w-[930px] xl:w-[1200px]">
          <button
            disabled={anime?.saison === "1"}
            onClick={PrevSaison}
            className="glassBtn"
          >
            <Prev />
            Saison précédente
          </button>

          <button
            disabled={
              !(
                anime.anime &&
                anime?.saison !==
                  Object.keys(anime.anime?.options.saisons!)?.length.toString()
              )
            }
            onClick={NextSaison}
            className="glassBtn"
          >
            Saison suivante
            <Next />
          </button>
        </div>

        <Footer style={true} media />
      </main>
    </>
  );
};

export default Episodes;
