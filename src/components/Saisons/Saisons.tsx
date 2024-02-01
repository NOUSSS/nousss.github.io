import { useCallback, useEffect } from 'react';

import './Saisons.scss';
import './responsive.scss';

import searchImg from '../../Assets/Search.svg';

import { getSaisons, changeSaison } from './functions';
import { initSearchBar } from '../../functions/search';
import { obj } from './saisonsObj';

const Saisons = () => {
  useEffect(() => {
    const saison = window.localStorage.getItem('saison');

    if (saison) {
      (
        document.querySelector('.lastSaison') as HTMLElement
      ).innerHTML = `Historique Saison : <span><a id="${saison}" class="historiqueSaison">${obj[saison].name}</a></span>`;

      document
        .querySelector('.historiqueSaison')!
        .addEventListener('click', () => {
          changeSaison(document.querySelector('.historiqueSaison')!.id);
        });
    }

    getSaisons();

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
      document.getElementsByClassName('container--poster-saison'),
      'saisons'
    );
  }, []);

  return (
    <div className="container--saisons">
      <div className="title">
        <h1>
          One <span>Piece</span>
        </h1>
      </div>

      <p className="h1">
        Les <span>saisons</span> disponibles.
      </p>

      <p className="lastSaison"></p>

      <div className="output--saisons--cached"></div>
      <div className="output--saisons"></div>

      <label className="label--saisons" title="Systeme de recherche super cool">
        <img src={searchImg} alt="" />
        <input type="text" placeholder="Wano ?" onInput={searchBar} />
      </label>

      <div className="saisons"></div>

      <footer>© 2022 Mugiwara-no Streaming - Tous droits réservés.</footer>
    </div>
  );
};

export default Saisons;
