import './accueil.scss';
import './responsive.scss';

import { Footer, Title } from '../components';
import { ANIMES_OPTIONS } from '../constants';

const Accueil = () => {
  const catalogues = Array.from(ANIMES_OPTIONS.map(({ anime }) => anime));

  return (
    <div className="container--accueil">
      <Title accueil />

      <div className="catalogue">
        <ul>
          {catalogues.map((e) => (
            <li
              onClick={() => {
                window.localStorage.setItem('anime', e);
                window.location.hash = '/home';
              }}
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
                    .split(' ')
                    .map((word) => {
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
      <Footer />
    </div>
  );
};

export default Accueil;
