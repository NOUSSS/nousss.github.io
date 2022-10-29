setInterval(() => {
  const letter = $(".wgreen")[0];
  const input = $("#certificateInput")[0];

  let isMaj = false;
  if (letter.innerText.toUpperCase() === letter.innerText) isMaj = true;

  if (isMaj)
    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "shift",
      })
    );

  input.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: letter.innerText,
    })
  );
}, 150);
