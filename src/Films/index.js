window.onload = getFilms;

function getFilms() {
  const divVideos = document.getElementsByClassName("films")[0];
  const length = 8;

  for (let i = 1; i < length; i++) {
    console.log(i);
    let url;

    i > 10
      ? (url = `https://14.mugiwara.xyz/op/films/one-piece-film${i}.mp4`)
      : (url = `https://14.mugiwara.xyz/op/films/hd/one-piece-film${i}.mp4`);

    divVideos.innerHTML += `<img src="src/Assets/Films/${i}.jpg" />`;
  }
}

const obj = {
  1: "One Piece - Le film.",
  2: "",
};
