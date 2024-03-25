import { LecteurReturnType } from "@/typings/types";

interface WindowKeys {
  [key: string]: string[];
}

const containsMyvi = (episodes?: string[]): boolean =>
  episodes?.[0]?.includes("myvi") ?? false;

export const getLecteur = (): LecteurReturnType => {
  const eps = ["eps1", "eps2", "eps3", "eps4"];

  const windowProps = eps.reduce((acc, cur) => {
    const value = (window as unknown as WindowKeys)[cur];

    if (value && !containsMyvi(value)) {
      acc[cur] = value;
    }

    return acc;
  }, {} as LecteurReturnType);

  return windowProps;
};
