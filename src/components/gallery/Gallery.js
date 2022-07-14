import './Gallery.scss';

import Searchbox from '../searchbox/Searchbox';

import back from '../../icons/left.svg';
import heart from '../../icons/small-heart.svg';
import cat from '../../images/cat.jpg';

function Gallery() {
  return (
    <div className="app__box gallery">
      <Searchbox />
      <div className="gallery__content">
        <div className="gallery__location">
          <div className="location">
            <div className="location-back">
              <img src={back} alt="back" />
            </div>
            <div className="location-title">
              <p>GALLERY</p>
            </div>
          </div>
          <div className="gallery__location-load">
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
        <div className="gallery__selectors">
          <div className="gallery__selector">
            <div className="select type">
              <div className="select-title">Order</div>
              <select name="order" id="order" defaultValue="value1">
                <option value="value1">Random</option>
                <option value="value2">Desc</option>
                <option value="value3">Asc</option>
              </select>
            </div>
            <div className="select breed">
              <div className="select-title">Type</div>
              <select name="type" id="type" defaultValue="value2">
                <option value="value1">All</option>
                <option value="value2">Static</option>
                <option value="value3">Animated</option>
              </select>
            </div>
          </div>
          <div className="gallery__selector">
            <div className="select breed">
              <div className="select-title">Breed</div>
              <select name="breed" id="breed" defaultValue="value1">
                <option value="value1">None</option>
                <option value="value2">Abyssinian</option>
                <option value="value3">Bengal</option>
                <option value="value4">Agean</option>
                <option value="value5">American Bobtail</option>
                <option value="value6">American Shorthair</option>
                <option value="value7">American Wirehair</option>
              </select>
            </div>
            <div className="select limit">
              <div className="select-title">Limit</div>
              <select name="limit" id="limit" defaultValue="value1">
                <option value="value1">5 items per page</option>
                <option value="value2">10 items per page</option>
                <option value="value3">15 items per page</option>
                <option value="value4">20 items per page</option>
              </select>
              <div className="gallery__selector-reload">
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
        <div className="grid">
          <div className="grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="grid-hover">
              <div className="box">
                <div className="hover-appear">
                  <div className="hover-img">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="grid-hover">
              <div className="box">
                <div className="hover-appear">
                  <div className="hover-img">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="grid-hover">
              <div className="box">
                <div className="hover-appear">
                  <div className="hover-img">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="grid-hover">
              <div className="box">
                <div className="hover-appear">
                  <div className="hover-img">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="grid-hover">
              <div className="box">
                <div className="hover-appear">
                  <div className="hover-img">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider" style={{ height: '30px' }}></div>
    </div>
  );
}
export default Gallery;
