import { RefObject, useRef } from "react";
import { Anime } from "@/typings/types";
import { getHostname } from "../lib/";

import Select from "./Select";
import clearCache from "../cache/ClearCache";
import Link from "next/link";
import SelectDouble from "./SelectDouble";
import EpisodeData from "../class/episodeData";
import FilmData from "../class/filmData";

interface WatcherProps {
  video: string | undefined;
  lang: string;
  lecteur: string | undefined;
  lecteurs: Anime.LecteurReturnType | undefined;
  anime: string | undefined;
  context?: string | undefined;
  episode?: string | undefined;

  prefix?: boolean;
  name?: boolean;

  updateAnime: (
    newData:
      | Partial<Anime.AnimeEpisodesProps | Anime.AnimeFilmsProps>
      | ((
          prevState: Anime.AnimeEpisodesProps | Anime.AnimeFilmsProps,
        ) => Partial<Anime.AnimeEpisodesProps | Anime.AnimeFilmsProps>),
  ) => void;

  containerRef: RefObject<HTMLDivElement>;
}

export default function Watcher({
  video,
  lang,
  lecteur,
  lecteurs,
  anime,
  context,
  episode,

  name,
  prefix,

  updateAnime,
  containerRef,
}: WatcherProps) {
  const placeholderLecteurRef = useRef<HTMLParagraphElement>(null);

  const StorageEpisodes = new EpisodeData(anime);
  const StorageFilms = new FilmData(anime);

  return (
    <>
      <div className="mt-12 flex gap-11 max-lg:flex-col max-lg:gap-2">
        <SelectDouble
          items={[
            {
              name: "VostFR",
              value: "vostfr",
              defaultValue: lang === "vostfr" ? true : false,
            },
            {
              name: "VF",
              value: "vf",
              defaultValue: lang === "vostfr" ? false : true,
            },
          ]}
          click={(value) => {
            clearCache();

            if (updateAnime)
              updateAnime((currentState) => ({
                ...currentState,
                lang: value,
              }));
          }}
        />

        {lecteurs ? (
          Object.keys(lecteurs).length > 1 ? (
            <Select
              placeholder="Changer de lecteur"
              placeholderRef={placeholderLecteurRef}
              onSelect={(items) => {
                if (updateAnime)
                  updateAnime((currentState) => ({
                    ...currentState,
                    lecteur: items[0].value,
                    currentLecteur: lecteurs?.[items[0].value],
                  }));

                if (context === "Films") {
                  StorageFilms.setLecteur(items[0].value);
                } else {
                  StorageEpisodes.setLecteur(items[0].value);
                }
              }}
              items={Object.keys(lecteurs).map((l, i) => ({
                name: getHostname(Object.values(lecteurs!)[i][0]),
                value: l,
                disabled: lecteur === l ? true : false,
              }))}
            />
          ) : null
        ) : null}
      </div>

      <div ref={containerRef} className="container">
        <iframe className="video" src={video} allowFullScreen></iframe>
        <iframe className="ambiance" src={video}></iframe>
      </div>

      {name && (
        <div className="ml-8 flex w-full flex-col text-left md:ml-0 md:w-auto">
          {anime && context && (
            <Link
              className="text-sm font-normal text-zinc-400 hover:underline sm:text-base"
              href={{
                pathname: "/Saisons",
                query: { anime: anime },
              }}
            >
              {anime} | {context}
            </Link>
          )}

          <p className="text-xl drop-shadow-xl sm:text-2xl">
            {prefix ? "Episode " : ""}
            {episode}
          </p>
        </div>
      )}
    </>
  );
}
