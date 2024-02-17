import { ANIMES } from '../constants';

export function getSaisons() {
  let currentAnime = window.localStorage.getItem('anime');

  const hash = window.location.hash;
  const queryParams = hash.substring(hash.indexOf('?') + 1);

  const urlParams = new URLSearchParams(queryParams);

  const currentAnimeURL = urlParams.get('anime');

  if (!currentAnimeURL) window.location.hash = '/';

  if (!currentAnime) {
    window.localStorage.setItem('anime', currentAnimeURL!);

    currentAnime = window.localStorage.getItem('anime');
  }

  if (
    currentAnimeURL &&
    currentAnimeURL.toLowerCase() !== currentAnime!.toLowerCase()
  ) {
    currentAnime = currentAnimeURL;

    window.localStorage.setItem('anime', currentAnimeURL);
  }

  const options = ANIMES.find(({ anime }) => anime === currentAnime)!.options;

  const lastEpisode =
    options.EPISODES_OPTIONS.names?.[options.EPISODES_OPTIONS?.names.length - 1]
      ?.index || '?';

  const { allIndex } = options.EPISODES_OPTIONS;
  const { saisons } = options;

  const saisonsList = [];

  for (let i = 1; i < Object.keys(saisons).length + 1; i++) {
    const isOAV =
      i === Object.keys(saisons).length && options.EPISODES_OPTIONS.oav;

    const intervalEpisodes = `${allIndex[i] + 1} - ${
      i < Object.keys(saisons).length ? allIndex[i + 1] : lastEpisode
    }`;

    saisonsList.push({
      id: `${saisons[i].name}|${saisons[i].aliases?.join(
        ', '
      )} ${intervalEpisodes}`,
      element: (
        <>
          <img
            className="poster-saison"
            src={saisons[i].image()}
            id={String(i)}
          />
          <p className="text--saisons">
            <span>{saisons[i].name}</span>
            {isOAV ? '' : ' (' + intervalEpisodes + ')'}
          </p>
        </>
      ),
    });
  }

  return saisonsList;
}
