import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './components/app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.querySelectorAll('#theme-switch-toggle').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark');
  });
});
