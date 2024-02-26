import { useState } from 'react';

import './Saisons.scss';
import './responsive.scss';

import { getSaisons } from './getSaisons';
import { ANIMES } from '../../animes/constants';
import { Footer } from '../utils/Footer';
import { Title } from '../utils/Title';
import { changeSaison } from './changeSaison';
import { getCurrentAnime } from '../../functions/getCurrentAnime';

import SearchBar from '../utils/searchBar';

const Saisons = () => {
  const currentAnime = getCurrentAnime({ wSaison: false });

  const names = ANIMES.find(
    ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
  )!.options.saisons;

  if (!names) window.location.hash = `/home?anime=${encodeURI(currentAnime)}`;

  const [output, setOutput] = useState<React.ReactNode>();
  const saison = window.localStorage.getItem(`${currentAnime}--saison`);

  return (
    <div className="container--saisons">
      <Title link={`Home?anime=${encodeURI(currentAnime)}`} />

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
        output="search--output--saisons"
        container="container--poster-saison"
        setOutput={setOutput}
      />

      <div className="search--output--saisons">{output}</div>

      <div className="saisons">
        {getSaisons().map(({ element, id }, index) => (
          <div
            style={{ cursor: 'pointer' }}
            key={id}
            id={id}
            className="container--poster-saison"
            onClick={() => changeSaison(String(index + 1))}
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
