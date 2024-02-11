import './accueil.scss';
import './responsive.scss';

import { Footer, Title } from '../components';
import { ANIMES, groupAnimesByCategory } from '../constants';
import { initSearchBar } from '../../functions/search';

import searchImg from '../../assets/Search.svg';
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
      <Title accueil />

      <div className="search--output--anime">{output}</div>

      <label className="label--anime" title="Systeme de recherche super cool">
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
                  id={e
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
                  key={e}
                >
                  <div className="card">
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
