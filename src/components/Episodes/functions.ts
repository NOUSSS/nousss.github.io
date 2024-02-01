export function NextSaga(): void {
  const reg = /S(\d+)/;

  if (window.localStorage.getItem('saison') === '11') return;

  const url = window.location.hash;
  const newSaison = String(Number(window.localStorage.getItem('saison')) + 1);

  window.localStorage.setItem('saison', newSaison);

  if (url.match(reg)) {
    const newHash = `#S${newSaison}/Episodes`;

    window.localStorage.setItem('episode', '1');
    window.location.hash = newHash;

    window.location.reload();
  }
}

export function PrevSaga(): void {
  const reg = /S(\d+)/;

  if (window.localStorage.getItem('saison') === '1') return;

  const url = window.location.hash;

  const newSaison = String(Number(window.localStorage.getItem('saison')) - 1);

  window.localStorage.setItem('saison', newSaison);

  if (url.match(reg)) {
    const newHash = `#S${newSaison}/Episodes`;

    window.localStorage.setItem('episode', '1');
    window.location.hash = newHash;

    window.location.reload();
  }
}
