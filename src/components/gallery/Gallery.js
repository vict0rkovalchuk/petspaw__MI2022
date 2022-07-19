import './Gallery.scss';

import { Component } from 'react';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import back from '../../icons/left.svg';
import heart from '../../icons/small-heart.svg';
import cat from '../../images/cat.jpg';
import close from '../../icons/close.svg';
import emptyimage from '../../images/emptyimage.png';
import trueCheck from '../../icons/true-check-mark.svg';
import falseCheck from '../../icons/false-check-mark.svg';

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
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z"
                    fill="#FF868E"
                  />
                </svg>
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
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
                    fill="#FF868E"
                  />
                </svg>
              </div>
              <div className="gallery__location-load-title">Upload</div>
            </div>
          </div>
          {errorMessage}
          {spinner}
          {content}
        </div>
        <Modal onClose={this.onOpenWindow} isOpen={this.state.isModalOpen} />
        <div className="divider" style={{ height: '30px' }}></div>
      </div>
    );
  }
}
export default Gallery;

class Modal extends Component {
  state = {
    drag: false,
    image: '',
    fileName: ''
  };

  dragStartHandler = e => {
    e.preventDefault();
    this.setState({ drag: true });
  };

  dragLeaveHandler = e => {
    e.preventDefault();
    this.setState({ drag: false });
  };

  onDropHandler = e => {
    e.preventDefault();
    let files = [...e.dataTransfer.files];

    this.setState({ fileName: files[0].name });

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
      };

      reader.readAsDataURL(file);
    });

    this.setState({ drag: false });
  };

  getImage = e => {
    // console.log(e.target.value);
    e.preventDefault();
    let files = e.target.files;

    this.setState({ fileName: files[0].name });

    [...files].forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
      };

      reader.readAsDataURL(file);
    });

    this.setState({ drag: false });
  };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   console.log('njk');
  //   let opt = {
  //     method: 'POST',
  // body: JSON.stringify({
  //   file: this.state.fileName,
  //   sub_id: ''
  // }),
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8',
  //       'x-api-key': '25d43ff1-1cea-4522-a197-fb9a5dc0c092'
  //     }
  //   };

  //   fetch('https://api.thecatapi.com/v1/images/upload', opt)
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => alert(err));
  // };

  render() {
    return (
      <div className={`modal ${this.props.isOpen ? 'is-open' : null}`}>
        <div className="modal__overlay"></div>

        <div className="modal__content">
          <div className="modal__close">
            <div onClick={this.props.onClose} className="modal__close-img">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z"
                  fill="#FF868E"
                />
              </svg>
            </div>
          </div>
          <p className="modal__title">Upload a .jpg or .png Cat Image</p>
          <div className="modal__guidelines">
            Any uploads must comply with the{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thecatapi.com/privacy"
            >
              upload guidelines
            </a>{' '}
            or face deletion.
          </div>
          <div
            onDragStart={e => this.dragStartHandler(e)}
            onDragLeave={e => this.dragLeaveHandler(e)}
            onDragOver={e => this.dragStartHandler(e)}
            onDrop={e => this.onDropHandler(e)}
            className="modal__field"
          >
            {!this.state.image ? (
              <>
                <img
                  className="modal__field-empty"
                  src={emptyimage}
                  alt="loadimage"
                />
                <div style={{ zIndex: 1 }}>
                  <span className="bold">Drag here </span> your file or{' '}
                  <input onChange={this.getImage} id="file" type="file" />
                  <label className="bold" htmlFor="file">
                    Click here
                  </label>{' '}
                  to upload
                </div>
              </>
            ) : (
              <div className="modal__uploaded">
                <img
                  className="modal__uploaded-image"
                  src={this.state.image}
                  alt="cat"
                />
              </div>
            )}
          </div>
          {!this.state.image ? (
            <div className="modal__status">No file selected</div>
          ) : (
            <div className="modal__status">
              <div>Image File Name: {this.state.fileName}</div>
              <div
                // onClick={e => {
                //   this.handleSubmit(e);
                // }}
                className="modal__status-uploadbtn"
              >
                UPLOAD PHOTO
              </div>
            </div>
          )}
          {/* <div className="modal__message">
            <img src={trueCheck} alt="true check" />
            <div className="modal__message-descr">
              Thanks for the Upload - Cat found!
            </div>
          </div> */}
          {/* <div className="modal__message">
            <img src={falseCheck} alt="true check" />
            <div className="modal__message-descr">
              No Cat found - try a different one
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
