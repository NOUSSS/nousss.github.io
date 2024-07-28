const blacklist = ["Action", "Aventure"];

export default function relatedCats(arr1: string[], arr2: string[]): boolean {
  let acc = 0;

  for (let item of arr1) {
    if (arr2.includes(item) && !blacklist.includes(item)) {
      acc++;
    }

    if (acc >= 2) {
      return true;
    }
  }

  return false;
}
