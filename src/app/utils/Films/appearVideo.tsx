import { ANIMES } from "@/animes/constants";
import { AnimeFilmsProps } from "@/typings/types";
import { RefObject } from "react";

export async function appearVideo(
  id: string,

  Anime: AnimeFilmsProps,

  updateAnime: (
    newData:
      | Partial<AnimeFilmsProps>
      | ((prevState: AnimeFilmsProps) => Partial<AnimeFilmsProps>),
  ) => void,

  containerRef: RefObject<HTMLElement>,
) {
  const { names } =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === Anime?.anime?.anime.toLowerCase(),
    )?.options.FILM_OPTIONS || {};

  const lang = localStorage.getItem(`${Anime?.anime?.anime}--lang`);

  window.scrollTo({
    top: containerRef.current?.offsetTop,
    behavior: "smooth",
  });

  const [url, index] = id.split(" ");

  localStorage.setItem(`${Anime?.anime?.anime}--currentFilm`, index);

  updateAnime((currentState) => ({
    ...currentState,
    video: url,
    filmTitle: (
      <>
        <span>{names![index].name}</span> [
        <span style={{ color: "white" }}>{lang?.toUpperCase()}</span>]
      </>
    ),
  }));

  return url;
}
