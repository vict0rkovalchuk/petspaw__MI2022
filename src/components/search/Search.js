import './Search.scss';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import back from '../../icons/left.svg';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import CatService from '../../services/CatService';

const Search = () => {
  const [queryString, setQueryString] = useState('');
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const catService = new CatService();

  const history = useHistory();

  useEffect(() => {
    updateRandomCat();
  }, [queryString]);

  const updateData = value => {
    setQueryString(value);
  };

  const onRandomCatLoaded = list => {
    setCats(list);
    setLoading(false);
    setError(false);
  };

  const onRandomCatLoading = () => {
    setLoading(true);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updateRandomCat = () => {
    onRandomCatLoading();
    catService
      .getImagesForQuery(queryString)
      .then(onRandomCatLoaded)
      .catch(onError);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && queryString.length > 0 ? <Spinner /> : null;

  const breedsImagesGrid = cats.map(item => {
    return (
      <div key={item.id} className="grid-image">
        <img className="image" src={item.url} alt={item.breeds[0].name} />

        <div className="grid-hover">
          <div className="box">
            <div className="hover-effect">
              <div className="hover-text">
                <div>{item.breeds[0].name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const content = !(loading || error) ? (
    <div className="grid">{breedsImagesGrid}</div>
  ) : null;

  return (
    <div className="app__box searcbox block">
      <Searchbox updateData={updateData} />
      <div className="searcbox__content block__content">
        <div className="location">
          <div onClick={() => history.goBack()} className="location-back">
            <img src={back} alt="back" />
          </div>
          <div className="location-title">
            <p>SEARCH</p>
          </div>
        </div>
        {queryString.length > 0 ? (
          <div className="searchbox__results">
            Search results for: <span className="bold">{queryString}</span>
          </div>
        ) : (
          <div className="searchbox__results">Enter a breed name above </div>
        )}
        {errorMessage}
        {spinner}
        {content}
      </div>

      <div className="divider" style={{ height: '30px' }}></div>
    </div>
  );
};

export default Search;
