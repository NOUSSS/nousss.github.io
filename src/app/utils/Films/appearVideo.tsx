import { ANIMES } from "@/animes/constants";

export async function appearVideo(
  id: string,

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,

  currentAnime: string,
) {
  const { names } =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase(),
    )?.options.FILM_OPTIONS || {};

  const lang = localStorage.getItem(`${currentAnime}--lang`);

  window.scrollTo({
    top: (document.querySelector(".container") as HTMLElement).offsetTop,
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
