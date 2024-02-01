import { useEffect } from 'react';
import { Link, useRoutes } from 'react-router-dom';

import Home from './components/Home/Home';
import Films from './components/Films/Films';
import Saisons from './components/Saisons/Saisons';
import Episodes from './components/Episodes/Episodes';
import Scans from './components/Scans/scans';

import background from './assets/Background2.png';
import accueil from './assets/accueil.png';

const App = () => {
  const currentSeason =
    window.location.href.match(/S10|S11|S[0-9]/)?.[0].slice(1) ?? '1';

  let pages = [
    {
      path: '/',
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

const Renderer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const whiteText = document.querySelector('.title h1') as HTMLElement;
      const orangeText = document.querySelector(
        '.title h1 span'
      ) as HTMLElement;

      whiteText.style.color = 'orange';
      orangeText.style.color = 'white';

      setTimeout(() => {
        whiteText.style.setProperty('color', 'white');
        orangeText.style.setProperty('color', 'orange');
      }, 1000);
    }, 2000);

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 35) {
        (document.querySelector('.logo') as HTMLElement).style.opacity = '0';
      } else {
        (document.querySelector('.logo') as HTMLElement).style.opacity = '';
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
      <App />
    </>
  );
};

export default Renderer;
