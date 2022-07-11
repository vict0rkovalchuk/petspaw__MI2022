import './Gallery.scss';

import Searchbox from '../searchbox/Searchbox';

import back from './icons/left.svg';
import upload from './icons/upload.svg';
import reload from './icons/reload.svg';
import heart from './icons/heart.svg';
import cat from './images/cat.jpg';

function Gallery() {
  return (
    <div className="home__box gallery">
      <Searchbox />
      <div className="gallery__content">
        <div className="gallery__location">
          <div className="gallery__location-info">
            <div className="gallery__location-back">
              <img src={back} alt="back" />
            </div>
            <div className="gallery__location-title">
              <p>GALLERY</p>
            </div>
          </div>
          <div className="gallery__location-load">
            {/* <div> */}
            <div className="gallery__location-load-img">
              <img src={upload} alt="upload" />
            </div>
            <div className="gallery__location-load-title">Upload</div>
            {/* </div> */}
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
                <img src={reload} alt="reload" />
              </div>
            </div>
          </div>
        </div>
        <div className="gallery__grid">
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="gallery__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
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
