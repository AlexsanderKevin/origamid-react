import React from 'react';
import ReactDOM from 'react-dom/client';
import App01 from './components/aula-0208/App01';
import App02 from './components/aula-0208/App02';
import App03 from './components/aula-0208/App03';
import App04 from './components/aula-0208/App04';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App02 />
    <App03 />
    <App04 />
  </React.StrictMode>
);
