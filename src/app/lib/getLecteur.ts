import { Anime } from "@/typings/types";

const contains = (episodes: string[], query: string): boolean =>
  episodes?.[0].includes(query) ?? false;

export const getLecteur = (): Anime.LecteurReturnType => {
  const eps = ["eps1", "eps2", "eps3", "eps4"];

  const { vkEps, sibnetEps, otherEps } = eps.reduce(
    (acc, cur) => {
      const value = window[cur];

      if (value && contains(value, "vk")) {
        acc.vidmolyEps[cur] = value;
      } else if (value && contains(value, "sibnet")) {
        acc.sibnetEps[cur] = value;
      } else if (value && !contains(value, "myvi")) {
        acc.otherEps[cur] = value;
      }

      return acc;
    },
    {
      vkEps: {} as Anime.LecteurReturnType,
      sibnetEps: {} as Anime.LecteurReturnType,
      otherEps: {} as Anime.LecteurReturnType,
    },
  );

  const orderedEps = { ...vkEps, ...sibnetEps, ...otherEps };

  return orderedEps;
};
