let data;

window.onload = async function () {
  const number = Number(getParam("id"));
  const title = getParam("title");

  console.log(number);

  const text = document.getElementsByClassName("firstText")[0];

  text.innerHTML = title;

  const divEp = document.querySelector(".episodes");

  const Http = new XMLHttpRequest();

  Http.open("GET", "https://api.api-onepiece.com/episodes");
  Http.send();

  Http.onreadystatechange = function () {
    let res = JSON.parse(Http.responseText);
    const data = res.filter((e) => e.saga?.id === number).map((e) => e?.title);

    for (const d of data) {
      if (d) divEp.innerHTML += `<p>${d}</p>`;
    }
  };
};

function getParam(query) {
  var rx = new RegExp("[?&]" + query + "=([^&]+).*$");
  var returnVal = window.location.search.match(rx);
  return returnVal === null ? "" : decodeURI(returnVal[1]);
}
