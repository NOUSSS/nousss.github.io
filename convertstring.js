function convertString(episodeStr) {
  const regex = /Episode (\d+) : (.+) \(\d+ .+\)/;
  const matches = episodeStr.match(regex);

  if (matches) {
    return {
      index: matches[1],
      name: matches[2].trim(),
    };
  }
}
