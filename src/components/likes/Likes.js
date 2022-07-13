import './Likes.scss';

import Searchbox from '../searchbox/Searchbox';

import back from '../breeds/icons/left.svg';
import cat from '../breeds/images/cat.jpg';
import heart from './icons/fullHeart.svg';

function Likes() {
  return (
    <div className="app__box likes">
      <Searchbox />
      <div className="likes__content">
        <div className="likes__location">
          <div className="likes__location-back">
            <img src={back} alt="back" />
          </div>
          <div className="likes__location-title">
            <p>LIKES</p>
          </div>
        </div>
        <div className="likes__grid">
          <div className="likes__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="likes__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="likes__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="likes__grid-hover">
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

export default Likes;
