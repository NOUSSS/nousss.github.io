import './accueil.scss';
import './responsive.scss';

import { Footer, Title } from '../components';
import { ANIMES_OPTIONS, groupAnimesByCategory } from '../constants';

const Accueil = () => {
  const animes = Array.from(
    ANIMES_OPTIONS.map(({ anime, category }) => {
      return { anime, category };
    })
  );

  const catalogues = groupAnimesByCategory(animes);

  return (
    <div className="container--accueil">
      <Title accueil />

      <div className="catalogue">
        {catalogues.map(({ names, category }) => (
          <div className={category} key={category}>
            <p style={{ color: '#65adff' }} className="category">
              {category}
            </p>

            <ul key={category}>
              {names.map((e) => (
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
