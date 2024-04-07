export const getTailleChapitres = (): number => {
  let tailleChapitres = 0;
  for (let i = 1; window[`eps${i}`] !== undefined; i++) tailleChapitres++;

  return tailleChapitres;
};
