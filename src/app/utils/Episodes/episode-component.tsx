import { MutableRefObject, RefObject, useCallback } from "react";
import { Change } from "./episode-manager";
import { Anime } from "@/typings/types";

interface EpisodeComponentProps {
  namesRef: MutableRefObject<HTMLSpanElement[]>;

  episodeIndex: number;
  episodeNumber: string | number;
  episodeTitle?: string;

  episodeSpecial: boolean;
  id: string;

  lecteur: string[];

  updateAnime: (
    newData:
      | Partial<Anime.AnimeEpisodesProps>
      | ((
          prevState: Anime.AnimeEpisodesProps,
        ) => Partial<Anime.AnimeEpisodesProps>),
  ) => void;

  AnimeInfo: Anime.AnimeEpisodesProps;

  containerRef: RefObject<HTMLElement>;
  episodeTitleRef: RefObject<HTMLSpanElement>;
  episodesListRef: RefObject<HTMLElement[]>;
}

export default function EpisodeComponent({
  namesRef,
  episodeIndex,
  episodeNumber,
  episodeTitle,
  episodeSpecial,
  id,
  lecteur,
  updateAnime,
  AnimeInfo,
  containerRef,
  episodeTitleRef,
  episodesListRef,
}: EpisodeComponentProps) {
  const handleEpisode = useCallback(() => {
    Change(
      id,
      lecteur,
      updateAnime,
      AnimeInfo,
      containerRef,
      episodeTitleRef,
      episodesListRef,
    );
  }, [lecteur]);

  return (
    <li
      className="group flex cursor-pointer border-b border-neutral-700 py-2 text-left *:transition-all last:border-0 hover:text-main"
      data-id={id}
      onClick={handleEpisode}
    >
      <p className="*:font-normal">
        <span className="text-white transition-all group-hover:text-main">
          {!episodeSpecial ? "E" : ""}
          {episodeNumber} {!episodeSpecial && episodeTitle ? "-" : ""}{" "}
        </span>

        <span
          className="text-white transition-all group-hover:text-main"
          ref={(el) => {
            if (!episodeSpecial && el) {
              namesRef.current[episodeIndex - 1] = el;
            }
          }}
        >
          {episodeTitle}
        </span>
      </p>
    </li>
  );
}
