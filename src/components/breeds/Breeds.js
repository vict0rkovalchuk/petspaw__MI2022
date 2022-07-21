import './Breeds.scss';

import { Component } from 'react';

import back from '../../icons/left.svg';
import cat from '../../images/cat.jpg';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { ReactComponent as ZASort } from '../../icons/sort-z-a.svg';
import { ReactComponent as AZSort } from '../../icons/sort-a-z.svg';

import CatService from '../../services/CatService';
import { Link } from 'react-router-dom';

class Breeds extends Component {
  state = {
    breedsList: [],
    breedsImages: [],
    loading: true,
    error: false,
    selectedValue: 'value2',
    selectedBreedValue: 'value1',
    breedId: null,
    limit: '10'
  };

  catService = new CatService();

  componentDidMount() {
    Promise.all([
      this.catService.getAllBreeds(),
      this.catService.getBreedsImages()
    ])
      .then(response => {
        this.onBreedsListLoaded(response[0]);
        this.onBreedsImagesLoaded(response[1]);
      })
      .catch(this.onError);
  }

  onBreedsListLoaded = list => {
    this.setState({ breedsList: list, loading: false, error: false });
  };

  onBreedsImagesLoaded = list => {
    this.setState({ breedsImages: list, loading: false, error: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  onSort = e => {
    if (this.state.breedsImages[0].breeds) {
      return;
    }

    switch (e.target.dataset.sort) {
      case 'Z_A':
        this.setState(({ breedsImages }) => {
          return {
            breedsImages: breedsImages
              .sort((a, b) => a.name.localeCompare(b.name))
              .reverse()
          };
        });

        break;
      case 'A_Z':
        this.setState(({ breedsImages }) => {
          return {
            breedsImages: breedsImages.sort((a, b) =>
              a.name.localeCompare(b.name)
            )
          };
        });
        break;

      default:
        break;
    }
  };

  onBreedsImagesLoading = () => {
    this.setState({ loading: true });
  };

  onSelectValue = e => {
    this.setState({ selectedValue: e.target.value });
    const limit = e.target.options[e.target.selectedIndex].dataset.limit;
    this.setState({ limit: limit });
    this.updateBreedsImages(limit);
  };

  onSelectBreedValue = async e => {
    this.setState({ selectedBreedValue: e.target.value });
    const breedId = e.target.options[e.target.selectedIndex].dataset.id;
    await this.setState({ breedId: breedId });
    this.updateCatsImagesByBreed(
      this.state.limit,
      'RANDOM',
      'jpg,png',
      this.state.breedId
    );
  };

  updateCatsImagesByBreed = (limit, order, types, breedId) => {
    this.onBreedsImagesLoading();
    this.catService
      .getAllCats(limit, order, types, breedId)
      .then(this.onBreedsImagesLoaded)
      .catch(this.onError);
  };

  updateBreedsImages = (limit = 10, page = 0) => {
    this.onBreedsImagesLoading();
    this.catService
      .getBreedsImages(limit, page)
      .then(this.onBreedsImagesLoaded)
      .catch(this.onError);
  };

  render() {
    const { breedsList, breedsImages, loading, error } = this.state;

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
                  onClick={this.props.handleIdForBreedInfo}
                  style={{ textDecoration: 'none' }}
                  to="/breedinfo"
                  // to={`/breeds/${item.url ? item.breeds[0].id : item.id}`}
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
            <div className="location-back">
              <img src={back} alt="back" />
            </div>
            <div className="location-title">
              <p>BREEDS</p>
            </div>
          </div>
          <div to="./breedinfo" className="breeds__menu-breeds">
            <select
              value={this.state.selectedBreedValue}
              onChange={e => this.onSelectBreedValue(e)}
              name="select"
            >
              {breedSelectList}
            </select>
          </div>
          <div className="breeds__menu-limit">
            <select
              value={this.state.selectedValue}
              onChange={e => this.onSelectValue(e)}
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
            onClick={e => this.onSort(e)}
            className="breeds__menu-sort breeds__location-sortZ-A"
          >
            <ZASort />
          </div>
          <div
            data-sort="A_Z"
            onClick={e => this.onSort(e)}
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
  }
}

export default Breeds;
