import React, { RefObject } from "react";
import { Anime } from "@/typings/types";

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
  const options = AnimeInfo.anime?.options;
  const saison = localStorage.getItem(`${AnimeInfo.anime?.anime}--saison`);

  const { allIndex, horsSeries, names } = options?.EPISODES_OPTIONS || {};

  const isHorsSerie =
    AnimeInfo.lang === "vostfr" &&
    horsSeries?.find(
      ({ saison }: { saison: string }) =>
        saison === localStorage.getItem(`${AnimeInfo.anime?.anime}--saison`),
    );

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
        episodeTitle: <span>E-SP{esp}</span>,
      }));

      localStorage.setItem(
        `${AnimeInfo.anime?.anime}--episode`,
        indexEpisode.toString(),
      );
      localStorage.setItem(`${AnimeInfo.anime?.anime}--e-sp`, `E-SP${esp}`);
    } else {
      let retard = 0;

      episodesListRef.current?.[0].childNodes.forEach((e, i) => {
        if (i + 1 < Number(indexEpisode)) {
          if ((e as HTMLElement).innerText.includes("E-SP")) retard++;
        }
      });

      const saison = localStorage.getItem(`${AnimeInfo.anime?.anime}--saison`);

      const numberEpisode =
        Number(allIndex?.[saison ?? 0]) + Number(indexEpisode) - retard;

      const title =
        names?.find(
          ({ index }: { index: string }) => index === numberEpisode.toString(),
        )?.name || "Episode";

      const url = lecteur[Number(indexEpisode) - 1];

      updateAnime((currentState) => ({
        ...currentState,
        video: url,
        episodeTitle: (
          <>
            <span>
              {numberEpisode}{" "}
              {saison === "1" ? "" : `(${Number(indexEpisode) - retard})`}
            </span>{" "}
            :{" "}
            <span ref={episodeTitleRef} className="text-white">
              {title}
            </span>
          </>
        ),
      }));

      localStorage.setItem(
        `${AnimeInfo.anime?.anime}--episode`,
        indexEpisode.toString(),
      );

      localStorage.removeItem(`${AnimeInfo.anime?.anime}--e-sp`);
    }
  } else {
    const numberEpisode =
      Number(
        allIndex?.[
          localStorage.getItem(`${AnimeInfo.anime?.anime}--saison`) ?? 0
        ],
      ) + Number(indexEpisode);

    const url = lecteur[Number(indexEpisode) - 1];

    const episodeTitle =
      names?.find(
        ({ index }: { index: string }) => index === numberEpisode.toString(),
      )?.name || "Episode";

    updateAnime((currentState) => ({
      ...currentState,
      video: url,
      episodeTitle: (
        <>
          <span>
            {numberEpisode} {saison === "1" ? "" : `(${Number(indexEpisode)})`}
          </span>{" "}
          :{" "}
          <span ref={episodeTitleRef} className="text-white">
            {episodeTitle}
          </span>
        </>
      ),
    }));

    localStorage.setItem(
      `${AnimeInfo.anime?.anime}--episode`,
      indexEpisode.toString(),
    );
    localStorage.removeItem(`${AnimeInfo.anime?.anime}--e-sp`);
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
  const newEpisodeIndex =
    Number(localStorage.getItem(`${AnimeInfo.anime?.anime}--episode`)) + 1;

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
  const newEpisodeIndex =
    Number(localStorage.getItem(`${AnimeInfo.anime?.anime}--episode`)) - 1;

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
