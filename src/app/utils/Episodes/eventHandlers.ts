import React from "react";

import { Change } from "./episodeManager";
import { formatName } from "@/app/lib/formatName";

type EventHandler = (() => void) | null;

const eventHandlers = {
  episodes: [] as EventHandler[],
};

export function removeClickEvents(): void {
  const episodes = document.querySelectorAll(".list-episodes");

  episodes.forEach((episode, index) => {
    const handler = eventHandlers.episodes[index];

    if (typeof handler === "function")
      episode.removeEventListener("click", handler);
  });

  eventHandlers.episodes = [];
}

export function clickEvents(
  lecteur: string[],

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,

  currentAnime: string,
): void {
  removeClickEvents();

  const episodes = document.querySelectorAll(".list-episodes");

  episodes.forEach((episode, index) => {
    const handler = () => {
      const episodeId = (episode as HTMLElement).dataset.id;

      episodes.forEach((ep) => ep.classList.remove("select"));
      episode.classList.add("select");

      Change(
        episodeId!,
        lecteur,
        setVideo,
        setTitle,
        formatName(currentAnime)!,
      );
    };

    episode.addEventListener("click", handler);
    eventHandlers.episodes[index] = handler;
  });
}
