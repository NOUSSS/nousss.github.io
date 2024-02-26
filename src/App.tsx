import { Suspense, lazy, useEffect } from 'react';
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
        <div style={{ marginTop: '200px' }}>
          <InfinitySpin width="200" color="var(--mainColor)" />
        </div>
      }
    >
      {useRoutes(pages)}
    </Suspense>
  );
};

const App = () => {
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

    console.log(
      "%c Salut, c'est NouSs !",
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

  return (
    <>
      <Toaster />
      <img className="background" src={background} alt="Fond" />

      <header>
        <nav>
          <Link to="/">
            <h1
              className="logo"
              onClick={() => {
                const input = document.querySelector('input');

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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="grey"
          >
            <path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM6.00008 6.00008V9.5148L3.5148 12.0001L6.00008 14.4854V18.0001H9.5148L12.0001 20.4854L14.4854 18.0001H18.0001V14.4854L20.4854 12.0001L18.0001 9.5148V6.00008H14.4854L12.0001 3.5148L9.5148 6.00008H6.00008ZM12.0001 16.0001C9.79094 16.0001 8.00008 14.2092 8.00008 12.0001C8.00008 9.79094 9.79094 8.00008 12.0001 8.00008C14.2092 8.00008 16.0001 9.79094 16.0001 12.0001C16.0001 14.2092 14.2092 16.0001 12.0001 16.0001ZM12.0001 14.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001C14.0001 10.8955 13.1047 10.0001 12.0001 10.0001C10.8955 10.0001 10.0001 10.8955 10.0001 12.0001C10.0001 13.1047 10.8955 14.0001 12.0001 14.0001Z"></path>
          </svg>
        </nav>
      </header>

      <AppRoutes />
    </>
  );
};

export default App;
