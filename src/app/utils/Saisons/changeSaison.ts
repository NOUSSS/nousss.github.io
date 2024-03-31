export function changeSaison(index: string, currentAnime: string) {
  if (localStorage.getItem(`${currentAnime}--saison`) !== index) {
    for (const key of Object.keys(localStorage)) {
      if (
        key.includes(currentAnime) &&
        key.includes("--lang") &&
        key.match(/[0-9]/g)
      ) {
        localStorage.removeItem(key);
      }
    }

    localStorage.setItem(`${currentAnime}--episode`, "1");
  }

  localStorage.setItem(`${currentAnime}--saison`, index);
}
