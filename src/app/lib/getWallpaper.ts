import { getAnime } from "./getAnime";

export const getWallpaper = (animeName: string) => {
  const anime = getAnime(animeName);
  const images = anime?.options.saisons || anime?.options.FILM_OPTIONS?.names;

  if (images) {
    const values = Object.values(images);

    return values[values.length - 1].image();
  }
};
