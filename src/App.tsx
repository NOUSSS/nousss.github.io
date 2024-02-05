import { useEffect } from 'react';
import { Link, useRoutes } from 'react-router-dom';

import Home from './components/Home/Home';
import Films from './components/Films/Films';
import Saisons from './components/Saisons/Saisons';
import Episodes from './components/Episodes/Episodes';
import Scans from './components/Scans/scans';
import Accueil from './components/Accueil/accueil';

import background from './assets/Background2.png';
import accueil from './assets/accueil.png';

const AppRoutes = () => {
  const currentSeason =
    window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1';

  let pages = [
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

  return useRoutes(pages);
};

const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const whiteText = document.querySelector<HTMLElement>('.title h1')!;

      if (whiteText) whiteText.style.color = '#ffa300';

      setTimeout(() => {
        if (whiteText) whiteText.style.color = 'white';
      }, 1000);
    }, 2000);

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 35) {
        document.querySelector<HTMLElement>('.logo')!.style.opacity = '0';
      } else {
        document.querySelector<HTMLElement>('.logo')!.style.opacity = '';
      }
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
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
