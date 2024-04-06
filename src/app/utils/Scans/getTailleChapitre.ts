import { windowKeys } from "@/typings/types";

export const getTailleChapitres = (): number => {
  let tailleChapitres = 0;

  for (
    let i = 1;
    (window as unknown as windowKeys)[`eps${i}`] !== undefined;
    i++
  )
    tailleChapitres++;

  return tailleChapitres;
};
