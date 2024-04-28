import Image from "next/image";

import { getLecteur } from "@/app/lib/";
import { Anime } from "@/typings/types";

export function getFilms(
  Anime: Anime.AnimeFilmsProps,

  updateAnime: (
    newData:
      | Partial<Anime.AnimeFilmsProps>
      | ((prevState: Anime.AnimeFilmsProps) => Partial<Anime.AnimeFilmsProps>),
  ) => void,
) {
  let LecteursFilms: string[] = [];
  const Lecteurs = getLecteur();

  const filmsNodes: Anime.FilmNodes[] = [];

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

      filmsNodes.push({
        element: (
          <>
            <div className="flex-col overflow-hidden rounded-md text-center">
              <Image
                src={names[i].image()}
                id={i.toString()}
                alt="poster de film"
                className="h-36 min-h-36 w-24 min-w-24 rounded-md transition-transform group-hover:scale-105 md:h-44 md:max-h-44 md:w-32 md:min-w-32"
              />
            </div>

            <p className="text-sm md:text-base">{names[i].name}</p>
          </>
        ),
        url,
        id,
      });
    }
  }

  updateAnime((currentState) => ({
    ...currentState,
    films: filmsNodes,
  }));
}
