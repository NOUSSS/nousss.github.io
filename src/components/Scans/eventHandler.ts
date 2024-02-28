import { getCurrentAnime } from '../../functions/getCurrentAnime';
import { selectChapter } from './chapterManager';

const attachButtonClickEvent = (
  className: string,
  clickHandler: () => void
) => {
  document
    .querySelectorAll(`.${className}`)
    .forEach((e) => e.addEventListener('click', clickHandler));
};

export const clickEvents = (
  setScans: React.Dispatch<React.SetStateAction<React.ReactNode[] | undefined>>
): void => {
  const currentAnime = getCurrentAnime({ wSaison: false });

  attachButtonClickEvent('prevButton', () => {
    setScans(
      selectChapter(
        Number(window.localStorage.getItem(`${currentAnime}--chapitre`)) - 1
      )
    );
  });

  attachButtonClickEvent('nextButton', () => {
    setScans(
      selectChapter(
        Number(window.localStorage.getItem(`${currentAnime}--chapitre`)) + 1
      )
    );
  });

  document.querySelector('.lastChapter')!.addEventListener('click', () => {
    const allChapitres = document.querySelector('select')!.options;

    const lastScan = allChapitres[allChapitres.length - 1].id
      .match(/[0-9]/g)!
      .join('');

    setScans(selectChapter(lastScan));
  });
};
