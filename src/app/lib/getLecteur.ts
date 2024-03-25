import { LecteurReturnType } from "@/typings/types";

interface WindowKeys {
  [key: string]: string[];
}

const containsMyvi = (episodes?: string[]): boolean =>
  episodes?.[0].includes("myvi") ?? false;

const containsVidmoly = (episodes?: string[]): boolean =>
  episodes?.some((episode) => episode.includes("vidmoly")) ?? false;

export const getLecteur = (): LecteurReturnType => {
  const eps = ["eps1", "eps2", "eps3", "eps4"];

  const { vidmolyEps, otherEps } = eps.reduce(
    (acc, cur) => {
      const value = (window as unknown as WindowKeys)[cur];

      if (value && containsVidmoly(value)) {
        acc.vidmolyEps[cur] = value;
      } else if (value && !containsMyvi(value)) {
        acc.otherEps[cur] = value;
      }

      return acc;
    },
    { vidmolyEps: {} as LecteurReturnType, otherEps: {} as LecteurReturnType },
  );

  const orderedEps = { ...vidmolyEps, ...otherEps };

  return orderedEps;
};
