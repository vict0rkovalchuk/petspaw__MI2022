import './Gallery.scss';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import back from '../../icons/left.svg';
import heart from '../../icons/small-heart.svg';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ModalWindow from '../modalWindow/ModalWindow';
import { ReactComponent as Reload } from '../../icons/reload.svg';
import { ReactComponent as Upload } from '../../icons/upload.svg';

import CatService from '../../services/CatService';

const Gallery = () => {
  const [breedsList, setBreedsList] = useState([]);
  const [catsImages, setCatsImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedLimitValue, setSelectedLimitValue] = useState('value1');
  const [selectedBreedValue, setSelectedBreedValue] = useState('None');
  const [selectedTypeValue, setSelectedTypeValue] = useState('value2');
  const [selectedOrderValue, setSelectedOrderValue] = useState('value1');
  const [order, setOrder] = useState('RANDOM');
  const [types, setTypes] = useState('jpg,png');
  const [breedId, setBreedId] = useState('');
  const [limit, setLimit] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const catService = new CatService();

  const history = useHistory();

  useEffect(() => {
    let isActive = true;

    Promise.all([
      catService.getAllBreeds(),
      catService.getAllCats(limit, order, types, breedId)
    ])
      .then(response => {
        if (isActive) {
          onBreedsListLoaded(response[0]);
          onCatImagesLoaded(response[1]);
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

  const onCatImagesLoaded = list => {
    setCatsImages(list);
    setLoading(false);
    setError(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const onCatsImagesLoading = () => {
    setLoading(true);
  };

  const onSelectLimitValue = e => {
    setSelectedLimitValue(e.target.value);
    const limit = e.target.options[e.target.selectedIndex].dataset.limit;
    setLimit(limit);
    updateCatsImages(limit, order, types, breedId);
  };

  const onSelectBreedValue = e => {
    setSelectedBreedValue(e.target.value);
    const breedId = e.target.options[e.target.selectedIndex].dataset.id;
    setBreedId(breedId);
    updateCatsImages(limit, order, types, breedId);
  };

  const onSelectTypeValue = e => {
    setSelectedTypeValue(e.target.value);
    const types = e.target.options[e.target.selectedIndex].dataset.type;
    setTypes(types);
    updateCatsImages(limit, order, types, breedId);
  };

  const onSelectOrderValue = e => {
    setSelectedOrderValue(e.target.value);
    const order = e.target.options[e.target.selectedIndex].dataset.order;
    setOrder(order);
    updateCatsImages(limit, order, types, breedId);
  };

  const onOpenWindow = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  const updateCatsImages = (limit, order, types, breedId) => {
    onCatsImagesLoading();
    catService
      .getAllCats(limit, order, types, breedId)
      .then(onCatImagesLoaded)
      .catch(onError);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const breedSelectList = breedsList.map(item => (
    <option key={item.id} data-id={item.id} value={item.name}>
      {item.name}
    </option>
  ));
  const catsImagesGrid = catsImages.map(item => {
    return (
      <div key={item.id} className="grid-image">
        <img className="image" src={item.url} alt={item.name} />

        <div className="grid-hover">
          <div className="box">
            <div className="hover-appear">
              <div className="hover-img">
                <img
                  data-id={item.id}
                  className="img"
                  src={heart}
                  alt="favourites"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  const content = !(loading || error) ? (
    <>
      <div className="gallery__selectors">
        <div className="gallery__selector">
          <div className="select type">
            <div className="select-title">Order</div>
            <select
              value={selectedOrderValue}
              onChange={e => onSelectOrderValue(e)}
              name="order"
              id="order"
            >
              <option data-order="RANDOM" value="value1">
                Random
              </option>
              <option data-order="DESC" value="value2">
                Desc
              </option>
              <option data-order="ASC" value="value3">
                Asc
              </option>
            </select>
          </div>
          <div className="select breed">
            <div className="select-title">Type</div>
            <select
              value={selectedTypeValue}
              onChange={e => onSelectTypeValue(e)}
              name="type"
              id="type"
            >
              <option data-type="jpg,gif,png" value="value1">
                All
              </option>
              <option data-type="jpg,png" value="value2">
                Static
              </option>
              <option data-type="gif" value="value3">
                Animated
              </option>
            </select>
          </div>
        </div>
        <div className="gallery__selector">
          <div className="select breed">
            <div className="select-title">Breed</div>
            <select
              value={selectedBreedValue}
              onChange={e => onSelectBreedValue(e)}
              name="breed"
              id="breed"
            >
              <option key="none" data-id="" value="None">
                None
              </option>
              {breedSelectList}
            </select>
          </div>
          <div className="select limit">
            <div className="select-title">Limit</div>
            <select
              value={selectedLimitValue}
              onChange={e => onSelectLimitValue(e)}
              name="limit"
              id="limit"
            >
              <option data-limit={5} value="value1">
                5 items per page
              </option>
              <option data-limit={10} value="value2">
                10 items per page
              </option>
              <option data-limit={15} value="value3">
                15 items per page
              </option>
              <option data-limit={20} value="value4">
                20 items per page
              </option>
            </select>
            <div
              onClick={() => {
                updateCatsImages(limit, order, types, breedId);
              }}
              className="gallery__selector-reload"
            >
              <Reload />
            </div>
          </div>
        </div>
      </div>
      <div className="grid">{catsImagesGrid}</div>
    </>
  ) : null;

  return (
    <div className="app__box gallery block">
      <Searchbox />
      <div className="gallery__content block__content">
        <div className="gallery__location block__location">
          <div className="location">
            <div onClick={() => history.goBack()} className="location-back">
              <img src={back} alt="back" />
            </div>
            <div className="location-title">
              <p>GALLERY</p>
            </div>
          </div>
          <div onClick={onOpenWindow} className="gallery__location-load">
            <div className="gallery__location-load-img">
              <Upload />
            </div>
            <div className="gallery__location-load-title">Upload</div>
          </div>
        </div>
        {errorMessage}
        {spinner}
        {content}
      </div>
      <ModalWindow onClose={onOpenWindow} isOpen={isModalOpen} />
      <div className="divider" style={{ height: '30px' }}></div>
    </div>
  );
};
export default Gallery;
