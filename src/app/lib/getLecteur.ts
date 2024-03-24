import { LecteurReturnType } from "@/typings/types";

const containsMyvi = (episodes?: string[]): boolean => {
  return episodes ? episodes[0].includes("myvi") : false;
};

export const getLecteur = (): LecteurReturnType => {
  const { eps1, eps2, eps3, epsAS } = window;

  let lecteursExt: LecteurReturnType = {};

  if (eps1 !== undefined && !containsMyvi(eps1)) lecteursExt["eps1"] = eps1;
  if (eps2 !== undefined && !containsMyvi(eps2)) lecteursExt["eps2"] = eps2;
  if (eps3 !== undefined && !containsMyvi(eps2)) lecteursExt["eps3"] = eps3;

  if (epsAS !== undefined) {
    lecteursExt = { ...lecteursExt };
  }

  return lecteursExt;
};
