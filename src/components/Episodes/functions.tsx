import { ANIMES_OPTIONS } from '../constants';
import { downloadText } from './utils';

export function Change(
  indexEpisode: number | string,
  lecteur: string[],
  setVideo: any,
  setEpisodeTitle: any,
  setDownloadText: any
): void {
  const currentAnime = window.localStorage.getItem('anime')!;

  const options = ANIMES_OPTIONS.find(
    ({ anime }) => anime === currentAnime
  )!.options;

  const { allIndex, horsSeries, names } = options.EPISODES_OPTIONS;

  const isHorsSerie = horsSeries.find(
    ({ saison }) =>
      saison === window.localStorage.getItem(`${currentAnime}--saison`)
  );

  if (isHorsSerie) {
    if (isHorsSerie.hs.includes(Number(indexEpisode) - 1)) {
      let esp = '';

      document.querySelectorAll('p').forEach((e) => {
        if (e.dataset?.id === indexEpisode) {
          esp = e.id.match(/[0-9]/g)!.join('');
        }
      });

      const url = lecteur[Number(indexEpisode) - 1];

      downloadText(url, setDownloadText);

      setVideo(url);
      setEpisodeTitle(<span className="episodeNumber">E-SP{esp}</span>);

      window.localStorage.setItem(
        `${currentAnime}--episode`,
        String(indexEpisode)
      );

      window.localStorage.setItem(
        `${currentAnime}--episodeSpecial`,
        `E-SP${esp}`
      );
    } else {
      let retard = 0;

      document.querySelectorAll('.list-episodes').forEach((e, i) => {
        if (i + 1 < Number(indexEpisode)) {
          if (e.id.includes('E-SP')) retard++;
        }
      });

      const saison = window.localStorage.getItem(`${currentAnime}--saison`);

      const numberEpisode =
        Number(allIndex[saison ?? 0]) + Number(indexEpisode) - retard;

      const title =
        names.find(({ index }) => index === String(numberEpisode))?.name ||
        'Episode';

      const url = lecteur[Number(indexEpisode) - 1];

      downloadText(url, setDownloadText);

      setVideo(url);
      setEpisodeTitle(
        <>
          <span className="episodeNumber">{numberEpisode}</span> : {title}
        </>
      );

      window.localStorage.setItem(
        `${currentAnime}--episode`,
        String(indexEpisode)
      );
      window.localStorage.removeItem('episodeSpecial');
    }
  } else {
    const numberEpisode =
      Number(
        allIndex[window.localStorage.getItem(`${currentAnime}--saison`) ?? 0]
      ) + Number(indexEpisode);

    const url = lecteur[Number(indexEpisode) - 1];

    downloadText(url, setDownloadText);

    const episodeTitle =
      names.find(({ index }) => index === String(numberEpisode))?.name ||
      'Episode';

    setVideo(url);

    setEpisodeTitle(
      <>
        <span className="episodeNumber">{numberEpisode}</span> : {episodeTitle}
      </>
    );

    window.localStorage.setItem(
      `${currentAnime}--episode`,
      String(indexEpisode)
    );
    window.localStorage.removeItem('episodeSpecial');
  }

  window.scrollTo({ top: 332, behavior: 'smooth' });
}

export function NextEpisode(
  lecteur: string[],
  setVideo: any,
  setEpisodeTitle: any,
  setDownloadText: any
) {
  const currentAnime = window.localStorage.getItem('anime');

  const newEpisodeIndex =
    Number(window.localStorage.getItem(`${currentAnime}--episode`)) + 1;

  if (newEpisodeIndex - 1 === lecteur.length) return;
  else {
    Change(
      newEpisodeIndex,
      lecteur,
      setVideo,
      setEpisodeTitle,
      setDownloadText
    );
  }
}

export function PrevEpisode(
  lecteur: string[],
  setVideo: any,
  setEpisodeTitle: any,
  setDownloadText: any
) {
  const currentAnime = window.localStorage.getItem('anime');

  const newEpisodeIndex =
    Number(window.localStorage.getItem(`${currentAnime}--episode`)) - 1;

  if (newEpisodeIndex < 1) return;
  else {
    Change(
      newEpisodeIndex,
      lecteur,
      setVideo,
      setEpisodeTitle,
      setDownloadText
    );
  }
}
