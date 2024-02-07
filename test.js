const episodes = [];

Array.from([...document.querySelectorAll('a')]).map((e) => {
  if (e.title && e.title.includes('Épisode ')) {
    console.log(e.title);
    episodes.push({
      index: e.title.match(/[0-9]/g).join(''),
      name: e.innerText,
    });
  }
});
