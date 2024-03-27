import { ANIMES } from "@/animes/constants";
import { RefObject } from "react";

export async function appearVideo(
  id: string,

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,

  currentAnime: string,
  containerRef: RefObject<HTMLElement>,
) {
  const { names } =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase(),
    )?.options.FILM_OPTIONS || {};

  const lang = localStorage.getItem(`${currentAnime}--lang`);

  window.scrollTo({
    top: containerRef.current?.offsetTop,
    behavior: "smooth",
  });

  const [url, index] = id.split(" ");

  localStorage.setItem(`${currentAnime}--currentFilm`, index);

  setTitle(
    <>
      <span>{names![index].name}</span> [
      <span style={{ color: "white" }}>{lang?.toUpperCase()}</span>]
    </>,
  );

  setVideo(url);

  return url;
}
