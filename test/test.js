const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

function getEp({ saga = null }) {
  const url = `https://anime-sama.fr/anime/one-piece/saga${saga}/episodes.js?filever=20926`;
  fetch(url)
    .then((res) =>
      res
        .split("\r")
        .filter((str) => !str.startsWith("//"))
        .json()
    )
    .then((res) => console.log(res));
}

getEp({
  saga: 3,
});
