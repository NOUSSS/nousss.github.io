import React from "react";

import { getAnime } from "@/app/lib/getAnime";

export function Change(
  indexEpisode: number | string,
  lecteur: string[],

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setEpisodeTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,

  currentAnime: string,
): void {
  localStorage.removeItem(`${currentAnime}--currentTime`);

  const options = getAnime(currentAnime)!.options;
  const saison = localStorage.getItem(`${currentAnime}--saison`);

  const { allIndex, horsSeries, names } = options.EPISODES_OPTIONS || {};

  const isHorsSerie = horsSeries?.find(
    ({ saison }: { saison: string }) =>
      saison === localStorage.getItem(`${currentAnime}--saison`),
  );

  if (isHorsSerie) {
    if (isHorsSerie.hs.includes(Number(indexEpisode) - 1)) {
      let esp = "";

      document.querySelectorAll("p").forEach((e) => {
        if (e.dataset?.id === indexEpisode) {
          esp = e.id.match(/[0-9]/g)!.join("");
        }
      });

      const url = lecteur[Number(indexEpisode) - 1];

      setVideo(url);
      setEpisodeTitle(<span>E-SP{esp}</span>);

      localStorage.setItem(`${currentAnime}--episode`, indexEpisode.toString());
      localStorage.setItem(`${currentAnime}--e-sp`, `E-SP${esp}`);
    } else {
      let retard = 0;

      document.querySelectorAll(".list-episodes").forEach((e, i) => {
        if (i + 1 < Number(indexEpisode)) {
          if (e.id.includes("E-SP")) retard++;
        }
      });

      const saison = localStorage.getItem(`${currentAnime}--saison`);

      const numberEpisode =
        Number(allIndex?.[saison ?? 0]) + Number(indexEpisode) - retard;

      const title =
        names?.find(
          ({ index }: { index: string }) => index === numberEpisode.toString(),
        )?.name || "Episode";

      const url = lecteur[Number(indexEpisode) - 1];

      setVideo(url);
      setEpisodeTitle(
        <>
          <span>
            {numberEpisode}{" "}
            {saison === "1" ? "" : `(${Number(indexEpisode) - retard})`}
          </span>{" "}
          : <span className="episodeName">{title}</span>
        </>,
      );

      localStorage.setItem(`${currentAnime}--episode`, indexEpisode.toString());
      localStorage.removeItem(`${currentAnime}--e-sp`);
    }
  } else {
    const numberEpisode =
      Number(allIndex?.[localStorage.getItem(`${currentAnime}--saison`) ?? 0]) +
      Number(indexEpisode);

    const url = lecteur[Number(indexEpisode) - 1];

    const episodeTitle =
      names?.find(
        ({ index }: { index: string }) => index === numberEpisode.toString(),
      )?.name || "Episode";

    setVideo(url);

    setEpisodeTitle(
      <>
        <span>
          {numberEpisode} {saison === "1" ? "" : `(${Number(indexEpisode)})`}
        </span>{" "}
        : <span className="episodeName">{episodeTitle}</span>
      </>,
    );

    localStorage.setItem(`${currentAnime}--episode`, indexEpisode.toString());
    localStorage.removeItem(`${currentAnime}--e-sp`);
  }

  window.scrollTo({
    top: (document.querySelector(".container") as HTMLElement).offsetTop,
    behavior: "smooth",
  });
}

export function NextEpisode(
  lecteur: string[],

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setEpisodeTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,

  currentAnime: string,
) {
  const newEpisodeIndex =
    Number(localStorage.getItem(`${currentAnime}--episode`)) + 1;

  Change(newEpisodeIndex, lecteur, setVideo, setEpisodeTitle, currentAnime);
}

export function PrevEpisode(
  lecteur: string[],

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setEpisodeTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,

  currentAnime: string,
) {
  const newEpisodeIndex =
    Number(localStorage.getItem(`${currentAnime}--episode`)) - 1;

  Change(newEpisodeIndex, lecteur, setVideo, setEpisodeTitle, currentAnime);
}
