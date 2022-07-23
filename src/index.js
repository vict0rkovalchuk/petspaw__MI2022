import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './components/app/App';

import CatService from './services/CatService';

// const catService = new CatService();

// catService.getBreedById('beng').then(res => console.log(res));
// catService
//   .getAllCats(5, 'RANDOM', 'jpg,png', 'beng')
//   .then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// window.addEventListener('click', e => console.log(e.target.dataset.name));

// fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=5')
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch('https://api.thecatapi.com/v1/breeds/beng')
//   .then(res => res.json())
//   .then(data => console.log(data));

document.querySelectorAll('#theme-switch-toggle').forEach(item => {
  item.addEventListener('click', e => {
    document.querySelector('html').classList.toggle('dark');
  });
});
