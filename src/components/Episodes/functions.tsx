import { EPISODES_OPTIONS } from '../constants';
import { NextSaison, PrevSaison } from './switchSaisons';

const { allIndex, horsSeries } = EPISODES_OPTIONS;

import episodes from './episodes-names';
import { downloadText } from './utils';

export function Change(
  indexEpisode: number | string,
  lecteur: string[],
  setVideo: any,
  setEpisodeTitle: any,
  setDownloadText: any
): void {
  const isHorsSerie = horsSeries.find(
    ({ saison }) => saison === window.localStorage.getItem('saison')
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

      setVideo(
        <iframe
          className="vid"
          width="640"
          height="360"
          src={url}
          allowFullScreen
        ></iframe>
      );

      setEpisodeTitle(<span className="episodeNumber">E-SP{esp}</span>);

      window.localStorage.setItem('episode', String(indexEpisode));
      window.localStorage.setItem('episodeSpecial', `E-SP${esp}`);
    } else {
      let retard = 0;

      document.querySelectorAll('.list-episodes').forEach((e, i) => {
        if (i + 1 < Number(indexEpisode)) {
          if (e.id.includes('E-SP')) retard++;
        }
      });

      const saison = window.localStorage.getItem('saison');

      const numberEpisode =
        Number(allIndex[saison ?? 0]) + Number(indexEpisode) - retard;

      const title = episodes.find(
        ({ index }) => index === String(numberEpisode)
      )!.name;

      const url = lecteur[Number(indexEpisode) - 1];

      downloadText(url, setDownloadText);

      setVideo(
        <iframe
          className="vid"
          width="640"
          height="360"
          src={url}
          allowFullScreen
        ></iframe>
      );

      setEpisodeTitle(
        <>
          <span className="episodeNumber">{numberEpisode}</span> : {title}
        </>
      );

      window.localStorage.setItem('episode', String(indexEpisode));
      window.localStorage.removeItem('episodeSpecial');
    }
  } else {
    const numberEpisode =
      Number(allIndex[window.localStorage.getItem('saison') ?? 0]) +
      Number(indexEpisode);

    const url = lecteur[Number(indexEpisode) - 1];

    downloadText(url, setDownloadText);

    const episodeTitle = episodes.find(
      ({ index }) => index === String(numberEpisode)
    )!.name;

    setVideo(
      <iframe
        className="vid"
        width="640"
        height="360"
        src={url}
        allowFullScreen
      ></iframe>
    );

    setEpisodeTitle(
      <>
        <span className="episodeNumber">{numberEpisode}</span> : {episodeTitle}
      </>
    );

    window.localStorage.setItem('episode', String(indexEpisode));
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
  const newEpisodeIndex = Number(window.localStorage.getItem('episode')) + 1;

  if (newEpisodeIndex - 1 === lecteur.length) {
    if (window.localStorage.getItem('saison') === '11') return;

    window.localStorage.setItem('episode', '1');

    NextSaison();
  } else {
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
  const newEpisodeIndex = Number(window.localStorage.getItem('episode')) - 1;

  if (newEpisodeIndex < 1) {
    if (window.localStorage.getItem('saison') === '1') return;

    window.localStorage.setItem('episode', '1');
    PrevSaison();
  } else {
    Change(
      newEpisodeIndex,
      lecteur,
      setVideo,
      setEpisodeTitle,
      setDownloadText
    );
  }
}
