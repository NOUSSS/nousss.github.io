import './accueil.scss';
import './responsive.scss';

import { Footer, Title } from '../components';
import { ANIMES, groupAnimesByCategory } from '../constants';
import { initSearchBar } from '../../functions/search';

import searchImg from '../../assets/Search.jpg';
import React, { useState } from 'react';

const Accueil = () => {
  const [output, setOutput] = useState<React.ReactNode>();
  const animes = Array.from(
    ANIMES.map(({ anime, category }) => ({ anime, category }))
  );

  const catalogues = groupAnimesByCategory(animes).sort(
    (a, b) => b.names.length - a.names.length
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

      <div className="catalogue">
        {catalogues.map(({ names, category }) => (
          <div className={category} key={category}>
            <p className="category">{category}</p>

            <ul key={category}>
              {names.map((e) => (
                <li
                  className="animes-list"
                  onClick={() => {
                    window.localStorage.setItem('anime', e);
                    window.location.hash = '/home';
                  }}
                  id={
                    e
                      .replace('-', ' ')
                      .replace('-', ' ')
                      .split(' ')
                      .map((word: string) => {
                        return (
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                        );
                      })
                      .join(' ') +
                    `${ANIMES.find(({ anime }) => anime === e)?.aliases}`
                  }
                  key={e}
                >
                  <div
                    title={
                      ANIMES.find(({ anime }) => anime === e)?.synopsis ??
                      'Aucun synopsis pour cette anime'
                    }
                    className="card"
                  >
                    <img
                      className="affiche"
                      src={
                        ANIMES.find(({ anime }) => anime === e)?.options.affiche
                      }
                    />

                    <p>
                      {e
                        .replace('-', ' ')
                        .replace('-', ' ')
                        .split(' ')
                        .map((word: string) => {
                          return (
                            word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase()
                          );
                        })
                        .join(' ')}
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
