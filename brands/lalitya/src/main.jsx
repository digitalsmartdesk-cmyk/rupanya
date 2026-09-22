import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@storefront/base.css';
import './theme.css';
import App from '@storefront/App.jsx';
import { brand } from './brand.js';
import { PRODUCTS, COLLECTIONS, EDIT_END } from './products.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App brand={brand} products={PRODUCTS} collections={COLLECTIONS} editEnd={EDIT_END} />
  </StrictMode>,
);
