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

  filmPage: boolean,
) {
  let LecteursFilms: string[] = [];
  const Lecteurs = getLecteur();

  const filmsNodes: Anime.FilmNodes[] = [];

  if (Anime?.lecteur && filmPage) {
    LecteursFilms = Lecteurs[Anime?.lecteur]!;
  } else if (!Anime?.lecteur && filmPage) {
    const lecteur = Object.keys(Lecteurs)[0];

    updateAnime((currentState) => ({ ...currentState, lecteur }));

    LecteursFilms = Lecteurs[lecteur]!;
  }

  const names = Anime.anime?.options.FILM_OPTIONS?.names
    ? Object.values(Anime.anime.options.FILM_OPTIONS.names)
    : undefined;

  console.log(names);
  console.log(filmPage);

  if ((names && LecteursFilms?.length > 0) || (names && !filmPage)) {
    for (let i = 0; i < Object.keys(names).length; i++) {
      const url = LecteursFilms?.[i];
      const id = `${names[i].name}|${
        typeof names[i].aliases === "undefined"
          ? ""
          : names[i].aliases?.join(", ")
      }`;

      filmsNodes.push({
        element: (
          <div className="transition-transform hover:scale-[.97]">
            <Image
              src={names[i].image()}
              id={i.toString()}
              alt="poster de film"
              className="aspect-[2/3] w-28 md:w-36"
            />

            <p className="relative top-1 text-sm md:text-base">
              {names[i].name}
            </p>
          </div>
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
