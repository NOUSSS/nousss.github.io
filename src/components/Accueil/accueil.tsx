import './accueil.scss';
import './responsive.scss';

import { Footer, Title } from '../components';
import { ANIMES, groupAnimesByCategory } from '../constants';
import { initSearchBar } from '../../functions/search';

import searchImg from '../../assets/Search.jpg';

import React, { useCallback, useEffect, useState } from 'react';

import { formatName } from '../../functions/main';
import { toast } from 'sonner';

type Historique = {
  name: string;
  redirect: string;

  chapitre?: string;
  episode?: string;
  saison?: string;
  film?: string;
};

const Accueil = () => {
  for (const key of Object.keys(window.localStorage)) {
    if (key.includes('episodeSpecial')) window.localStorage.removeItem(key);
  }

  const [output, setOutput] = useState<React.ReactNode>();
  const animes = Array.from(
    ANIMES.map(({ anime, category }) => ({ anime, category }))
  );

  const [historiques, setHistoriques] = useState<Historique[]>(() => {
    const loadedHistoriques = [];

    for (const key of Object.keys(window.localStorage)) {
      if (key.includes('--episode')) {
        const name = key.replace('--episode', '');
        const episode = window.localStorage.getItem(key)!;
        const saison = window.localStorage.getItem(`${name}--saison`) ?? '1';

        loadedHistoriques.push({ name, redirect: 'Episodes', episode, saison });
      }

      if (key.includes('--chapitre')) {
        const name = key.replace('--chapitre', '');
        const chapitre = window.localStorage.getItem(key)!;

        loadedHistoriques.push({ name, redirect: 'Scans', chapitre });
      }

      if (key.includes('--currentFilm')) {
        const name = key.replace('--currentFilm', '');
        const film = window.localStorage.getItem(key)!;

        loadedHistoriques.push({ name, redirect: 'Films', film });
      }
    }

    return loadedHistoriques;
  });

  const [catalogues, setCatalogues] = useState(() =>
    groupAnimesByCategory(animes).sort(
      (a, b) => b.names.length - a.names.length
    )
  );

  useEffect(() => {
    const updatedCatalogues = groupAnimesByCategory(
      ANIMES.map(({ anime, category }) => ({ anime, category }))
    ).sort((a, b) => b.names.length - a.names.length);

    if (historiques.length > 0) {
      updatedCatalogues.unshift({
        category: 'Reprendre',
        names: historiques.map(({ name }) => name),
      });
    }

    setCatalogues(updatedCatalogues);
  }, [historiques]);

  const removeAnimeFromHistorique = (
    animeName: string,
    redirectAnime: string
  ) => {
    if (redirectAnime === 'Episodes') {
      window.localStorage.removeItem(`${animeName}--saison`);
      window.localStorage.removeItem(`${animeName}--episode`);

      for (const key of Object.keys(window.localStorage)) {
        if (key.includes('--lang') && key.includes(animeName))
          window.localStorage.removeItem(key);
      }
    } else if (redirectAnime === 'Scans') {
      window.localStorage.removeItem(`${animeName}--chapitre`);
    } else if (redirectAnime === 'Films') {
      window.localStorage.removeItem(`${animeName}--currentFilm`);

      for (const key of Object.keys(window.localStorage)) {
        if (key.includes('--lang') && key.includes(animeName))
          window.localStorage.removeItem(key);
      }
    }

    setHistoriques(
      historiques.filter(
        (historique) =>
          !(
            historique.name === animeName &&
            historique.redirect === redirectAnime
          )
      )
    );

    toast.success(
      `Les ${redirectAnime} de ${animeName} ont bien été retiré de l'historique !`,
      {
        style: {
          color: 'var(--orange)',
        },
      }
    );
  };

  const getAnime = (animeName: string) =>
    ANIMES.find(({ anime }) => anime === animeName);

  const goToAnime = useCallback(
    (animeName: string, category: string, index: number) => {
      if (historiques[index] && category === 'Reprendre') {
        const historique = historiques[index];

        window.localStorage.setItem('anime', animeName);

        if (historique?.redirect === 'Episodes') {
          window.location.hash = `/S${historique.saison}/${
            historique.redirect
          }?anime=${encodeURI(animeName)}`;
        }

        if (historique?.redirect === 'Scans') {
          window.location.hash = `/${historique.redirect}?anime=${encodeURI(
            animeName
          )}`;
        }

        if (historique?.redirect === 'Films') {
          window.location.hash = `/${historique.redirect}?anime=${encodeURI(
            animeName
          )}`;
        }
      } else {
        window.localStorage.setItem('anime', animeName);
        window.location.hash = '/home';
      }
    },
    [historiques]
  );

  return (
    <div className="container--anime">
      <nav>
        <Title accueil />

        <div className="container--search-bar">
          <label
            className="label--anime"
            title="Systeme de recherche super cool"
          >
            <img src={searchImg} alt="" />
            <input
              type="text"
              placeholder="One Piece ?"
              onInput={() =>
                initSearchBar(
                  document.querySelector('.label--anime input')!,
                  document.getElementsByClassName(
                    'animes-list'
                  ) as HTMLCollectionOf<HTMLElement>,
                  'anime',
                  setOutput
                )
              }
            />
          </label>

          <div className="search--output--anime">{output}</div>
        </div>
      </nav>

      <p>
        Pour connaitre la date de sortie des différents épisodes / scans, je
        vous redirige vers le{' '}
        <a
          style={{ color: 'var(--orange)', textDecoration: 'underline' }}
          href="https://anime-sama.fr/planning/"
          target="_blank"
        >
          planning
        </a>{' '}
        d'anime-sama
      </p>

      {window.localStorage.getItem('anime') ? (
        <p>
          Dernier anime selectionné :{' '}
          <a
            style={{ color: 'var(--orange)', textDecoration: 'underline' }}
            href="/#/home"
          >
            {window.localStorage.getItem('anime')}
          </a>
        </p>
      ) : null}

      {historiques.length > 0 ? (
        <button
          className="removeAllHistorique"
          onClick={() => {
            setHistoriques([]);

            window.localStorage.clear();

            toast.success("L'historique a bien été vidé", {
              style: {
                color: 'var(--orange)',
              },
            });
          }}
        >
          Supprimer tout l'historique
        </button>
      ) : null}

      <div className="catalogue">
        {catalogues.map(({ names, category }) => (
          <div className={category} key={category}>
            <p className="category">{category}</p>

            <ul key={category}>
              {names.map((animeName: string, i) => (
                <li
                  className="animes-list"
                  onClick={() => goToAnime(animeName, category, i)}
                  id={
                    formatName(animeName) +
                    `${
                      typeof getAnime(animeName)?.aliases === 'undefined'
                        ? ''
                        : getAnime(animeName)?.aliases
                    }`
                  }
                  key={
                    historiques[i]?.redirect
                      ? animeName + historiques[i]?.redirect
                      : animeName
                  }
                >
                  <div
                    title={
                      getAnime(animeName)?.synopsis ??
                      'Aucun synopsis pour cette anime'
                    }
                    className="card"
                  >
                    {historiques[i] && category === 'Reprendre' ? (
                      <div
                        className="historiqueRemove"
                        onClick={(event) => {
                          event.stopPropagation();

                          removeAnimeFromHistorique(
                            animeName,
                            historiques[i]!.redirect
                          );
                        }}
                      >
                        X
                      </div>
                    ) : null}
                    <img
                      className="affiche"
                      src={getAnime(animeName)?.options.affiche}
                    />

                    <p>
                      {formatName(animeName)}
                      {historiques[i] && category === 'Reprendre' && (
                        <>
                          {historiques[i]?.chapitre && (
                            <>
                              <br />
                              Chapitre {historiques[i]?.chapitre}
                            </>
                          )}
                          {historiques[i]?.film && (
                            <>
                              <br />
                              Film {Number(historiques[i]?.film) + 1}
                            </>
                          )}
                          {historiques[i]?.episode && (
                            <>
                              <br />S{historiques[i]?.saison} E
                              {historiques[i]?.episode}
                            </>
                          )}
                        </>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
