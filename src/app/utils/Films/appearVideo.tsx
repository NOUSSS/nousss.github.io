import { ANIMES } from "@/animes/constants";
import { Anime } from "@/typings/types";
import { RefObject } from "react";

import FilmData from "@/app/class/filmData";

export async function appearVideo(
  id: string,

  AnimeInfo: Anime.AnimeFilmsProps,

  updateAnime: (
    newData:
      | Partial<Anime.AnimeFilmsProps>
      | ((prevState: Anime.AnimeFilmsProps) => Partial<Anime.AnimeFilmsProps>),
  ) => void,

  containerRef: RefObject<HTMLElement>,
) {
  const StorageFilms = new FilmData(AnimeInfo.anime?.anime);

  const { names } =
    ANIMES.find(
      ({ anime }) =>
        anime.toLowerCase() === AnimeInfo?.anime?.anime.toLowerCase(),
    )?.options.FILM_OPTIONS || {};

  window.scrollTo({
    top: containerRef.current?.offsetTop,
    behavior: "smooth",
  });

  const [url, index] = id.split(" ");

  StorageFilms.setFilm(index);

  if (names) {
    updateAnime((currentState) => ({
      ...currentState,
      video: url,
      filmTitle: Object.values(names)[Number(index)].name,
    }));
  }

  return url;
}
