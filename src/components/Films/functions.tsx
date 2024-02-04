import React from 'react';
import { getURLFilm, isIOS } from '../../functions/main';
import { films } from './films-names';
import { getImage, ImageKey } from './images';

export function addScript(url: string): Promise<boolean> {
  return new Promise(async (resolve) => {
    const script = document.createElement('script');

    script.className = 'script';
    script.setAttribute('src', url);

    script.onload = () => {
      resolve(true);
    };

    document.head.appendChild(script);
  });
}

export async function appearVideo(
  id: string,

  setTips: React.Dispatch<React.SetStateAction<React.ReactNode>>,
  setVideo: React.Dispatch<React.SetStateAction<React.ReactNode>>,
  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>
) {
  const lang = window.localStorage.getItem('lang');

  window.scrollTo({
    top: 185,
    behavior: 'smooth',
  });

  const [url, index] = id.split(' ');

  window.localStorage.setItem('currentFilm', index);

  document.querySelector(
    'title'
  )!.textContent = `${films[index].name} - Mugiwara-no Streaming`;

  if (lang === 'vostfr') {
    setTitle(
      <>
        <span>{films[index].name}</span> [
        <span id="vf" className="langage">
          VOSTFR
        </span>
        ]
      </>
    );
  } else if (lang === 'vf') {
    setTitle(
      <>
        <span>{films[index].name}</span> [
        <span id="vostfr" className="langage">
          VF
        </span>
        ]
      </>
    );
  }

  setVideo(
    <iframe
      className="iframeFilm"
      width="640"
      height="360"
      src={url}
      allowFullScreen
    ></iframe>
  );

  const langButton = document.querySelectorAll('.langage');

  for (let i = 0; i < langButton.length; i++) {
    langButton[i].addEventListener('click', () => {
      changeLangage(langButton[i].id);
    });
  }

  if (!isIOS()) {
    setTips(
      <>
        Pour télécharger le film, cliquez{' '}
        <span>
          <a target="_blank" href={getURLFilm(Number(index))}>
            ici
          </a>
        </span>
        , puis clique droit -{'>'} '<span>Enregistrer la vidéo sous'</span>.
      </>
    );
  } else {
    setTips(
      <>
        Pour télécharger le film, cliquez{' '}
        <span>
          <a target="_blank" href={getURLFilm(Number(index))}>
            ici
          </a>
        </span>{' '}
        sur <span>SAFARI</span> puis dans le bouton <span>PARTAGER</span> en bas
        puis <span>'Enregistrer dans fichiers'</span>
      </>
    );
  }

  return url;
}

export function changeLangage(lang: string): void {
  window.localStorage.setItem('lang', lang);
  window.location.reload();
}

export function getFilms(setFilmsFront: any) {
  const filmsNodes: React.ReactNode[] = [];

  for (let i = 0 as ImageKey; i < Object.keys(films).length; i++) {
    const url = getURLFilm(i);
    const id = `${films[i].name}|${films[i].aliases?.join(', ')}`;

    filmsNodes.push(
      <div id={id} key={id} className="container--poster">
        <img className="poster" src={getImage(i)} id={`${url} ${i}`} />
        <p className="text--films">{films[i].name}</p>
      </div>
    );
  }

  setFilmsFront(filmsNodes);
}
