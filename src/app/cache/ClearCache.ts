export default function ClearCache() {
  let index = 1;

  while (true) {
    if (typeof window[`eps${index}`] !== "undefined") {
      (window[`eps${index}`] as string[] | undefined) = undefined;
    } else {
      break;
    }

    index++;
  }
}
