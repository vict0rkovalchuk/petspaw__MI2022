import './BreedInfo.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import back from '../../icons/left.svg';

import { Component, useState, useEffect } from 'react';
import Slider from 'react-slick';

import Searchbox from '../searchbox/Searchbox';
import CatService from '../../services/CatService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const BreedInfo = props => {
  const [id, setId] = useState(null);
  const [breedInfo, setBreedInfo] = useState({});
  const [catsImages, setCatsImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const catService = new CatService();

  useEffect(() => {
    Promise.all([
      catService.getBreedById(props.id),
      catService.getAllCats(5, 'RANDOM', 'jpg,png', props.id)
    ])
      .then(response => {
        onBreedsListLoaded(response[0]);
        onCatImagesLoaded(response[1]);
      })
      .catch(onError);
  });

  const onBreedsListLoaded = data => {
    setBreedInfo(data);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const sliderImages = catsImages.map(item => {
    return (
      <div key={item.id} className="breedinfo__slider-item">
        <img src={item.url} alt="cat" />
      </div>
    );
  });
  const content = !(loading || error) ? (
    <>
      {catsImages.length > 0 ? (
        <Slider className="breedinfo__slider" {...settings}>
          {sliderImages}
        </Slider>
      ) : null}

      <div className="breedinfo__table">
        <div className="breedinfo__title">{breedInfo.name}</div>
        <div className="breedinfo__subtitle">{breedInfo.alt_names}</div>
        <div className="breedinfo__info">
          <div className="breedinfo__temperament">
            <span className="bold">Temperament:</span> <br />{' '}
            {breedInfo.temperament}
          </div>
          <div className="breedinfo__parameters">
            <span className="bold">Origin:</span> {origin} <br />
            <span className="bold">Weight:</span>{' '}
            {id ? breedInfo.weight.imperial : null} kgs
            <br />
            <span className="bold">Life span:</span> {breedInfo.life_span} years
          </div>
        </div>
      </div>
    </>
  ) : null;

  return (
    <div className="app__box breedinfo block">
      <Searchbox />
      <div className="breedinfo__content block__content">
        <div className="location">
          <div className="location-back">
            <img src={back} alt="back" />
          </div>
          <div className="location-title">
            <p>BREEDS</p>
          </div>
          <div className="location-id">{this.props.id}</div>
        </div>
        {errorMessage}
        {spinner}
        {content}
      </div>

      <div className="divider" style={{ height: '30px' }}></div>
    </div>
  );
};

export default BreedInfo;
