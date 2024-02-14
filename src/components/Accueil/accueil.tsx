import './accueil.scss';
import './responsive.scss';

import { Footer, Title } from '../components';
import { ANIMES, groupAnimesByCategory } from '../constants';
import { initSearchBar } from '../../functions/search';

import searchImg from '../../assets/Search.jpg';
import React, { useCallback, useEffect, useState } from 'react';
import { formatName } from '../../functions/main';
import { toast } from 'sonner';

const Accueil = () => {
  const [output, setOutput] = useState<React.ReactNode>();
  const animes = Array.from(
    ANIMES.map(({ anime, category }) => ({ anime, category }))
  );

  const [historiques, setHistoriques] = useState<
    { name: string; episode: string; saison: string }[]
  >(() => {
    const loadedHistoriques = [];

    for (const key of Object.keys(window.localStorage)) {
      if (key.includes('--episode')) {
        const name = key.replace('--episode', '');
        const episode = window.localStorage.getItem(key)!;
        const saison = window.localStorage.getItem(`${name}--saison`) ?? '1';

        loadedHistoriques.push({ name, episode, saison });
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

  const removeAnimeFromHistorique = (animeName: string) => {
    window.localStorage.removeItem(`${animeName}--saison`);
    window.localStorage.removeItem(`${animeName}--episode`);

    setHistoriques(historiques.filter(({ name }) => name !== animeName));

    toast.success(`${animeName} a été retiré de l'historique avec succès`, {
      style: {
        color: 'green',
      },
    });
  };

  const getAnimeHistorique = (anime: string) =>
    historiques.find(({ name }) => name === anime);

  const getAnime = (animeName: string) =>
    ANIMES.find(({ anime }) => anime === animeName);

  const goToAnime = useCallback((animeName: string, category: string) => {
    if (getAnimeHistorique(animeName) && category === 'Reprendre') {
      const saison = historiques.find(({ name }) => name === animeName)!.saison;

      window.localStorage.setItem('anime', animeName);
      window.location.hash = `/S${saison}/Episodes?anime=${encodeURI(
        animeName
      )}`;
    } else {
      window.localStorage.setItem('anime', animeName);
      window.location.hash = '/home';
    }
  }, []);

  return (
    <div className="container--anime">
      <nav>
        <Title accueil />

        <div className="container--search-bar">
          <label
            className="label--anime"
            title="Systeme de recherche super cool"
          >
            <img src={searchImg} alt="" />
            <input
              type="text"
              placeholder="One Piece ?"
              onInput={() =>
                initSearchBar(
                  document.querySelector('.label--anime input')!,
                  document.getElementsByClassName(
                    'animes-list'
                  ) as HTMLCollectionOf<HTMLElement>,
                  'anime',
                  setOutput
                )
              }
            />
          </label>

          <div className="search--output--anime">{output}</div>
        </div>
      </nav>

      <p>
        Pour connaitre la date de sortie des différents épisodes / scans, je
        vous redirige vers le{' '}
        <a
          style={{ color: 'var(--orange)', textDecoration: 'underline' }}
          href="https://anime-sama.fr/planning/"
          target="_blank"
        >
          planning
        </a>{' '}
        d'anime-sama
      </p>

      {window.localStorage.getItem('anime') ? (
        <p>
          Dernier anime selectionné :{' '}
          <a
            style={{ color: 'var(--orange)', textDecoration: 'underline' }}
            href="/#/home"
          >
            {window.localStorage.getItem('anime')}
          </a>
        </p>
      ) : null}

      <div className="catalogue">
        {catalogues.map(({ names, category }) => (
          <div className={category} key={category}>
            <p className="category">{category}</p>

            <ul key={category}>
              {names.map((animeName: string) => (
                <li
                  className="animes-list"
                  onClick={() => goToAnime(animeName, category)}
                  id={formatName(animeName) + `${getAnime(animeName)?.aliases}`}
                  key={animeName}
                >
                  <div
                    title={
                      getAnime(animeName)?.synopsis ??
                      'Aucun synopsis pour cette anime'
                    }
                    className="card"
                  >
                    {getAnimeHistorique(animeName) &&
                    category === 'Reprendre' ? (
                      <div
                        className="historiqueRemove"
                        onClick={(event) => {
                          event.stopPropagation();

                          removeAnimeFromHistorique(animeName);
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
                      {getAnimeHistorique(animeName) &&
                      category === 'Reprendre' ? (
                        <>
                          <br />S{getAnimeHistorique(animeName)!.saison} E
                          {getAnimeHistorique(animeName)!.episode}
                        </>
                      ) : null}
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
