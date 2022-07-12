import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './components/app/App';

// import CatService from './services/CatService';

// const catService = new CatService();

// catService.getRandomCat().then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// window.addEventListener('click', e => console.log(e.target.dataset.id));
