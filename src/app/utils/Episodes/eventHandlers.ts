import React, { RefObject } from "react";

import { Change } from "./episodeManager";
import { AnimeEpisodesProps } from "@/typings/types";

type EventHandler = (() => void) | null;

const eventHandlers = {
  episodes: [] as EventHandler[],
};

export function removeClickEvents(episodesRef: RefObject<HTMLElement[]>): void {
  episodesRef.current?.[0].childNodes.forEach((episode, index) => {
    const handler = eventHandlers.episodes[index];

    if (typeof handler === "function")
      episode.removeEventListener("click", handler);
  });

  eventHandlers.episodes = [];
}

export function clickEvents(
  lecteur: string[],

  setAnimeInfo: React.Dispatch<React.SetStateAction<AnimeEpisodesProps | null>>,
  AnimeInfo: AnimeEpisodesProps,

  episodesRef: RefObject<HTMLElement[]>,
  containerRef: RefObject<HTMLElement>,
  episodeTitleRef: RefObject<HTMLSpanElement>,
): void {
  removeClickEvents(episodesRef);

  episodesRef.current?.[0].childNodes.forEach((e, index) => {
    const episode = e as HTMLElement;

    const handler = () => {
      const episodeId = episode.dataset.id;

      episodesRef.current?.[0].childNodes.forEach((ep) =>
        (ep as HTMLElement).classList.remove("select"),
      );

      episode.classList.add("select");

      Change(
        episodeId!,
        lecteur,
        setAnimeInfo,
        AnimeInfo,
        episodesRef,
        containerRef,
        episodeTitleRef,
      );
    };

    episode.addEventListener("click", handler);
    eventHandlers.episodes[index] = handler;
  });
}
