import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppJSXExpressao from './aula-0207/AppJSXExpressao';
import AppStyle from './aula-0207/Style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppJSXExpressao />
    <AppStyle />
  </React.StrictMode>
);
