import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './components/app/App';

// import CatService from './services/CatService';

// const catService = new CatService();

// catService.getBreedsImages().then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// window.addEventListener('click', e => console.log(e.target.dataset.name));

// fetch('https://api.thecatapi.com/v1/breeds?')
//   .then(res => res.json())
//   .then(data => console.log(data));
// fetch('https://api.thecatapi.com/v1/breeds?&limit=10&page=1')
//   .then(res => res.json())
//   .then(data => console.log(data));
