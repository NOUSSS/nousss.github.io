export const clear = (div: HTMLCollectionOf<any>): void => {
  Array.from([...div]).map((_, i) => (div[i].style.display = ''));
};

export function isIOS(): boolean {
  if (!window || !navigator) return false;
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor))
    return true;

  return false;
}

export const getURLFilm = (index: number): string => {
  return (window as { [key: string]: any })['eps1'][index];
};

export const toUpper = (param: string): string =>
  param[0].toUpperCase() + param.slice(1);
