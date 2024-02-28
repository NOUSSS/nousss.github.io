import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, useRoutes } from 'react-router-dom';

const Home = lazy(() => import('./components/Home/Home'));
const Films = lazy(() => import('./components/Films/Films'));
const Saisons = lazy(() => import('./components/Saisons/Saisons'));
const Episodes = lazy(() => import('./components/Episodes/Episodes'));
const Scans = lazy(() => import('./components/Scans/scans'));
const Accueil = lazy(() => import('./components/Accueil/accueil'));

import background from './assets/Background3.jpg';
import logo from '/Logo.png';
import PageNotFound from './components/utils/PageNotFound';
import FastSearchBar from './FastSearch-bar';

import { InfinitySpin } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';

const AppRoutes = () => {
  const currentSeason =
    window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1';

  const pages = [
    { path: '*', element: <PageNotFound /> },
    {
      path: '/',
      element: <Accueil />,
    },
    {
      path: '/Home',
      element: <Home />,
    },
    {
      path: '/Films',
      element: <Films />,
    },
    {
      path: '/Saisons',
      element: <Saisons />,
    },
    {
      path: `/Scans`,
      element: <Scans />,
    },
    {
      path: `/S${currentSeason}/Episodes`,
      element: <Episodes />,
    },
  ];

  return (
    <Suspense
      fallback={
        <div>
          <InfinitySpin width="200" color="var(--mainColor)" />
        </div>
      }
    >
      {useRoutes(pages)}
    </Suspense>
  );
};

const App = () => {
  const [output, setOutput] = useState<React.ReactNode>();

  useEffect(() => {
    const mainColor = window.localStorage.getItem('color');

    if (mainColor)
      document.documentElement.style.setProperty('--mainColor', mainColor);

    setInterval(() => {
      const whiteText = document.querySelector<HTMLElement>('.title h1')!;
      if (whiteText) whiteText.style.color = 'var(--mainColor)';

      setTimeout(() => {
        if (whiteText) whiteText.style.color = 'white';
      }, 1000);
    }, 2000);

    console.clear();

    console.log(
      '%c Salut !',
      [
        'font-size: 12px',
        'color: #04fbb7',
        'font-family: monospace',
        'background: #1d1e20',
        'display: inline-block',
        'padding: 1rem 3rem',
        'border: 1px solid #04fbb7',
        'border-radius: 2px;',
      ].join(';')
    );
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Toaster />
      <img className="background" src={background} alt="Fond" />

      <div
        className={`search--container ${isVisible ? '' : 'invisible'}`}
        ref={searchContainerRef}
      >
        <div className="input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>

          <FastSearchBar
            setOutput={setOutput}
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            searchContainerRef={searchContainerRef}
          />
        </div>

        <div className="results">{output}</div>
      </div>

      <header>
        <nav>
          <Link to="/">
            <h1
              className="logo"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });

                const input = document.querySelectorAll('input')[1];

                if (input) {
                  input.value = '';

                  input.dispatchEvent(
                    new KeyboardEvent('keydown', {
                      key: 'Backspace',
                      code: 'Backspace',
                      keyCode: 8,
                      charCode: 8,
                      bubbles: true,
                    })
                  );

                  input.dispatchEvent(new Event('input', { bubbles: true }));
                }
              }}
            >
              <img src={logo} alt="Maison" />
              <p>
                <span>Mugiwara-no</span> Streaming
              </p>
            </h1>
          </Link>

          <div onClick={() => setIsVisible(!isVisible)} className="SearchBar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>

            <span>Recherche rapide (Ctrl + K)</span>
          </div>
        </nav>
      </header>

      <main>
        <AppRoutes />
      </main>
    </>
  );
};

export default App;
