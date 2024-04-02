import { LecteurReturnType } from "@/typings/types";

interface WindowKeys {
  [key: string]: string[];
}

const contains = (episodes: string[], query: string): boolean =>
  episodes?.[0].includes(query) ?? false;

export const getLecteur = (): LecteurReturnType => {
  const eps = ["eps1", "eps2", "eps3", "eps4"];

  const { vidmolyEps, sibnetEps, otherEps } = eps.reduce(
    (acc, cur) => {
      const value = (window as unknown as WindowKeys)[cur];

      if (value && contains(value, "vidmoly")) {
        acc.vidmolyEps[cur] = value;
      } else if (value && contains(value, "sibnet")) {
        acc.sibnetEps[cur] = value;
      } else if (value && !contains(value, "myvi")) {
        acc.otherEps[cur] = value;
      }

      return acc;
    },
    {
      vidmolyEps: {} as LecteurReturnType,
      sibnetEps: {} as LecteurReturnType,
      otherEps: {} as LecteurReturnType,
    },
  );

  const orderedEps = { ...vidmolyEps, ...sibnetEps, ...otherEps };

  return orderedEps;
};
