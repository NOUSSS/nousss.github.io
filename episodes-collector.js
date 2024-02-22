const episodes = [];

document.querySelectorAll('ul li').forEach((element) => {
  if (
    element.innerText.includes('Épisode') ||
    element.innerText.includes('Episode')
  ) {
    episodes.push(
      convertString(
        element.innerText
          .replace('1er', '1')
          .replace('. ', ' : ')
          .replace('Episode', 'Épisode')
      )
    );
  }
});

function convertString(text) {
  const episode = text.match(/Épisode (\d+) : (.+) \(\d+ .+\)/);

  if (episode) {
    return {
      index: episode[0x1],
      name: episode[0x2].trim(),
    };
  }
}

console.log(JSON.stringify(episodes));
