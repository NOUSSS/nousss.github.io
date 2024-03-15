import { LecteurReturnType } from "@/typings/types";

export const getLecteur = (): LecteurReturnType => {
  if (typeof window.epsAS === "undefined") {
    if (window.eps1 !== undefined) {
      for (const str of window.eps1) {
        if (str.includes("sibnet"))
          return {
            eps1: window.eps1,
          };
      }
    }

    if (window.eps2 !== undefined) {
      for (const str of window.eps2) {
        if (str.includes("sibnet"))
          return {
            eps2: window.eps2,
            eps1: window.eps1,
          };
      }
    }

    return {
      eps1: window.eps1,
    };
  } else {
    const lecteursExt: LecteurReturnType = {};

    if (window.eps1 !== undefined) {
      for (const str of window.eps1) {
        if (str.includes("sibnet")) lecteursExt["eps1"] = window.eps1;
      }
    }

    if (window.eps2 !== undefined) {
      for (const str of window.eps2) {
        if (str.includes("sibnet")) lecteursExt["eps2"] = window.eps2;
      }
    }

    if (
      Object.keys(lecteursExt).length === 0 ||
      (lecteursExt.eps2 && !lecteursExt.eps1)
    )
      lecteursExt["eps1"] = window.eps1;

    const lecteurs = { epsAS: window.epsAS, ...lecteursExt };

    return lecteurs;
  }
};
