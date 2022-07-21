import './BreedInfo.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import back from '../../icons/left.svg';

import { Component } from 'react';
import Slider from 'react-slick';

import Searchbox from '../searchbox/Searchbox';
import CatService from '../../services/CatService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

class BreedInfo extends Component {
  state = {
    id: null,
    breedInfo: {},
    catsImages: [],
    loading: true,
    error: false
  };

  catService = new CatService();

  componentDidMount() {
    Promise.all([
      this.catService.getBreedById(this.props.id),
      this.catService.getAllCats(5, 'RANDOM', 'jpg,png', this.props.id)
    ])
      .then(response => {
        this.onBreedsListLoaded(response[0]);
        this.onCatImagesLoaded(response[1]);
      })
      .catch(this.onError);
  }

  onBreedsListLoaded = data => {
    this.setState({ breedInfo: data, loading: false, error: false });
  };

  onCatImagesLoaded = list => {
    this.setState({ catsImages: list, loading: false, error: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const {
      breedInfo: {
        name,
        alt_names,
        temperament,
        origin,
        id,
        weight,
        life_span
      },
      catsImages,
      loading,
      error
    } = this.state;

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
          <div className="breedinfo__title">{name}</div>
          <div className="breedinfo__subtitle">{alt_names}</div>
          <div className="breedinfo__info">
            <div className="breedinfo__temperament">
              <span className="bold">Temperament:</span> <br /> {temperament}
            </div>
            <div className="breedinfo__parameters">
              <span className="bold">Origin:</span> {origin} <br />
              <span className="bold">Weight:</span>{' '}
              {id ? weight.imperial : null} kgs
              <br />
              <span className="bold">Life span:</span> {life_span} years
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
  }
}

export default BreedInfo;
