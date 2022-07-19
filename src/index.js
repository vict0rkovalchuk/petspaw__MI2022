import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './components/app/App';

// import CatService from './services/CatService';

// const catService = new CatService();

// catService.getAllCats().then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// window.addEventListener('click', e => console.log(e.target.dataset.name));

fetch('https://api.thecatapi.com/v1/images/upload', {
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data',
    'x-api-key': '25d43ff1-1cea-4522-a197-fb9a5dc0c092'
  },
  body: {
    file: 'C:\\Users\\Vi\\Desktop\\Лишність\\cutecat.jpg',
    sub_id: ''
  }
});
