"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { Footer, SearchBar, Watcher, Switch } from "@/app/components/";
import { getCurrentAnime, getLecteur, getAnime, random } from "@/app/lib/";
import { Anime as AnimeType } from "@/typings/types";
import { useRouter } from "next/router";
import { changeSaison } from "@/app/utils/Saisons/changeSaison";
import { toast } from "sonner";
import { useScript, useAnime } from "@/app/lib/hooks/";
import { useSearchParams } from "next/navigation";
import { NextEpisode, PrevEpisode } from "@/app/utils/Episodes/episode-manager";

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
  const [ErrorInterval, setErrorInterval] = useState<NodeJS.Timeout>();

  const episodeTitleRef = useRef<HTMLParagraphElement>(null);
  const episodesListRef = useRef<HTMLUListElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<HTMLSpanElement[]>([]);

  const disclamerMessage = useRef("");

  const [url_script, setUrlScript] = useState<string>();
  const [filever, setFilever] = useState<number>();

  const [episodeData, setEpisodeData] = useState<EpisodeData>();

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
      router.push({
        pathname: "/",
      });
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

      const saisonsEntries = Object.keys(saisons!);
      const saisonsValues = Object.values(saisons!);

      const oavIndex = saisonsEntries.findIndex((e) => e === "oav");

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

      setUrlScript(url);
      setFilever(random());
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

        const { allIndex, horsSeries, names } = options?.EPISODES_OPTIONS!;

        const saisonsEntries = Object.keys(options?.saisons!);
        const oavIndex = saisonsEntries.findIndex((e) => e === "oav");

        if (anime?.saison && anime.saison > saisonsEntries[oavIndex]) {
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

        const episodeIndex = allIndex![anime?.saison ?? 0];
        let episode = episodeData?.get()?.episode;

        if (!episode) {
          episodeData?.setEpisode("1");
          episode = "1";
        }

        const listEpisodes: React.ReactNode[] = [];

        let retard = 0;

        if (!anime.currentLecteur || anime.currentLecteur.length < 1) {
          return setErrorInterval(
            setTimeout(() => {
              updateAnime((currentState) => ({
                ...currentState,
                episodeTitle: "Un problème est survenue",
              }));
            }, 2000),
          );
        } else {
          clearInterval(ErrorInterval);
        }

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
            const episodeTitle =
              names?.find((_, i) => i + 1 === episodeNumber)?.name || "";

            listEpisodes.push(
              <EpisodeComponent
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

            const title =
              names?.find(
                (_, i) => i + 1 === episodeIndex + Number(episode) - retardEsp,
              )?.name || "";

            updateAnime((currentState) => ({
              ...currentState,
              video: URL_EPISODE,
              episodeTitle: (
                <>
                  E
                  <span className="font-normal text-white">
                    {Number(episodeIndex) + Number(episode) - retardEsp}{" "}
                    {anime?.saison === "1"
                      ? ""
                      : `(${Number(episode) - retardEsp})`}
                  </span>{" "}
                  -{" "}
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
      }, 400);
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

  return (
    <main className="flex flex-col items-center">
      <Head>
        {anime?.anime ? (
          <title>{anime.anime.anime} - Episodes | Mugiwara-no Streaming</title>
        ) : null}
      </Head>

      {disclamerMessage.current ? (
        <p
          className="mt-12 text-xl text-red-500"
          dangerouslySetInnerHTML={{ __html: disclamerMessage.current }}
        ></p>
      ) : null}

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

      <div className="flex w-full flex-col justify-between *:mx-5 *:flex *:flex-col *:items-center lg:w-[930px] lg:flex-row xl:w-[1200px]">
        <div className="mx:mb-0 mb-5">
          <div className="flex w-full flex-col text-left md:w-auto">
            {anime?.anime && anime.saisonTitle && (
              <Link
                className="text-sm font-normal text-zinc-400 hover:underline sm:text-base"
                href={{
                  pathname: "/Saisons",
                  query: { anime: anime!.anime.anime },
                }}
              >
                {anime.anime.anime} | {anime.saisonTitle}
              </Link>
            )}

            <div className="text-xl font-normal sm:text-2xl">
              {anime?.episodeTitle}
            </div>
          </div>

          <div className="my-8 flex w-full justify-between gap-5 lg:max-w-[600px]">
            {anime.anime?.anime && episodeData?.get()?.episode !== "1" ? (
              <button
                className="btn"
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
                Épisode précedent
              </button>
            ) : null}

            {anime.anime?.anime &&
            anime.currentLecteur &&
            episodeData?.get()?.episode !==
              anime.currentLecteur.length.toString() ? (
              <button
                className="btn"
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
              </button>
            ) : null}
          </div>
        </div>

        <div className="lg:max-w-[450px]">
          <SearchBar
            placeholder="Rechercher un épisode"
            containerRef={episodesListRef}
            query="innerText"
          />

          <div className="relative mb-4 mt-8 text-lg">
            <Switch
              placeholder="Cacher le nom des épisodes"
              onChange={blurEpisodes}
            />
          </div>

          <div className="max-h-96 min-w-24 overflow-y-auto">
            <ul ref={(el) => (episodesListRef.current[0] = el!)}>
              {anime?.episodes}
            </ul>
          </div>

          <div className="my-6 flex gap-5">
            {anime?.saison !== "1" ? (
              <button
                onClick={() => {
                  ClearCache();

                  const prevSaison = Number(episodeData?.get()?.saison) - 1;

                  router.push({
                    pathname: `/Episodes`,
                    query: {
                      anime: anime?.anime!.anime,
                      saison: prevSaison,
                    },
                  });

                  changeSaison(prevSaison.toString(), anime?.anime?.anime!);

                  updateAnime((currentState) => ({
                    ...currentState,
                    saison: prevSaison.toString(),
                  }));
                }}
                className="btn"
              >
                Saison précédente
              </button>
            ) : null}

            {anime.anime &&
            anime?.saison !==
              Object.keys(anime.anime?.options.saisons!)?.length.toString() ? (
              <button
                onClick={() => {
                  ClearCache();

                  const newSaison = Number(episodeData?.get()?.saison) + 1;

                  router.push({
                    pathname: `/Episodes`,
                    query: {
                      anime: anime?.anime?.anime!,
                      saison: newSaison,
                    },
                  });

                  changeSaison(newSaison.toString(), anime?.anime?.anime!);

                  updateAnime((currentState) => ({
                    ...currentState,
                    saison: newSaison.toString(),
                  }));
                }}
                className="btn"
              >
                Saison suivante
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <Footer style={true} media />
    </main>
  );
};

export default Episodes;
