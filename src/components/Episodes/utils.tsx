import { isIOS } from '../../functions/main';
import { Change, NextEpisode, PrevEpisode } from './functions';

export function downloadText(url: string, setDownloadText: any): void {
  if (isIOS()) {
    setDownloadText(
      <>
        Pour télécharger, cliquez{' '}
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
        Pour télécharger, cliquez{' '}
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

export function toggleCinemaMode(): void {
  if (isIOS()) {
    const cinemaToggleSwitch = document.querySelector<HTMLElement>('.cinema')!;

    cinemaToggleSwitch.style.display = 'none';
  } else if (!isIOS()) {
    const cinemaMode =
      document.querySelector<HTMLInputElement>('.cinema input')!;

    cinemaMode.addEventListener('change', () => {
      const iframeParent =
        document.querySelector<HTMLElement>('.episodeVideo')!;

      if (cinemaMode.checked) {
        document.documentElement.requestFullscreen().catch(() => 0);

        iframeParent.style.width = '200%';
        iframeParent.style.height = `${
          document.querySelector('iframe')!.offsetHeight
        }px`;

        iframeParent.style.backgroundColor = 'black';
      } else if (!cinemaMode.checked) {
        document.exitFullscreen().catch(() => 0);

        iframeParent.style.width = '';
        iframeParent.style.height = '';

        iframeParent.style.backgroundColor = '';
      }
    });
  }
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
