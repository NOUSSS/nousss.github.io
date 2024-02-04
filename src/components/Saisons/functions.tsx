import { obj } from './saisons-names';
import { ImageKey, getImage } from './images';
import { EPISODES_OPTIONS } from '../constants';

const { allIndex } = EPISODES_OPTIONS;

export function getSaisons() {
  const saisons = [];

  for (let i = 1 as ImageKey; i < Object.keys(obj).length + 1; i++) {
    const intervalEpisodes = `${allIndex[i] + 1} - ${
      i < Object.keys(obj).length ? allIndex[i + 1] : '?'
    }`;

    saisons.push({
      id: `${obj[i].name}|${obj[i].aliases?.join(', ')} ${intervalEpisodes}`,
      element: (
        <>
          <img className="poster-saison" src={getImage(i)} id={String(i)} />
          <p className="text--saisons">
            <span>{obj[i].name}</span> ({intervalEpisodes})
          </p>
        </>
      ),
    });
  }

  return saisons;
}
