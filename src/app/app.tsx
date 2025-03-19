import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppRouter from './router/Router';
import './styles/null.css';
import './styles/constants.scss';
import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
