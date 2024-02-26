import './accueil.scss';
import './responsive.scss';

import React, { useCallback, useEffect, useState } from 'react';

import { Footer } from '../utils/Footer';
import { Title } from '../utils/Title';
import { ANIMES, groupAnimesByCategory } from '../../animes/constants';
import { toast } from 'react-hot-toast';
import { formatName } from '../../functions/formatName';
import { Historique } from '../../typings/types';
import { removeAnimeFromHistorique } from './historiqueManager';
import { getCurrentChapitre } from './getCurrentChapitre';
import { getCurrentEpisode } from './getCurrentEpisode';
import { getAnime } from '../../functions/getAnime';

import SearchBar from '../utils/searchBar';

export default function Accueil() {
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

    const momentIndex = updatedCatalogues.findIndex(
      ({ category }) => category === 'En ce moment'
    );

    if (momentIndex !== -1) {
      const [momentItem] = updatedCatalogues.splice(momentIndex, 1);

      updatedCatalogues.splice(1, 0, momentItem);
    }

    if (historiques.length > 0) {
      updatedCatalogues.unshift({
        category: 'Reprendre',
        names: historiques.map(({ name }) => name),
      });
    }

    setCatalogues(updatedCatalogues);
  }, [historiques]);

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
        window.location.hash = `/home?anime=${encodeURI(animeName)}`;
      }
    },
    [historiques]
  );

  return (
    <div className="container--anime">
      <nav>
        <Title accueil />

        <div className="container--search-bar">
          <SearchBar
            container="animes-list"
            output="search--output--anime"
            setOutput={setOutput}
          />

          <div className="search--output--anime">{output}</div>
        </div>
      </nav>

      <p style={{ textAlign: 'left' }}>
        Pour connaitre la date de sortie des différents épisodes / scans, je
        vous redirige vers le{' '}
        <a
          style={{ color: 'var(--mainColor)', textDecoration: 'underline' }}
          href="https://anime-sama.fr/planning/"
          target="_blank"
        >
          planning
        </a>{' '}
        d'anime-sama
      </p>

      {historiques.length > 0 ? (
        <button
          className="removeAllHistorique"
          onClick={() => {
            setHistoriques([]);

            for (const key of Object.keys(window.localStorage)) {
              if (key !== 'color') window.localStorage.removeItem(key);
            }

            toast.success("L'historique a bien été vidé", {
              position: 'bottom-center',

              style: {
                color: 'var(--mainColor)',
                fontFamily: 'Fredoka',
                fontSize: '15px',
              },
            });
          }}
        >
          Supprimer tout l'historique
        </button>
      ) : null}

      <div className="color-picker invisible">
        <input
          value={getComputedStyle(document.body).getPropertyValue(
            '--mainColor'
          )}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            document.documentElement.style.setProperty(
              '--mainColor',
              event.target.value
            );

            window.localStorage.setItem('color', event.target.value);
          }}
          type="color"
        />
        <button
          onClick={() => {
            document.documentElement.style.setProperty(
              '--mainColor',
              '#ff7300'
            );

            window.localStorage.removeItem('color');
          }}
        >
          Réinisialiser
        </button>
      </div>

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
                      : animeName + historiques[i]?.name
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
                            historiques[i]!.redirect,
                            historiques,
                            setHistoriques
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
                              {getCurrentChapitre(animeName, i, historiques)}
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
                              <br />
                              Saison {historiques[i]?.saison}
                              {', '}
                              {getCurrentEpisode(animeName, i, historiques)}
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
}
