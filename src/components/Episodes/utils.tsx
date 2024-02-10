import { isIOS } from '../../functions/main';
import { Change, NextEpisode, PrevEpisode } from './functions';

export function downloadText(url: string, setDownloadText: any): void {
  if (isIOS()) {
    setDownloadText(
      <>
        Pour télécharger l'épisode, cliquez{' '}
        <span>
          <a target="_blank" href={url}>
            ici
          </a>
        </span>{' '}
        puis appuyer sur le bouton <span>"partager"</span>, puis{' '}
        <span>'Enregistrer dans fichiers'</span>
      </>
    );
  } else {
    setDownloadText(
      <>
        Pour télécharger l'épisode, cliquez{' '}
        <span>
          <a target="_blank" href={url}>
            ici
          </a>
        </span>{' '}
        puis faites <span>clique droit</span>, puis{' '}
        <span>'Enregistrer la vidéo sous'</span>
      </>
    );
  }
}

export function toggleHideEpisodesNames(): void {
  const hideEpisodesNamesInput = document.querySelector<HTMLInputElement>(
    '.hideEpisodesNames input'
  )!;

  hideEpisodesNamesInput.addEventListener('change', () => {
    const check = hideEpisodesNamesInput.checked;

    if (check) {
      for (const episodeName of Array.from([
        ...document.querySelectorAll('.episodeName'),
      ])) {
        (episodeName as HTMLElement).style.filter = 'blur(7px)';
      }
    } else {
      for (const episodeName of Array.from([
        ...document.querySelectorAll('.episodeName'),
      ])) {
        (episodeName as HTMLElement).style.filter = 'blur(0px)';
      }
    }
  });
}

type EventHandler = (() => void) | null;

const eventHandlers = {
  episodes: [] as EventHandler[],

  nextButton: null as EventHandler,
  prevButton: null as EventHandler,
};

export function removeClickEvents(): void {
  const episodes = document.querySelectorAll('.list-episodes');
  episodes.forEach((episode, index) => {
    const handler = eventHandlers.episodes[index];

    if (typeof handler === 'function') {
      episode.removeEventListener('click', handler);
    }
  });

  const nextButton = document.querySelector('.nextButton');
  if (nextButton && typeof eventHandlers.nextButton === 'function') {
    nextButton.removeEventListener('click', eventHandlers.nextButton);
  }

  const prevButton = document.querySelector('.prevButton');
  if (prevButton && typeof eventHandlers.prevButton === 'function') {
    prevButton.removeEventListener('click', eventHandlers.prevButton);
  }

  eventHandlers.episodes = [];

  eventHandlers.nextButton = null;
  eventHandlers.prevButton = null;
}

export function clickEvents(
  lecteur: string[],
  setVideo: any,
  setTitle: any,
  setDownloadText: any
): void {
  removeClickEvents();

  const episodes = document.querySelectorAll('.list-episodes');

  episodes.forEach((episode, index) => {
    const handler = () => {
      const episodeId = (episode as HTMLElement).dataset.id;

      episodes.forEach((ep) => ep.classList.remove('select'));
      episode.classList.add('select');

      Change(episodeId!, lecteur, setVideo, setTitle, setDownloadText);
    };

    episode.addEventListener('click', handler);
    eventHandlers.episodes[index] = handler;
  });

  const nextButton = document.querySelector('.nextButton');

  if (nextButton) {
    const nextHandler = () =>
      NextEpisode(lecteur, setVideo, setTitle, setDownloadText);

    nextButton.addEventListener('click', nextHandler);
    eventHandlers.nextButton = nextHandler;
  }

  const prevButton = document.querySelector('.prevButton');

  if (prevButton) {
    const prevHandler = () =>
      PrevEpisode(lecteur, setVideo, setTitle, setDownloadText);

    prevButton.addEventListener('click', prevHandler);
    eventHandlers.prevButton = prevHandler;
  }
}
