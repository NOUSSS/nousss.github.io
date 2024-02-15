import { Suspense, lazy, useEffect } from 'react';
import { Link, useRoutes } from 'react-router-dom';

const Home = lazy(() => import('./components/Home/Home'));
const Films = lazy(() => import('./components/Films/Films'));
const Saisons = lazy(() => import('./components/Saisons/Saisons'));
const Episodes = lazy(() => import('./components/Episodes/Episodes'));
const Scans = lazy(() => import('./components/Scans/scans'));
const Accueil = lazy(() => import('./components/Accueil/accueil'));

import background from './assets/Background2.png';
import accueil from './assets/accueil.png';
import PageNotFound from './components/PageNotFound';
import { Toaster } from 'sonner';

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
        <div style={{ marginTop: '200px', color: 'white', fontSize: '30px' }}>
          Chargement du composant en cours...
        </div>
      }
    >
      {useRoutes(pages)}
    </Suspense>
  );
};

const App = () => {
  const showErrorOverlay = (err: ErrorEvent) => {
    const ErrorOverlay = customElements.get('vite-error-overlay');

    if (!ErrorOverlay) return;

    console.log(err);

    const overlay = new ErrorOverlay(err);

    document.body.appendChild(overlay);
  };

  window.addEventListener('error', showErrorOverlay);
  window.addEventListener('unhandledrejection', ({ reason }) =>
    showErrorOverlay(reason)
  );

  useEffect(() => {
    setInterval(() => {
      const whiteText = document.querySelector<HTMLElement>('.title h1')!;

      if (whiteText) whiteText.style.color = 'var(--orange)';

      setTimeout(() => {
        if (whiteText) whiteText.style.color = 'white';
      }, 1000);
    }, 2000);

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 35) {
        document.querySelector<HTMLElement>('.logo')!.style.visibility =
          'hidden';
        document.querySelector<HTMLElement>('.logo')!.style.opacity = '0';
      } else {
        document.querySelector<HTMLElement>('.logo')!.style.opacity = '';
        document.querySelector<HTMLElement>('.logo')!.style.visibility = '';
      }
    });

    console.clear();

    console.log(
      "%c Salut, c'est NouSs !",
      [
        'font-size: 12px',
        'color: #ffa300',
        'font-family: monospace',
        'background: #1d1e20',
        'display: inline-block',
        'padding: 1rem 3rem',
        'border: 1px solid #ffa300',
        'border-radius: 2px;',
      ].join(';')
    );
  }, []);

  return (
    <>
      <Toaster />
      <img className="background" src={background} alt="Fond" />

      <Link to="/">
        <h1 className="logo">
          <img src={accueil} alt="Maison" />
          <span>Mugiwara-no</span> Streaming
        </h1>
      </Link>

      <AppRoutes />
    </>
  );
};

export default App;
