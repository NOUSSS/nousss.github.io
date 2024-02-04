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

export function clickEvents(
  lecteur: string[],
  setVideo: any,
  setTitle: any,
  setDownloadText: any,
  setSaison: any
): void {
  const episodes = document.querySelectorAll('.list-episodes');

  Array.from([...episodes]).map((_, i) => {
    const episode = episodes[i] as HTMLElement;

    episode.addEventListener('click', () => {
      const episodeId = episode.dataset.id;

      Change(episodeId!, lecteur, setVideo, setTitle, setDownloadText);
    });
  });

  document
    .querySelector('.nextButton')!
    .addEventListener('click', () =>
      NextEpisode(lecteur, setVideo, setTitle, setDownloadText, setSaison)
    );
  document
    .querySelector('.prevButton')!
    .addEventListener('click', () =>
      PrevEpisode(lecteur, setVideo, setTitle, setDownloadText, setSaison)
    );
}
