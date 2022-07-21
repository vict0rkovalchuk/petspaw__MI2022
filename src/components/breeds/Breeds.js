import './Breeds.scss';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import back from '../../icons/left.svg';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { ReactComponent as ZASort } from '../../icons/sort-z-a.svg';
import { ReactComponent as AZSort } from '../../icons/sort-a-z.svg';

import CatService from '../../services/CatService';
import { Link } from 'react-router-dom';

const Breeds = () => {
  const [breedsList, setBreedsList] = useState([]);
  const [breedsImages, setBreedsImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedValue, setSelectedValue] = useState('value2');
  const [selectedBreedValue, setSelectedBreedValue] = useState('value1');
  const [breedId, setBreedId] = useState(null);
  const [limit, setLimit] = useState('10');

  const catService = new CatService();

  const history = useHistory();

  useEffect(() => {
    let isActive = true;

    Promise.all([catService.getAllBreeds(), catService.getBreedsImages()])
      .then(response => {
        if (isActive) {
          onBreedsListLoaded(response[0]);
          onBreedsImagesLoaded(response[1]);
        }
      })
      .catch(onError);

    return () => {
      isActive = false;
    };
  }, []);

  const onBreedsListLoaded = list => {
    setBreedsList(list);
    setLoading(false);
    setError(false);
  };

  const onBreedsImagesLoaded = list => {
    setBreedsImages(list);
    setLoading(false);
    setError(false);
  };

  const onError = () => {
    setError(true);
  };

  const onSort = e => {
    if (breedsImages[0].breeds) {
      return;
    }

    switch (e.target.dataset.sort) {
      case 'Z_A':
        setBreedsImages(breedsImages =>
          breedsImages.sort((a, b) => a.name.localeCompare(b.name)).reverse()
        );

        break;
      case 'A_Z':
        setBreedsImages(breedsImages =>
          breedsImages.sort((a, b) => a.name.localeCompare(b.name))
        );

        break;

      default:
        break;
    }
  };

  const onBreedsImagesLoading = () => {
    setLoading(true);
  };

  const onSelectValue = e => {
    setSelectedValue(e.target.value);
    const limit = e.target.options[e.target.selectedIndex].dataset.limit;
    setLimit(limit);
    updateBreedsImages(limit);
  };

  const onSelectBreedValue = async e => {
    setSelectedBreedValue(e.target.value);
    const breedId = e.target.options[e.target.selectedIndex].dataset.id;
    await setBreedId(breedId);

    updateCatsImagesByBreed(limit, 'RANDOM', 'jpg,png', breedId);
  };

  const updateCatsImagesByBreed = (limit, order, types, breedId) => {
    onBreedsImagesLoading();
    catService
      .getAllCats(limit, order, types, breedId)
      .then(onBreedsImagesLoaded)
      .catch(onError);
  };

  const updateBreedsImages = (limit = 10, page = 0) => {
    onBreedsImagesLoading();
    catService
      .getBreedsImages(limit, page)
      .then(onBreedsImagesLoaded)
      .catch(onError);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const breedSelectList = breedsList.map(item => (
    <option key={item.id} data-id={item.id} value={item.name}>
      {item.name}
    </option>
  ));
  const breedsImagesGrid = breedsImages.map((item, i) => {
    return (
      <div key={item.id} className="grid-image">
        <img
          className="image"
          src={item.image ? item.image.url : item.url}
          alt={item.name}
        />

        <div className="grid-hover">
          <div className="box">
            <div className="hover-effect">
              <Link
                style={{ textDecoration: 'none' }}
                to={`/breeds/${item.url ? item.breeds[0].id : item.id}`}
                data-id={item.url ? item.breeds[0].id : item.id}
                className="hover-text"
              >
                <div data-id={item.url ? item.breeds[0].id : item.id}>
                  {item.name ? item.name : item.breeds[0].name}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const content = !(loading || error) ? (
    <>
      <div className="breeds__menu">
        <div className="location">
          <div onClick={() => history.goBack()} className="location-back">
            <img src={back} alt="back" />
          </div>
          <div className="location-title">
            <p>BREEDS</p>
          </div>
        </div>
        <div to="./breedinfo" className="breeds__menu-breeds">
          <select
            value={selectedBreedValue}
            onChange={e => onSelectBreedValue(e)}
            name="select"
          >
            {breedSelectList}
          </select>
        </div>
        <div className="breeds__menu-limit">
          <select
            value={selectedValue}
            onChange={e => onSelectValue(e)}
            name="select"
          >
            <option data-limit={5} value="value1">
              Limit: 5
            </option>
            <option data-limit={10} value="value2">
              Limit: 10
            </option>
            <option data-limit={15} value="value3">
              Limit: 15
            </option>
            <option data-limit={20} value="value4">
              Limit: 20
            </option>
          </select>
        </div>
        <div
          data-sort="Z_A"
          onClick={e => onSort(e)}
          className="breeds__menu-sort breeds__location-sortZ-A"
        >
          <ZASort />
        </div>
        <div
          data-sort="A_Z"
          onClick={e => onSort(e)}
          className="breeds__menu-sort breeds__location-sortA-Z"
        >
          <AZSort />
        </div>
      </div>

      <div className="grid">{breedsImagesGrid}</div>
    </>
  ) : null;

  return (
    <div className="app__box breeds block">
      <Searchbox />
      <div className="breeds__content block__content">
        {errorMessage}
        {spinner}
        {content}
      </div>
      <div className="divider" style={{ height: '30px' }}></div>
    </div>
  );
};

export default Breeds;
