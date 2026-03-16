import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import './index.css';
import App from './App.jsx';
import ShopProvider from './context/ShopContext';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopProvider>
  </React.StrictMode>
);