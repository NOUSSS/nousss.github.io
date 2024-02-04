import { useEffect, useRef, useState } from 'react';
import { isIOS } from '../functions/main';
import { citation } from './citations';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { Footer } from '../components';

import './responsive.scss';
import './Home.scss';

const Home = () => {
  const [text] = useState<string>('');
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCitation();

    if (isIOS()) {
      setTimeout(() => window.scrollTo({ top: 500, behavior: 'smooth' }), 1000);
    }

    return () => clearInterval(interval.current!);
  }, []);

  function setTextWithFade(text: string, citations: HTMLElement | null) {
    if (!citations) return;

    const p = document.createElement('p');
    p.innerHTML = text;

    citations.innerHTML = '';
    citations.appendChild(p);

    setTimeout(() => {
      p.classList.add('visible');
    }, 10);
  }

  function changeCitation() {
    clearInterval(interval.current!);
    change();
    startInterval();
  }

  function change(res?: string) {
    const textElement = document.querySelector<HTMLElement>('.citation');

    if (textElement) {
      textElement.innerHTML = '';
      textElement.removeEventListener('click', changeCitation);
    }

    const newRes = res || citation[Math.floor(Math.random() * citation.length)];

    setTextWithFade(newRes, textElement);

    try {
      textElement?.addEventListener('click', changeCitation);
    } catch {}
  }

  function setCitation() {
    change();
    startInterval();
  }

  function startInterval() {
    interval.current = setInterval(() => {
      const res = citation[Math.floor(Math.random() * citation.length)];
      change(res);
    }, 10000);
  }

  return (
    <div className="container--home">
      <div className="card">
        <div className="title">
          <img src={logo} alt="Logo" />
          <h1>
            One <span>Piece</span>
          </h1>
        </div>

        <div className="citation" onClick={changeCitation}>
          {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
        </div>

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
          </li>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
