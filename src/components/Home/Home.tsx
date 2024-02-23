import { useEffect } from 'react';
import { isIOS } from '../../functions/main';
import { Link } from 'react-router-dom';
import { Footer, Title } from '../utils/components';

import './responsive.scss';
import './Home.scss';

import { ANIMES } from '../../animes/constants';
import { getAnime } from '../../functions/getAnime';

const Home = () => {
  const currentAnime = getAnime({ wSaison: false });
  const { synopsis } = ANIMES.find(
    ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
  )!;

  useEffect(() => {
    if (isIOS()) {
      setTimeout(() => window.scrollTo({ top: 500, behavior: 'smooth' }), 1000);
    }
  }, []);

  return (
    <div className="container--home">
      <div className="card">
        <Title link="#" />

        <div className="synopsis">{synopsis}</div>

        <div className="choices">
          <li>
            {ANIMES.find(
              ({ anime }) =>
                anime.toLowerCase() ===
                window.localStorage.getItem('anime')?.toLowerCase()
            )?.options.FILM_OPTIONS ? (
              <ul>
                <Link to={`/Films?anime=${encodeURI(currentAnime)}`}>
                  Films
                </Link>
              </ul>
            ) : null}
            {ANIMES.find(
              ({ anime }) =>
                anime.toLowerCase() ===
                window.localStorage.getItem('anime')?.toLowerCase()
            )?.options.EPISODES_OPTIONS ? (
              <ul>
                <Link to={`/Saisons?anime=${encodeURI(currentAnime)}`}>
                  Saisons
                </Link>
              </ul>
            ) : null}
            {ANIMES.find(
              ({ anime }) =>
                anime.toLowerCase() ===
                window.localStorage.getItem('anime')?.toLowerCase()
            )?.options.SCANS_OPTIONS ? (
              <ul>
                <Link to={`/Scans?anime=${encodeURI(currentAnime)}`}>
                  Scans
                </Link>
              </ul>
            ) : null}
          </li>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
