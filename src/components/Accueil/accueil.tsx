import './accueil.scss';
import './responsive.scss';

import { Footer, Title } from '../utils/components';
import { ANIMES, groupAnimesByCategory } from '../../animes/constants';

import React, { useCallback, useEffect, useState } from 'react';
import SearchBar from '../utils/searchBar';

import { formatName } from '../../functions/main';
import { toast } from 'react-hot-toast';

type Historique = {
  name: string;
  redirect: string;

  chapitre?: string;
  episode?: string;
  saison?: string;
  film?: string;
};

const Accueil = () => {
  for (const key of Object.keys(window.localStorage)) {
    if (key.includes('episodeSpecial')) window.localStorage.removeItem(key);
  }

  const color = getComputedStyle(document.body).getPropertyValue('--mainColor');

  const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty(
      '--mainColor',
      event.target.value
    );

    window.localStorage.setItem('color', event.target.value);
  };

  const [output, setOutput] = useState<React.ReactNode>();
  const animes = Array.from(
    ANIMES.map(({ anime, category }) => ({ anime, category }))
  );

  const [historiques, setHistoriques] = useState<Historique[]>(() => {
    const loadedHistoriques = [];

    for (const key of Object.keys(window.localStorage)) {
      if (key.includes('--episode')) {
        const name = key.replace('--episode', '');
        const episode = window.localStorage.getItem(key)!;
        const saison = window.localStorage.getItem(`${name}--saison`) ?? '1';

        loadedHistoriques.push({ name, redirect: 'Episodes', episode, saison });
      }

      if (key.includes('--chapitre')) {
        const name = key.replace('--chapitre', '');
        const chapitre = window.localStorage.getItem(key)!;

        loadedHistoriques.push({ name, redirect: 'Scans', chapitre });
      }

      if (key.includes('--currentFilm')) {
        const name = key.replace('--currentFilm', '');
        const film = window.localStorage.getItem(key)!;

        loadedHistoriques.push({ name, redirect: 'Films', film });
      }
    }

    return loadedHistoriques;
  });

  const [catalogues, setCatalogues] = useState(() =>
    groupAnimesByCategory(animes).sort(
      (a, b) => b.names.length - a.names.length
    )
  );

  useEffect(() => {
    const updatedCatalogues = groupAnimesByCategory(
      ANIMES.map(({ anime, category }) => ({ anime, category }))
    ).sort((a, b) => b.names.length - a.names.length);

    if (historiques.length > 0) {
      updatedCatalogues.unshift({
        category: 'Reprendre',
        names: historiques.map(({ name }) => name),
      });
    }

    setCatalogues(updatedCatalogues);
  }, [historiques]);

  const removeAnimeFromHistorique = (
    animeName: string,
    redirectAnime: string
  ) => {
    if (redirectAnime === 'Episodes') {
      window.localStorage.removeItem(`${animeName}--saison`);
      window.localStorage.removeItem(`${animeName}--episode`);

      for (const key of Object.keys(window.localStorage)) {
        if (key.includes('--lang') && key.includes(animeName))
          window.localStorage.removeItem(key);
      }
    } else if (redirectAnime === 'Scans') {
      window.localStorage.removeItem(`${animeName}--chapitre`);
    } else if (redirectAnime === 'Films') {
      window.localStorage.removeItem(`${animeName}--currentFilm`);

      for (const key of Object.keys(window.localStorage)) {
        if (key.includes('--lang') && key.includes(animeName))
          window.localStorage.removeItem(key);
      }
    }

    setHistoriques(
      historiques.filter(
        (historique) =>
          !(
            historique.name === animeName &&
            historique.redirect === redirectAnime
          )
      )
    );

    toast.success(
      `Les ${redirectAnime} de ${animeName} ont bien été retiré de l'historique !`,
      {
        position: 'bottom-right',

        style: {
          color: 'var(--mainColor)',
          fontFamily: 'Fredoka',
          fontSize: '15px',
        },
      }
    );
  };

  const getAnime = (animeName: string) =>
    ANIMES.find(({ anime }) => anime.toLowerCase() === animeName.toLowerCase());

  const goToAnime = useCallback(
    (animeName: string, category: string, index: number) => {
      if (historiques[index] && category === 'Reprendre') {
        const historique = historiques[index];

        window.localStorage.setItem('anime', animeName);

        if (historique?.redirect === 'Episodes') {
          window.location.hash = `/S${historique.saison}/${
            historique.redirect
          }?anime=${encodeURI(animeName)}`;
        }

        if (historique?.redirect === 'Scans') {
          window.location.hash = `/${historique.redirect}?anime=${encodeURI(
            animeName
          )}`;
        }

        if (historique?.redirect === 'Films') {
          window.location.hash = `/${historique.redirect}?anime=${encodeURI(
            animeName
          )}`;
        }
      } else {
        window.localStorage.setItem('anime', animeName);
        window.location.hash = '/home';
      }
    },
    [historiques]
  );

  const getCurrentEpisode = (animeName: string, index: number) => {
    if (window.localStorage.getItem(`${animeName}--e-sp`)) {
      return window.localStorage.getItem(`${animeName}--e-sp`)!;
    } else {
      if (
        getAnime(animeName)?.options.EPISODES_OPTIONS?.horsSeries?.length ??
        0 > 0
      ) {
        const horsSeries = getAnime(
          animeName
        )!.options.EPISODES_OPTIONS?.horsSeries!.find(
          ({ saison }) => saison === historiques?.[index].saison
        )?.hs;

        if (horsSeries) {
          let retard = 0;

          for (const horsSerie of horsSeries) {
            if (Number(historiques[index]!.episode) > horsSerie + 1) retard++;
          }

          return `Episode ${String(
            Number(historiques[index].episode) - retard
          )}`;
        } else {
          return `Episode ${historiques[index].episode}`;
        }
      } else {
        return `Episode ${historiques[index].episode}`;
      }
    }
  };

  const getCurrentChapitre = (animeName: string, index: number) => {
    if (
      getAnime(animeName)?.options?.SCANS_OPTIONS!.CHAPITRE_SPECIAUX?.includes(
        Number(window.localStorage.getItem(`${animeName}--chapitre`)) - 1
      )
    ) {
      return `Chapitre Special`;
    } else {
      if (
        getAnime(animeName)?.options?.SCANS_OPTIONS?.CHAPITRE_SPECIAUX
          ?.length ??
        0 > 0
      ) {
        const horsSeries =
          getAnime(animeName)!.options.SCANS_OPTIONS?.CHAPITRE_SPECIAUX;

        if (horsSeries) {
          let retard = 0;

          for (const horsSerie of horsSeries) {
            if (Number(historiques[index]!.chapitre) > horsSerie + 1) retard++;
          }

          return `Chapitre ${String(
            Number(historiques[index].chapitre) -
              retard -
              (getAnime(animeName)?.options?.SCANS_OPTIONS?.from === 0 ? 1 : 0)
          )}`;
        } else {
          return `Chapitre ${
            Number(historiques[index].chapitre) -
            (getAnime(animeName)?.options?.SCANS_OPTIONS?.from === 0 ? 1 : 0)
          }`;
        }
      } else {
        return `Chapitre ${
          Number(historiques[index].chapitre) -
          (getAnime(animeName)?.options?.SCANS_OPTIONS?.from === 0 ? 1 : 0)
        }`;
      }
    }
  };

  return (
    <div className="container--anime">
      <nav>
        <Title accueil />

        <div className="container--search-bar">
          <SearchBar
            container="animes-list"
            component="anime"
            setOutput={setOutput}
          />

          <div className="search--output--anime">{output}</div>
        </div>
      </nav>

      <p>
        Pour connaitre la date de sortie des différents épisodes / scans, je
        vous redirige vers le{' '}
        <a
          style={{ color: 'var(--mainColor)', textDecoration: 'underline' }}
          href="https://anime-sama.fr/planning/"
          target="_blank"
        >
          planning
        </a>{' '}
        d'anime-sama
      </p>

      {window.localStorage.getItem('anime') &&
      ANIMES.find(
        ({ anime }) =>
          anime.toLowerCase() ===
          window.localStorage.getItem('anime')?.toLowerCase()
      ) ? (
        <p>
          Dernier anime selectionné :{' '}
          <a
            style={{ color: 'var(--mainColor)', textDecoration: 'underline' }}
            href="/#/home"
          >
            {window.localStorage.getItem('anime')}
          </a>
        </p>
      ) : null}

      {historiques.length > 0 ? (
        <button
          className="removeAllHistorique"
          onClick={() => {
            setHistoriques([]);

            window.localStorage.clear();

            toast.success("L'historique a bien été vidé", {
              position: 'bottom-right',

              style: {
                color: 'var(--mainColor)',
                fontFamily: 'Fredoka',
                fontSize: '15px',
              },
            });
          }}
        >
          Supprimer tout l'historique
        </button>
      ) : null}

      <div style={{ display: 'none' }} className="color-picker">
        <input onChange={changeColor} value={color} type="color" />
        <button
          onClick={() => {
            document.documentElement.style.setProperty(
              '--mainColor',
              '#ff7300'
            );
            window.localStorage.removeItem('color');
          }}
        >
          Réinisialiser
        </button>
      </div>

      <div className="catalogue">
        {catalogues.map(({ names, category }) => (
          <div className={category} key={category}>
            <p className="category">{category}</p>

            <ul key={category}>
              {names.map((animeName: string, i) => (
                <li
                  className="animes-list"
                  onClick={() => goToAnime(animeName, category, i)}
                  id={
                    formatName(animeName) +
                    `${
                      typeof getAnime(animeName)?.aliases === 'undefined'
                        ? ''
                        : getAnime(animeName)?.aliases
                    }`
                  }
                  key={
                    historiques[i]?.redirect
                      ? animeName + historiques[i]?.redirect
                      : animeName + historiques[i]?.name
                  }
                >
                  <div
                    title={
                      getAnime(animeName)?.synopsis ??
                      'Aucun synopsis pour cette anime'
                    }
                    className="card"
                  >
                    {historiques[i] && category === 'Reprendre' ? (
                      <div
                        className="historiqueRemove"
                        onClick={(event) => {
                          event.stopPropagation();

                          removeAnimeFromHistorique(
                            animeName,
                            historiques[i]!.redirect
                          );
                        }}
                      >
                        X
                      </div>
                    ) : null}
                    <img
                      className="affiche"
                      src={getAnime(animeName)?.options.affiche}
                    />

                    <p>
                      {formatName(animeName)}
                      {historiques[i] && category === 'Reprendre' && (
                        <>
                          {historiques[i]?.chapitre && (
                            <>
                              <br />
                              {getCurrentChapitre(animeName, i)}
                            </>
                          )}
                          {historiques[i]?.film && (
                            <>
                              <br />
                              Film {Number(historiques[i]?.film) + 1}
                            </>
                          )}
                          {historiques[i]?.episode && (
                            <>
                              <br />
                              Saison {historiques[i]?.saison}
                              {', '}
                              {getCurrentEpisode(animeName, i)}
                            </>
                          )}
                        </>
                      )}
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
