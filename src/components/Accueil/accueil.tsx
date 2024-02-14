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

  type Historique = {
    name: string;
    episode: string;
    saison: string;
  };

  const historiques: Historique[] = [];

  for (const anime of Object.keys(window.localStorage)) {
    if (
      anime.includes('--episode') &&
      window.localStorage.getItem(anime) !== '1'
    ) {
      historiques.push({
        name: anime.replace('--episode', ''),
        episode: window.localStorage.getItem(anime)!,
        saison:
          window.localStorage.getItem(
            `${anime.replace('--episode', '')}--saison`
          ) ?? '1',
      });
    }
  }

  catalogues.unshift({
    category: 'Reprendre',
    names: historiques.map(({ name }) => name),
  });

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
              {names.map((animeName) => (
                <li
                  className="animes-list"
                  onClick={() => {
                    if (
                      historiques.find(({ name }) => name === animeName) &&
                      category === 'Reprendre'
                    ) {
                      const saison = historiques.find(
                        ({ name }) => name === animeName
                      )!.saison;

                      window.localStorage.setItem('anime', animeName);
                      window.location.hash = `/S${saison}/Episodes?anime=${encodeURI(
                        animeName
                      )}`;
                    } else {
                      window.localStorage.setItem('anime', animeName);
                      window.location.hash = '/home';
                    }
                  }}
                  id={
                    animeName
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
                    `${
                      ANIMES.find(({ anime }) => anime === animeName)?.aliases
                    }`
                  }
                  key={animeName}
                >
                  <div
                    title={
                      ANIMES.find(({ anime }) => anime === animeName)
                        ?.synopsis ?? 'Aucun synopsis pour cette anime'
                    }
                    className="card"
                  >
                    <img
                      className="affiche"
                      src={
                        ANIMES.find(({ anime }) => anime === animeName)?.options
                          .affiche
                      }
                    />

                    <p>
                      {animeName
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
                      {historiques.find(({ name }) => name === animeName) &&
                      category === 'Reprendre' ? (
                        <>
                          <br />S
                          {
                            historiques.find(({ name }) => name === animeName)!
                              .saison
                          }{' '}
                          E
                          {
                            historiques.find(({ name }) => name === animeName)!
                              .episode
                          }
                        </>
                      ) : null}
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
