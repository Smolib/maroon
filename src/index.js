import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App.js';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);