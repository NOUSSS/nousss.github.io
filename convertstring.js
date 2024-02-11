const episodes = [];

document.querySelectorAll('SELECTOR FOR EPISODES').forEach((e) => {
  if (e.innerText.includes('Épisode')) {
    episodes.push(convertString(e.innerText.replace('1er', '1')));
  }
});

function convertString(episodeStr) {
  const regex = /Épisode (\d+) : (.+) \(\d+ .+\)/;
  const matches = episodeStr.match(regex);

  if (matches) {
    return {
      index: matches[1],
      name: matches[2].trim(),
    };
  }
}

console.log(JSON.stringify(episodes));
