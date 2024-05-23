export const getTailleChapitres = (): number => {
  let i = 0;
  for (; window[`eps${i + 1}`] !== undefined; i++);

  return i;
};
