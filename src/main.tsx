import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './global.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
