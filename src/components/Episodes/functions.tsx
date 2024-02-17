import React from 'react';

import { ANIMES } from '../constants';

export function Change(
  indexEpisode: number | string,
  lecteur: string[],

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setEpisodeTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>
): void {
  let currentAnime = window.localStorage.getItem('anime');

  const hash = window.location.hash;
  const queryParams = hash.substring(hash.indexOf('?') + 1);

  const urlParams = new URLSearchParams(queryParams);

  const currentAnimeURL = urlParams.get('anime');

  if (!currentAnimeURL) window.location.hash = '/';

  if (!currentAnime) {
    window.localStorage.setItem('anime', currentAnimeURL!);
    currentAnime = window.localStorage.getItem('anime');

    window.localStorage.setItem(
      `${currentAnime}--saison`,
      window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
    );
  }

  if (currentAnime && !window.localStorage.getItem(`${currentAnime}--saison`)) {
    window.localStorage.setItem(
      `${currentAnime}--saison`,
      window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
    );
  }

  if (
    currentAnimeURL &&
    currentAnimeURL.toLowerCase() !== currentAnime!.toLowerCase()
  ) {
    currentAnime = currentAnimeURL;

    window.localStorage.setItem('anime', currentAnimeURL);
  }

  const options = ANIMES.find(({ anime }) => anime === currentAnime)!.options;

  const { allIndex, horsSeries, names } = options.EPISODES_OPTIONS;

  const isHorsSerie = horsSeries?.find(
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

      setVideo(url);
      setEpisodeTitle(<span className="episodeNumber">E-SP{esp}</span>);

      window.localStorage.setItem(
        `${currentAnime}--episode`,
        String(indexEpisode)
      );

      window.localStorage.setItem(`${currentAnime}--e-sp`, `E-SP${esp}`);
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
        names?.find(({ index }) => index === String(numberEpisode))?.name ||
        'Episode';

      const url = lecteur[Number(indexEpisode) - 1];

      setVideo(url);
      setEpisodeTitle(
        <>
          <span className="episodeNumber">{numberEpisode}</span> :{' '}
          <span className="episodeName">{title}</span>
        </>
      );

      window.localStorage.setItem(
        `${currentAnime}--episode`,
        String(indexEpisode)
      );

      window.localStorage.removeItem(`${currentAnime}--e-sp`);
    }
  } else {
    const numberEpisode =
      Number(
        allIndex[window.localStorage.getItem(`${currentAnime}--saison`) ?? 0]
      ) + Number(indexEpisode);

    const url = lecteur[Number(indexEpisode) - 1];

    const episodeTitle =
      names?.find(({ index }) => index === String(numberEpisode))?.name ||
      'Episode';

    setVideo(url);

    setEpisodeTitle(
      <>
        <span className="episodeNumber">{numberEpisode}</span> :{' '}
        <span className="episodeName">{episodeTitle}</span>
      </>
    );

    window.localStorage.setItem(
      `${currentAnime}--episode`,
      String(indexEpisode)
    );

    window.localStorage.removeItem(`${currentAnime}--e-sp`);
  }

  window.scrollTo({
    top: document.querySelector('iframe')?.offsetTop,
    behavior: 'smooth',
  });
}

export function NextEpisode(
  lecteur: string[],

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setEpisodeTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>
) {
  let currentAnime = window.localStorage.getItem('anime');

  const hash = window.location.hash;
  const queryParams = hash.substring(hash.indexOf('?') + 1);

  const urlParams = new URLSearchParams(queryParams);

  const currentAnimeURL = urlParams.get('anime');

  if (!currentAnimeURL) window.location.hash = '/';

  if (!currentAnime) {
    window.localStorage.setItem('anime', currentAnimeURL!);
    currentAnime = window.localStorage.getItem('anime');

    window.localStorage.setItem(
      `${currentAnime}--saison`,
      window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
    );
  }

  if (currentAnime && !window.localStorage.getItem(`${currentAnime}--saison`)) {
    window.localStorage.setItem(
      `${currentAnime}--saison`,
      window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
    );
  }

  if (
    currentAnimeURL &&
    currentAnimeURL.toLowerCase() !== currentAnime!.toLowerCase()
  ) {
    currentAnime = currentAnimeURL;

    window.localStorage.setItem('anime', currentAnimeURL);
  }

  const newEpisodeIndex =
    Number(window.localStorage.getItem(`${currentAnime}--episode`)) + 1;

  if (newEpisodeIndex - 1 === lecteur.length) return;
  else {
    Change(newEpisodeIndex, lecteur, setVideo, setEpisodeTitle);
  }
}

export function PrevEpisode(
  lecteur: string[],

  setVideo: React.Dispatch<React.SetStateAction<string>>,
  setEpisodeTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>
) {
  let currentAnime = window.localStorage.getItem('anime');

  const hash = window.location.hash;
  const queryParams = hash.substring(hash.indexOf('?') + 1);

  const urlParams = new URLSearchParams(queryParams);

  const currentAnimeURL = urlParams.get('anime');

  if (!currentAnimeURL) window.location.hash = '/';

  if (!currentAnime) {
    window.localStorage.setItem('anime', currentAnimeURL!);
    currentAnime = window.localStorage.getItem('anime');

    window.localStorage.setItem(
      `${currentAnime}--saison`,
      window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
    );
  }

  if (currentAnime && !window.localStorage.getItem(`${currentAnime}--saison`)) {
    window.localStorage.setItem(
      `${currentAnime}--saison`,
      window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1'
    );
  }

  if (
    currentAnimeURL &&
    currentAnimeURL.toLowerCase() !== currentAnime!.toLowerCase()
  ) {
    currentAnime = currentAnimeURL;

    window.localStorage.setItem('anime', currentAnimeURL);
  }

  const newEpisodeIndex =
    Number(window.localStorage.getItem(`${currentAnime}--episode`)) - 1;

  if (newEpisodeIndex < 1) return;
  else {
    Change(newEpisodeIndex, lecteur, setVideo, setEpisodeTitle);
  }
}
