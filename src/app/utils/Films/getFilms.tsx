import Image from "next/image";

import { getLecteur } from "@/app/lib/getLecteur";
import { appearVideo } from "./appearVideo";
import { Anime } from "@/typings/types";
import { RefObject } from "react";

export function getFilms(
  Anime: Anime.AnimeFilmsProps,

  updateAnime: (
    newData:
      | Partial<Anime.AnimeFilmsProps>
      | ((prevState: Anime.AnimeFilmsProps) => Partial<Anime.AnimeFilmsProps>),
  ) => void,

  containerRef: RefObject<HTMLElement>,
) {
  let LecteursFilms: string[] = [];
  const Lecteurs = getLecteur();

  const filmsNodes: React.ReactNode[] = [];

  if (Anime?.lecteur) {
    LecteursFilms = Lecteurs[Anime?.lecteur]!;
  } else {
    const lecteur = Object.keys(Lecteurs)[0];

    updateAnime((currentState) => ({ ...currentState, lecteur }));

    LecteursFilms = Lecteurs[lecteur]!;
  }

  const names = Anime.anime?.options.FILM_OPTIONS?.names
    ? Object.values(Anime.anime.options.FILM_OPTIONS.names)
    : undefined;

  if (names && LecteursFilms?.length > 0) {
    for (let i = 0; i < Object.keys(names).length; i++) {
      const url = LecteursFilms[i];
      const id = `${names[i].name}|${
        typeof names[i].aliases === "undefined"
          ? ""
          : names[i].aliases?.join(", ")
      }`;

      filmsNodes.push(
        <div
          id={id}
          key={id}
          className="group m-8 inline-flex w-20 cursor-pointer flex-col gap-3 overflow-hidden rounded-md"
        >
          <div className="overflow-hidden rounded-md">
            <Image
              className="h-28 min-h-28 rounded-md transition-transform group-hover:scale-105"
              src={names[i].image()}
              id={`${url} ${i}`}
              onClick={() => {
                appearVideo(`${url} ${i}`, Anime, updateAnime, containerRef);
              }}
              alt="poster de film"
            />
          </div>

          <p className="text-sm">{names[i].name}</p>
        </div>,
      );
    }
  }

  updateAnime((currentState) => ({
    ...currentState,
    films: filmsNodes,
  }));
}
