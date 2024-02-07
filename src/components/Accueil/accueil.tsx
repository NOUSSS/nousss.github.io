import './accueil.scss';
import './responsive.scss';

import { Footer, Title } from '../components';
import { ANIMES_OPTIONS, groupAnimesByCategory } from '../constants';
import { initSearchBar } from '../../functions/search';

import searchImg from '../../assets/Search.svg';
import React, { useState } from 'react';

const Accueil = () => {
  const [output, setOutput] = useState<React.ReactNode>();
  const animes = Array.from(
    ANIMES_OPTIONS.map(({ anime, category }) => {
      return { anime, category };
    })
  );

  const catalogues = groupAnimesByCategory(animes).sort(
    (a, b) => b.names.length - a.names.length
  );

  return (
    <div className="container--accueil">
      <Title accueil />

      <div className="search--output--accueil">{output}</div>

      <label className="label--accueil" title="Systeme de recherche super cool">
        <img src={searchImg} alt="" />
        <input
          type="text"
          placeholder="One Piece ?"
          onInput={() =>
            initSearchBar(
              document.querySelector('.label--accueil input')!,
              document.getElementsByClassName('animes-list'),
              'accueil',
              setOutput
            )
          }
        />
      </label>

      <div className="catalogue">
        {catalogues.map(({ names, category }) => (
          <div className={category} key={category}>
            <p style={{ color: '#65adff' }} className="category">
              {category}
            </p>

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
                    .map((word: any) => {
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
                        ANIMES_OPTIONS.find(({ anime }) => anime === e)?.options
                          .affiche
                      }
                    />
                    <p>
                      {e
                        .replace('-', ' ')
                        .replace('-', ' ')
                        .split(' ')
                        .map((word: any) => {
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
