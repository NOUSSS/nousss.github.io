import { useEffect } from 'react';
import { isIOS } from '../../functions/main';
import { Link } from 'react-router-dom';

import logo from '/Logo.png';

import { Footer } from '../components';

import './responsive.scss';
import './Home.scss';

import { ANIMES } from '../constants';
import { getAnime } from '../../functions/getAnime';

const Home = () => {
  const currentAnime = getAnime({ wSaison: false });
  const { synopsis } = ANIMES.find(({ anime }) => anime === currentAnime)!;

  useEffect(() => {
    if (isIOS()) {
      setTimeout(() => window.scrollTo({ top: 500, behavior: 'smooth' }), 1000);
    }
  }, []);

  return (
    <div className="container--home">
      <div className="card">
        <div className="title">
          <img src={logo} alt="Logo" />
          <h1>
            {window.localStorage
              .getItem('anime')
              ?.replace('-', ' ')
              .replace('-', ' ')
              .split(' ')
              .map((word) => {
                return (
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                );
              })
              .join(' ')}
          </h1>
        </div>

        <div className="synopsis">{synopsis}</div>

        <div className="choices">
          <li>
            {ANIMES.find(
              ({ anime }) => anime === window.localStorage.getItem('anime')
            )?.options.FILM_OPTIONS ? (
              <ul>
                <Link to={`/Films?anime=${encodeURI(currentAnime)}`}>
                  Films
                </Link>
              </ul>
            ) : null}
            {ANIMES.find(
              ({ anime }) => anime === window.localStorage.getItem('anime')
            )?.options.EPISODES_OPTIONS ? (
              <ul>
                <Link to={`/Saisons?anime=${encodeURI(currentAnime)}`}>
                  Saisons
                </Link>
              </ul>
            ) : null}
            {ANIMES.find(
              ({ anime }) => anime === window.localStorage.getItem('anime')
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
