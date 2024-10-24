import { Anime } from "@/typings/types";

const contains = (episodes: string[], query: string): boolean =>
  episodes?.[0].includes(query) ?? false;

export default function getLecteur(): Anime.LecteurReturnType {
  const eps = ["eps1", "eps2", "eps3", "eps4", "eps5", "eps6"];

  const { vkEps, sibnetEps, otherEps } = eps.reduce(
    (acc, cur) => {
      const value = window[cur];

      if (value && contains(value, "sibnet")) {
        acc.sibnetEps[cur] = value;
      } else if (value && contains(value, "vk")) {
        acc.vkEps[cur] = value;
      } else if (value && !contains(value, "myvi")) {
        acc.otherEps[cur] = value;
      }

      return acc;
    },
    {
      sibnetEps: {} as Anime.LecteurReturnType,
      vkEps: {} as Anime.LecteurReturnType,
      otherEps: {} as Anime.LecteurReturnType,
    },
  );

  const orderedEps = { ...sibnetEps, ...vkEps, ...otherEps };

  return orderedEps;
}
