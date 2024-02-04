import React from 'react';

import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './global.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

const isDevelopment = import.meta.env.MODE === 'development';

if (isDevelopment) {
  root.render(
    <HashRouter>
      <App />
    </HashRouter>
  );
} else {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
}
