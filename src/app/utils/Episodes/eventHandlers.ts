import React from "react";

import { Change, NextEpisode, PrevEpisode } from "./episodeManager";
import { formatName } from "@/app/lib/formatName";

type EventHandler = (() => void) | null;

const eventHandlers = {
  episodes: [] as EventHandler[],

  nextButton: null as EventHandler,
  prevButton: null as EventHandler,
};

export function removeClickEvents(): void {
  const episodes = document.querySelectorAll(".list-episodes");

  episodes.forEach((episode, index) => {
    const handler = eventHandlers.episodes[index];

    if (typeof handler === "function")
      episode.removeEventListener("click", handler);
  });

  const nextButton = document.querySelector(".nextButton");

  if (nextButton && typeof eventHandlers.nextButton === "function")
    nextButton.removeEventListener("click", eventHandlers.nextButton);

  const prevButton = document.querySelector(".prevButton");

  if (prevButton && typeof eventHandlers.prevButton === "function")
    prevButton.removeEventListener("click", eventHandlers.prevButton);

  eventHandlers.episodes = [];

  eventHandlers.nextButton = null;
  eventHandlers.prevButton = null;
}

export function clickEvents(
  lecteur: string[],

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,

  currentAnime: string
): void {
  removeClickEvents();

  const episodes = document.querySelectorAll(".list-episodes");

  episodes.forEach((episode, index) => {
    const handler = () => {
      const episodeId = (episode as HTMLElement).dataset.id;

      episodes.forEach((ep) => ep.classList.remove("select"));
      episode.classList.add("select");

      Change(episodeId!, lecteur, setVideo, setTitle, formatName(currentAnime));
    };

    episode.addEventListener("click", handler);
    eventHandlers.episodes[index] = handler;
  });

  const nextButton = document.querySelector(".nextButton");

  if (nextButton) {
    const nextHandler = () =>
      NextEpisode(lecteur, setVideo, setTitle, formatName(currentAnime));

    nextButton.addEventListener("click", nextHandler);
    eventHandlers.nextButton = nextHandler;
  }

  const prevButton = document.querySelector(".prevButton");

  if (prevButton) {
    const prevHandler = () =>
      PrevEpisode(lecteur, setVideo, setTitle, formatName(currentAnime));

    prevButton.addEventListener("click", prevHandler);
    eventHandlers.prevButton = prevHandler;
  }
}