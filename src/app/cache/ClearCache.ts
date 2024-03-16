export default function ClearCache() {
  let index = 1;

  if (typeof window.epsAS !== "undefined") {
    (window.epsAS as string[] | undefined) = undefined;
  }

  while (true) {
    if (typeof window[`eps${index}`] !== "undefined") {
      (window[`eps${index}`] as string[] | undefined) = undefined;
    } else {
      break;
    }

    index++;
  }
}
