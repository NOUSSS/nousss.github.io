"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  getCurrentAnime,
  getLecteur,
  getAnime,
  relatedCats,
  getWallpaper,
} from "@/app/lib/";

import {
  Change,
  NextEpisode,
  PrevEpisode,
} from "@/app/utils/Episodes/episode-manager";

import { useScript, useAnime } from "@/app/lib/hooks/";
import { Anime as AnimeType } from "@/typings/types";
import { useRouter } from "next/router";
import { changeSaison } from "@/app/utils/Saisons/changeSaison";
import { toast } from "sonner";
import { icons } from "lucide-react";
import { Footer, SearchBar, Watcher, Switch, Select } from "@/app/components/";
import { ANIMES } from "@/animes/constants";

import getScriptIndex from "@/app/utils/Episodes/getScriptIndex";
import getNote from "@/app/utils/Episodes/getNote";

import Head from "next/head";
import ClearCache from "@/app/cache/ClearCache";
import EpisodeComponent from "@/app/utils/Episodes/episode-component";
import Link from "next/link";
import EpisodeData from "@/app/class/episodeData";
import Image from "next/image";

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

  const placeholderSeason = useRef<HTMLParagraphElement>(null);
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
  const [relatedAnimes, setRelatedAnimes] = useState<string[]>([]);

  const Next = icons["ChevronLast"];
  const Prev = icons["ChevronFirst"];
  const Last = icons["ChevronsUp"];

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
    const currentEpisode = Number(episodeData?.get()?.episode);

    if (episodesListRef.current && currentEpisode) {
      episodesListRef.current[0].scrollTo({
        top: (
          episodesListRef.current[0].childNodes[
            currentEpisode - 1
          ] as HTMLElement
        ).offsetTop,
        behavior: "smooth",
      });

      episodesListRef.current?.[0].childNodes.forEach((e) => {
        (e.childNodes[0] as HTMLElement).classList.remove("*:text-main");
      });

      (
        episodesListRef.current?.[0].childNodes[currentEpisode - 1]
          .childNodes[0] as HTMLElement
      ).classList.add("*:text-main");
    }
  }, [anime.video]);

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

        for (const a of ANIMES) {
          if (
            ((anime.anime?.category &&
              relatedCats(a.category, anime.anime?.category)) ||
              a.anime.includes(anime.anime!.anime) ||
              anime.anime!.anime.includes(a.anime)) &&
            anime.anime?.anime !== a.anime &&
            !relatedAnimes.includes(a.anime)
          ) {
            setRelatedAnimes((state) => [...state, a.anime]);
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
                episodeNumber={
                  episodeNumber.toString() +
                  (anime?.saison === "1" || noc
                    ? ""
                    : ` (${indexEpisode - retard})`)
                }
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

  const navigateSeason = useCallback(
    (newSaison: number) => {
      ClearCache();

      router.push({
        pathname: `/Episodes`,
        query: {
          anime: anime?.anime?.anime!,
          saison: newSaison,
        },
      });

      episodeData?.setLecteur("");
      changeSaison(newSaison.toString(), anime.anime?.anime!);

      updateAnime((currentState) => ({
        ...currentState,
        saison: newSaison.toString(),
      }));
    },
    [anime.anime?.anime],
  );

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
        <div className="relative">
          <script
            dangerouslySetInnerHTML={{
              __html: `aclib.runBanner({
            zoneId: '8868058',
        });`,
            }}
            type="text/javascript"
            async
          ></script>
        </div>

        <div className="fixed left-0 max-lg:hidden">
          <script
            dangerouslySetInnerHTML={{
              __html: `aclib.runBanner({
            zoneId: '8868062',
        });`,
            }}
            type="text/javascript"
            async
          ></script>
        </div>

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
                      pathname: "/Home",
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

            <div className="my-8 flex w-full justify-between gap-3 min-[450px]:gap-5">
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
                <p className="max-[450px]:hidden">Épisode précedent</p>
              </button>

              <button
                disabled={
                  episodeData?.get()?.episode ===
                  anime.currentLecteur?.length.toString()
                }
                className="glassBtn"
                onClick={() =>
                  Change(
                    anime.currentLecteur!.length,
                    anime?.currentLecteur!,
                    updateAnime,
                    anime!,
                    containerRef,
                    episodeTitleRef,
                    episodesListRef,
                  )
                }
              >
                <Last />
                <p className="max-[450px]:hidden">Dernier épisode</p>
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
                <p className="max-[450px]:hidden">Épisode suivant</p>
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

              {anime.anime?.options.saisons &&
                Object.keys(anime.anime.options.saisons).length !== 1 && (
                  <div className="mb-4">
                    <Select
                      parent
                      placeholderRef={placeholderSeason}
                      placeholder="Changer de saison"
                      items={Object.values(anime.anime.options.saisons).map(
                        ({ name }, i) => ({
                          name,
                          value: (i + 1).toString(),
                          disabled: Number(anime.saison) === i + 1,
                        }),
                      )}
                      onSelect={(items) =>
                        navigateSeason(Number(items[0].value))
                      }
                    />
                  </div>
                )}

              <ul
                className="relative max-h-96 min-w-24 overflow-auto"
                ref={(el) => {
                  if (el) {
                    episodesListRef.current[0] = el;
                  }
                }}
              >
                {anime.episodes}
              </ul>
            </div>
          </div>
        </div>

        <div className="my-6 flex w-11/12 flex-col justify-between gap-5 min-[435px]:flex-row min-[435px]:gap-0 sm:w-11/12 lg:w-[930px] xl:w-[1200px]">
          <button
            disabled={anime?.saison === "1"}
            onClick={() =>
              navigateSeason(Number(episodeData?.get()?.saison) - 1)
            }
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
            onClick={() =>
              navigateSeason(Number(episodeData?.get()?.saison) + 1)
            }
            className="glassBtn"
          >
            Saison suivante
            <Next />
          </button>
        </div>

        {!(
          anime.anime &&
          anime?.saison !==
            Object.keys(anime.anime?.options.saisons!)?.length.toString()
        ) &&
          relatedAnimes.length > 0 && (
            <div className="my-6 flex w-11/12 flex-col min-[435px]:gap-0 sm:w-11/12 lg:w-[930px] xl:w-[1200px]">
              <p className="mb-4 text-left text-2xl font-normal">
                Oeuvres similaires
              </p>

              <ul className="flex gap-6 overflow-auto">
                {relatedAnimes.map((animeName) => {
                  const fetchedAnime = getAnime(animeName);

                  const disponibles = [
                    fetchedAnime?.options.EPISODES_OPTIONS && "Episodes",
                    fetchedAnime?.options.SCANS_OPTIONS && "Scans",
                    fetchedAnime?.options.FILM_OPTIONS && "Films",
                  ].filter(Boolean);

                  return (
                    <Link
                      href={{
                        pathname: "/Home",
                        query: { anime: animeName },
                      }}
                      id={
                        animeName +
                        `${
                          typeof fetchedAnime?.aliases === "undefined"
                            ? ""
                            : fetchedAnime?.aliases
                        }`
                      }
                      key={animeName}
                    >
                      <div
                        title={
                          fetchedAnime?.synopsis ??
                          "Aucun synopsis pour cette anime"
                        }
                        className="w-40 transition-all hover:scale-[.97] max-md:mr-1 md:w-44"
                      >
                        <div className="overflow-hidden shadow-xl">
                          <Image
                            className="aspect-[2/3] w-40 transition-transform md:w-44"
                            src={getWallpaper(animeName)!}
                            alt="affiche d'un anime"
                          />
                        </div>

                        <p className="my-2 text-left text-base max-md:text-sm">
                          {animeName} <br />{" "}
                          <span className="text-sm max-md:text-xs">
                            {disponibles.join(", ")}
                          </span>
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}

        <div className="relative">
          <script
            dangerouslySetInnerHTML={{
              __html: `aclib.runBanner({
            zoneId: '8868058',
        });`,
            }}
            type="text/javascript"
            async
          ></script>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Episodes;
