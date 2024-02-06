import { ANIMES_OPTIONS } from '../constants';

export function getSaisons() {
  const currentAnime = window.localStorage.getItem('anime')!;

  const options = ANIMES_OPTIONS.find(
    ({ anime }) => anime === currentAnime
  )!.options;

  const lastEpisode =
    options.EPISODES_OPTIONS.names[options.EPISODES_OPTIONS.names.length - 1]
      ?.index || '?';

  const { allIndex } = options.EPISODES_OPTIONS;
  const { saisons } = options;

  const saisonsList = [];

  for (let i: number = 1; i < Object.keys(saisons).length + 1; i++) {
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
            <span>{saisons[i].name}</span> ({intervalEpisodes})
          </p>
        </>
      ),
    });
  }

  return saisonsList;
}
