import { useCallback, useEffect, useState } from 'react';

import './Saisons.scss';
import './responsive.scss';

import searchImg from '../../assets/Search.svg';

import { getSaisons } from './functions';
import { initSearchBar } from '../../functions/search';
import { ANIMES } from '../constants';
import { Footer, Title } from '../components';
import { changeSaison } from './utils';

const Saisons = () => {
  const currentAnime = window.localStorage.getItem('anime')!;

  const names = ANIMES.find(({ anime }) => anime === currentAnime)!.options
    .saisons;

  const [output, setOutput] = useState<React.ReactNode>();
  const saison = window.localStorage.getItem(`${currentAnime}--saison`);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 580, behavior: 'smooth' });
    }, 1000);

    document.querySelectorAll('.container--poster-saison').forEach((e, i) => {
      e.addEventListener('click', () => {
        changeSaison(String(i + 1));
      });
    });
  }, []);

  const searchBar = useCallback(() => {
    initSearchBar(
      document.querySelector('input')!,
      document.getElementsByClassName(
        'container--poster-saison'
      ) as HTMLCollectionOf<HTMLElement>,
      'saisons',
      setOutput
    );
  }, []);

  return (
    <div className="container--saisons">
      <Title link="Home" />

      <p
        style={{
          position: 'relative',
          top: '35px',
          color: 'white',
          fontSize: '50px',
        }}
      >
        Les <span>saisons</span> disponibles.
      </p>

      <p className="lastSaison">
        {saison ? (
          <>
            Historique Saison :{' '}
            <span
              onClick={() => changeSaison(saison)}
              style={{ cursor: 'pointer' }}
            >
              <a id={saison} className="historiqueSaison">
                {names[saison].name}
              </a>
            </span>
          </>
        ) : null}
      </p>

      <div className="search--output--saisons">{output}</div>

      <label className="label--saisons" title="Systeme de recherche super cool">
        <img src={searchImg} alt="" />
        <input type="text" placeholder="Wano ?" onInput={searchBar} />
      </label>

      <div className="saisons">
        {getSaisons().map(({ element, id }) => (
          <div key={id} id={id} className="container--poster-saison">
            {element}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Saisons;
