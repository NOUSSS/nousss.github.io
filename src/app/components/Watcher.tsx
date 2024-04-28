import { RefObject, useRef } from "react";
import { Anime } from "@/typings/types";
import { getHostname } from "../lib/";

import Select from "./Select";
import clearCache from "../cache/ClearCache";
import Link from "next/link";

interface WatcherProps {
  video: string;
  lang: string;
  lecteur: string;
  lecteurs: Anime.LecteurReturnType;
  anime: string;
  context?: string;
  episode?: string;

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
  const placeholderLangRef = useRef<HTMLParagraphElement>(null);
  const placeholderLecteurRef = useRef<HTMLParagraphElement>(null);

  return (
    <>
      <div className="mt-12 flex gap-11 max-lg:flex-col max-lg:gap-2">
        <Select
          placeholder="Changer de langue"
          placeholderRef={placeholderLangRef}
          items={[
            {
              name: "VostFR",
              value: "vostfr",
              disabled: lang === "vostfr" ? true : false,
            },
            {
              name: "VF",
              value: "vf",
              disabled: lang === "vostfr" ? false : true,
            },
          ]}
          onSelect={(value) => {
            clearCache();

            if (updateAnime)
              updateAnime((currentState) => ({
                ...currentState,
                lang: value[0].value,
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

                window.localStorage.setItem(
                  `${anime}-${context}--lecteur`,
                  items[0].value,
                );
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
        <iframe className="video" src={video}></iframe>
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
