import './BreedInfo.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import back from '../../icons/left.svg';

import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Slider from 'react-slick';

import Searchbox from '../searchbox/Searchbox';
import useCatService from '../../services/CatService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const BreedInfo = () => {
  const [breedInfo, setBreedInfo] = useState({});
  const [catsImages, setCatsImages] = useState([]);

  const { loading, error, getBreedById, getAllCats } = useCatService();

  const history = useHistory();
  const { breedId } = useParams();

  useEffect(() => {
    Promise.all([
      getBreedById(breedId),
      getAllCats(5, 'RANDOM', 'jpg,png', breedId)
    ]).then(response => {
      onBreedsListLoaded(response[0]);
      onCatImagesLoaded(response[1]);
    });
  }, []);

  const onBreedsListLoaded = data => {
    setBreedInfo(data);
  };

  const onCatImagesLoaded = list => {
    setCatsImages(list);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
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
            <div className="breedinfo__br  breedinfo__origin">
              <span className="bold">Origin:</span>
              <span> {breedInfo.origin}</span>
            </div>
            <div className="breedinfo__br  breedinfo__parameters-gap">
              <span className="bold">Weight:</span>
              <span>
                {' '}
                {breedInfo.id ? breedInfo.weight.imperial : null} kgs
              </span>
            </div>

            <div className="breedinfo__br  breedinfo__parameters-gap">
              <span className="bold">Life span:</span>
              <span> {breedInfo.life_span} years</span>
            </div>
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
          <div onClick={() => history.goBack()} className="location-back">
            <img src={back} alt="back" />
          </div>
          <div className="location-title breedinfo-id">
            <p>BREEDS</p>
          </div>
          <div className="location-id">{breedId}</div>
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
