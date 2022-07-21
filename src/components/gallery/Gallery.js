import './Gallery.scss';

import { Component } from 'react';

import back from '../../icons/left.svg';
import heart from '../../icons/small-heart.svg';
import cat from '../../images/cat.jpg';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ModalWindow from '../modalWindow/ModalWindow';
import { ReactComponent as Reload } from '../../icons/reload.svg';
import { ReactComponent as Upload } from '../../icons/upload.svg';

import CatService from '../../services/CatService';

class Gallery extends Component {
  state = {
    breedsList: [],
    catsImages: [],
    loading: true,
    error: false,
    selectedLimitValue: 'value1',
    selectedBreedValue: 'None',
    selectedTypeValue: 'value2',
    selectedOrderValue: 'value1',
    order: 'RANDOM',
    types: 'jpg,png',
    breedId: '',
    limit: 5,
    isModalOpen: false
  };

  catService = new CatService();

  componentDidMount() {
    Promise.all([
      this.catService.getAllBreeds(),
      this.catService.getAllCats(
        this.state.limit,
        this.state.order,
        this.state.types,
        this.state.breedId
      )
    ])
      .then(response => {
        this.onBreedsListLoaded(response[0]);
        this.onCatImagesLoaded(response[1]);
      })
      .catch(this.onError);
  }

  onBreedsListLoaded = list => {
    this.setState({ breedsList: list, loading: false, error: false });
  };

  onCatImagesLoaded = list => {
    this.setState({ catsImages: list, loading: false, error: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  onCatsImagesLoading = () => {
    this.setState({ loading: true });
  };

  onSelectLimitValue = e => {
    this.setState({ selectedLimitValue: e.target.value });
    const limit = e.target.options[e.target.selectedIndex].dataset.limit;
    this.setState({ limit: limit });
    this.updateCatsImages(
      limit,
      this.state.order,
      this.state.types,
      this.state.breedId
    );
  };

  onSelectBreedValue = e => {
    this.setState({ selectedBreedValue: e.target.value });
    const breedId = e.target.options[e.target.selectedIndex].dataset.id;
    this.setState({ breedId: breedId });
    this.updateCatsImages(
      this.state.limit,
      this.state.order,
      this.state.types,
      breedId
    );
  };

  onSelectTypeValue = e => {
    this.setState({ selectedTypeValue: e.target.value });
    const types = e.target.options[e.target.selectedIndex].dataset.type;
    this.setState({ types: types });
    this.updateCatsImages(
      this.state.limit,
      this.state.order,
      types,
      this.state.breedId
    );
  };

  onSelectOrderValue = e => {
    this.setState({ selectedOrderValue: e.target.value });
    const order = e.target.options[e.target.selectedIndex].dataset.order;
    this.setState({ order: order });
    this.updateCatsImages(
      this.state.limit,
      order,
      this.state.types,
      this.state.breedId
    );
  };

  onOpenWindow = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  updateCatsImages = (limit, order, types, breedId) => {
    this.onCatsImagesLoading();
    this.catService
      .getAllCats(limit, order, types, breedId)
      .then(this.onCatImagesLoaded)
      .catch(this.onError);
  };

  render() {
    const { breedsList, catsImages, loading, error } = this.state;

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
                value={this.state.selectedOrderValue}
                onChange={e => this.onSelectOrderValue(e)}
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
                value={this.state.selectedTypeValue}
                onChange={e => this.onSelectTypeValue(e)}
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
                value={this.state.selectedBreedValue}
                onChange={e => this.onSelectBreedValue(e)}
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
                value={this.state.selectedLimitValue}
                onChange={e => this.onSelectLimitValue(e)}
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
                  this.updateCatsImages(
                    this.state.limit,
                    this.state.order,
                    this.state.types,
                    this.state.breedId
                  );
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
              <div className="location-back">
                <img src={back} alt="back" />
              </div>
              <div className="location-title">
                <p>GALLERY</p>
              </div>
            </div>
            <div onClick={this.onOpenWindow} className="gallery__location-load">
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
        <ModalWindow
          onClose={this.onOpenWindow}
          isOpen={this.state.isModalOpen}
        />
        <div className="divider" style={{ height: '30px' }}></div>
      </div>
    );
  }
}
export default Gallery;
