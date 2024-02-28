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

import { Puff } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import { icons } from 'lucide-react';

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
          <Puff width="200" color="var(--mainColor)" />
        </div>
      }
    >
      {useRoutes(pages)}
    </Suspense>
  );
};

const App = () => {
  const [output, setOutput] = useState<React.ReactNode>();

  const SearchIcon = icons['Search'];

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
          <SearchIcon size="35px" />

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
            <SearchIcon />

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
