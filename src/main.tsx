import { initToolbar } from '@stagewise/toolbar';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (import.meta.env.DEV) {
  initToolbar({
    plugins: [],
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)