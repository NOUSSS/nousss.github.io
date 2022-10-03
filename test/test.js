const open = require("open");

function getEp(saga, num) {
  let url;

  if (Number(num) <= 206 && Number(saga) <= 3) {
    url = `https://16.mugiwara.xyz/op/saga-${saga}/hd/op-${String(num).padStart(2, "0")}.mp4`;
  } else if (Number(num) >= 207 && Number(saga) >= 4 && Number(saga) >= 7) {
    url = `https://16.mugiwara.xyz/op/saga-${saga}/hd/${num}.mp4`;
  }
  return open(url);
}

getEp("3", "200");
