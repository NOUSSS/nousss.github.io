import './responsive.scss';
import './Home.scss';

import { useEffect, useRef } from 'react';
import { isIOS } from '../../functions/main';
import { citation } from './citations';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Logo.png';

const Home = () => {
  const interval = useRef<number | null>(null);

  useEffect(() => {
    setCitation();

    if (isIOS()) {
      setTimeout(() => window.scrollTo({ top: 500, behavior: 'smooth' }), 1000);
    }

    function setText(text: string, citations: HTMLElement) {
      try {
        const p = document.createElement('p');
        p.innerHTML = text;

        citations.innerHTML = '';
        citations.appendChild(p);

        setTimeout(() => {
          p.classList.add('visible');
        }, 10);
      } catch {}
    }

    function clickHandler() {
      clearInterval(interval.current!);

      Change();

      interval.current = setInterval(() => {
        let nextRes = citation[Math.floor(Math.random() * citation.length)];
        modifyText(nextRes);
      }, 10000);
    }

    function modifyText(res?: string) {
      const textElement = document.querySelector('.citation');

      if (textElement) {
        textElement.innerHTML = '';
        textElement.removeEventListener('click', clickHandler);
      }

      const newRes =
        res || citation[Math.floor(Math.random() * citation.length)];
      setText(newRes, textElement as HTMLElement);

      try {
        textElement?.addEventListener('click', clickHandler);
      } catch {}
    }

    function Change() {
      setText(
        citation[Math.floor(Math.random() * citation.length)],
        document.querySelector('.citation')!
      );
    }

    function setCitation() {
      modifyText();

      interval.current = setInterval(() => {
        let res = citation[Math.floor(Math.random() * citation.length)];
        modifyText(res);
      }, 10000);
    }

    return () => clearInterval(interval.current!);
  }, []);

  return (
    <div className="container--home">
      <div className="card">
        <div className="title">
          <img src={logo} alt="Logo" />
          <h1>
            One <span>Piece</span>
          </h1>
        </div>

        <div className="citation"></div>
        <div className="choices">
          <li>
            <ul>
              <Link to="/Films">
                Films
                <br />
              </Link>
            </ul>
            <ul>
              <Link to="/Saisons">
                Saisons
                <br />
              </Link>
            </ul>
            <ul>
              <Link to="/Scans">Scans</Link>
            </ul>
            <ul>
              <Link to="/">Musiques</Link>
            </ul>
          </li>
        </div>

        <footer>© 2022 Mugiwara-no Streaming - Tous droits réservés.</footer>
      </div>
    </div>
  );
};

export default Home;
