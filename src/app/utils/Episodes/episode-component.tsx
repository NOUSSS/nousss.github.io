import { MutableRefObject, RefObject, useCallback } from "react";
import { Change } from "./episode-manager";
import { AnimeEpisodesProps } from "@/typings/types";

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
      | Partial<AnimeEpisodesProps>
      | ((prevState: AnimeEpisodesProps) => Partial<AnimeEpisodesProps>),
  ) => void;

  AnimeInfo: AnimeEpisodesProps;

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
      className="group cursor-pointer border-b border-neutral-700 p-1.5 text-left last:border-0"
      data-id={id}
      key={episodeNumber.toString() + episodeIndex.toString()}
      onClick={handleEpisode}
    >
      <span className="transition-all duration-200 ease-out group-hover:text-white">
        {episodeNumber}{" "}
        {AnimeInfo?.saison === "1" || episodeSpecial ? "" : `(${episodeIndex})`}
      </span>{" "}
      :{" "}
      <span
        ref={
          episodeSpecial
            ? null
            : (el) => (namesRef.current[episodeIndex - 1] = el!)
        }
        className="text-white transition-all duration-200 ease-out hover:text-main group-hover:text-main"
      >
        {episodeTitle}
      </span>
    </li>
  );
}