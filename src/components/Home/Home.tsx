import { Link } from 'react-router-dom';
import { Footer } from '../utils/Footer';
import { Title } from '../utils/title';

import './responsive.scss';
import './Home.scss';

import { ANIMES } from '../../animes/constants';
import { getAnime } from '../../functions/getAnime';

const Home = () => {
  const currentAnime = getAnime({ wSaison: false });
  const { synopsis } = ANIMES.find(
    ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
  )!;

  return (
    <div className="container--home">
      <div className="card">
        <Title link="#" />

        <div className="synopsis">{synopsis}</div>

        <div className="choices">
          <ul>
            {ANIMES.find(
              ({ anime }) =>
                anime.toLowerCase() ===
                window.localStorage.getItem('anime')?.toLowerCase()
            )?.options.FILM_OPTIONS ? (
              <li>
                <Link to={`/Films?anime=${encodeURI(currentAnime)}`}>
                  Films
                </Link>
              </li>
            ) : null}
            {ANIMES.find(
              ({ anime }) =>
                anime.toLowerCase() ===
                window.localStorage.getItem('anime')?.toLowerCase()
            )?.options.EPISODES_OPTIONS ? (
              <li>
                <Link to={`/Saisons?anime=${encodeURI(currentAnime)}`}>
                  Saisons
                </Link>
              </li>
            ) : null}
            {ANIMES.find(
              ({ anime }) =>
                anime.toLowerCase() ===
                window.localStorage.getItem('anime')?.toLowerCase()
            )?.options.SCANS_OPTIONS ? (
              <li>
                <Link to={`/Scans?anime=${encodeURI(currentAnime)}`}>
                  Scans
                </Link>
              </li>
            ) : null}
          </ul>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
