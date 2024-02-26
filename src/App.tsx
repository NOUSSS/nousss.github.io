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
import { Toaster, toast } from 'react-hot-toast';

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
    window.addEventListener('error', () => {
      toast.error('Une erreur est survenue', {
        position: 'bottom-center',

        style: {
          fontSize: '15px',
          fontFamily: 'Fredoka',
        },
      });
    });

    const mainColor = window.localStorage.getItem('color');

    if (mainColor) {
      document.documentElement.style.setProperty('--mainColor', mainColor);
    }

    setInterval(() => {
      const whiteText = document.querySelector<HTMLElement>('.title h1')!;

      if (whiteText) whiteText.style.color = 'var(--mainColor)';

      setTimeout(() => {
        if (whiteText) whiteText.style.color = 'white';
      }, 1000);
    }, 2000);

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 30) {
        document.querySelector<HTMLElement>('.logo')!.style.visibility =
          'hidden';
        document.querySelector<HTMLElement>('.logo')!.style.opacity = '0';
      } else {
        document.querySelector<HTMLElement>('.logo')!.style.opacity = '';
        document.querySelector<HTMLElement>('.logo')!.style.visibility = '';
      }
    });

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

      <AppRoutes />
    </>
  );
};

export default App;
