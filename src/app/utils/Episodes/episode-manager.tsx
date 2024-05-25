import React, { RefObject } from "react";
import { Anime } from "@/typings/types";
import EpisodeData from "@/app/class/episodeData";

export function Change(
  indexEpisode: number | string,
  lecteur: string[],

  updateAnime: (
    newData:
      | Partial<Anime.AnimeEpisodesProps>
      | ((
          prevState: Anime.AnimeEpisodesProps,
        ) => Partial<Anime.AnimeEpisodesProps>),
  ) => void,

  AnimeInfo: Anime.AnimeEpisodesProps,

  containerRef: RefObject<HTMLElement>,
  episodeTitleRef: RefObject<HTMLSpanElement>,
  episodesListRef: RefObject<HTMLElement[]>,
): void {
  const StorageEpisodes = new EpisodeData(AnimeInfo.anime?.anime);
  const Episodes = StorageEpisodes.get();

  if (!Episodes) return;

  const options = AnimeInfo.anime?.options;
  const saison = Episodes.saison;

  const { allIndex, horsSeries, names, noc } = options?.EPISODES_OPTIONS || {};

  const isHorsSerie =
    AnimeInfo.lang === "vostfr" &&
    horsSeries?.find(({ saison }) => saison === Episodes.saison);

  if (isHorsSerie) {
    if (isHorsSerie.hs.includes(Number(indexEpisode) - 1)) {
      let esp = "";

      episodesListRef.current?.[0].childNodes.forEach((el) => {
        const e = el as HTMLElement;

        if (e.dataset?.id === indexEpisode) {
          esp = e.innerText.match(/[0-9]/g)!.join("");
        }
      });

      const url = lecteur[Number(indexEpisode) - 1];

      updateAnime((currentState) => ({
        ...currentState,
        video: url,
        episodeTitle: <p className="font-normal">E-SP{esp}</p>,
      }));

      StorageEpisodes.setEpisode(indexEpisode.toString());
    } else {
      let retard = 0;

      episodesListRef.current?.[0].childNodes.forEach((e, i) => {
        if (i + 1 < Number(indexEpisode)) {
          if ((e as HTMLElement).innerText.includes("E-SP")) retard++;
        }
      });

      const saison = Episodes.saison;

      const numberEpisode = noc
        ? Number(indexEpisode) - retard
        : Number(allIndex?.[saison ?? 0]) + Number(indexEpisode) - retard;

      const title = names?.find((_, i) => i + 1 === numberEpisode)?.name || "";

      const url = lecteur[Number(indexEpisode) - 1];

      updateAnime((currentState) => ({
        ...currentState,
        video: url,
        episodeTitle: (
          <>
            E
            <span className="font-normal text-white">
              {numberEpisode}{" "}
              {saison === "1" || noc
                ? ""
                : `(${Number(indexEpisode) - retard})`}
            </span>
            {title ? " - " : ""}
            <span ref={episodeTitleRef} className="font-normal text-white">
              {title}
            </span>
          </>
        ),
      }));

      StorageEpisodes.setEpisode(indexEpisode.toString());
    }
  } else {
    const numberEpisode = noc
      ? indexEpisode
      : Number(allIndex?.[Episodes.saison]) + Number(indexEpisode);

    const url = lecteur[Number(indexEpisode) - 1];

    const episodeTitle =
      names?.find((_, i) => i + 1 === numberEpisode)?.name || "";

    updateAnime((currentState) => ({
      ...currentState,
      video: url,
      episodeTitle: (
        <>
          E
          <span className="font-normal text-white">
            {numberEpisode}{" "}
            {saison === "1" || noc ? "" : `(${Number(indexEpisode)})`}
          </span>
          {episodeTitle ? " - " : ""}
          <span ref={episodeTitleRef} className="font-normal text-white">
            {episodeTitle}
          </span>
        </>
      ),
    }));

    StorageEpisodes.setEpisode(indexEpisode.toString());
  }

  window.scrollTo({
    top: containerRef.current?.offsetTop,
    behavior: "smooth",
  });
}

export function NextEpisode(
  lecteur: string[],

  updateAnime: (
    newData:
      | Partial<Anime.AnimeEpisodesProps>
      | ((
          prevState: Anime.AnimeEpisodesProps,
        ) => Partial<Anime.AnimeEpisodesProps>),
  ) => void,

  AnimeInfo: Anime.AnimeEpisodesProps,

  containerRef: RefObject<HTMLElement>,
  episodeTitleRef: RefObject<HTMLSpanElement>,
  episodesListRef: RefObject<HTMLElement[]>,
) {
  const StorageEpisodes = new EpisodeData(AnimeInfo.anime?.anime);
  const Episodes = StorageEpisodes.get();

  if (!Episodes) return;

  const newEpisodeIndex = Number(Episodes.episode) + 1;

  Change(
    newEpisodeIndex,
    lecteur,
    updateAnime,
    AnimeInfo,
    containerRef,
    episodeTitleRef,
    episodesListRef,
  );
}

export function PrevEpisode(
  lecteur: string[],

  updateAnime: (
    newData:
      | Partial<Anime.AnimeEpisodesProps>
      | ((
          prevState: Anime.AnimeEpisodesProps,
        ) => Partial<Anime.AnimeEpisodesProps>),
  ) => void,

  AnimeInfo: Anime.AnimeEpisodesProps,

  containerRef: RefObject<HTMLElement>,
  episodeTitleRef: RefObject<HTMLSpanElement>,
  episodesListRef: RefObject<HTMLElement[]>,
) {
  const StorageEpisodes = new EpisodeData(AnimeInfo.anime?.anime);
  const Episodes = StorageEpisodes.get();

  if (!Episodes) return;

  const newEpisodeIndex = Number(Episodes.episode) - 1;

  Change(
    newEpisodeIndex,
    lecteur,
    updateAnime,
    AnimeInfo,
    containerRef,
    episodeTitleRef,
    episodesListRef,
  );
}
