import { useEffect, useState } from 'react';

import './Saisons.scss';
import './responsive.scss';

import { getSaisons } from './functions';
import { ANIMES } from '../../animes/constants';
import { Footer, Title } from '../utils/components';
import { changeSaison } from './utils';
import { getAnime } from '../../functions/getAnime';

import SearchBar from '../utils/searchBar';

const Saisons = () => {
  const currentAnime = getAnime({ wSaison: false });

  const names = ANIMES.find(
    ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
  )!.options.saisons;

  if (!names) window.location.hash = '/home';

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
                {names?.[saison].name}
              </a>
            </span>
          </>
        ) : null}
      </p>

      <SearchBar
        component="saisons"
        container="container--poster-saison"
        setOutput={setOutput}
      />

      <div className="search--output--saisons">{output}</div>

      <div className="saisons">
        {getSaisons().map(({ element, id }) => (
          <div
            style={{ cursor: 'pointer' }}
            key={id}
            id={id}
            className="container--poster-saison"
          >
            {element}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Saisons;
