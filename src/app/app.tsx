import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BaseLauot from './layouts/BaseLayout';

import './styles/constants.scss';
import './styles/global.scss';
import './styles/null.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BaseLauot />
  </StrictMode>,
);
